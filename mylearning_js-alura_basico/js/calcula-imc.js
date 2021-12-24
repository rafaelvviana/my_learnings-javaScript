var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (i = 0; i < pacientes.length; i++){

  paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);

  if (!pesoEhValido){
    console.log("Peso inválido.");
    pesoEhValido = false;
    tdImc.textContent = "Peso Inválido."
    paciente.classList.add("paciente-invalido");
  }

  if (!alturaEhValida){
    console.log("Altura inválida.");
    alturaEhValida = false;
    tdImc.textContent = "Altura Inválida.";
    paciente.classList.add("paciente-invalido");
  }

  if (pesoEhValido && alturaEhValida){
      var imc = calculaImc(peso, altura)
      tdImc.textContent = imc;
  }
}

function validaPeso(peso){
  return (peso >= 0 && peso <= 1000);
}

function validaAltura(altura){
  return (altura >= 0 && altura < 3.0);
}

function calculaImc(peso, altura){
  return (peso / (altura * altura)).toFixed(2);
}
