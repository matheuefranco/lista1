function areaex4() {
  var numero1 = document.getElementById("numero1").value;
  var numero2 = document.getElementById("numero2").value;
  var resultado = 2 * 3.1416 * numero1 * (numero1 + numero2);
  document.getElementById("resultado").value = resultado.toFixed(2);
}
