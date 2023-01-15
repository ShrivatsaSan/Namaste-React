import React from 'react';
import ReactDOM  from 'react-dom/client';

const heading=React.createElement("h1", {key: "0"},  "From Heading");

let para = React.createElement("p", {key:"1"},"from para 1");
let para1 = React.createElement("p", {key:"2"}, "From para 2");

const container =  React.createElement("div",{id:"container"},[heading,para,para1]);


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(container);