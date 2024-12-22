
const forgotEmail = async()=>{
    const apiUrl = document.getElementById('apiFull').getAttribute('data-url');

    const email = document.getElementById('email').value;

    if(email == ''){
        return Swal.fire('Error', 'Email is required', 'error');
    }

    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            email: email
        }),
        credentials : 'include'
    }

    await fetch(apiUrl, options)
    .then(res => res.json())
    .then(data=> {
        if(data.error == false){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Code Sent",
                showConfirmButton: false,
                timer: 1500
              });

              setTimeout(function () {
                window.location.href = '/insert-code';
              }, 2000);
        }else{
            Swal.fire('Error', 'Email not found', 'error');
        }
    })
  
}