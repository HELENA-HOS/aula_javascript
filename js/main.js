
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.globo.com/"); /* abre em outra janela */
    //window.location.href = "https://www.globo.com/"; /* abre na mesma janela */
}

function trocar(elemento){
    //document.getElementById("mouse_move").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mouse_move").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function change(elemento){
    console.log(elemento.value);
}

/*
function soma(n1, n2) {
    return n1 + n2;
}
*/

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

function validaIdade(idade){
    var validar;
    if (idade>=18){
        validar = true
    }else {
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));

alert(soma(5, 10));
 */



/*
var d = new Date();
alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getHours());
*/

/*
var count=0;
for (count=0; count <= 5; count++) {
    alert(count);
};
*/


/*
var count = 0;
while (count < 5) {
    console.log(count);
    count++;
};
*/

/*
var idade = prompt("Qual sua idade?");
if (idade >= 18) {
    alert("Maior de idade");
} else {
    alert("Menor de idade");
};
*/

/*
var fruta = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(fruta);
alert(fruta[1].nome);
*/

/*
var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "))


//var nome = "Helena";
//var idade = 36;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));