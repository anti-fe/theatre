// BLOCKS
const body = document.querySelector('body');
const modalBlockBg = document.querySelector('.bg-modal-block');
const modalBlockLog = document.querySelector('.modal-block');
const modalBlockReg = document.querySelector('.modal-block-reg');
const userBlock = document.querySelector('.contact-inf__user');

// INPUTS
const regInpLog = document.getElementById('reg-Inp-Log');
const regInpPass = document.getElementById('reg-Inp-Pass');
const regInpPass2 = document.getElementById('reg-Inp-Pass2');
const logInpLog = document.getElementById('log-Inp-Log');
const logInpPass = document.getElementById('log-Inp-Pass');

// BTNS
const loginBtn = document.querySelector('.login__btn');
const loginInBtn = document.querySelector('.btns__logBtn');
const regBtn = document.querySelector('.btns__regBtn');
const regBtn2 = document.querySelector('.btns__regBtn2');
const closeBtn = document.querySelector('.header__close');
const closeBtn2 = document.querySelector('.header__close2');
const profileBtn = document.querySelector('.login__btn');
const exitBtn = document.querySelector('.login__exitBtn');



if (localStorage.getItem('login')) {
    profileBtn.style.display = 'none';
    exitBtn.style.display = 'block';
    userBlock.textContent = logInpLog.value;
}

loginBtn.addEventListener('click', ()=> {
    modalBlockBg.style.display = 'flex';
    body.style.overflowY = 'hidden';
})

closeBtn.addEventListener('click', ()=> {
    modalBlockBg.style.display = 'none';
    body.style.overflowY = 'auto';
    logInpLog.value = '';
    logInpPass.value = '';
    logInpLog.style.border = '1px solid #616161';
    logInpPass.style.border = '1px solid #616161';
})

closeBtn2.addEventListener('click', ()=> {
    regInpPass.value = '';
    regInpPass2.value = '';
    regInpLog.value = '';
    regInpLog.placeholder = 'Логин';
    regInpPass.placeholder = 'Пароль';
    regInpPass2.placeholder = 'Подтвердите пароль';
    regInpLog.style.border = '1px solid #616161';
    regInpPass.style.border = '1px solid #616161';
    regInpPass2.style.border = '1px solid #616161';
    modalBlockReg.style.display = 'none';
    modalBlockLog.style.display = 'flex';
    
})

regBtn.addEventListener('click', ()=> {
    modalBlockLog.style.display = 'none';
    modalBlockReg.style.display = 'flex';
})

// REG
regBtn2.addEventListener('click', ()=> {
    if (regInpLog.value.length <= 3) {
        regInpLog.style.border = '2px solid rgb(228, 63, 63)';
        regInpLog.placeholder = 'Меньше 3 символов!';
        regInpLog.value = '';
    }else {
        regInpLog.style.border = '2px solid rgb(94, 228, 94)';
        if (regInpPass.value.length <= 3) {
            regInpPass.style.border = '2px solid rgb(228, 63, 63)';
            regInpPass.placeholder = 'Меньше 3 символов!';
            regInpPass.value = '';
            regInpPass2.value = '';
        } else {
            regInpPass.style.border = '2px solid rgb(94, 228, 94)';
            if (regInpPass2.value !== regInpPass.value) {
                regInpPass2.style.border = '2px solid rgb(228, 63, 63)';
                regInpPass2.value = '';
            } else {
                localStorage.setItem('login', regInpLog.value);
                localStorage.setItem('password', regInpPass.value);
                regInpPass2.style.border = '2px solid rgb(94, 228, 94)';
                modalBlockReg.style.display = 'none';
                modalBlockLog.style.display = 'flex';
                regInpLog.value = '';
                regInpPass.value = '';
                regInpPass2.value = '';
                regInpLog.style.border = '1px solid #616161';
                regInpPass.style.border = '1px solid #616161';
                regInpPass2.style.border = '1px solid #616161';
            }
        }
    }
})
// /REG

// LOG
loginInBtn.addEventListener('click', ()=> {
    if (logInpLog.value !== localStorage.getItem('login') || logInpPass.value !== localStorage.getItem('password')){
        if (logInpLog.value !== localStorage.getItem('login')) {
            logInpLog.style.border = '2px solid rgb(228, 63, 63)';
        } else if(logInpPass.value !== localStorage.getItem('password')){
            logInpPass.style.border = '2px solid rgb(228, 63, 63)';
        }
    } else {
        logInpLog.style.border = '2px solid rgb(94, 228, 94)';
        logInpPass.style.border = '2px solid rgb(94, 228, 94)';
        modalBlockBg.style.display = 'none';
        body.style.overflowY = 'auto';
        profileBtn.style.display = 'none';
        exitBtn.style.display = 'block';
        userBlock.textContent = logInpLog.value;
        }
    })
// /LOG

exitBtn.addEventListener('click', ()=> {
    profileBtn.style.display = 'block';
    exitBtn.style.display = 'none';
    logInpPass.style.border = '1px solid #616161';
    logInpPass.value = '';
    userBlock.textContent = '';
    localStorage.clear();
})






