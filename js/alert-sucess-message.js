function showSucessAlertFindSearchEmailMessage(alert1, input1, input2, input3, input4) {
    let param1 = document.getElementById(`${alert1}`);
    let param2 = document.getElementById(`${input1}`);
    let param3 = document.getElementById(`${input2}`);
    let param4 = document.getElementById(`${input3}`);
    let param5 = document.getElementById(`${input4}`);
    param1.classList.remove('hidden');
    param2.classList.remove('input-error');
    param3.classList.remove('input-error');
    param4.classList.remove('input-error');
    param5.classList.remove('input-error');
    param1.classList.add('alert','alert-sucess', 'alert-show');             
    param1.textContent = 'Usuários encontrados pelo valor preenchido no campo E-mail!';
    setTimeout(function(){ 
        let element1 = document.getElementById(`alert-message`);
        element1.classList.add('hidden');}, 5000);
};

function showSucessAlertFindSearchFirstnameMessage(alert1, input1, input2, input3, input4) {
    let param1 = document.getElementById(`${alert1}`);
    let param2 = document.getElementById(`${input1}`);
    let param3 = document.getElementById(`${input2}`);
    let param4 = document.getElementById(`${input3}`);
    let param5 = document.getElementById(`${input4}`);
    param1.classList.remove('hidden');
    param2.classList.remove('input-error');
    param3.classList.remove('input-error');
    param4.classList.remove('input-error');
    param5.classList.remove('input-error');
    param1.classList.add('alert','alert-sucess', 'alert-show');             
    param1.textContent = 'Usuários encontrados pelo valor preenchido no campo Nome!';
    setTimeout(function(){ 
        let element1 = document.getElementById(`alert-message`);
        element1.classList.add('hidden');}, 5000);
};

function showSucessAlertFindSearchSurnameMessage(alert1, input1, input2, input3, input4) {
    let param1 = document.getElementById(`${alert1}`);
    let param2 = document.getElementById(`${input1}`);
    let param3 = document.getElementById(`${input2}`);
    let param4 = document.getElementById(`${input3}`);
    let param5 = document.getElementById(`${input4}`);
    param1.classList.remove('hidden');
    param2.classList.remove('input-error');
    param3.classList.remove('input-error');
    param4.classList.remove('input-error');
    param5.classList.remove('input-error');
    param1.classList.add('alert','alert-sucess', 'alert-show');             
    param1.textContent = 'Usuários encontrados pelo valor preenchido no campo Sobrenome!';
    setTimeout(function(){ 
        let element1 = document.getElementById(`alert-message`);
        element1.classList.add('hidden');}, 5000);
};

function showSucessAlertFindSearchCodeMessage(alert1, input1, input2, input3, input4) {
    let param1 = document.getElementById(`${alert1}`);
    let param2 = document.getElementById(`${input1}`);
    let param3 = document.getElementById(`${input2}`);
    let param4 = document.getElementById(`${input3}`);
    let param5 = document.getElementById(`${input4}`);
    param1.classList.remove('hidden');
    param2.classList.remove('input-error');
    param3.classList.remove('input-error');
    param4.classList.remove('input-error');
    param5.classList.remove('input-error');
    param1.classList.add('alert','alert-sucess', 'alert-show');             
    param1.textContent = 'Usuários encontrados pelo valor preenchido no campo Código!';
    setTimeout(function(){ 
        let element1 = document.getElementById(`alert-message`);
        element1.classList.add('hidden');}, 5000);
};