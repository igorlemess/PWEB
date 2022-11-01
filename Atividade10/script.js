var Aluno1 = new Object();
Aluno1.RA = 1;
Aluno1.nome = "Igor";

document.write("<h3>Aluno 1</h3>");
document.write("<p>RA: " + Aluno1.RA + "</p>");
document.write("<p>Nome: " + Aluno1.nome + "</p>");

var Aluno2 = {
RA: 2,
nome: "Leila"
};

document.write("<br><h3>Aluno 2</h3>");
document.write("<p>RA: " + Aluno2.RA + "</p>");
document.write("<p>Nome: " + Aluno2.nome + "</p>");

var Aluno3 = {}; 
Aluno3['RA'] = 3;
Aluno3['nome'] = "Yas";
document.write("<br><h3>Aluno 3</h3>");
document.write("<p>RA: " + Aluno3.RA + "</p>");
document.write("<p>Nome: " + Aluno3.nome + "</p>");




