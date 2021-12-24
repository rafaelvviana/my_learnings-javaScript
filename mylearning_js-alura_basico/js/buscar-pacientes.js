var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
  console.log("Buscando pacientes...");

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  var erroBuscar = document.querySelector("#erro-ajax");
  xhr.addEventListener("load", function(){

        if(xhr.status == 200){
          erroBuscar.classList.add("invisivel");
          var resposta = xhr.responseText;
          var pacientes = JSON.parse(resposta);

          pacientes.forEach(function(paciente){
            adicionaPacienteNaTabela(paciente);
          });
        }else{
          console.log(xhr.status);
          console.log(xhr.responseText);
          erroBuscar.classList.remove("invisivel");
        }
  });

  xhr.send();
});
