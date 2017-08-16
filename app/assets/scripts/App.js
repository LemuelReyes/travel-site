var $ = require('jquery');

import Person from './modules/Person';

class Adults extends Person {
  payTaxes(){
    console.log(this.name + " now owes $0 in taxes.");
  }
}

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Adults("Jane Smith", "orange");
jane.greet();
jane.payTaxes();
