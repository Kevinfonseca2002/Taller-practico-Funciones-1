const salario = Number(prompt(`Ingresa tu salario para calcular tus impuestos`));

function calcularImpuestos(a){
    return (a*0.1).toFixed(1)
}

const respueta=calcularImpuestos(salario)

console.log(`el impuesto de tu salario (${salario}) es ${respueta}`)

