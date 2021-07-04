class CalculationView {

    constructor() {

        this.board = this.buildScoreboard();
    }


 getBoard() {
        return this.board;
    }




     buildScoreboard() {
        var board = document.createElement("div");

        board.innerHTML = "<h1>score:</h1><h1>3x20 - 60</h1><h1>1x20 - 20</h1><h1>bulls eye - 50</h1><h1>summe: 130<h1><button>bestätigen</button>";

        return board;
        
    }


}
