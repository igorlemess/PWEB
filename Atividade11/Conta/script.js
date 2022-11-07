class Conta{

    set nome(value)
    {
        this.cnome = value;
    }

    set banco(banco)
    {
        this.cbanco = banco;
    }

    set nconta(nconta)
    {
        this.cnconta = nconta;
    }

    set saldo(saldo)
    {
        this.csaldo = saldo;
    }

    get nome()
    {
        return this.cnome;
    }

    get banco()
    {
        return this.cbanco;
    }
    
    get nconta()
    {
        return this.cnconta;
    }

    get saldo()
    {
        return this.csaldo;
    }
}

class Corrente extends Conta{
    set saldoEspecial(saldo){
        this.csaldoEspecial = saldo;
    }

    get saldoEspecial(){
        return this.csaldoEspecial;
    }
}

class Poupanca extends Conta{
    set juros(juros){
        this.cjuros = juros;
    }

    get juros(){
        return this.cjuros;
    }

    set dtVencimento(data)
    {
        this.cdtVencimento = data;
    }

    get dtVencimento()
    {
        return this.cdtVencimento;
    }
}

var corrente = new Corrente();
corrente.nome = "Igor";
corrente.banco = "Caixa";
corrente.nconta = 12536;
corrente.saldo = 10000;
corrente.saldoEspecial = 2000;

document.write("<h2>Conta Corrente: </h2>")
document.write("<p>Nome: " + corrente.nome + "</p>");
document.write("<p>Banco: " + corrente.banco + "</p>");
document.write("<p>Numero: " + corrente.nconta + "</p>");
document.write("<p>Saldo: " + corrente.saldo + "</p>");
document.write("<p>Saldo Especial: " + corrente.saldoEspecial + "</p>");



var poupanca = new Poupanca();
poupanca.nome = "Larissa";
poupanca.banco = "Itau";
poupanca.nconta = 151891;
poupanca.saldo = 5168;
poupanca.juros = 0.5;
poupanca.dtVencimento = "15/05/2023";

document.write("<h2>Conta Poupanca: </h2>")
document.write("<p>Nome: " + poupanca.nome + "</p>");
document.write("<p>Banco: " + poupanca.banco + "</p>");
document.write("<p>Numero: " + poupanca.nconta + "</p>");
document.write("<p>Saldo: " + poupanca.saldo + "</p>");
document.write("<p>Juros: " + poupanca.juros + "</p>");
document.write("<p>Data vencimento: " + poupanca.dtVencimento + "</p>");





