function areaOfFigures(input) {
    let type=input[0];

    if (type == `square`) {
        let aSquare=Number(input[1]);
        console.log((aSquare * aSquare).toFixed(3))
    } if (type == `rectangle`) {
        let aRectange=Number(input[1]);
        let bRectangle=Number(input[2]);
        console.log((aRectange * bRectangle).toFixed(3));
    } if (type == `circle`) {
        let rCircle=Number(input[1]);
        console.log((3.14159265358979323846264338327950288419716939937510 * (rCircle * rCircle)).toFixed(3));
    } if (type == `triangle`) {
        let aTriangle=Number(input[1])
        let hTriangle=Number(input[2]);
        console.log(((aTriangle * hTriangle) / 2).toFixed(3));
    }
}