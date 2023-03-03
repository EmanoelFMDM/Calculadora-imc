var pesoput = document.getElementById("Peso");
var alturaput = document.getElementById("Altura");
const calcular = document.getElementById("CALCULAR");
calcular.addEventListener("click", function (e) {
  e.preventDefault();
  const peso = pesoput.value;
  const altura = alturaput.value;
  if (peso > 0 && altura > 0) {
    var imc = peso / altura ** 2;
  }
  var imcc = imc.toFixed(1);

  if (imc > 0) {
    document.getElementById("imc-number").innerText = imcc;
    if (imc < 18.5) {
      document.getElementById("classImc").innerText = "ABAIXO DO PESO";
      document.getElementById("classImc").style.color = "red";
    } else if (imcc > 18.5 && imcc <= 24.9) {
      document.getElementById("classImc").innerText = "NORMAL";
      document.getElementById("classImc").style.color = "green";
    } else if (imcc >= 25.0 && imcc <= 29.9) {
      document.getElementById("classImc").innerText = "SOBREPESO";
      document.getElementById("classImc").style.color = "yellow";
    } else if (imcc >= 30.0 && imcc <= 39.9) {
      document.getElementById("classImc").innerText = "OBESIDADE";
      document.getElementById("classImc").style.color = "grey";
    } else {
      document.getElementById("classImc").innerText = "OBESIDADE GRAVE";
      document.getElementById("classImc").style.color = "black";
    }
  }
});
const limpar = document.getElementById("limpar");
limpar.addEventListener("click", function (e) {
  e.preventDefault();
  pesoput.value = "";
  alturaput.value = "";
  document.getElementById("classImc").innerText = "";
  document.getElementById("imc-number").innerText = "";
});
