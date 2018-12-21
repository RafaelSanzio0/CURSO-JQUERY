
var tempoInicial = $("#tempo-digitacao").text();  // uma variavel para guardar o valor inicial do contador em 10
var campo = $(".campo-digitacao");

$(function(){ // com este atalho do Jquery, eu chamo todas as minhas funçções assim que a página é recarregada
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    reiniciaJogo();
    comparaFrase();
}
);

function atualizaTamanhoFrase(){
    var frase = $(".frase").text(); // seleciona a classe frase e o conteudo de texto
    var numeroPalavras = frase.split(" ").length; //quebra a frase pelo split por espaçoes e conta a qtd do mesmo
    var tamanhoFrase = $("#tamanho-frase"); // seleciona a classe tamanho frase
    tamanhoFrase.text(numeroPalavras); // preenche a classe com a qtd de palavras

};

function inicializaContadores(){
    campo.on("input",function(){ // on = quando vc sofrer evento d click vc faz algo
        var conteudo = campo.val();
        var qtdPalavras = conteudo.split(/\s+/).length;; // expressao regular s+, permite nao contar espaços como palavras, diferente de " ".
        $("#contador-palavras").text(qtdPalavras);
        var qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres);
    });
}

function inicializaCronometro(){
    var tempo = $("#tempo-digitacao").text(); // conteudo em si, ou seja o valor 10
    campo.one("focus",function(){ 
        var contadorID = setInterval(function(){
            tempo--;
            $("#tempo-digitacao").text(tempo);
            if (tempo == 0){
                campo.attr("disabled",true); //o attr pode chamar um atributo ou ate mesmo altera-lo
                clearInterval(contadorID); // com este carinha aqui, consigo travar o contador no tempo 0
                campo.addClass("campo-desativado");    
            }  
        },1000);
    });
}

function reiniciaJogo(){
    $("#reinicia-jogo").click(function(){
        campo.attr("disabled",false);
        campo.val(" ");
        $("#contador-palavras").text("0");
        $("#contador-caracteres").text("0");
        $("#tempo-digitacao").text(tempoInicial);
        campo.removeClass("campo-desativado");
        inicializaCronometro();
    });
};

function comparaFrase(){
    var frase = $(".frase").text();
    campo.on("input",function(){
        var digitalizado = campo.val();
        var frasePedaco = frase.substr(0,digitalizado.length); // com essa função substr eu consigo pegar o pedaço da frase e comparar com oq o user esta digitando
        //poderia usar a função frase.startsWith(digitalizado), está e uma nova função do JS(CASO SEU BROWSER SUPORTE)
        console.log(digitalizado);
        console.log(frasePedaco);

        if (digitalizado == frasePedaco){
            campo.addClass("correto");
            campo.removeClass("errado");
        }else{
            campo.addClass("errado");
            campo.removeClass("correto");
        }
    });
};






