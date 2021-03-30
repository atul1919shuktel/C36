class Form{
     constructor(){
         this.title = createElement("h1")
         this.input = createInput("name")
         this.button = createButton("play")
         this.greet = createElement("h2")
         this.name = null;
     }
     display(){

         this.title.html("car racing game")
         this.title.position(300,30);
         this.input.position(320,200);
         this.button.position(350,300);
         this.button.mousePressed(()=>{
             
            
             console.log("e")
             this.input.hide()
             this.button.hide()
             this.name = this.input.value()
             this.greet.html("hi!"+this.name)
             this.greet.position(320,200)
             playerCount++
             player.update(playerCount)
             player.name = this.name
             player.updateName()
         })

     }

}