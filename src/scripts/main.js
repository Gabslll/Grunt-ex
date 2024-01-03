document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('somando').addEventListener('submit', function(evento) {
        evento.preventDefault();

        let somando1 = document.getElementById('soma1').value;
        let somando2 = document.getElementById('soma2').value;
        somando1 = parseInt(somando1);
        somando2 = parseInt(somando2);

        const resultado = somando1 + somando2;
        document.getElementById('resultado-valor').textContent = resultado;
    })
})
