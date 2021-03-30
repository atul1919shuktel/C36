class Game{

    constructor(){

    }


    getState(){
        db.ref("gamestate").on("value",function(data){gameState = data.val()})
    }

    start(){
        if(gameState === 0){
            player = new Player()
            player.readCount();
            form = new Form()
            form.display()
        }
    }

}

