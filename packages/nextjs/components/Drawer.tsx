import React from "react";
import Link from "next/link";

const Drawer = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-slate-100">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-slate-100 text-base-content">
          <Link href="/" className="btn btn-ghost text-xl">
            Token Estate
          </Link>
          {/* Sidebar content here */}
          <li>
            <a>Dashboard</a>
          </li>
          <li>
            <a>Property</a>
          </li>
          <li>
            <a>Agents</a>
          </li>
          <li>
            <a>Sales</a>
          </li>
          <li>
            <a>Messages</a>
          </li>
          <li>
            <a>My Wallets</a>
          </li>
          <li>
            <a>Profile</a>
          </li>
          <li>
            <a>Get Help</a>
          </li>
          <li>
            <a>Profile</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
