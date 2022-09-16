import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function Users({ users }) {
    const { user, isLoading, isError } = getData();

    if (isError) return <div>Error fetching data</div>;
    if (isLoading) return <div>Loading...</div>



    return (
        <article>
            {
                user.map(u => (
                    <div key="u.email">
                        <h1>{u.name}</h1>
                        <h2>{u.email}</h2>
                    </div>
                ))
            }
        </article>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/hello');
    const users = await res.json();
    console.log(users)

    return {
        props: {
            users
        }
    }
}

function getData() {
    const { data, error } = useSWR('http://localhost:3000/api/hello', fetcher);

    return {
        user: data,
        isLoading: !error && !data,
        isError: error
    }
}