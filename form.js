const submit = document.getElementById('submit');
const name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const age = document.getElementById('age');
const gender = document.getElementById('gender')


submit.addEventListener('click', ()=>{

    localStorage.setItem('name', name.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('number', number.value);
    localStorage.setItem('age', age.value);
    localStorage.setItem('gender', gender.value);

})

