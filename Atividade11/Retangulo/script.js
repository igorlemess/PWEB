function Retangulo(base,altura)
{
    this.altura = altura;
    this.base = base;

    this.calculoArea = function()
    {
        return base * altura;
    }
}

let retangulo = new Retangulo(5,2);

document.write("Área do retângulo: " + retangulo.calculoArea());