/* 
 * Below is a code block that I will standardize on for new pages. 
 * Server components generate static content, and client components can be interactive.
 * By default, all components are server components unless explicitly tagged as a server component with "use client"; th the top of the .tsx file.
 * If you want to mix server and client functionality, create a client component for interactivity, and have it call a server component to retrieve data.
*/

/*
 *  Title: about
 *  Component type: Server
 *  Description: A basic about page 
*/

import ButtonComponent from "./button"; //Importing the ButtonComponent object from button.tsx

export default function About() {

    //You can do data retrieval before the return call to have the data needed to populate the html below

    return (
        <div>

            <h1>Hello!</h1>
            <br></br>
            <ButtonComponent /> {/* Using ButtonComponent as imported above*/}

        </div>
    )

}