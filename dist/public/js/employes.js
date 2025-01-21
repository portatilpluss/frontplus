

// VIEW REGISTER


const url = document.getElementById('fullurll').getAttribute('data-url');

const option = {
  method: 'GET',
  headers: {
    'content-type': 'application/json'
  },
  credentials: 'include'
}

fetch(url, option)
  .then(res => res.json())
  .then(data=>{
    if(data.error == true){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Register Invalid!",
      });
    }else{
      mostrar(data.resul[0]);
  }
  
})
.catch(error => { console.log(error); });

const mostrar = (data)=>{
  const body = document.getElementById('body');
  let html = ''
  for(let i = 0; i<data.length; i++){
    html += `
          <div class="plus__card">
      <div class="card__header">
          <div class="header">
              <div class="rounder" id="nomen"></div>
              <div class="name">
                  <h3>${data[i].name}</h3>
                  <span class="email"><i class='bx bx-envelope' id="em"></i>   ${data[i].email}</span>
              </div>
          </div>
          <i class='bx bx-dots-vertical-rounded open' id="open"></i>
      </div>
      <!-- body -->
       <div class="card__body">
       <div class="card__body">
            <p class="text_bo"> <i class='bx bx-user' id="em"></i>
                ${data[i].lastname} </p>
            <p class="text_bo">
                <i class='bx bx-phone' id="em"></i>
                ${data[i].phone}</p>
            <p class="text_bo">
                <i class='bx bx-calendar' id="em"></i>
                ${data[i].age}</p>
            <p class="text_bo">
                <i class='bx bx-user-pin' id="em"></i>
                ${data[i].id}</p>
            <p class="text_bo">${data[i].idemployes}</p>
         </div>
         
       </div>
       <!-- WINDOW MODAL -->
        <div class="window view" id="view">
          <div class="window__body">
              <ul class="window_item">
                  <li class="item__window">
                      <i class='bx bx-show' id="ven"></i>                        
                      <a href="#">Ver Perfil</a>
                  </li>
                  <li class="item__window">
                      <i class='bx bxs-pencil' id="ven"></i>
                      <a href="">Modificar Permisos</a>
                  </li>
                  <li class="item__window">
                      <i class='bx bx-lock' id="ven"></i>
                      <a href="#">Suspender Cuenta</a>                       
                  </li>
                  <li class="item__window">
                      <i class='bx bxs-trash --exe' id="ven"></i>
                      <a href="#" class="--exe">Eliminar Admin</a>                       
                  </li>
              </ul>
          </div>
        </div>
      
  </div>
    `
    body.innerHTML = html;
    events();
    const lastname = ()=>{
      const lastnameArray = data[i].name;
      const namearray = lastnameArray.split("");
      let name = ''
      for(let a = 0 ; a < 2; a++){
      
        name += namearray[a];
        console.log(namearray[a]);
        
        
      }
      const nomen = document.getElementById('nomen');
      nomen.innerHTML = name;
    }
    lastname();
  }
}

const lastname = ()=>{
  const lastnameArray = "lisandro";
  const namearray = lastnameArray.split("")
  console.log( namearray);
  
  for(let a = 0 ; a < 2; a++){
    console.log(namearray[a]);
    
  }
}

const events = () =>{
  
const open = document.querySelectorAll('.open');
const view = document.querySelectorAll('.view');

open.forEach((openElement, index) => {
  openElement.addEventListener('click', () => {
    view[index].classList.toggle('active');
  });
});
}


