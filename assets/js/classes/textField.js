import { Field } from './field.js'

class TextField extends Field{
    
    constructor(element)
    {
        super(element);
    }
    
    validate(){
        
        this.errors = [];
            
        if(this.element.value === ""){
            
            let error = `Le champ ${this.name} ne peut pas être vide`;
            this.errors.push(error); 
            this.element.classList.add("nok");
            this.element.classList.remove("ok");
            
        }else{
            
            this.element.classList.add("ok");
            this.element.classList.remove("nok");
        }
    }
}

export { TextField };