function print(data){
    console.log(data);
}

function input(data){
   let RecivedData = prompt(data);
   return RecivedData;
}

function len(data){
    return data.length;
}

function type(data){
    return typeof(data);
}

function round(data){
    return Math.ceil(data);
}


function str(data){
    return parseInt(data);
}

function islower(data){
    let lower = data.toLowerCase();
    if(data == lower){
        return true;
    }
    else{
        return false;
    }
}


function casefold(data){
    return data.toLowerCase();
}


function capitalize(data){
    return data.charAt(0).toUpperCase() + data.slice(1);
}


function endswith(data,character){
   let len = data.length-1;
   
   if(character.toLowerCase() == data.charAt(len).toLowerCase()){
       return true;
   }
   else{
       return false;
   }
   
}


