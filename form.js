const submit = document.getElementById('submit');
const name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const age = document.getElementById('age');
const gender = document.getElementById('gender')


submit.addEventListener('click', ()=>{

    if(name.value == '' || email.value == '' || number.value == '' || age.value == ''){
        alert('Fill all details')
    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('number', number.value);
        localStorage.setItem('age', age.value);
        localStorage.setItem('gender', gender.value);
    
        alert('Appointment Scheduled Scuccessfully')
    }


})

