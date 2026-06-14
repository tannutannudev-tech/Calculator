let placeholder = document.getElementById('display');
//console.log(placeholder.value);
let expression = '';
function pressKey(Key){

    if(Key === 'AC'){
        expression = '';
        placeholder.value = 0;
        return;
    }

    if(Key === 'DEL'){
        expression = expression.slice(0,-1);
        placeholder.value = expression || '0';
        return;
    }

    if(Key === '='){
        try{
            expression = String(eval(expression));
            placeholder.value = expression;
        }

        catch(e){
            placeholder.value = Error;
               expression = "";
        }
        return;
    }

    if(placeholder.value ==='0' && Key!='.'){
        expression = Key;
    }
    else{
        expression +=Key;
    }

    placeholder.value = expression;
}
