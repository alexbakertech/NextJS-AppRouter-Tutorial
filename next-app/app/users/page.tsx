/*
 *  Title: users
 *  Component type: Server
 *  Description: Calls an API endpoint and displays user info. This object will be called from a client side function to later manipulate the data.
*/

//"use client"; //Declairing this to be a client side function

//This is an async function since we are going to be reaching out to another service, we want to be able to wait for the data to be returned while other stuff still loads.
export default async function Users() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users"); //Fetching API data and putting it into a response variable to later sort through and organize.
    const users = await res.json(); //Format API response into json format for easier data quering

    return (
        <div>
            {" "}
            <h1>User List</h1>
            <ul>
                {users.map((user: { id: number; name: string }) => ( //Go through and print out each user's Name by iterating through each returned User ID
                    <li key={user.id}>
                        <h3>{user.name}</h3>
                    </li>
                ))}
            </ul>{" "}
        </div>
    );
}