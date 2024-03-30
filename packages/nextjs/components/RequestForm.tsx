"use client";

import { useState } from "react";
import { RequestNetwork, Types, Utils } from "@requestnetwork/request-client.js";
import { Web3SignatureProvider } from "@requestnetwork/web3-signature";
import type { NextPage } from "next";
import { parseUnits, zeroAddress } from "viem";
import { useAccount, useWalletClient } from "wagmi";
import { FaucetButton } from "~~/components/scaffold-eth";
import { currencies } from "~~/utils/config/currency";

enum APP_STATUS {
  AWAITING_INPUT = "awaiting input",
  SUBMITTING = "submitting",
  PERSISTING_TO_IPFS = "persisting to ipfs",
  PERSISTING_ON_CHAIN = "persisting on-chain",
  REQUEST_CONFIRMED = "request confirmed",
  ERROR_OCCURRED = "error occurred",
}

const payerIdentity = "0x519145B771a6e450461af89980e5C17Ff6Fd8A92";

const RequestForm: NextPage = () => {
  const { data: walletClient, isError, isLoading } = useWalletClient();
  const { address, isConnecting, isDisconnected } = useAccount();

  const [status, setStatus] = useState(APP_STATUS.AWAITING_INPUT);
  const [expectedAmount, setExpectedAmount] = useState("");
  const [paymentRecipient, setPaymentRecipient] = useState("");
  const [reason, setReason] = useState("");
  const [requestData, setRequestData] = useState<Types.IRequestDataWithEvents>();

  const createRequest = async () => {
    const web3SignatureProvider = new Web3SignatureProvider(walletClient);

    const requestClient = new RequestNetwork({
      nodeConnectionConfig: {
        baseURL: "https://sepolia.gateway.request.network/",
      },
      signatureProvider: web3SignatureProvider,
    });

    const requestCreateParameters: Types.ICreateRequestParameters = {
      requestInfo: {
        // The currency in which the request is denominated
        currency: {
          type: currencies.get("11155111_0x370DE27fdb7D1Ff1e1BaA7D11c5820a324Cf623C")!.type,
          value: currencies.get("11155111_0x370DE27fdb7D1Ff1e1BaA7D11c5820a324Cf623C")!.value,
          network: currencies.get("11155111_0x370DE27fdb7D1Ff1e1BaA7D11c5820a324Cf623C")!.network,
        },

        // The expected amount as a string, in parsed units, respecting `decimals`
        // Consider using `parseUnits()` from ethers or viem
        expectedAmount: parseUnits(
          expectedAmount as `${number}`,
          currencies.get("11155111_0x370DE27fdb7D1Ff1e1BaA7D11c5820a324Cf623C")!.decimals,
        ).toString(),

        // The payee identity. Not necessarily the same as the payment recipient.
        payee: {
          type: Types.Identity.TYPE.ETHEREUM_ADDRESS,
          value: address as string,
        },

        // The payer identity. If omitted, any identity can pay the request.
        payer: {
          type: Types.Identity.TYPE.ETHEREUM_ADDRESS,
          value: address as string,
        },

        // The request creation timestamp.
        timestamp: Utils.getCurrentTimestampInSecond(),
      },

      // The paymentNetwork is the method of payment and related details.
      paymentNetwork: {
        id: Types.Extension.PAYMENT_NETWORK_ID.ERC20_FEE_PROXY_CONTRACT,
        parameters: {
          paymentNetworkName: currencies.get("11155111_0x370DE27fdb7D1Ff1e1BaA7D11c5820a324Cf623C")!.network,
          paymentAddress: paymentRecipient || address,
          feeAddress: zeroAddress,
          feeAmount: "0",
        },
      },

      // The contentData can contain anything.
      // Consider using rnf_invoice format from @requestnetwork/data-format
      contentData: {
        reason: reason,
      },

      // The identity that signs the request, either payee or payer identity.
      signer: {
        type: Types.Identity.TYPE.ETHEREUM_ADDRESS,
        value: address as string,
      },
    };

    if (payerIdentity.length > 0) {
      requestCreateParameters.requestInfo.payer = {
        type: Types.Identity.TYPE.ETHEREUM_ADDRESS,
        value: payerIdentity,
      };
    }

    try {
      setStatus(APP_STATUS.PERSISTING_TO_IPFS);
      const request = await requestClient.createRequest(requestCreateParameters);

      setRequestData(request.getData());

      const confirmedRequestData = await request.waitForConfirmation();
      setRequestData(confirmedRequestData);
    } catch (err) {
      setStatus(APP_STATUS.ERROR_OCCURRED);
      console.log(err);
      setRequestData(undefined);
      setStatus(APP_STATUS.AWAITING_INPUT);
    }
  };

  function canSubmit() {
    return (
      status !== APP_STATUS.SUBMITTING &&
      !isDisconnected &&
      !isConnecting &&
      !isError &&
      !isLoading &&
      // Payment Recipient is empty || isAddress
      (paymentRecipient.length === 0 || (paymentRecipient.startsWith("0x") && paymentRecipient.length === 42)) &&
      // Payer is empty || isAddress
      (payerIdentity.length === 0 || (payerIdentity.startsWith("0x") && payerIdentity.length === 42)) &&
      expectedAmount.length > 0
    );
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(APP_STATUS.SUBMITTING);
    createRequest();
  };

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10 bg-white w-full">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row flex-grow w-full gap-6 my-6">
            <input
              type="text"
              placeholder="Amount"
              onChange={e => setExpectedAmount(e.target.value)}
              className="input input-bordered w-full max-w-xs"
              />
            <input
              type="text"
              placeholder="Recipient"
              onChange={e => setPaymentRecipient(e.target.value)}
              className="input input-bordered w-full max-w-xs"
              />
          </div>
          <input
            type="text"
            placeholder="Reason"
            onChange={e => setReason(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn btn-primary text-white mx-6" type="submit" disabled={!canSubmit}>
            Create Request
          </button>
        </form>
        <p>App status: {status}</p>
        <p>Request data:</p>
        <pre>{JSON.stringify(requestData, undefined, 2)}</pre>
      </div>
    </>
  );
};

export default RequestForm;
