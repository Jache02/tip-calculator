let consumo = 0;
let propinaPorcentage = 0;
let totalPropina = 0;
let montoTotal = 0;

function optenerTotal(){
    consumo = parseInt(document.getElementById('amount').value);
    propinaPorcentage = parseInt(document.getElementById('tip-porcentage').value);
    totalPropina = (consumo * propinaPorcentage);
    montoTotal =  totalPropina/100;
    let totalAPagar = montoTotal + consumo;
    let showTotal = document.getElementById('montoDePago');
    showTotal.innerHTML = totalAPagar;
    console.log(montoTotal);
}
