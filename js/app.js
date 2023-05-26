'use strict'

import './router.js'


export function mascara(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) cpf.value += ".";
    if (v.length == 11) cpf.value += "-";
 
 }

 const cpf = document.getElementById('cpf')

 cpf.addEventListener('blur', function(){
    cpf.value.replaceAll('.', '')

    if(cpf.value.length == 14) {
    cpf.value.replaceAll('.', '')
    }
    else{
    if(cpf.value) cpf.value = cpf.value.match(/.{1,3}/g).join(".").replace(/\.(?=[^.]*$)/,"-");
    }
 })

 