/*
 *  Title: button
 *  Component type: Client
 *  Description: A button function that says hello when clicked.
*/

"use client"; //Using client side rendering because it interacts with the web browser.

//Declaring the function name here so it can be called as <ButtonComponent> from other pages.
export default function ButtonComponent() {

    return <button onClick={() => alert("Hello there")}> Click Me!</button>;

}