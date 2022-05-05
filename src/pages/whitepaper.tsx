import MainLayout from "src/layout/MainLayout";

function Whitepaper(): JSX.Element {
  return (
    <>
      <div className="h-screen">Whitepaper</div>
    </>
  );
}

Whitepaper.layoutProps = {
  Layout: MainLayout,
};

export default Whitepaper;
