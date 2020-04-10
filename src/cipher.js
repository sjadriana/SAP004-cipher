const cipher = {
  
  encode: function (senha, mensagem) { 
    
   if (typeof Number(senha) !== "number" || typeof mensagem !== "string") {
      throw new TypeError( "Insira um numero na senha ou confira se seu texto contem apenas letras de A - Z e nenhum caractere")
    } 
    var resultado= "";
    for (var i = 0; i < mensagem.length; i++)  {
      var cifra=((mensagem[i].charCodeAt() - 65 + Number(senha)) % 26) + 65;
      resultado = resultado + String.fromCharCode(cifra);
    }  
    let parsed = resultado.normalize('NFD').replace(/([\u0300-\u036f]|[^a-zA-Z])/g, ' ');
    return parsed;
  },  
  
  decode: function (senha, mensagem) {
     if ( typeof senha !== "number" || typeof mensagem !== "string") {
        throw new TypeError( "Insira um numero na senha ou confira se seu texto contem apenas letras de A - Z e nenhum caractere")
      } 
   
    var resultado= "";
    for (let i = 0; i < mensagem.length; i++) {
      let cifra=((mensagem[i].charCodeAt() + 65 - Number(senha)) % 26) + 65;
      resultado = resultado + String.fromCharCode(cifra);
    }  
    var parsed = resultado.normalize('NFD').replace(/([\u0300-\u036f]|[^a-zA-Z])/g, ' ');
    return parsed;
    
  },  
};
export default cipher;
  
 

