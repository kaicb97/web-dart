class Player {

    //let container;


    constructor() {
        console.log("Player constructor()\n");
        this.container = this.buildContainer();
    }

    getContainer() {
      return this.container;
    }


   buildContainer() {
       var container = document.createElement("div");
       container.setAttribute("class", "playerBoxClass");
       var lorem = document.createTextNode("ich bin ein platzhalter");
       container.innerHTML = playerBoxTemplate;
       container.appendChild(lorem);

       return container;
   } 

}
