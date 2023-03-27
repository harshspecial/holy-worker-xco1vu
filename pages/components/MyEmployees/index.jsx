import List from "../List";

export default function MyEmployees({employees}) {
    return (
        <section className="mt-8">
            <p className="uppercase mb-4 font-semibold text-xs">My employees</p>
            <List listItems={employees} lightMode={false} showCheveron={true} height={223}/>
        </section>
    )
}