// const API_URL = "http://localhost:3001/competitions";

fetch('http://localhost:3001/competitions', {
    mode:"cors",

})
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))


function post(){
    let id = document.getElementById("id").value;
    let title = document.getElementById("title").value;
    let category = document.getElementById("category").value;
    let description = document.getElementById("description").value;
    let registration_fee = document.getElementById("registration_fee").value;
    let prize = document.getElementById("prize").value;
    let registration_deadline = document.getElementById("registration_deadline").value;

    fetch("http://localhost:3001/competitions"),{
        method:"post",
    },
    body: JSON.stringify({
        ID: ID,
        title: title,
        category: category,
        description: description,
        registration_fee : parseInt(registration_fee),
        prize : parseInt(prize),
        registration_deadline: registration_deadline,
    })

    .then((res) => res.json)
    .then((data) => console.log(data))

}

    
