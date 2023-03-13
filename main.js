let inputEmail = document.getElementById('email');
let button = document.getElementById('button');

button.addEventListener('click', (event) =>{
    event.preventDefault(); //los click se almacenan en el event y el preventdefault es para q no se borre el primer click por defecto
    validateEmail(inputEmail.value);
});  //para q escuche lo q le pase al boton , en este caso un click

//ahora creamos la funcion
function validateEmail(email){
    let expReg = /@/
    console.log(expReg.test(email))
}








//las expresiones regulares nos permiten buscar dentro de un string ciertos valores y de esta manera nosotros podemos validar