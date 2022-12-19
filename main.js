const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (e) => {
  //evita que se recargue la pagina cada vez que agrego un item
  e.preventDefault();
  //toma el valor del input y lo guarda en variable
  const text = input.value;

  //esta condicion pregunta si el texto esta vacio. Si esta vacio muestra la leyenda "agregar..."
  if (text !== "") {
    //crea el elemento li
    const li = document.createElement("li");
    //crea el elemnto p
    const p = document.createElement("p");

    const deleteAll = document.createElement('button');
    //agrega el texto del input al elemnto p por medio de la vaariable text
    p.textContent = text;
    //inserto el elemento p dentro del elemento li
    li.appendChild(p);
    //agrego el boton deleteBtn dentro del li
    li.appendChild(addDeleteBtn());
    //agrego el elemento li al elemento padre, ul
    ul.appendChild(li);
    deleteAll.textContent = 'Borrar Todo';

    input.value = '';
    empty.style.display = 'none'
  }
  
});

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });
  return deleteBtn;
}
