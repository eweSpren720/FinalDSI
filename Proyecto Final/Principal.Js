
function goToContacto() {
    window.location.href = "contacto.html";
}

const PuppyCollection = DB.collection("perritos");
var puppies = [];

window.addEventListener('load', function(event){
    PuppyCollection.get().then(function(QuerySnapshot) {
        QuerySnapshot.forEach(function(doc){
            var data = doc.data();
            puppies.push(data);
        })
        show();
        }).catch(function(error){
            console.log(error);
        });
});

function show() {
    puppies.forEach(puppy =>{
        const leftsection = document.getElementById('left');
        const divcontainer = document.createElement('div');
        divcontainer.className = "data-container";
        const sectionImg = document.createElement('section');
        sectionImg.className = "image-data";
        const puppyImg = document.createElement('img');
        const sectionData = document.createElement('section');
        sectionData.className = "data";
        const puppyP1Element = document.createElement('p');
        const puppyP2Element = document.createElement('p');
        const puppyP3Element = document.createElement('p');
        const puppyP4Element = document.createElement('p');
        const puppyP5Element = document.createElement('p');
        const button = document.createElement('button');

        if(puppy.Raza == "Chico"){
            puppyImg.src = "perrito.png";
        }else if(puppy.Raza == "Mediano"){
            puppyImg.src = "perro.png";
        }else if(puppy.Raza == "Grande"){
            puppyImg.src = "perrote.png";
        }


        puppyP1Element.innerText = "Nombre: " + (puppy.Nombre);
        puppyP2Element.innerText = "Edad: " + (puppy.Edad);
        puppyP3Element.innerText = "Lugar: " + (puppy.Lugar);
        puppyP4Element.innerText = "Raza: " + (puppy.Raza);
        puppyP5Element.innerText = "Color: " + (puppy.Color);
        button.innerText = "Adoptar";
        button.onclick = goToContacto;

        sectionData.append(puppyP1Element,puppyP2Element,puppyP3Element,puppyP4Element,puppyP5Element,button);
        sectionImg.append(puppyImg);
        divcontainer.append(sectionImg,sectionData);

        leftsection.appendChild(divcontainer);
    })
}

function send(){

    const name = document.getElementById('name');
    const age = document.getElementById('age');
    const place = document.getElementById('place');
    const type = document.getElementById('type');
    const color = document.getElementById('color');

    if(name.value == "" || age.value == "" || place.value== "" || color.value ==""){
        alert("Hay espacios en blanco");
        return;
    }

    const puppy = {
        Nombre: name.value,
        Edad: age.value,
        Lugar: place.value,
        Raza: type.value,
        Color: color.value
    }

    DB.collection('perritos')
        .add(puppy)
        .then(function(docRef){
            console.log("Si", docRef);
        }).catch(function(error){
            console.log(error);
        });
        setTimeout(function() {
            location.reload();
          }, 2000);

}