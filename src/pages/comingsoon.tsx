import React from "react";
import MainLayout from "src/layout/MainLayout";

function Coming(): JSX.Element {
  return (
    <div className="relative overflow-hidden mx-auto w-full container py-5">
      <div className="flex flex-col justify-center items-center py-20">
        <img
          src="/images/sando-logo.svg"
          alt="sando logo image"
          className="w-48 mt-20 mb-10"
        />
        <h1 className="relative text-white text-5xl font-bold">
          Coming Soon ...
        </h1>
      </div>
      <div>
        <img src="./images/web/world-bg.png" alt="world bg" className="w-full"/>
      </div>
    </div>
  );
}
Coming.layoutProps = {
  Layout: MainLayout,
};

export default Coming;
