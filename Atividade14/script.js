function validar() {
            

    if (document.forms.dados.elements.idNome.value == "" || document.forms.dados.elements.idNome.length < 10) {
        alert("Preencha campo NOME corretamente!");
        document.forms.dados.elements.idNome.focus();
        return false;
    };

    if (document.forms.dados.elements.idEmail.value == "" || document.forms.dados.elements.idEmail.value.indexOf('@') == false || document.forms.dados.elements.idEmail.value.indexOf('.') == -1) {
        alert("Preencha campo E-MAIL corretamente!");
        document.forms.dados.elements.idEmail.focus();
       return false;
    }

    if (document.forms.dados.elements['idMensagem'].value == "" || document.forms.dados.elements['idMensagem'].value.length < 20) {
        alert("É necessario preencher o campo MENSAGEM com mais de 20 caracteres!");
        document.getElementById("idMensagem").focus();
        return false;
    }



    if(document.getElementById('Sim').checked == true)
    {
        alert("Volte sempre à esta página!");
    }
    
    if(document.getElementById('Nao').checked == true)
    {
        alert("Que bom que você voltou a visitar esta página !");
    }

    return true;
}