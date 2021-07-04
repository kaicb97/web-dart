class Numbered {

    constructor() {

        this.board = this.buildNumberedBoard();
    }


    getBoard() {
        return this.board;
    }

    buildNumberedBoard() {
        var board = document.createElement("div");
        for(let i = 0; i < 20; i++) {

            board.appendChild(this.buildButton((i+1)));
        }

        return board;
    }

    buildButton(value) {
        var button = document.createElement("div");

        var buttonDefinition = numberedButtonTemplate;
        buttonDefinition = buttonDefinition.replace("###VALUE###", value);
        button.innerHTML = buttonDefinition;

        return button;
        
    }

}
