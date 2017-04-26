/**
 * Created by williamdias on 26/04/17.
 */

//template string simples
//ES6

const horas = new Date().getHours();
//const mensagem = defineMensagem`Bom dia, são ${horas} horas`;
//
//function defineMensagem(strings,...values){
//    console.log(strings);
//    console.log(values);
//};

const mensagem = defineMensagem`${""}${horas} horas`;

function defineMensagem (strings, ...values){
    const hora = values[1];
    if (hora >= 6 && hora <= 12){
        values[0] = "Bom dia";
    }else if(hora > 12 && hora <= 18){
        values[0] = "Boa Tarde";
    }else{
        values[0] = "Boa Noite";
    }
    values[0] = `${values[0]}, são `;
    return `${values[0]}${strings[0]}${hora}${strings[2]}`
};
console.log(mensagem);
