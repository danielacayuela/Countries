
//Home -> encontrar paises que tengan actividad seleccionada
export function arrayPaisesPorActividad (array,key1,key2,value) {
    let countriesByActivity = [];
    for (let i=0; i<array.length; i++) {
       let newArray = array[i][key1];
       if(newArray.length>0){
           for (let j=0; j<newArray.length; j++){
            if(newArray[j][key2]){
                if(newArray[j][key2] === value) {
                    countriesByActivity.push(array[i])  
                    }
                };
            };
        };
    };
    return countriesByActivity;
};

//Filter -> Array de actividades [{},{}...]
export function iterateActivities (array) {
    let newArray = []; 
    for(let i=0; i<array.length; i++) { 
        if(array[i].length>0) {
            for(let j=0; j<array[i].length; j++){
                newArray.push(array[i][j])
            };
        };
    };
    return newArray;
};

//Activity -> paso opciones paises, paso las seleccionadas a otros array para la opciones de countries de activities
export function getIds (array) {
    let aux  = [];
    for (let i=0; i<array.length;i++) {
        array[i].selected&&aux.push(array[i].value);
    };
    return aux;
};