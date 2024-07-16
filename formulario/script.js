function validar(){
    var valorNumero = document.getElementById("numero").value;
    var nomeValor = document.getElementById("nome").value;

    if(valorNumero.length > 2){
        alert("Digite apenas 2 numeros ou menos!!");
        //aqui vou colocar um focus para focar no campo onde está errado caso o usuario digitar errado
        document.formulario.numero.focus();
        return false;
    }else if(nomeValor.length < 3){
        alert("Digite um nome maior");
        document.formulario.nome.focus();
        return false;
    }else{
        alert("Formulario enviado");
        return true;
    }
}