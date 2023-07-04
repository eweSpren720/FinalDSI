const PuppyCollection = DB.collection("contacto");



function send(){

    const name = document.getElementById('name');
    const place = document.getElementById('place');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');

    if(name.value == "" || phone.value == "" || place.value== "" || email.value ==""){
        alert("Hay espacios en blanco");
        return;
    }

    const person = {
        Nombre: name.value,
        Direccion: place.value,
        Email: email.value,
        Telefono: phone.value,
    }

    DB.collection('contacto')
        .add(person)
        .then(function(docRef){
            console.log("Si", docRef);
        }).catch(function(error){
            console.log(error);
        });

    alert("Muchas gracias nos comunicaremos contigo para dar paso al proceso Sr(a) " + name.value);
    setTimeout(function() {
        window.location.href = "principal.html";
      }, 2000);
}

