
function transforma(){
    if(document.getElementById('maiusc').checked == true)
    {
        document.getElementById('texto').innerHTML = document.forms.transform.elements["idConteudo"].value.toUpperCase();
    }
    
    if(document.getElementById('minusc').checked == true)
    {
        document.getElementById('texto').innerHTML = document.forms.transform.elements["idConteudo"].value.toLowerCase();
    }
}