import cipher from './cipher.js';
//alert('Escreva sua mensagem e escolha a opção desejada');
    
console.log(cipher);

var botaoC = document.getElementById("btn1")
botaoC.addEventListener("click", function(event){

  event.preventDefault();

  let entrada = document.getElementById("origem").value.toUpperCase().trim();
  let senha =document.getElementById("offset").value;

  let saida= cipher.encode(senha, entrada);
  
  document.getElementById("destino").innerHTML= saida;

});

let botaoD = document.getElementById("btn2")
botaoD.addEventListener("click", function(event){

  event.preventDefault();

  let entrada = document.getElementById("origem").value.toUpperCase().trim();
  let senha =document.getElementById("offset").value;

  let saida= cipher.decode(senha, entrada);
  let destino = document.getElementById("destino")
  destino.innerHTML= saida;

});
/*function cifrar (event) {
    event.preventDefault();
    
    let tEntrada = document.getElementById("origem").value;
    let entrada = tEntrada.toUpperCase();    
    let senha = document.getElementById("offset").value;
    let destino = document.getElementById("destino");
    let saida = cipher.encode(senha, entrada);
    
   
   destino.innerHTML = saida
}
document.getElementById("btn1").addEventListener("click", cifrar);
//
//function decifrar(){}*/


console.log(cipher);
