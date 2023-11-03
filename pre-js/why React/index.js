console.log("Js file")

const rootDivEl = document.getElementById("root")
let headingEl = document.getElementById("heading")

headingEl.textContent = "Heading got changed by JS"
let h2El = document.createElement("h2")
h2El.textContent="Hello From JS "
rootDivEl.appendChild(h2El)
// browser =>(DOM manipulations,setTimeout,setInterval,console,fetch,localStorage)

// window => interconnects the browser and js engine
console.log("first")
setTimeout(()=>{
    console.log("Chandu")
},5000)
console.log("Last")

