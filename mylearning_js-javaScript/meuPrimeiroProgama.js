console.log("Meu primeiro programa: trabalhando com variaveis");

const listaDeDestinos = new Array(
    `Salvador`, `Sao Paulo`, `Rio de Janeiro`
);
console.log(listaDeDestinos);

const idade = 15;

if(idade >= 18) {
    console.log("maior de idade.")
    listaDeDestinos.splice(1,1);
} else {
    
    console.log("menor de idade")
}

console.log(listaDeDestinos);
