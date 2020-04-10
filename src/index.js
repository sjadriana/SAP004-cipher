import cipher from './cipher.js';
//alert('Escreva sua mensagem e escolha a opção desejada');

var botaoC = document.getElementById("btn1")
botaoC.addEventListener("click", function(event){

  event.preventDefault();

  let entrada = document.getElementById("origem").value.toUpperCase().trim();
  let senha =Number(document.getElementById("offset").value);
  

  let saida= cipher.encode(senha, entrada);
  
  document.getElementById("destino").innerHTML= saida;

});

let botaoD = document.getElementById("btn2")
botaoD.addEventListener("click", function(event){

  event.preventDefault();

  let entrada = document.getElementById("origem").value.toUpperCase().trim();
  let senha = Number(document.getElementById("offset").value);


  let saida= cipher.decode(senha, entrada);
  let destino = document.getElementById("destino")
  destino.innerHTML= saida;
  

});


console.log(cipher);
