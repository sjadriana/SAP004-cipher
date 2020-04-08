let cipher = {
  
  encode: function (senha, mensagem) { 
    let resultado= "";
    for (let i = 0; i < mensagem.length; i++)  {
      let cifra=((mensagem[i].charCodeAt() - 65 + Number(senha)) % 26) + 65;
      resultado = resultado + String.fromCharCode(cifra);
    }  
    

    return resultado;
  },  
  
  decode: function (senha, mensagem) {
   
    let resultado= "";
    for (let i = 0; i < mensagem.length; i++) {
      let cifra=((mensagem[i].charCodeAt() + 65 - Number(senha)) % 26) + 65;
      resultado = resultado + String.fromCharCode(cifra);
    }  
    
    return resultado;
  },  
};
export default cipher;
  
 

