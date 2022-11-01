 let maior = function(...args)
 {
    return Math.max.apply(null,args.sort(function(a,b){return a - b}));
 }

 let ordem = function(...args)
 {
     return args.sort(function(a,b){return a - b});
 }

let n1,n2,n3;

n1 = Number(prompt("Escreva o primeiro número: "));

n2 = Number(prompt("Escreva o segundo número: "));

n3 = Number(prompt("Escreva o terceiro número: "));

document.write("<h2>O maior número é: </h2>" + maior(n1,n2,n3))
document.write("\n<h2>O array ordenado: </h2>" + ordem(n1,n2,n3))