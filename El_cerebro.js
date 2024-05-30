let resultado = document.getElementById("resultado");
let lista_de_historial = document.getElementById("lista_de_historial");


loadhistoria();

function appendToScreen(value) {
  resultado.value += value;
}

function clearScreen() {
  resultado.value = "";
}

function calculate() {
  try {
    resultado.value = eval(resultado.value);
    saveTohistoria(resultado.value);
  } catch (error) {
    resultado.value = "Esta mal a ecuación";
  }
}
//JSON Un objeto intrínseco que proporciona funciones para convertir valores de JavaScript hacia y desde el formato de notación de objetos JavaScript (JSON).
function saveTohistoria(operation) {
  let historia = JSON.parse(localStorage.getItem("historia")) || [];
  historia.push(operation);
  localStorage.setItem("historia", JSON.stringify(historia));
  loadhistoria();
}

function loadhistoria() {
  let historia = JSON.parse(localStorage.getItem("historia")) || [];
  lista_de_historial.innerHTML = "";
  for (let i = 0; i < historia.length; i++) {
    let li = document.createElement("li");
    li.textContent = historia[i];
    lista_de_historial.appendChild(li);
  }
}