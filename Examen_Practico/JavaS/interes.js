

function interes(Auto){
    if(Auto.valor.value > 1000000){
        alert("Ingrese un valor menor en el campo del Valor del Auto");
        Auto.valor.focus();
        return false;
    }

    if(Auto.valor.value < 100000){
        alert("Ingrese un valor mayor en el campo del Valor del Auto");
        Auto.valor.focus();
        return false;
    }

    var checkOK = "0123456789";

    var checkStr = Auto.valor.value;

    var todoesvalido = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j)){
                break;
            } 
        }
        if(j == checkOK.length){
            todoesvalido = false;
            break;
        }
    }

    if(!todoesvalido){
        alert("Escriba unicamente numeros en el campo Valor del auto");
        Auto.valor.focus();
        return false;
    }


    if(Auto.cuota.value < 10){
        alert("Ingrese un valor mayor en el campo de Cuota inicial");
        Auto.cuota.focus();
        return false;
    }

    if(Auto.cuota.value > 100){
        alert("Ingrese un valor menor en el campo de Cuota inicial");
        Auto.cuota.focus();
        return false;
    }

    var checkOK = "0123456789";

    var checkStr = Auto.cuota.value;

    var todoesvalido = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j)){
                break;
            } 
        }
        if(j == checkOK.length){
            todoesvalido = false;
            break;
        }
    }

    if(!todoesvalido){
        alert("Escriba unicamente numeros en el campo Cuota Inicial");
        Auto.cuota.focus();
        return false;
    }




    var checkOK = "0123456789";

    var checkStr = Auto.periodo.value;

    var todoesvalido = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j)){
                break;
            } 
        }
        if(j == checkOK.length){
            todoesvalido = false;
            break;
        }
    }

    if(!todoesvalido){
        alert("Escriba unicamente numeros en el campo Periodo");
        Auto.periodo.focus();
        return false;
    }

}

function activar(Auto){
    alert(Auto.valor.value*1+0.0394*Auto.periodo.value);
}