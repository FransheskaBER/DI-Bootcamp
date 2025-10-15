const data = new URLSearchParams(window.location.search);
        
const obj = {};
for (const [key, value] of data.entries()){
    obj[key] = value
}

const JSONobj = JSON.stringify(obj, null, 2)

const dataOutput = document.getElementById("output");

dataOutput.textContent = JSONobj;