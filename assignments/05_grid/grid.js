class gridGenerator {
    constructor(x, y, cellW, cellH, hue) {

        this.x = x;
        this.y = y;

        this.cellWidth = cellW;
        this.cellHeight = cellH;

        this.numColumns = width / (this.cellWidth * 0.8);
        this.numRows = height / this.cellHeight;

        this.cells = [];

        this.Vspacing = this.cellHeight / 2
        this.Hspacing = this.cellWidth / 2

        // create a grid of cells
        for (let column = 0; column < this.numColumns; column++) {
            for (let row = 0; row < this.numRows; row++) {

                if (column % 2 == 0) {
                    this.Vspacing = this.cellHeight / 2;
                } else {
                    this.Vspacing = 0;
                }

                this.cells.push(new Cell(column * this.cellWidth * 0.8 + this.Hspacing, row * this.cellHeight + this.Vspacing, this.cellWidth, this.cellHeight, column, row, hue));

            }
        }
    }

    update() {

        // update each cell
        for (let i = 0; i < this.cells.length; i++) {
            this.cells[i].update();
        }
    }
}