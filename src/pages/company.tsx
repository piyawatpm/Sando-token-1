import MainLayout from "src/layout/MainLayout";
function Company(): JSX.Element {
  return (
    <>
      <div
        className="relative overflow-hidden mx-auto w-full bg-cover bg-center container mt-20"
        style={{ backgroundImage: `url(${"./images/web/company-bg.png"})` }}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="relative rounded-xl shadow-md overflow-hidden md:min-w-1/2">
            <div className="md:flex justify-center items-center px-10">
              <div className="md:shrink-0 ml-10 mb-20">
                <div className="flex tracking-wide justify-center items-center w-full  md:w-full">
                  <img
                    src="./images/partner/sandora.svg"
                    alt="sandora"
                    className="w-56 mt-4"
                  />
                </div>
                <h1 className="text-white font-bold text-center">
                  SANDORA PTY LTD
                </h1>
                <h3 className="text-white text-center">ACN : 658 145 763</h3>
                <h3 className="text-white text-center mb-3">Contact us: info@sandotoken.io</h3>

                <div className="flex justify-center items-center mb-20">
                  <img
                    src="./images/sandora-logo.svg"
                    alt="sandora-logo"
                    className="w-24 mt-4"
                  />
                  <img
                    src="./images/partner/sandora.svg"
                    alt="sandora"
                    className="w-24 mt-4 "
                  />
                  <img
                    src="./images/partner/oceansky.svg"
                    alt="oceansky"
                    className="w-24 mt-4 "
                  />
                  <img
                    src="./images/partner/metasando.svg"
                    alt="metasando"
                    className="w-24 mt-4 "
                  />
                </div>
              </div>
              <div className="md:shrink-0 px-10 ml-5 py-10 mb-20">
                <div className="flex py-1 tracking-wide text-sm text-white font-semibold">
                  <h1 className="uppercase text-[#FF0090] text-3xl font-black ml-10 mb-10">
                    Company
                  </h1>
                </div>

                <div className="text-white w-[600px]">
                  <h6 className="text-xl font-bold mb-10 mx-10 font-sans">
                    Welcome to Sandora
                  </h6>

                  <p className=" ml-10 font-light text-xl tracking-wide text-justify">
                    We are building an ecosystem of products to create a virtual
                    economy as well as providing new opportunities for growth
                    for both you and your business using advanced blockchain
                    technology that is both secure and transparent, allowing for
                    fast, borderless transactions.
                  </p>
                  <p className="mt-10 ml-10 font-light text-xl tracking-wide text-justify">
                    All of this is not for the future but for the present while
                    heading towards the future as we grow together.
                  </p>
                </div>

                <div className="flex justify-center tracking-wide text-xl text-white font-semibold ml-10 mt-20 mb-20">
                  <a
                    href="/projects"
                    className="bg-[#ffb700] hover:bg-[#fb8700] text-black text-lg font-bold py-2 px-10 rounded-xl"
                  >
                    Learn more about our projects
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Company.layoutProps = {
  Layout: MainLayout,
};

export default Company;
