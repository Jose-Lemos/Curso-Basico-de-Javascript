const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'url_api', true);
    xhttp.onreadystatechange = function (event){
        if (xhttp.readyState === 4){  //Verifica el estado del request
            if (xhttp.status === 200){  //Verifica que  la petición GET ha sido exitosa
                callback(null, JSON.parse(xhttp.responseText));
            }
            else{
                const error = new Error(`Error: ${url_api}`);  //Informa el error de la petición GET
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

fetchData(API, function (error1, data1){  //hace el primer llamado a la funcion callback
    if (error1) return console.error(error1);  //Verifica si hubo error en el primer llamado
    fetchData(API + data1.results[0].id, function(error2, data2){  //Hace el 2do llamado a la funcion callback
        if (error2) return console.error(error2);   //Verifica si hubo error en el seguno llamado
        fetchData(data2.origin.url, function (error3, data3){
            if (error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    })
});