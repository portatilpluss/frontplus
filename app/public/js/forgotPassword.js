const forgotPassword = async()=>{
    const apiFull = document.getElementById('apiFull').getAttribute('data-url');
    const paswords = document.getElementById('pasword').value;

    const options ={
        method: 'PUT',
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify({
            // email: data.payloadEmail.email,
            pasword: paswords

        }),
        credentials : 'include'
    }


    await fetch(apiFull, options)
    .then(res=> res.json())
    .then(data=>{
        console.log(data);
        
        if(data.error==false){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Password Updated",
                text: "Check your email for the new password.",
              });
        }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Failed to update password!",
              });
            
        }
    })
    .catch(error =>{
        console.error('Error fetching data:', error);
    })

}