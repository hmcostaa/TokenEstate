import { NextPage } from "next";
import Table from "~~/components/Table";

const Profile: NextPage = () => {
  return (
    <div className="my-10 mx-20 flex flex-col">
      <h1 className="text-5xl font-bold">Hi NAME!</h1>
      <div>
        <h2 className="my-5 text-xl font-bold">My investments</h2>
        <Table />
      </div>
    </div>
  );
};

export default Profile;
