function removeAccount() {
    let removeEmailSearch = document.getElementById('remove-email');
    let removeCodeSearch = document.getElementById('remove-code');
    alert1 = 'alert-message';
    input1 = 'remove-code';
    input2 = 'remove-email';
    let i = 0;
    accountList.forEach(function () {
        switch (true) {
            case (accountList[i].email == removeEmailSearch.value || accountList[i].code == removeCodeSearch.value):
                addRemovedAccountOnTable(accountList[i])
                fullname = `${accountList[i].firstname} ${accountList[i].surname}`
                accountList.splice(i, 1);
                removeEmailSearch.classList.remove('input-error');
                removeCodeSearch.classList.remove('input-error');
                showSucessAlertRemovedMessage(alert1, fullname);
                break;
            case (removeEmailSearch.value == '' && removeCodeSearch.value == ''):
                setErrorBorderOnNullEditSearchInput(input1, input2);
                showErrorAlertNullEditSearchMessage(alert1);
                break;
            default:
                showErrorAlertNotFindSearchMessage(alert1, input1, input2);
                break;
        };
        i++;
    });
};