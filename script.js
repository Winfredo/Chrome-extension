let myLeads = [];
const Input = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const UlEl = document.getElementById("ul-el");

// myLeads = JSON.parse(myLeads)
// localStorage.getItem("myLeads")

// const leadsfromLocalStorage = myLeads

let leadsfromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsfromLocalStorage)
  


Input.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";

 localStorage.setItem("myLeads", JSON.stringify(myLeads))
 renderLeads();


  console.log(localStorage.getItem("myLeads"))
});

function renderLeads() {
  let ListItems = "";

  for (i = 0; i < myLeads.length; i++) {
    ListItems += `
    <li>
        <a target='blank' href='${myLeads[i]}'> ${myLeads[i]}
        </a>
      </li>
        `;

    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // UlEl.append(li)
  }

  UlEl.innerHTML = ListItems;
}
