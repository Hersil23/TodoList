const forbiddenChars = /[!@#$%^&*()_+]/;

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const toggleDark = document.getElementById("toggleDark");
const body = document.body;

// 🌗 Toggle modo oscuro
toggleDark.addEventListener("click", () => {
  body.classList.toggle("dark");
  toggleDark.textContent = body.classList.contains("dark") ? "🌞" : "🌙";
});

// ✅ Agregar tarea
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (!taskText || forbiddenChars.test(taskText)) {
    alert("❌ La tarea no puede estar vacía ni contener caracteres especiales.");
    return;
  }

  const li = document.createElement("li");
  li.className = "flex justify-between items-center bg-blue-100 dark:bg-gray-700 p-2 rounded";

  const span = document.createElement("span");
  span.textContent = taskText;
  span.className = "flex-grow cursor-pointer";
  span.addEventListener("click", () => {
    span.classList.toggle("line-through");
    span.classList.toggle("text-gray-500");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.className = "ml-4 text-orange-500 hover:text-orange-700";
  deleteBtn.addEventListener("click", () => li.remove());

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
});