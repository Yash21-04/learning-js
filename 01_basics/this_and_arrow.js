const user = {
    username: "Yash",
    age : 19,
    
    welcomeMessage : function(){
        console.log(`hello ${this.username},welcome to website.`);
        console.log(this);
        
    }
    
}
// user.welcomeMessage()
// user.username = "Aaru"
// user.welcomeMessage()
user.welcomeMessage()

