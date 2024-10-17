let list_container = document.getElementById("list_container");
let input = document.getElementById("input");

let add_task = input.addEventListener("change", (event) => {
  if (event.target.value === "") return;
  else {
    let input_text = event.target.value;
    let li = document.createElement("li");
    li.innerHTML = input_text;
    list_container.append(li);
    let delete_button = document.createElement("button");
    delete_button.innerHTML = "";
    li.append(delete_button);
  }
  event.target.value = "";
  save_data();
});

let complete_task = list_container.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
    save_data();
  } else {
    event.target.parentElement.remove();
    save_data();
  }
});

let save_data = () => localStorage.setItem("data", list_container.innerHTML);

let show_data = () => (list_container.innerHTML = localStorage.getItem("data"));
show_data();
