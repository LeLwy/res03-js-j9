import { Form } from './classes/form.js'
import { Field } from './classes/field.js'
import { TextField } from './classes/textField.js'
import { EmailField } from './classes/emailField.js'
import { PasswordField } from './classes/passwordField.js'

window.addEventListener("DOMContentLoaded", function(){
    
    let inputsList = document.querySelectorAll("body > main > form > fieldset > input")
    let data = [];
    
    for(let i=0; i<inputsList.length; i++){
        
        if(inputsList[i].getAttribute("type") === "email"){
            
            data.push(new EmailField(inputsList[i]));
            
        }else if(inputsList[i].getAttribute("type") === "password"){
            
            data.push(new PasswordField(inputsList[i]));
            
        }else{
            
            data.push(new TextField(inputsList[i]));
        }
    }
});