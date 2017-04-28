/**
 * Created by williamdias on 27/04/17.
 */
//ES6
// const Classe = class {
//   //...
// };
//
// const instancia = new Classe();

const Classe = class Nome {
  getClassName(){
    return Nome.name;
  }
};
const instancia = new Nome;

console.log(instancia.getClassName());
console.log(Nome.name);