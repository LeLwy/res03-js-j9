class Form{
    
    #fields;
    #submitted;
    
    constructor(){
        
        this.#fields = [];
    }
    
    get fields (){
        return this.#fields;
    }
    
    get submitted (){
        return this.#submitted;
    }

    set submitted (submitted){
        this.#submitted = submitted;
    }
    
    addField(field){
        
        this.#fields.push(field);
    }
    
    submit(){
        
        let jsonForm = JSON.stringify(this);
        
    }
    
    validate(){
        
        let subBtn = document.querySelector("body main form fieldset button");
        let invalideFields = false;
        
        for(let i=0; i<this.#fields.length; i++){
            
            this.#fields[i].validate();
            
            if(this.#fields[i].errors.length > 0){
                
                invalideFields = true;
                
            }
            
        }
        
        
        
        if(invalideFields === true){
            
            subBtn.classList.add("disabled");
            subBtn.setAttribute("disabled", true);
            
        }else{
            
            subBtn.classList.remove("disabled");
            subBtn.removeAttribute("disabled");
        }
        
          console.log(this); 
    }
    
    toJSON(){
        
    }
}

export { Form };