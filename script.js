let bte = document.getElementById('bte');
let body = document.body;

bte.addEventListener('click', () => {
  bte.classList.toggle('escuro');
  body.classList.toggle('escuro');
});


function mostrarAlerta(modelo) {
  alert(modelo);
}
