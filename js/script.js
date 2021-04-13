// AQUI ESTÃO AS VARIAVEIS INCLUIDAS COM A FUNÇAO PRA MELHORAR A LEGIBILIDADE
var botao = buscaElemento('.botao');
var numero = buscaElemento('.numero');
var tabuada = buscaElemento('.tabuada');
var resultado = buscaElemento('.resultado');

// FUNÇÃO ANONIMA EM QUE AO SER CLICADO NO BOTÃO É REALIZADO O CALCULO
botao.addEventListener('click', function() {
	// AQUI É ATRIBUIDO AO RESULTADO O VALOR DA MULTIPLICAÇÃO
   resultado.textContent = aplicaTabuada(numero.value,tabuada.value);

});

// FUNÇÃO QUE BUSCA OS ELEMENTOS DO HTML PARA O JAVASCRIPT
function buscaElemento(seletor){
	
	return document.querySelector(seletor);

}
// FUNÇÃO QUE CALCULA OS VALORES INCLUIDOS NOS INPUTS
function aplicaTabuada(numero,tabuada){

	return numero * tabuada;

}


/*FORMA QUE ESTAVA O CODIGO ANTES DA MELHORIA DE LEGIBILIDADE*/

/*<button class="botao">Calcula</button>
<input class="numero">
<input class="tabuada">
<span class="resultado"></span>

<script>

    var botao = document.querySelector('.botao');
    var numero = document.querySelector('.numero');
    var tabuada = document.querySelector('.tabuada');
    var resultado = document.querySelector('.resultado');

    botao.addEventListener('click', function() {

        resultado.textContent = numero.value * tabuada.value;

    });


</script>*/



