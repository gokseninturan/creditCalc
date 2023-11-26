// let entryValue = document.getElementById("money").value;
// let selectOption = document.getElementById("vade");
// let calcBtn = document.getElementById("hesapla");
let calcBtn = document.getElementById("hesapla");
let entryValue = document.getElementById("money");
let selectOption = document.querySelector('#vade'); 
let result = document.getElementById('result');
function hi(){
    if(selectOption.value == 12){
    var faizOrani = 1.5;
    }if(selectOption.value == 24){
    var faizOrani = 2;
    }if(selectOption.value == 36){
        var faizOrani = 2.5;
    }if(selectOption.value == 48){
        var faizOrani = 3;
    }
    var paragrph = document.createElement('p');
    paragrph.innerText =(entryValue.value * faizOrani)/selectOption.value;
    result.appendChild(paragrph);

}