const productos =[
    {producto: "Celular", precio: 2000, cantidad: 3, descuento: 0.15},
    {producto: "Mouse", precio: 500, cantidad: 4, descuento: 0.20},
    {producto: "Plancha", precio: 450, cantidad: 7, descuento: 0.05},
    {producto: "Keyboard", precio: 100, cantidad: 3, descuento: 0.15},
    {producto: "Camara", precio: 150, cantidad: 1, descuento: 0.50},
    {producto: "Audifonos", precio: 700, cantidad: 2, descuento: 0.08}
]

function sumarCompras(a){
    let sumatoria=0;
    for (let i=0; i<a.length;i++){
        let precioTotal= a[i].precio*(1-a[i].descuento);
        sumatoria+=precioTotal
        
    }
    return sumatoria
}

function listarCompras(productosCar){
    const productos= [];
    for(let i= 0; i<productosCar.length;i++){
        let precioTotal= productosCar[i].precio*(1-productosCar[i].descuento)
        productos.push({nombre: productosCar[i].producto,precio:precioTotal })
    }
    return productos
}

function carritoFinal(productosCarrito){

    const valores=sumarCompras(productosCarrito)
    const resumen=listarCompras(productosCarrito)
    console.log(`Resumen de tus compras`)
    for(let i=0;i<resumen.length;i++){
        let nombre= resumen[i].nombre;
        let precio= resumen[i].precio;
        console.log(`\t${nombre}: ${precio} USD\n`)
    }

    console.log(`\n \n El valor total de tu factura es ${valores} USD`)
}

carritoFinal(productos)