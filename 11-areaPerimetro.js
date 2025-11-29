const base= 3;
const altura=4;


function areaRec(b,a){
    const calculo= b*a;
    return console.log(`El area del rectangulo es ${calculo}`)
}

function perimetroRec(b,a){
    const calculo= 2*(b+a);
    return console.log(`El perimetro del rectangulo es ${calculo}`)
}

function callBack(areaf,perimetrof,b,a){
    areaf(b,a)
    perimetrof(b,a)
}

callBack(areaRec,perimetroRec,base,altura)