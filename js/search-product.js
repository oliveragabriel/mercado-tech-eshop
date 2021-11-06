let productList = JSON.parse(localStorage.getItem('products'))
let allProd = productList;

addAllProductOnTable(allProd);

let researchProductCode = document.getElementById('research-product-code');
let researchProductDescription = document.getElementById('research-product-description');
let researchProductName = document.getElementById('research-product-name');

researchProductCode.addEventListener('input', function () {
    let trProduct = document.querySelectorAll('.tr-product');
    if (researchProductCode.value.length > 0) {
        for (let index = 0; index < trProduct.length; index++) { 
            let product = trProduct[index];
            let idTd = document.querySelectorAll('.tbody-td-code');
            let code = idTd[index];
            let codeText = code.textContent;
            if (codeText.includes(researchProductCode.value)) {
                product.classList.remove('hidden-table');
            } else {
                product.classList.add('hidden-table');
            }   
        }
    } else {
        for (let index = 0; index < trProduct.length; index++) { 
            let product = trProduct[index];
            product.classList.remove('hidden-table');
        }
    } 
})

researchProductDescription.addEventListener('input', function () {
    let trProduct = document.querySelectorAll('.tr-product');
    if (researchProductDescription.value.length > 0) {
        for (let index = 0; index < trProduct.length; index++) { 
            let product = trProduct[index];
            let descriptionTd = document.querySelectorAll('.tbody-td-description');
            let description = descriptionTd[index];
            let descriptionText = description.textContent;
            if (descriptionText.includes(researchProductDescription.value)) {
                product.classList.remove('hidden-table');
            } else {
                product.classList.add('hidden-table');
            }   
        }
    } else {
        for (let index = 0; index < trProduct.length; index++) { 
            let product = trProduct[index];
            product.classList.remove('hidden-table');   
        }
    } 
});

researchProductName.addEventListener('input', function () {
    let trProduct = document.querySelectorAll('.tr-product');
    if (researchProductName.value.length > 0) {
        for (let index = 0; index < trProduct.length; index++) { 
            let product = trProduct[index];
            let nameTd = document.querySelectorAll('.tbody-td-name');
            let name = nameTd[index];
            let nameText = name.textContent;
            if (nameText.includes(researchProductName.value)) {
                product.classList.remove('hidden-table');
            } else {
                product.classList.add('hidden-table');
            }   
        }
    } else {
        for (let index = 0; index < trProduct.length; index++) { 
            let product = trProduct[index];
            product.classList.remove('hidden-table');   
        }
    } 
})

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