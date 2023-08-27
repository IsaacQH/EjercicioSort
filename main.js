'use strict'

window.addEventListener('load', function(){
    console.log("Cargado...")

    var add = document.getElementById('form')                       //Guarda el form
    var val = document.getElementById('number')                     //Guarda el number
    var storedValues = localStorage.getItem('value')                //Guarda value de local storage
    var array = storedValues ? JSON.parse(storedValues) : [];       //Pregunta si stored values existe, de igual forma comvierte a arr

    //Guarda elementos HTML 
    var botonSort = document.getElementById('sortBoton')           
    var botonClear = document.getElementById('clearBoton')
    var divArray = document.getElementById('array')
    var divSort = document.getElementById('sort')

    divArray.innerHTML = array                                      //Escribe en div el array actual de local storage

    //Evento submit para form
    add.addEventListener('submit',() => {                           
        if(val.value.trim() !=""){                                  //Revisa que el valor no este vacio
            array.push(val.value)                                   //Hace un push al array
            
            localStorage.setItem('value', JSON.stringify(array))    //Guarda el nuevo array en local storage como stringify     
            
            //Aparecen los elementos
            botonClear.style.display = "block"                      
            botonSort.style.display = "block"
            divArray.style.display = "block"
            divSort.style.display = "block"
        }

        divArray.innerHTML = array                                  //Escribe en div el array actualizado
    })

    //Evento click para botones
    botonClear.addEventListener('click', () => {                    
        localStorage.removeItem('value')                            //Borra del local storage

        //Limpia todo y elementos
        array =[]                                            
        botonClear.style.display = "none"                           
        botonSort.style.display = "none"
        divArray.style.display = "none"
        divSort.style.display = "none"
        divArray.innerHTML = ""
        divSort.innerHTML = ""
    })

    //Evento click para botones
    botonSort.addEventListener('click', () => {                   
        var sort = bubbleSort(array)                              //Activa y guarda función sort y resultado del array sort
        divSort.innerHTML = sort                                  //Escribe en div el array sort
    })

    //Función sort y se untroduce el array
    function bubbleSort(cadena){                                        
        var len = cadena.length-1                                 //Variable para recorrer el array, el -1 para empezar desde indice 0
        for(var i = 0; i<len ;i++){                               //Indice uno que recorre toda la cadena
            for(var j = 0; j< len-i; j++){                        //Indice dos que recorre la segunda cadena en dependencia de i
                if(cadena[j]>cadena[j+1]){                        //Revvisa que sea mayor el valor anterior
                    const temp = cadena[j];                       //Se guarda en constante el valor actual
                    cadena[j] = cadena[j+1];                      //Se cambia valor actual por posterior
                    cadena[j+1] = temp;                           //Se cambia posterior por actual
                }
            }
        }
        return cadena                                             //Regresa la cadena arreglada
    }


})





