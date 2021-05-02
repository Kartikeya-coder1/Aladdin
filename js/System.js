class System{

    constructor(){}

    authenticate(actualCode,enteredCode){
        textSize(50);
        fill("black");
        if(actualCode === enteredCode){
            score++
            console.log(" working")
        }
    }

}