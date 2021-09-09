/* function getdata(number){
//CONSUMIR API DE URL
    return fetch(`https://rickandmortyapi.com/api/character/${number}`)
//TRANFORMAR LA PETICION EN FORMATO JSON
    .then(response => response.json())
    .then(json => json);


}





async function showdata(){
    
    try {
       
        
//FUNCION QUE ESPERA RESPUESTA Y PLASMA EN PANTALLA
        var consulta = await getdata(1);


        var img = document.querySelector('#image-1');
        img.src = `${consulta.image}`

        var name = document.querySelector('#name-1');
        name.textContent = `Name: ${consulta.name}`

        var id = document.querySelector('#id-1');
        id.textContent = `Id: ${consulta.id}`

        var species = document.querySelector('#species-1');
        species.textContent = `Species: ${consulta.species}`

        var gender = document.querySelector('#gender-1');
        gender.textContent = `Gender: ${consulta.gender}`

        var status = document.querySelector('#status-1');
        status.textContent = `Status: ${consulta.status}`

        var origin = document.querySelector('#origin-1');
        origin.textContent = `Origin: ${consulta.origin.name}`

        var location = document.querySelector('#location-1');
        location.textContent = `Location: ${consulta.location.name}` 

        var consulta = await getdata(2);

        var img = document.querySelector('#image-2');
        img.src = `${consulta.image}`

        var name = document.querySelector('#name-2');
        name.textContent = `Name: ${consulta.name}`

        var id = document.querySelector('#id-2');
        id.textContent = `Id: ${consulta.id}`

        var species = document.querySelector('#species-2');
        species.textContent = `Species: ${consulta.species}`

        var gender = document.querySelector('#gender-2');
        gender.textContent = `Gender: ${consulta.gender}`

        var status = document.querySelector('#status-2');
        status.textContent = `Status: ${consulta.status}`

        var origin = document.querySelector('#origin-2');
        origin.textContent = `Origin: ${consulta.origin.name}`

        var location = document.querySelector('#location-2');
        location.textContent = `Location: ${consulta.location.name}`

        
        
        
    } catch (error) {
        console.error(error)
        
    }
      

}

showdata() */







function web_developer(){


concentracion = 'productividad';
perseverancia = 'exito';
esfuerzo = 'superacion personal';
dedicacion = 'adversidad';
paciencia = 'experencia';

}

web_developer(concentracion + perseverancia + esfuerzo + dedicacion + paciencia)