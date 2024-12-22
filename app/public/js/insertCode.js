const InsertCode =async()=>{
    const apiUrl = document.getElementById('apiFull').getAttribute('data-url');
    const code = document.getElementById('code').value;


    const options = {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            code: code
        }),
        credentials: 'include'
    }

    await fetch(apiUrl, options)
    .then(res=> res.json())
    .then(data=>{
        if(data.error == false){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Code Sent",
                showConfirmButton: false,
                timer: 1500
              });

              setTimeout(function () {
                window.location.href = '/forgot-pasword';
              }, 2000);
        }
        else{
            Swal.fire('Error', 'El código ha expirado','error');
        }
    })
}
