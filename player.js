class Player{
    constructor(){
        this.name = null

    }

    readCount(){
        db.ref("playercount").on("value",function(data){playerCount = data.val()})
    }
    update(count){
        db.ref("/").update({playercount:count})
        
    }
    updateName(){
        var playerIndex = "player"+playerCount
        db.ref(playerIndex).update({name:this.name})
    }
}