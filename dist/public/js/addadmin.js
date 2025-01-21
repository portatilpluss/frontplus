const devolver = document.getElementById("devo").addEventListener('click', ()=>{
    window.location.href = "/dash/employes"
})




const addmin = async() => {
    const url = document.getElementById('urlful').getAttribute('data-url');
    const name = document.getElementById('names').value;
    const lastname = document.getElementById('lastname').value;
    const id = document.getElementById('id').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('emails').value;
    const pasword = document.getElementById('pasword').value;
    const rol = document.getElementById('rol').value;

    if (name == '' || lastname == ''|| id == '' || age == '' || phone ==''|| email == '' || pasword == '' || rol == ''){
         return Swal.fire("Campos Vacios");
    }
    
    const options = {
        method : "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            lastname: lastname,
            id: id,
            age: age,
            phone: phone,
            email: email,
            pasword: pasword,
            idrole: rol
        })
    }

    await fetch(url, options)
   .then(res => res.json())
   .then(data => {
    if(data.error == true){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Register Invalid!",
          });
    }else{
        Swal.fire({
            title: "Excently!",
            icon: "success",
            draggable: true
          });
          setTimeout(function () {
            window.location.href= "/dash/employes";
        }, 1000);
    }
   })
   .catch(error => console.log('Error:', error));

}