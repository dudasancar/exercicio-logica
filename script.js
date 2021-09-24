var carros = [
    {
        nome: "clio",
        cor: "preto"
    },
    {
        nome: "fiat mobi",
        cor: "vermelho"
    },
    {
        nome: "palio",
        cor: "preto"
    },
    {
        nome: "civic",
        cor: "prata"
    },
    {
        nome: "onix",
        cor: "branco"
    }
];

var pessoas = [
    {
        nome: "Duda",
        idade: 18
    },
    {
        nome: "Flávia",
        idade: 40
    }, 
    {
        nome: "Valentina",
        idade: 7
    },
    {
        nome: "Rafaela",
        idade: 5
    }
];

console.log(carros.length)

var crescente = carros.map((item) => item.nome)
console.log(crescente.sort())

var letraC = carros.map((item) => item.nome)
function carrosC(value) {
    if (value.charAt(0) === "c")
    return value;
}
var res = letraC.filter(carrosC)
console.log(res)

var decrescente = pessoas.map((item) => item.idade);
decrescente.sort(function(a,b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});
console.log(decrescente.reverse())

var nomesCrescente = pessoas.map((item) => item.nome)
console.log(nomesCrescente.sort())

var novoArray = pessoas.map((pessoa) =>{
    var item = {};
    item.nome = pessoa.nome;
    item.idade = pessoa.idade;
    item.status = "ativo";
    return item;
})
console.log(novoArray)