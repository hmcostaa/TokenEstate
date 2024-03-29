"use client";

import type { NextPage } from "next";
import { Bucket } from "~~/components/greenfield/bucket";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10 bg-white">
        <Bucket />
      </div>
    </>
  );
};

export default Home;
