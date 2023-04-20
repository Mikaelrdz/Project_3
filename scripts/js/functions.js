'use strict'
// Variables
const dlog = document.getElementById('login');
var rdz = true;
var getAs = () => window.innerWidth > 575;


//Codes
// if(dlog.getAttribute('page-loged') === 'false') {
//   dlog.getElementsByClassName('dropdown-toggle')[0].removeAttribute('data-bs-toggle');
// }
control_resize();

window.addEventListener('resize', () => {control_resize()});

function control_resize() {
  console.log(getAs(),rdz);
  if(getAs() !== rdz) {
    if(getAs()) {
      //Cuando es tamaño grande
      let buttons = document.querySelectorAll('button[data-bs-toggle="dropdown"]');
      buttons.forEach((b)=>{
        b.setAttribute('data-bs-toggle','collapse');
        b.classList.remove('dropdown-toggle')
        let ul = b.parentElement.querySelector('ul.dropdown-menu');
        ul.classList.remove('dropdown-menu');
        ul.classList.add('collapse');
        // b.parentElement.classList.remove('dropend');
      });
    } else {
      //Cuando es tamaño pequeño
      let buttons = document.querySelectorAll('button[data-bs-toggle="collapse"]');
      buttons.forEach((b)=>{
        b.setAttribute('data-bs-toggle','dropdown');
        b.classList.add('dropdown-toggle')
        let ul = b.parentElement.querySelector('ul.collapse');
        ul.classList.add('dropdown-menu');
        ul.classList.remove('collapse');
        ul.classList.remove('show');
        // b.parentElement.classList.add('dropend');
      });
    }
    rdz = getAs();
  }
}

(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()