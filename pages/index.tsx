import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import ErrorPage from '../components/ErrorPage';

function IndexPage(props) {
  if (!props?.data || !props?.balanceDetails) {
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

export async function getStaticProps() {
  try {
    const [userRes, balRes] = await Promise.all([
      fetch(`${process.env.VERCEL_URL}/api/user`),
      fetch(`${process.env.VERCEL_URL}/api/getbalance`),
    ]);
    const [userData, balanceDetails] = await Promise.all([userRes.json(), balRes.json()]);
    return {props: { data: userData, balanceDetails }};
  } catch (e) {
    console.log(e);
    return {props: {}};
  }
}

export default IndexPage;
