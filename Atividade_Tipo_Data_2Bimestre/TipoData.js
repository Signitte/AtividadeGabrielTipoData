
document.addEventListener("DOMContentLoaded", function(){
    
    let botaoComparar = document.getElementById('comparar');
    let botaoIntervalo = document.getElementById('intervalo'); 
    let botaoAtual = document.getElementById('atual');

    botaoComparar.addEventListener('click', function(){

        let primeiraData = new Date(document.getElementById('data1').value);

        let segundaData = new Date(document.getElementById('data2').value);

        if(!validar(primeiraData,segundaData)){
            alert(`A data maior é: ${converterData(compararData(primeiraData,segundaData))}`);
        }
    });

    botaoIntervalo.addEventListener('click', function(){
        
        let primeiraData = new Date(document.getElementById('data1').value);

        let segundaData = new Date(document.getElementById('data2').value);

        if(!validar(primeiraData,segundaData)){
            if(intervaloData(primeiraData, segundaData)){
                alert(`O intervalo entre as datas é de: ${Math.trunc(intervaloData(primeiraData, segundaData)/86400)} dias`);
            }
        }
    });

    botaoAtual.addEventListener('click', function(){
        
        let botaoAtual = new Date();
        alert(`A data atual é: ${converterData(botaoAtual)}`); 
    });
});

function converterData(botaoAtual){
    
    let ano = (botaoAtual.getFullYear()).toString();
    let mes = (botaoAtual.getMonth()+1).toString();
    let dia = (botaoAtual.getDate()).toString();
    let horas = (botaoAtual.getHours()).toString();
    let minutos = (botaoAtual.getMinutes()).toString();

    if(mes.length<2){
        mes = "0" + mes;
    }
    if(dia.length<2){
        dia = "0" + dia;
    }
    if(horas.length<2){
        horas = "0" + horas;
    }
    if(minutos.length<2){
        minutos = "0" + minutos;
    }
    
    let novaData = `${horas}:${minutos} - ${dia}/${mes}/${ano}`;
    return novaData;
}

function compararData(primeiraData, segundaData){
    
    if(primeiraData.getTime() > segundaData.getTime()){
        return primeiraData;
    }else if(primeiraData.getTime() < segundaData.getTime()){
        return segundaData;
    }
    
}

function intervaloData(primeiraData, segundaData){

    if(primeiraData.getTime() >= segundaData.getTime()){
        
        alert("Primeira data deve ser mais antiga!");
        return false;
    }
    return (segundaData.getTime() - primeiraData.getTime())/1000;
}

function validar(primeiraData, segundaData){
    
    if(isNaN(primeiraData) || isNaN(segundaData)){
       
        alert("Escolha uma data!");
        return true;
    }
    return false;
}


