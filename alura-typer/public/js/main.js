var frase = $(".frase").text(); // seleciona a classe frase e o conteudo de texto

var numeroPalavras = frase.split(" ").length; //quebra a frase pelo split por espaçoes e conta a qtd do mesmo


var tamanhoFrase = $("#tamanho-frase"); // seleciona a classe tamanho frase
tamanhoFrase.text(numeroPalavras); // preenche a classe com a qtd de palavras


var campo = $(".campo-digitacao");

campo.on("input",function(){ // on = quando vc sofrer evento d click vc faz algo
    var conteudo = campo.val();
    
    var qtdPalavras = conteudo.split(/\s+/).length;; // expressao regular s+, permite nao contar espaços como palavras, diferente de " ".
    var contadorPalavras = $("#contador-palavras").text(qtdPalavras);
    
    var qtdCaracteres = conteudo.length;
    var contadorCaracteres = $("#contador-caracteres").text(qtdCaracteres);
    
    
    
});

var tempo = $("#tempo-digitacao").text();

campo.on("focus",function(){
    
    setInterval(function(){
        
        tempo--;
        
        if (tempo < 0){
            console.log("seu tempo acabou GAME OVER!");
            break;
        }
        
    
        
     console.log(tempo);
        
        
        
    },1000);
    
    
    
    
});