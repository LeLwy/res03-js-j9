import { Form } from './classes/form.js'
import { Field } from './classes/field.js'
import { TextField } from './classes/textField.js'
import { EmailField } from './classes/emailField.js'
import { PasswordField } from './classes/passwordField.js'

window.addEventListener("DOMContentLoaded", function(){
    
    let inputsList = document.querySelectorAll("body > main > form > fieldset > input")
    let data = [];
    let newForm = new Form;
    
    for(let i=0; i<inputsList.length; i++){
        
        if(inputsList[i].getAttribute("type") === "email"){
            
            let newEmailField = new EmailField(inputsList[i]);
            newEmailField.name = inputsList[i].getAttribute("name");
            data.push(newEmailField);
            
        }else if(inputsList[i].getAttribute("type") === "password"){
            
            let newPasswordField = new PasswordField(inputsList[i]);
            newPasswordField.name = inputsList[i].getAttribute("name");
            data.push(newPasswordField);
            
        }else if(inputsList[i].getAttribute("type") === "text"){
            
            let newTextField = new TextField(inputsList[i]);
            newTextField.name = inputsList[i].getAttribute("name");
            data.push(newTextField);
        }
        
        inputsList[i].addEventListener("change", function(){
            
            newForm.validate();
        });
    }
    
    for(let i=0; i<data.length; i++){
        
        newForm.addField(data[i]);
    }
    
    let subBtn = document.querySelector("body main form fieldset button");
    
    subBtn.addEventListener("submit", function(e){
        
        e.preventDefault();
        newForm.submit();
    });
});