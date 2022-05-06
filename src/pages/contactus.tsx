import MainLayout from "src/layout/MainLayout";
import React, { useState } from "react";

function Contactus(): JSX.Element {
  const [{ alt, src }, setImg] = useState({
    src: "/images/placeholder.svg",
    alt: "Upload an Image",
  });
  //TODO use src from selected file
  const handleImg = () => {
    setImg({
      src: "/images/placeholder.svg",
      alt: "Upload an Image",
    });
  };
  const [show, setShow] = useState(false);
  const nextStep = (item: any) => {
    item.preventDefault();
    setShow(!show);
  };
  return (
    <div
      className="relative overflow-hidden mx-auto w-full bg-cover bg-center container mt-10"
      // style={{ backgroundImage: `url(${"./images/web/contact-bg.png"})` }}
    >
      <h1 className="textgradient text-transparent text-3xl font-bold text-center py-10">
        Contact us
      </h1>
      <div className="bg-[#171717] relative mx-auto rounded-3xl w-1/2  p-3 shadow-black shadow-md ">
        <form onSubmit={nextStep} className="overflow-auto">
          <div className="w-3/4 mx-auto">
            <div className="mt-10">
              <label>
                <span className="text-white pl-2">Name</span>
                <br />
                <input
                  className="text-black  rounded-3xl py-3 px-5 mt-2 placeholder:text-slate-400 shadow-sm focus:outline-none text-xs w-full"
                  placeholder="Enter your name"
                  type="text"
                  name="name"
                />
              </label>
            </div>
            <div className="mt-7">
              <label className="block">
                <span className="text-white pl-2"> Email Address</span>
                <input
                  className="text-black  rounded-3xl py-3 px-5 mt-2 placeholder:text-slate-400 shadow-sm focus:outline-none text-xs w-full"
                  placeholder="you@email.com"
                  type="text"
                  name="email"
                />
              </label>
            </div>
            <div className="mt-7">
              <label className="block">
                <span className="text-white pl-2"> Subject</span>
                <input
                  className="text-black  rounded-3xl py-3 px-5 mt-2 placeholder:text-slate-400 shadow-sm focus:outline-none text-xs w-full"
                  placeholder="Subject"
                  type="text"
                  name="subject"
                />
              </label>
            </div>
            <div className="mt-7">
              <label className="block">
                <span className="text-white pl-2">
                  Upload screenshot, document, and more.
                </span>
                <p id="file_name" className="text-xs mt-3 ml-2">
                  PDF,PNG,JPEG Max file size 10MB.
                </p>
                <input
                  onChange={handleImg}
                  id="upload_file"
                  type="file"
                  accept=".png, .jpg, .jpeg, .MP4"
                  className=" cursor-pointer mt-3
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-xs file:font-thin
                file:bg-[#ff0090] file:text-white
                hover:file:hover:bg-[#cc0274]"
                />
              </label>
            </div>

            <div className="mt-7">
              <label className="block">
                <span className="text-white pl-2"> Message</span>
                <textarea
                  className="mt-2 text-black text-xs h-40   placeholder:text-slate-400 block w-full rounded-3xl p-5 shadow-sm focus:outline-none"
                  placeholder="Please include as much information as possible so we can evaluate and effetively respond to inquiry."
                  name="item_desc"
                />
              </label>
            </div>
          </div>
          <div className="text-center">
            <button className="mt-5 mb-5 items-end cursor-pointer bg-[#ff0090] hover:bg-[#cc0274] text-white text-sm font-bold py-2 px-10 rounded-3xl shadow-md shadow-gray-800 ">
              Submit
            </button>
          </div>
        </form>
      </div>

      <div>
        <img
          src="./images/web/world-bg.png"
          alt="world change bg"
          className="w-full"
        />
      </div>
    </div>
  );
}

Contactus.layoutProps = {
  Layout: MainLayout,
};

export default Contactus;
