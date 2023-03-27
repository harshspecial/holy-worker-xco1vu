import List from '../List';

export default function MyEmployees({ employees }) {
  return (
    <section className='mt-8'>
      <p className='mb-4 text-xs font-semibold uppercase'>My employees</p>
      <List listItems={employees} lightMode={false} showCheveron={true} height={223} />
    </section>
  );
}
