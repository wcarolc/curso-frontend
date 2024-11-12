function calcularMedia( notas ) {

    var media;
var soma=0;
    for(c = 0; c < notas.length; c++){
soma += notas[c];
    }

media = soma / notas.length;

return media;
}

function aprovacao (media ) {
    let condicao = media >= 7 ? "aprovado" : "reprovado";

    return condicao;
}

console.log("Média: " + calcularMedia([8, 8, 10]))


console.log ("Este aluno foi: " + aprovacao(calcularMedia([2, 8, 10])))


// se quiser receber as notas direto no final

function calcularMedia( notas ) {

    var soma=0;
        for(c = 0; c < notas.length; c++){
    soma += notas[c];
        }

    media = soma / notas.length;

    return media;
    }


    function aprovacao (notas ) {

        let media = calcularMedia (notas);
        let condicao = media >= 7 ? "Aprovado" : "Reprovado";

        return 'A média deste aluno foi: ' + media + ' - O aluno foi: ' + condicao;
    }

    console.log (aprovacao([8,2,7]));
