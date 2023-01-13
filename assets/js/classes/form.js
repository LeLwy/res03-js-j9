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
        
    }
    
    validate(){
        
        let subBtn = document.querySelector("body main form fieldset button");
        let invalideFields = [];
        
        for(let i=0; i<this.#fields.length; i++){
            
            this.#fields[i].validate();
            
            if(this.#fields[i].validate() === false){
                
                invalideFields.push(this.#fields[i]);
            }
            
        }
        if(invalideFields === []){
            
                subBtn.classList.remove("disabled");
                subBtn.setAttribute("disabled", false);
        }
                console.log(invalideFields);    
    }
    
    toJSON(){
        
    }
}

export { Form };