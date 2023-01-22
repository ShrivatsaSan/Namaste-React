import React from "react";
import ReactDOM  from "react-dom/client";
import { FaUser } from "react-icons/fa";
import logo from './logo1.jpg';


//Nested tages using React.createElement

const container = React.createElement("div",{class:"title"},[
    React.createElement("h1", {key:"h1"}, "Heading without JSX"),
    React.createElement("h2", {key:"h2"}, "Heading 2"),
    React.createElement("h3", {key:"h3"}, "Heading 3"),
]);



// Using JSX

const heading1 = <h1>Heading 1 with JSX</h1>;
const Heading2 = () => <h2>Heading 2 with JSX</h2>;
const Heading3 = () => <h3>Heading 3 with JSX</h3>;

// Composition of component

const ContainerFunctionalComponent = () => {
   return (
      <div className="title">
           {heading1}
           <Heading2 />
           <Heading3 />
           
       </div>
    );
};


//Search component

const SearchComponent = () => {
    return (
        <input className="Search" key = "search-bar" placeholder = "Search"/>
    );
};

//Header/Main component

const MainComponent = () => {
    return(
        <div className="main">
            <img src={logo} width="40px" height="40px" alt="Not here"/>
            <SearchComponent />
            <FaUser size="2em" />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainComponent />);    
