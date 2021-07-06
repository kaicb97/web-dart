class Player {

    //let container;


    constructor() {
        console.log("Player constructor()\n");
        this.playerName = "Player";
        this.playerScore = 0;
        this.container = this.buildContainer();
    }

    getContainer() {
      return this.container;
    }


    //@TODO generate real hash
   buildContainer() {
       var container = document.createElement("div");
       container.setAttribute("class", "playerBoxClass");
       var lorem = document.createTextNode("ich bin ein platzhalter");
       var template = playerBoxTemplate;
       template = template.replace("###NAME###", this.playerName);
       template = template.replace("###CONTAINERID###", "randomHash");
       container.innerHTML = template;
       container.appendChild(lorem);

       return container;
   } 


    initPlayer(name, startscore) {

        this.playerName = name;
        this.playerScore = startscore;
        this.score = startscore;
        this.updateView();

        this.playerScoreSpan = document.getElementById("randomHash");
        console.log(this.playerScoreSpan);

    }

    updateView() {

        //config einlesen und darstellen
        

    }

    addThrow(throwValue) {

        console.log(throwValue);
        //in config eintragen
        this.score -= throwValue;
        
        var newThrow = document.createElement("div");
        newThrow.innerHTML = throwValue;
        this.container.appendChild(newThrow);
        console.log(this.score + "\n");
        this.playerScoreSpan.innerHTML = this.score;


    }

}




