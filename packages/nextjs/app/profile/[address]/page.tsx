"use client";

import { NextPage } from "next";
import { useParams } from "next/navigation";
import Table from "~~/components/Table";

const Profile: NextPage = () => {

  const params = useParams();
  return (
    <div className="my-10 mx-20 flex flex-col">
      <h1 className="text-5xl font-bold">Hi {params.address}</h1>
      <div>
        <h2 className="my-5 text-xl font-bold">My investments</h2>
        <Table />
      </div>
    </div>
  );
};

export default Profile;
