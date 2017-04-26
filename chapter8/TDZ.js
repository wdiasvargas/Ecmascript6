/**
 * Created by williamdias on 26/04/17.
 */

//HOISTING
//TDZ

let valor = 0;

if(true){
    
    
    console.log(valor);
    let valor;
    console.log(valor);
    
    
    valor= 1;
    console.log(1);
    
}

console.log(valor);