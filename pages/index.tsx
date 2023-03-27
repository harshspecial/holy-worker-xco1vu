import Header from './components/Header';
import Dashboard from './Dashboard';
import ErrorPage from './ErrorPage';

export default function IndexPage(props) {
  if (!props?.data) {
    return <ErrorPage />;
  }
  return (
    <div className='mx-auto min-w-[64rem] max-w-screen-2xl px-6'>
      <Header menuItems={props.data?.menuItems} userDetails={props.data?.userDetails} />
      <Dashboard data={props.data} balanceDetails={props.balanceDetails} />
      <footer className='h-28' />
    </div>
  );
}

IndexPage.getInitialProps = async (ctx) => {
  try {
    const [userRes, balRes] = await Promise.all([
      fetch('http://localhost:3000/api/user'),
      fetch('http://localhost:3000/api/getbalance'),
    ]);
    const [userData, balanceDetails] = await Promise.all([userRes.json(), balRes.json()]);
    return { data: userData, balanceDetails };
  } catch (e) {
    console.log(e);
    return {};
  }
};
