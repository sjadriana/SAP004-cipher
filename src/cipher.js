let cipher = {
  
  encode: function (senha, mensagem) { 
    let resultado= "";
    for (let i = 0; i < mensagem.length; i++)  {
      let cifra=((mensagem[i].charCodeAt() - 65 + Number(senha)) % 26) + 65;
      resultado = resultado + String.fromCharCode(cifra);
    }  
    let parsed = resultado.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, ' ');
    return parsed;
  },  
  
  decode: function (senha, mensagem) {
   
    let resultado= "";
    for (let i = 0; i < mensagem.length; i++) {
      let cifra=((mensagem[i].charCodeAt() + 65 - Number(senha)) % 26) + 65;
      resultado = resultado + String.fromCharCode(cifra);
    }  
    let parsed = resultado.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, ' ');
    return parsed;
    
  },  
};
export default cipher;
  
 

