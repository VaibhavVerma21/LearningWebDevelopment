class User{
    #password;
    constructor(username, password){
        this.username = username;
        this.#password = password;
    }
    getPassword(){
        let encryptedPassword = "";
        for(let i=0;i<this.#password.length;i++){
            encryptedPassword+="*";
        }
        return encryptedPassword;
    }
    setPassword(pass=""){
        let numberFlag = false;
        let alphabetFlag = false;

        pass.split('').map((element) => {
            if(!numberFlag && element>=0 && element<=9){
                numberFlag = true;
            }
            if(!alphabetFlag && element>="A" && element<="Z"){
                alphabetFlag = true;
            }
        })
        
        if(numberFlag || alphabetFlag || pass.length >= 8){
            this.#password = pass;
            console.log("New password set.");
        } else{
            console.error("Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
        }
    }
}
let user = new User("Vaibhav", "Vaibhav123");
console.log(user.getPassword());

user.setPassword("mypassword");
user.setPassword("myPassword");
user.setPassword("myPassword123");
console.log(user.getPassword());