let objectBeingEdited;
let productList = JSON.parse(localStorage.getItem('products'))
let allProd = productList;

addAllProductOnTable(allProd);

// Abaixo são as funções pegar do Local Storage um array de objetos e validar os campos preenchidos.

function searchProductToEdit() {
    productList = JSON.parse(localStorage.getItem('products'))

    let editCodeSearch = document.getElementById('search-product-code-to-edit');
    productList.forEach(function (product, i) {
        switch (true) {
            case (product.code == editCodeSearch.value):
                alertText = `Produto ${product.name} encontrado com sucesso!`;
                sucessfulSearchedProductToEdit(alertText);
                showProductPageToEdit();
                showProductData(product);
                break;
            case (editCodeSearch.value == ''):
                alertText = `O campo Código é obrigatório e deve estar preenchido!`;
                nullInputErrorOnSearchProductToEdit(alertText);
                break;
            default:
                alertText = `Nenhum usuário foi encontrado para os dados informados!`;
                notFindErrorOnSearchProductToEdit(alertText);
                break;
        };
        i++;
    });
};

// Abaixo são as funções para mostrar os dados de um produto pesquisado.

function showProductData(prodData) {
    let productCode = document.getElementById('product-code');
    let productName = document.getElementById('product-name');
    let productDescription = document.getElementById('product-description');
    let productStockQuantity = document.getElementById('product-stock-quantity');
    let productValue = document.getElementById('product-value');

    productCode.value = prodData.code;
    productName.value = prodData.name;
    productDescription.value = prodData.description;
    productStockQuantity.value = prodData.quantity;
    productValue.value = Number(prodData.value.toFixed(2));
    objectBeingEdited = prodData

    return objectBeingEdited
};

// Abaixo são as funções para editar ou deletar um produto.

function editProductData(objectBeingEdited) {
    let productName = document.getElementById('product-name');
    let productStockQuantity = document.getElementById('product-stock-quantity');
    let productValue = document.getElementById('product-value');
    let productDescription = document.getElementById('product-description');

    switch (true) {
        case (productName.value == ''):
            alertText = `O campo Nome é obrigatório e deve estar preenchido!`
            inputError = `product-name`
            nullInputErrorOnEditProduct(alertText, inputError)
            break;
        case (productStockQuantity.value == ''):
            alertText = `O campo Quantidade é obrigatório e deve estar preenchido!`
            inputError = `product-stock-quantity`
            nullInputErrorOnEditProduct(alertText, inputError)
            break;
        case (productValue.value == ''):
            alertText = `O campo Valor é obrigatório e deve estar preenchido!`
            inputError = `product-value`
            nullInputErrorOnEditProduct(alertText, inputError)
            break;
        case (productDescription.value == ''):
            alertText = `O campo Descrição é obrigatório e deve estar preenchido!`
            inputError = `product-description`
            nullInputErrorOnEditProduct(alertText, inputError)
            break;
        default:
            objectBeingEdited.name = productName.value;
            objectBeingEdited.quantity = Number(productStockQuantity.value);
            objectBeingEdited.value = Number(productValue.value);
            objectBeingEdited.description = productDescription.value;
            alertText = `Produto ${productName.value} alterado com sucesso!`;
            sucessfulEditedProduct(alertText);
        
            localStorage.setItem("products", JSON.stringify(productList));
            break;
    }
};

function removeProductDataInEdition(objectBeingEdited) {
    let productName = document.getElementById('product-name');
    productList.forEach(function (product, i) {
        if (product == objectBeingEdited) {
            productList.splice(i, 1);
            alertText = `Conta de ${productName.value} excluída com sucesso!`;
            sucessfulEditedProduct(alertText);
            localStorage.setItem("products", JSON.stringify(productList));
        };
    });
};

// Abaixo são as funções para apresentar alertas e contornar os campos que causam erros nas validações.

function nullInputErrorOnSearchProductToEdit(alertText) {
    let param1 = document.getElementById(`search-product-code-to-edit`);
    let param3 = document.getElementById(`alert-message`);
    
    param1.classList.remove('input-error');
    
    param1.classList.add('input-error');
    
    param3.classList.remove('hidden');
    param3.classList.remove('alert-sucess');
    param3.classList.add('alert','alert-error', 'alert-show');
    param3.textContent = `${alertText}`;

    setTimeout(function(){ 
        let element = document.getElementById(`alert-message`);
        element.classList.add('hidden'); }, 5000); 
};

