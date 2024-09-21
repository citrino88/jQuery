/* 
// Encontrar um elemento HTML (Entrada)
var titulo = document.querySelector('#tituloPrincipal');

//Manipular/alterar (Processamento)
titulo.textContent = 'teste';

//Apresentar o resultado (Saída)
console.log((titulo));

$(function(){

    //entrada
    var titulo2 = $('#tituloPrincipal');

    //processamento alteração de texto
    titulo2.text('teste2');

    //alteração html
    titulo2.html('Olá <br> mundo!!!');

    //alteração CSS
    //titulo2.css('background-color', 'red');

    //manipulação de atributos
    titulo2.addClass('fundoRosa');

    titulo2.attr('class', 'fundoLaranja');

    //titulo2.removeClass('fundoLaranja');
    titulo2.removeAttr('class');
    titulo2.remove();

    //saída
    console.log(titulo2);
    
});
 */

/* TABUADA */

/* $(function(){

    function calcTabuada(){
        alert('teste');
    }

    //guardar o caminho até o botão
    var btnCalcular = $('#btnCalcular');

    btnCalcular.click(calcTabuada());
    //btnCalcular.click(()=>{ alert('estou aqui dentro')});

}); */
/* Rever este codigo abaixo
$(function(){

    function calcTabuada(){

        var valor = Number($('#tabuada').val());

        var resposta = $('#respostaTabuada');

        var coletora = ` ${valor} x ${i} = ${valor*1} <br>`

        for(let i=2; i<=10; i++){
            coletora += ` ${valor} x ${i} = ${valor*i} <br>`
        }
        resposta.html(coletora);
    }

    //guardar o caminho até o botão
    var btnCalcular = $('#btnCalcular');

    btnCalcular.click(calcTabuada());
    //btnCalcular.click(()=>{'estou aqui dentro'});

}); */

/* 

CODIGO QUE DEU CERTO

$(function(){
 
    function calcTabuada(){
 
        var valor = Number($('#tabuada').val());
        var resposta = $('#respostaTabuada');
        var coletora = `${valor} x ${1} = ${valor*1} <br>`
 
        for(let i = 2; i<=10; i++){
            coletora += `${valor} x ${i} = ${valor*i} <br>`;
        }
 
        resposta.html(coletora);
 
    }
 
    var btnCalcular = $('#btnCalcular');
    btnCalcular.click(calcTabuada);
 
}); */

$(function(){

    var btnCalcular = $('#btnCalcular');
    var titulo = $('#tituloTabuada');

    titulo.css('color', 'red');

  /*   btnCalcular.click(()=>{
        titulo.slideUp(1000);
    }); */

  /*   btnCalcular.dblclick(()=>{
        titulo.slideDown(1000);
    }); */
/* 
    btnCalcular.click(()=>{
        titulo.toggle();
    }); */

  /*   btnCalcular.click(()=>{
        titulo.slideToggle(1500);
    }); */

   /*  btnCalcular.dblclick(()=>{
        titulo.fadeOut();
    });

    btnCalcular.dblclick(()=>{
        titulo.fadeIn();
    }); */

    btnCalcular.click(()=>{
        titulo.fadeToggle(1000);
    });

})

/* 

    SOMA

*/

$(function(){

    function soma(){
        var numeroA = Number($('#valorA').val());
        var numeroB = Number($('#valorB').val());
        var resposta = $('#respostaSoma'); 
        var soma = numeroA + numeroB;

        resposta.html(soma);
    }
    var btnSoma = $('#btnSoma');
    btnSoma.click(soma);

});


/* 

    ALTERA A COR DE FUNDO

*/

$(function(){

    function cor(){
        var cor = $('#cor').val();
        var corFundo = $('#corFundo');

        corFundo.css('background-color', cor);
    }
    var alterarCor = $('#alterarCor');
    alterarCor.click(cor);

})


/* $(function() {
    $('#alterarCor').click(function() {
        $('#corFundo').css('background-color', $('#cor').val());
    });
}); 

REFATORADO O CODIGO DE ALTERAÇÃO DE COR
O que foi mudado:
Remoção da função separada:

Ao invés de criar uma função separada cor, usei uma função anônima diretamente no evento de clique. Isso elimina a necessidade de uma variável adicional e mantém o código mais compacto.
Chamada direta ao jQuery:

Em vez de armazenar a referência de $('#corFundo') em uma variável, fiz a chamada diretamente dentro do css(). Isso reduz o número de linhas e torna o código mais direto.
Uso de encadeamento:

Encadear as chamadas do jQuery ($('#cor').val() diretamente dentro da chamada css()) torna o código mais enxuto, pois reduz a necessidade de variáveis temporárias.
Como o Código Funciona Agora:
$(function() {...}): Este é um atalho para $(document).ready(), que garante que o código dentro dele só será executado quando o DOM estiver completamente carregado.

$('#alterarCor').click(function() {...}): Quando o botão com id alterarCor é clicado, a função anônima é executada.

$('#corFundo').css('background-color', $('#cor').val()): Aqui, obtemos o valor do input de cor e imediatamente aplicamos esse valor como a cor de fundo do elemento com id corFundo.

Vantagens da Refatoração:
Clareza: Menos código significa que é mais fácil entender o que está acontecendo.
Manutenção: É mais fácil manter e atualizar um código mais conciso.
Desempenho: Embora a diferença seja mínima, evitar a criação de variáveis desnecessárias pode melhorar ligeiramente o desempenho.*/

/* 

    MUDAR TEMA PARA FUNDO ESCURO E TEXTO COR CLARA

*/

