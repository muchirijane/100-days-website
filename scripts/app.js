
//type
var typed = new Typed('.header-type', {
    strings: [
        'Code',
        'Dedication', 
        'Fun',
        'Patience'
    ],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
  });
  console.log(typed);

const moon = document.querySelector('.fa-moon') ;
const sun = document.querySelector('fa-sun');


let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('.checkbox');

const enableDarkMode = () =>{
  //1. add darkmode class to the body
  document.body.classList.add('darkmode');
  //2.update darkmode in the local storange
  localStorage.setItem('darkmode', 'enabled');
}

const disableDarkMode = () =>{
  //1. add darkmode class to the body
  document.body.classList.remove('darkmode');
  //2.update darkmode in the local storange
  localStorage.setItem('darkmode', null);
}

if(darkMode !== 'enabled'){
  enableDarkMode();
  moon.getElementsByClassName.opacity = '1';
}

darkModeToggle.addEventListener('click', () =>{
  darkMode = localStorage.getItem('darkmode');
  if(darkMode !== 'enabled'){
    enableDarkMode();
  }else{
    disableDarkMode();
  }
})