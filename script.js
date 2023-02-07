let myLeads = [];
const Input = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const UlEl = document.getElementById("ul-el");
const DeleteBtn = document.getElementById('delete-btn')
const leadsfromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


// myLeads = JSON.parse(myLeads)
// localStorage.getItem("myLeads")
// const leadsfromLocalStorage = myLeads
if (leadsfromLocalStorage){
    myLeads = leadsfromLocalStorage
    render(myLeads)
}

function render(leads) {
  let ListItems = "";

  for (i = 0; i < leads.length; i++) {
    ListItems += `
    <li>
        <a target='blank' href='${leads[i]}'> ${leads[i]}
        </a>
      </li>
        `;

  }
 
  UlEl.innerHTML = ListItems;
} 


DeleteBtn.addEventListener("dblclick", function () {
  localStorage.clear()
  myLeads = []
  render(myLeads)
})

Input.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
 
 localStorage.setItem("myLeads", JSON.stringify(myLeads))
 render(myLeads);


  console.log(localStorage.getItem("myLeads"))
});

