const Register = async()=>{
    const urlFull = document.getElementById("url").getAttribute("data-url");
    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const age = document.getElementById("age").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const pasword = document.getElementById("pasword").value;
    const idrole = document.getElementById("rol").value;

    if(name == ""||lastname == ""|| age == "" || phone == ""|| email == ""|| pasword == ""|| idrole == ""){
        return Swal.fire("Campos vacios!");
    }


 const options = {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify({
        name: name,
        lastname: lastname,
        age: age,
        phone:phone,
        email:email,
        pasword: pasword,
        idrole:idrole
    })
 }

 await fetch(urlFull, options)
 .then(res=> res.json())
 .then(data=>{
    if(data.error == true){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Register Invalid!",
          });
    }else{
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });     
        setTimeout(function () {
            window.location.reload();
        }, 1000);
    }
 })
 .catch (error=>{
    console.log("Error fuction", error);
    
 })
    
}