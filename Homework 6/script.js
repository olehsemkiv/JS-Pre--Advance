let firstNameReg = /^[a-zA-Z]{1,20}$/;
let lastNameReg = /^[a-zA-Z]{1,20}$/;
let emailReg = /^\w+@\w+\.\w+$/;
let passReg = /^\w{8,15}$/
let inputFname = document.querySelector('.input-text-fname');
let inputLname = document.querySelector('.input-text-lname');
let inputEmail = document.querySelector('.input-text-email');
let inputPass = document.querySelector('.input-text-pass');
let sing_in_email = document.querySelector('.sing_in_email');
let sing_in_pass = document.querySelector('.sing_in_pass');
let profile_name = document.querySelector('.profile_name');
let profile_email = document.querySelector('.profile_email');
let singBtn = document.querySelector('.btn_sing_up');
let singInBtn = document.querySelector('.btn_sing_in');
let windowM = document.querySelector('.confirm_window');
let sing_in_now = document.querySelector('.sing_in_now');
let sing_up_now = document.querySelector('.sing_up_now');

let users = [];
// Функція для поля FirstName
document.querySelector('.input-text-fname').addEventListener('input', () => {
    let tetsFname = firstNameReg.test(inputFname.value)
    if (tetsFname) {
        inputFname.style.outline = '3px solid green';
        document.querySelector('.error_window_fname').style.display = 'none';
        document.querySelector('.check_fname').style.display = 'block';
        document.querySelector('.uncheck_fname').style.display = 'none';
    } else {
        inputFname.style.outline = '3px solid red';
        document.querySelector('.error_window_fname').style.display = 'flex';
        document.querySelector('.check_fname').style.display = 'none';
        document.querySelector('.uncheck_fname').style.display = 'block';
    }
})

// Функція для поля Last Name
document.querySelector('.input-text-lname').addEventListener('input', () => {
    let tetsLname = lastNameReg.test(inputLname.value)
    if (tetsLname) {
        inputLname.style.outline = '3px solid green';
        document.querySelector('.error_window_lname').style.display = 'none';
        document.querySelector('.check_lname').style.display = 'block';
        document.querySelector('.uncheck_lname').style.display = 'none';
    } else {
        inputLname.style.outline = '3px solid red';
        document.querySelector('.error_window_lname').style.display = 'flex';
        document.querySelector('.check_lname').style.display = 'none';
        document.querySelector('.uncheck_lname').style.display = 'block';
    }
})

// Функція для поля email
document.querySelector('.input-text-email').addEventListener('input', () => {
    let tetsEmail = emailReg.test(inputEmail.value)
    if (tetsEmail) {
        inputEmail.style.outline = '3px solid green';
        document.querySelector('.error_window_email').style.display = 'none';
        document.querySelector('.check_email').style.display = 'block';
        document.querySelector('.uncheck_email').style.display = 'none';
    } else {
        inputEmail.style.outline = '3px solid red';
        document.querySelector('.error_window_email').style.display = 'flex';
        document.querySelector('.check_email').style.display = 'none';
        document.querySelector('.uncheck_email').style.display = 'block';
    }
})

// Функція для поля Password
document.querySelector('.input-text-pass').addEventListener('input', () => {
    let tetsPass = passReg.test(inputPass.value)
    if (tetsPass) {
        inputPass.style.outline = '3px solid green';
        document.querySelector('.error_window_pass').style.display = 'none';
        document.querySelector('.check_pass').style.display = 'block';
        document.querySelector('.uncheck_pass').style.display = 'none';
    } else {
        inputPass.style.outline = '3px solid red';
        document.querySelector('.error_window_pass').style.display = 'flex';
        document.querySelector('.check_pass').style.display = 'none';
        document.querySelector('.uncheck_pass').style.display = 'block';
    }
})

document.querySelector('.check_box').addEventListener('click', () => {
    if (firstNameReg.test(inputFname.value) == true && lastNameReg.test(inputLname.value) == true && emailReg.test(inputEmail.value) == true && passReg.test(inputPass.value) == true) {
        singBtn.disabled = false;
    }
})

singBtn.addEventListener('click', () => {
    let firstName = inputFname.value;
    let lastName = inputLname.value;
    let email = inputEmail.value;
    let password = inputPass.value;
    let newProf = {
        fName: firstName,
        lastName: lastName,
        email: email,
        password: password
    }
    if (localStorage.length > 0 && localStorage.getItem('users')) {
        users = JSON.parse(localStorage.getItem('users'))
    }
    if (!users.some(elem => elem.email === newProf.email.toLowerCase())) {
        users.push(newProf);
        inputFname.value = '';
        inputFname.style.outline = '1px solid gray'
        inputLname.value = '';
        inputLname.style.outline = '1px solid gray'
        inputEmail.value = '';
        inputEmail.style.outline = '1px solid gray'
        inputPass.value = '';
        inputPass.style.outline = '1px solid gray'
        singBtn.disabled = true;
        document.querySelector('.check_input').checked = false;
        document.querySelector('.check_pass').style.display = 'none';
        document.querySelector('.check_email').style.display = 'none';
        document.querySelector('.check_fname').style.display = 'none';
        document.querySelector('.check_lname').style.display = 'none';
        document.querySelector('.error_dublicat_email').style.display = 'none';
    } else {
        document.querySelector('.error_dublicat_email').style.display = 'flex';
    }
    console.log(newProf.email);

    localStorage.setItem('users', JSON.stringify(users));
})

document.querySelector('.star_btn').addEventListener('click', () => {
    windowM.style.display = 'none';
    inputFname.value = '';
    inputFname.style.outline = '1px solid gray'
    inputLname.value = '';
    inputLname.style.outline = '1px solid gray'
    inputEmail.value = '';
    inputEmail.style.outline = '1px solid gray'
    inputPass.value = '';
    inputPass.style.outline = '1px solid gray'
    singBtn.disabled = true;
    document.querySelector('.check_input').checked = false;
    document.querySelector('.check_pass').style.display = 'none';
    document.querySelector('.check_email').style.display = 'none';
    document.querySelector('.check_fname').style.display = 'none';
    document.querySelector('.check_lname').style.display = 'none';
    profile_name.innerHTML = '';
    profile_email.innerHTML = '';
    sing_in_email.value = ''
    sing_in_pass.value = ''
    document.querySelector('.error_sing_in').style.display = 'none';
    document.querySelector('.error_dublicat_email').style.display = 'none';
})

document.querySelector('.container').addEventListener('click', () => {
    if (event.target.classList == 'sing_in_now') {
        document.querySelector('.sing_in_form').classList.add('active');
        document.querySelector('.sing_up_form').classList.remove('active');
    } else if (event.target.classList == 'sing_up_now') {
        document.querySelector('.sing_up_form').classList.add('active');
        document.querySelector('.sing_in_form').classList.remove('active');
    }
})

singInBtn.addEventListener('click', () => {
    let newArr = JSON.parse(localStorage.getItem('users'));
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].email == sing_in_email.value && newArr[i].password == sing_in_pass.value) {
            console.log('not bad');
            profile_name.innerHTML += newArr[i].fName + ` ` + newArr[i].lastName;
            profile_email.innerHTML = newArr[i].email;
            windowM.style.display = 'block';
            break
        } else {
            document.querySelector('.error_sing_in').style.display = 'flex';
        }
    }
})