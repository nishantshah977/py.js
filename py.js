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

     if(typeof(data) == 'number'){
         console.error(`The Given data is not string`);
     }else{
    return parseInt(data);
    }
    
}
