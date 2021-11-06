let accountList = JSON.parse(localStorage.getItem('accounts'))
let allAcc = accountList;

addAllAccountOnTable(allAcc);

let researchAccountCode = document.getElementById('research-account-code');
let researchAccountEmail = document.getElementById('research-account-email');
let researchAccountName = document.getElementById('research-account-name');

researchAccountCode.addEventListener('input', function () {
    let trAccount = document.querySelectorAll('.tr-account');
    if (researchAccountCode.value.length > 0) {
        for (let index = 0; index < trAccount.length; index++) { 
            let account = trAccount[index];
            let idTd = document.querySelectorAll('.tbody-td-code');
            let code = idTd[index];
            let codeText = code.textContent;
            if (codeText.includes(researchAccountCode.value)) {
                account.classList.remove('hidden-table');
            } else {
                account.classList.add('hidden-table');
            }   
        }
    } else {
        for (let index = 0; index < trAccount.length; index++) { 
            let account = trAccount[index];
            account.classList.remove('hidden-table');   
        }
    } 
})

researchAccountEmail.addEventListener('input', function () {
    let trAccount = document.querySelectorAll('.tr-account');
    if (researchAccountEmail.value.length > 0) {
        for (let index = 0; index < trAccount.length; index++) { 
            let account = trAccount[index];
            let emailTd = document.querySelectorAll('.tbody-td-email');
            let email = emailTd[index];
            let emailText = email.textContent;
            if (emailText.includes(researchAccountEmail.value)) {
                account.classList.remove('hidden-table');
            } else {
                account.classList.add('hidden-table');
            }   
        }
    } else {
        for (let index = 0; index < trAccount.length; index++) { 
            let account = trAccount[index];
            account.classList.remove('hidden-table');   
        }
    }
});

researchAccountName.addEventListener('input', function () {
    let trAccount = document.querySelectorAll('.tr-account');
    if (researchAccountName.value.length > 0) {
        for (let index = 0; index < trAccount.length; index++) { 
            let account = trAccount[index];
            let nameTd = document.querySelectorAll('.tbody-td-name');
            let name = nameTd[index];
            let nameText = name.textContent;
            if (nameText.includes(researchAccountName.value)) {
                account.classList.remove('hidden-table');
            } else {
                account.classList.add('hidden-table');
            }   
        }
    } else {
        for (let index = 0; index < trAccount.length; index++) { 
            let account = trAccount[index];
            account.classList.remove('hidden-table');   
        }
    }
})

function addAllAccountOnTable(allAcc) {
    for (let i = 0; i < allAcc.length; i++) {
        let accountLine = document.createElement('div');
        let idTd = document.createElement('div');
        let nameTd = document.createElement('div');
        let emailTd = document.createElement('div');
        let phoneTd = document.createElement('div');
        let passwordTd = document.createElement('div');
        idTd.textContent = allAcc[i].code;
        nameTd.textContent = `${allAcc[i].firstname} ${allAcc[i].surname}`;
        emailTd.textContent = allAcc[i].email;
        phoneTd.textContent = allAcc[i].phone;
        passwordTd.textContent = allAcc[i].password;
        accountLine.appendChild(idTd);
        accountLine.appendChild(nameTd);
        accountLine.appendChild(emailTd);
        accountLine.appendChild(phoneTd);
        accountLine.appendChild(passwordTd);
        let createLine = document.querySelector('#all-registered-account-table');
        createLine.classList.remove('hidden');
        createLine.appendChild(accountLine);
        accountLine.classList.add('tr-account');
        idTd.classList.add('tbody-td','tbody-td-code');
        nameTd.classList.add('tbody-td','tbody-td-name');
        emailTd.classList.add('tbody-td','tbody-td-email');
        phoneTd.classList.add('tbody-td','tbody-td-phone');
        passwordTd.classList.add('tbody-td','tbody-td-password');
    };
};