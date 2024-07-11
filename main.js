const form = document.getElementById("formulary");
const name = [];
const phone = [];

let lines = ""

form.addEventListener("submit", function (e) {
  e.preventDefault();

  addLine()
  addNewLine()
});

function addLine() {
  const inputName = document.getElementById("input-name");
  const inputPhone = document.getElementById("input-phone");

  name.push(inputName.value);
  phone.push(inputPhone.value);

    let line = 
    `<tr>
         <th>${inputName.value}</th>
         <th>${inputPhone.value}</th>
     </tr>`

     lines += line ; 

     inputName.value = ""
     inputPhone.value = ""
}

function addNewLine() {
    const table = document.querySelector("tbody")
    table.innerHTML = lines

}
