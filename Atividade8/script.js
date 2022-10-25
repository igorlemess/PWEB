
var idade = [];
var sexo  = [];
var opiniao = [];
var midade = 0,contp = 0,contob = 0,contm = 0,contf = 0;


for(var i = 0; i < 45 ; i++)
{
    idade[i] =      parseInt(prompt("Pessoa " + i + "\n\nDigite sua idade: "));
    sexo[i] =       prompt("Pessoa " + i + "\n\nDigite seu sexo(M/F): ");
    opiniao[i] =    prompt("Pessoa " + i + "\n\nDigite sua opinião: ");

    console.log(idade[i])
    console.log(sexo[i])
    console.log(opiniao[i])

    midade += idade[i];

    if(opiniao[i] == "péssimo")
    {
        contp++;
    }

    if(opiniao[i] == "ótimo" || opiniao[i] == "bom")
    {
        contob++;
    }

    if(sexo[i] == "m")
    {
        contm++;
    }
    else
    {
        contf++;
    }
}

var maisvelho = 0;
var maisnovo = 0;

console.log(Math.max(idade));

maisvelho = Math.max.apply(null,idade);
maisnovo = Math.min.apply(null,idade);

    document.write("<p>A média de idade:" + Math.round(midade / i));
    document.write("<p>A idade da pessoa mais velha: " + maisvelho +"</p>")
    document.write("<p>A idade da pessoa mais nova: " + maisnovo +"</p>")
    document.write("<p>A quantidade de pessoas que responderam péssimo: " + contp +"</p>")
    document.write("<p>A porcentagem de pessoas que responderam ótimo e bom: " + contob / (i / 100) +"%</p>")
    document.write("<p>Homens: " +  contm + "</p>")
    document.write("<p>Mulheres: " +  contf + "</p>")