function notFindErrorOnSearchProductToEdit(alertText) {
    let param1 = document.getElementById(`search-product-code-to-edit`);
    let param3 = document.getElementById(`alert-message`);
    
    param1.classList.remove('input-error');
    
    param3.classList.remove('hidden');
    param3.classList.remove('alert-sucess');
    param3.classList.add('alert','alert-notify', 'alert-show');
    param3.textContent = `${alertText}`;

    setTimeout(function(){ 
        let element = document.getElementById(`alert-message`);
        element.classList.add('hidden'); }, 5000); 
};

function nullInputErrorOnEditProduct(alertText, inputError) {
    let param1 = document.getElementById(`product-name`);
    let param2 = document.getElementById(`product-description`);
    let param3 = document.getElementById(`product-stock-quantity`);
    let param4 = document.getElementById(`product-value`);
    let param6 = document.getElementById(`${inputError}`);
    let param7 = document.getElementById(`alert-message`);
    
    param1.classList.remove('input-error');
    param2.classList.remove('input-error'); 
    param3.classList.remove('input-error');
    param4.classList.remove('input-error');
    param6.classList.remove('input-error'); 
    
    param6.classList.add('input-error');
    
    param7.classList.remove('hidden');
    param7.classList.remove('alert-sucess');
    param7.classList.add('alert','alert-error', 'alert-show');
    param7.textContent = `${alertText}`;

    setTimeout(function(){ 
        let element = document.getElementById(`alert-message`);
        element.classList.add('hidden'); }, 5000); 
};

// Abaixo é a função para apresentar a mensagem de sucesso ao encontrar, alterar ou excluir um Produto.

function sucessfulSearchedProductToEdit(alertText) {
    let param1 = document.getElementById(`search-product-code-to-edit`);
    let param2 = document.getElementById(`alert-message`);
    
    param1.classList.remove('input-error'); 
    
    param2.classList.remove('hidden');
    param2.classList.remove('alert-error');
    param2.classList.remove('alert-notify');
    param2.classList.add('alert','alert-sucess', 'alert-show');
    param2.textContent = `${alertText}`;

    setTimeout(function(){ 
        let element = document.getElementById(`alert-message`);
        element.classList.add('hidden'); }, 5000); 
};

function sucessfulEditedProduct(alertText) {
    let param1 = document.getElementById(`product-name`);
    let param2 = document.getElementById(`product-description`);
    let param3 = document.getElementById(`product-stock-quantity`);
    let param4 = document.getElementById(`product-value`);
    let param6 = document.getElementById(`alert-message`);

    param1.classList.remove('input-error');
    param2.classList.remove('input-error'); 
    param3.classList.remove('input-error');
    param4.classList.remove('input-error');
    
    param6.classList.remove('hidden');
    param6.classList.remove('alert-error');
    param6.classList.remove('alert-notify');
    param6.classList.add('alert','alert-sucess', 'alert-show');
    param6.textContent = `${alertText}`;

    setTimeout(function(){ 
        let element = document.getElementById(`alert-message`);
        element.classList.add('hidden'); }, 5000); 
};

function addAllProductOnTable(allProd) {
    for (let i = 0; i < allProd.length; i++) {
        let productLine = document.createElement('div');
        let idTd = document.createElement('div');
        let nameTd = document.createElement('div');
        let descriptionTd = document.createElement('div');
        let quantityTd = document.createElement('div');
        let valueTd = document.createElement('div');
        idTd.textContent = allProd[i].code;
        nameTd.textContent = allProd[i].name;
        descriptionTd.textContent = allProd[i].description;
        quantityTd.textContent = allProd[i].quantity;
        valueTd.textContent = `R$ ${allProd[i].value.toFixed(2)}`;
        productLine.appendChild(idTd);
        productLine.appendChild(nameTd);
        productLine.appendChild(descriptionTd);
        productLine.appendChild(quantityTd);
        productLine.appendChild(valueTd);
        let createLine = document.querySelector('#all-registered-product-table');
        createLine.classList.remove('hidden');
        createLine.appendChild(productLine);
        productLine.classList.add('tr-product');
        idTd.classList.add('tbody-td','tbody-td-code');
        nameTd.classList.add('tbody-td','tbody-td-name');
        descriptionTd.classList.add('tbody-td','tbody-td-description');
        quantityTd.classList.add('tbody-td','tbody-td-quantity');
        valueTd.classList.add('tbody-td','tbody-td-value');
    };
};