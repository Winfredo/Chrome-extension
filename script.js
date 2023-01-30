let myLeads = [ "www.awesome.com","www.google.com", "www.gana.com"]
const Input = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const UlEl = document.getElementById("ul-el")

Input.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    console.log(myLeads)
}) 

for(i = 0; i < myLeads.length; i++ ){
    UlEl.innerHTML  += "<li>" + myLeads[i]  + "</li>"
    console.log(myLeads[i])
}

