const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

// console.log(inputElement.value);
const notes = ["note1", "note2"];

// функция ренедер фор=for
function render() {
  for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i]));
  }
//   другая версия for
//   for(let note of notes){
//     listElement.insertAdjacentHTML('beforeend',getNoteTemplate(none))
// }
}
render();

// при клике

createBtn.onclick = function () {
  // если пустая строка не пробивать
  if (inputElement.value.length === 0) {
    return;
  }
  //   listElement.innerHTML =
  listElement.insertAdjacentHTML(
    "beforeend",
    getNoteTemplate(inputElement.value)
  );

  // обнулить инпут
  inputElement.value = "";
};
function getNoteTemplate(title) {
  return `<li
    class="list-group-item d-flex justify-content-between align-items-center"
  >
    <span>${title}</span>
    <span
      ><span class="btn btn-small btn btn-success">&check;</span
      ><span class="btn btn-small btn-danger">&times;</span></span
    >
  </li>`;
}
