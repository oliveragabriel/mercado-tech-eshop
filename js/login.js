//função para achar conta (pelo email) em lista de contas
function FindUserData(accountList, email){

    let objFound = accountList.find(obj => obj.email == email);

return objFound;
}

//verifica login
function Login(){
    let accountList = JSON.parse(localStorage.getItem("accounts"));
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    let userData = FindUserData(accountList, email.value);
    let alertText = '';
    
    switch(true){
        case (email.value == ''):
            alertText = `Preencha o campo do seu E-mail!`;
            ErrorMessage('email', alertText);
            break;
        
        case (password.value == ''):
            alertText = `Preencha o campo da sua Senha!`;
            ErrorMessage('password', alertText);
            break;
    
        case (userData == undefined):
            alertText = `O e-mail "${email.value}" não está cadastrado!`;
            ErrorMessage('email', alertText);
            break;

        case (password.value != userData.password):
            alertText = `Senha incorreta!`;
            ErrorMessage('password', alertText);
            break;
        
        default:
            alertText = `Login efetuado com sucesso!`;
            LoginConfirmed(alertText);
    }
}

//reutilizei as funções de erro do Gabriel
function ErrorMessage(inputError, alertText) {
    let param1 = document.getElementById(`email`);
    let param2 = document.getElementById(`password`);
    let param3 = document.getElementById(`${inputError}`);
    let param4 = document.getElementById('alert-message');
    
    param1.classList.remove('input-error'); 
    param2.classList.remove('input-error');   
     
    
    param3.classList.add('input-error');
    
    param4.classList.remove('hidden');
    param4.classList.remove('alert-sucess');
    param4.classList.add('alert','alert-error', 'alert-show');
    param4.textContent = `${alertText}`;

    setTimeout(function(){ 
        let element = document.getElementById(`alert-message`);
        element.classList.add('hidden'); }, 5000); 
};

function LoginConfirmed(alertText) {
    let param1 = document.getElementById(`email`);
    let param2 = document.getElementById(`password`);
    let param4 = document.getElementById('alert-message');
    
    param1.classList.remove('input-error'); 
    param2.classList.remove('input-error');   
    
    param4.classList.remove('hidden');
    param4.classList.remove('alert-sucess');
    param4.classList.add('alert','alert-sucess', 'alert-show');
    param4.textContent = `${alertText}`;

    setTimeout(function(){ 
        let element = document.getElementById(`alert-message`);
        element.classList.add('hidden'); 
        window.location.href = 'main-page.html'
        }, 5000);
};