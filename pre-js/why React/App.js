 // pure react code 

 let h2ElemtFromReact = React.createElement('h2',{id:"React"},"h2 Elemt From React");
 console.log(h2ElemtFromReact)

// JSX  

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(h2ElemtFromReact)