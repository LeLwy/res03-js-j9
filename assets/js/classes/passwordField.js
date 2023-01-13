import { Field } from './field.js'

class PasswordField extends Field{
    
    constructor(element)
    {
        super(element);
    }
    
    validate(){
            
        if(this.element.value === ""){
            
            let error1 = `Le champ ${this.name} ne peut pas être vide`;
            this.errors.push(error1); 
            this.element.classList.add("nok");
            this.element.classList.remove("ok");
            return false;
            
        }else if(this.element.value === "" && this.element.value.length < 5){
            
            let error2 = `Le champ ${this.name} est trop court (5 caractères minimum)`;
            this.errors.push(error2);
            this.element.classList.add("nok");
            this.element.classList.remove("ok");
            return false;
            
        }else{
            
            this.element.classList.add("ok");
            this.element.classList.remove("nok");
        }
    }
}

export { PasswordField };