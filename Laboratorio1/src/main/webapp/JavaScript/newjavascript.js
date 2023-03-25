/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
        function convertir(){
            var valore = parseInt(document.getElementById("valor").value);
            var resultado = 0;
            var dolar = 3.85;
            var euro = 3.89;
            if (document.getElementById("uno").checked){
                resultado = valore / dolar;
                alert("El cambio de Soles a dolares es: $" + resultado.toFixed(2));
            }
            else if (document.getElementById("dos").checked){
                resultado = valore / euro;
                alert("El cambio de Soles a Euros es: €" + resultado.toFixed(2));
            }
            else {
                alert("Ingrese todos los campos")
            }
        }
