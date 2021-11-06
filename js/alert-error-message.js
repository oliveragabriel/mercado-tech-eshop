

function showErrorAlertNullResearchMessage(alert1, input1, input2, input3, input4) {
    let param1 = document.getElementById(`${alert1}`);
    let param2 = document.getElementById(`${input1}`);
    let param3 = document.getElementById(`${input2}`);
    let param4 = document.getElementById(`${input3}`);
    let param5 = document.getElementById(`${input4}`);
    param2.classList.add('input-error');
    param3.classList.add('input-error');
    param4.classList.add('input-error');
    param5.classList.add('input-error');
    param1.classList.add('alert','alert-error', 'alert-show');             
    param1.textContent = `Ao menos um dos campos abaixo deve ser preenchido!`;
    setTimeout(function(){ 
        let element1 = document.getElementById(`alert-message`);
        element1.classList.add('hidden');}, 5000);
};