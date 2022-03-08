document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input[type=text]').forEach( node => node.addEventListener('keypress', e => {
      if(e.keyCode == 13) {
        e.preventDefault();
        CalcularPeso()
      }
    }))
  });

function CalcularPeso() {
    let peso = parseInt(document.getElementById('peso').value);
    const gravTierra = 9.8;
    const gravMarte = 3.7;
    const gravJupiter = 24.8;
    if(!peso || peso == NaN){
        return document.getElementById('answer').innerHTML = 'Ingrese un valor numerico🔢'
    }else if (document.getElementById('planets').value === 'Marte') {
        let pesoMarte = (peso * gravMarte) / gravTierra;
        pesoMarte = parseFloat(pesoMarte)
        document.getElementById('answer').innerHTML = 'Su peso en Marte es de: <strong>' + pesoMarte.toFixed(2) + '</strong>'
        
    } else {
        let pesoJupiter = (peso * gravJupiter) / gravTierra;
        pesoJupiter = parseFloat(pesoJupiter)
        document.getElementById('answer').innerHTML = 'Su peso en Jupiter es de: <strong>' + pesoJupiter.toFixed(2) + '</strong>'
    }
    
}