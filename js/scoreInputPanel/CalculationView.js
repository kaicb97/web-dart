class CalculationView {

    constructor() {

        this.board = this.buildScoreboard();
        this.throwValues = [[],[],[]];
    }


 getBoard() {
        return this.board;
    }




     buildScoreboard() {
        var board = document.createElement("div");

        board.innerHTML = calculationViewTemplate;

        return board;
        
    }


    //@TODO tryCatch
    initTable() {
        console.log("initTable");
        this.r0c0 = document.getElementById('calculationView_00');
        this.r0c1 = document.getElementById('calculationView_01');
        this.r1c0 = document.getElementById('calculationView_10');
        this.r1c1 = document.getElementById('calculationView_11');
        this.r2c0 = document.getElementById('calculationView_20');
        this.r2c1 = document.getElementById('calculationView_21');
    }



    setThrowValue(field, factor) {

        if(!this.r0c0) {
            this.initTable();
            
            if(this.r0c0 === 'undefined') {
                console.err("Can'find calculationView columns");
            }
        }

        var row = 0;
        while(row <= 2 && this.throwValues[row].length > 0) row++;


        if(row > 2) return;

        this.throwValues[row][0] = factor;
        this.throwValues[row][1] = field;

        switch(row) {

            case 0:
                this.r0c0.innerHTML = factor + "x\t" + field;
                this.r0c1.innerHTML = factor*field;
                break;
            case 1:
                this.r1c0.innerHTML = factor + "x\t" + field;
                this.r1c1.innerHTML = factor*field;
                break;
            case 2:
                this.r2c0.innerHTML = factor + "x\t" + field;
                this.r2c1.innerHTML = factor*field;
                break;
        }


        return true;
    }

    deleteThrowValue(row) {

        console.log(this.throwValues)
        this.throwValues[row] = [];
        console.log(this.throwValues)

        switch(row) {

            case 0:
                this.r0c0.innerHTML = "-";
                this.r0c1.innerHTML = "-";
                break;
            case 1:
                this.r1c0.innerHTML = "-";
                this.r1c1.innerHTML = "-";
                break;
            case 2:
                this.r2c0.innerHTML = "-";
                this.r2c1.innerHTML = "-";
                break;
        }





    }

}
