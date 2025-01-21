
document.getElementById('nav__logo').addEventListener('click',()=>{
    setTimeout(function () {

        window.location.reload();
    },500)
})

const Login = async ()=>{
    const apiFull = document.getElementById("apiFull").getAttribute("data-url");
    const email = document.getElementById("email").value;
    const pasword = document.getElementById("pasword").value;

    if(email == "" || pasword == ""){
        return Swal.fire("Campos vacios!");
    }

    const options= {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            email:email,
            pasword:pasword
        }),
        credentials : 'include'
    }
    await fetch(apiFull,options)
    .then(res => res.json())
    .then(data => {
        
        if(data.error == true){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password or Email Incorrect!",
              });
        }else{
            Swal.fire({
                icon: "success",
                title: "Login Successful!",
                text: data.message
              });

             
                setTimeout(function () {
                    if(data.payload.idrole === 1){
                        return window.location.href = "/dash/admin";
                    }else if(data.payload.idrole === 2){
                        return window.location.href = "/dash/user";
                    }else{
                        return Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Rol Invalid!",
                          });
                    }
                }, 1500);
        }
        // console.log(data.payload.name);

    })
    .catch(error =>{
        console.error('Error fetching data:', error);
    })

}