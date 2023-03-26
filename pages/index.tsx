import Card from "./components/Card";
import Header from "./components/Header";

export default function IndexPage({ data }) {
  return (
    <div className="px-6 max-w-screen-2xl mx-auto">
      <Header menuItems={data.menuItems} />
    </div>
  );
}

IndexPage.getInitialProps = async (ctx) => {
  const res = await fetch("https://xco1vu-3001.csb.app/api/user");
  const json = await res.json();
  return { data: json };
};
