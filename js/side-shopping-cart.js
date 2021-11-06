/*
LISTA DE PRODUTOS DENTRO DO CARRINHO DE COMPRA
*/
let myProductsBeingPurchased = [
    {
        code: 222,
        name: 'Maçã',
        quantity: 3,
        value: 100,
    },
    {
        code: 111,
        name: 'Uva',
        quantity: 1,
        value: 250,
    },
    {
        code: 111,
        name: 'Açaí',
        quantity: 1,
        value: 350,
    }
];

/*
FUNÇÃO DE CONVERSÃO DA STRING EM MOEDA
*/
let realBR = Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
});

/*
EXECUTA AS FUNÇÕES ESPECÍFICADAS ABAIXO AO ABRIR A TELA
*/
chargeLinesOnPurchaseTable(myProductsBeingPurchased);
calculatesTotalPurchaseAmount(myProductsBeingPurchased);
countTheNumberOfProductsInTheShoppingCart(myProductsBeingPurchased);


/*
FUNÇÃO PARA CARREGAR NA TABELA AS LINHAS COM O CONTEÚDO DE CADA PRODUTO
*/
function chargeLinesOnPurchaseTable(myProductsBeingPurchased) {
    myProductsBeingPurchased.forEach(function (product) {
        let productContainer = document.createElement('div');
        let productLine = document.createElement('div');
        let codeTd = document.createElement('div');
        let nameTd = document.createElement('div');
        let valueTd = document.createElement('div');
        codeTd.textContent = product.code;
        nameTd.textContent = product.name;
        valueTd.textContent = realBR.format(product.value);
        productLine.appendChild(codeTd);
        productLine.appendChild(nameTd);
        productLine.appendChild(valueTd);
        let createLine = document.querySelector('#my-shopping-products-table');
        createLine.classList.remove('hidden');
        productContainer.classList.add('container-with-product-data-inside-table')
        
        createLine.appendChild(productContainer);
        productContainer.appendChild(productLine);

        productLine.classList.add('tr-product', 'table-line-from-shopping-cart');
        nameTd.classList.add('tbody-td');
        valueTd.classList.add('tbody-td','tbody-td-shopping-cart-value');
        codeTd.classList.add('tbody-td', 'shopping-cart-product-code', 'hidden');
        
        let deleteTd = document.createElement('div')
        deleteTd.innerHTML = `
        <button class="tbody-td-shopping-cart-delete" onclick="removeProductFromShoppingCart(myProductsBeingPurchased)">
            <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
        <button class="tbody-td-shopping-cart-more-less" onclick="changeQuantityOfProductBeingPurchasedForMore(myProductsBeingPurchased)">
            <i class="fa fa-plus" aria-hidden="true"></i>
        </button>
        <p class="count-shopping-cart-product-quantity">${product.quantity}</p>
        <button class="tbody-td-shopping-cart-more-less" onclick="changeQuantityOfProductBeingPurchasedForLess(myProductsBeingPurchased)">
            <i class="fa fa-minus" aria-hidden="true"></i>
        </button>
        `;
        deleteTd.classList.add('table-line-from-shopping-cart','row', 'tbody-td-shopping-cart-delete', 'align-center');
        productContainer.appendChild(deleteTd);
    });  
};

/*
CALCULANDO O VALOR TOTAL DA COMPRA
1. Declara as variáveis que serão utilizadas na função, inicializando-as zeradas;
2. Percorre o array e passa o elemento dentro da função;
3. Calcula o valor vezes a quantidade atribuída ao objeto e armazena o resultado;
4. Fora do loop coleta o resultado e soma ele aos demais resultados obtidos;
5. Coleta o elemento que contém a identificação especificada;
6. Altera o conteúdo de texto do elemento já passando a função de conversão para moeda;
*/
function calculatesTotalPurchaseAmount(myProductsBeingPurchased) {
    let total = 0;
    let subtotal = 0;
    let sumOfValue = 0;
    myProductsBeingPurchased.forEach(function (product) {
        subtotal = product.value * product.quantity;
        sumOfValue = sumOfValue + subtotal;
    });
    total = total + sumOfValue;
    let totalPurchaseAmount = document.getElementById('shopping-cart-total-price');
    totalPurchaseAmount.textContent = realBR.format(total);
};


/*
REMOVENDO DO ARRAY E DA TABELA O ELEMENTO DELETADO ATRAVÉS DO BOTÃO
1. Coleta os elementos que contém a classe especificada e retorna um array;
2. Encontra o elemento do array que foi acionado pelo botão;
3. Percorre o array e passa o elemento e o index dentro da função;
4. Executa função para deletar o objeto que entrou dentro da condição;
5. Limpa os dados apresentados na tabela;
6. Carrega novamente os dados atualizados na tabela;
7. Recalcula o valor total da compra e apresenta novo resultado;
*/
function removeProductFromShoppingCart(myProductsBeingPurchased) {
    let containerWithProductDataInsideTheTable = document.querySelectorAll('.container-with-product-data-inside-table');
    containerWithProductDataInsideTheTable.forEach( function (product, i) {
        product.addEventListener("click", function () {
            myProductsBeingPurchased.splice(i,1);
            removeLinesFromPurchaseTable()
            chargeLinesOnPurchaseTable(myProductsBeingPurchased);
            calculatesTotalPurchaseAmount(myProductsBeingPurchased);
            countTheNumberOfProductsInTheShoppingCart(myProductsBeingPurchased);
        });
    });
}


/*
REMOVENDO AS LINHAS DE PRODUTO EXISTENTES NA TABELA
1. Coleta os elementos que contém a classe especificada e retorna um array;
2. Percorre o array e passa o elemento dentro da função;
3. Coleta o elemento que contém a identificação especificada;
4. Executa função para remover cada um dos filhos (com a classe) do elemento supracitado;
*/
function removeLinesFromPurchaseTable() {
        tableLineFromShoppingCart = document.querySelectorAll('.container-with-product-data-inside-table');
        tableLineFromShoppingCart.forEach(function (line) {
            shoppingCartTableElement = document.getElementById('my-shopping-products-table');
            shoppingCartTableElement.removeChild(line);
        });
};


function changeQuantityOfProductBeingPurchasedForMore(myProductsBeingPurchased) {
    let containerWithProductDataInsideTheTable = document.querySelectorAll('.container-with-product-data-inside-table');
    containerWithProductDataInsideTheTable.forEach( function (product, i) {
        product.addEventListener("click", function () {
            currentQuantityBeingPurchased = myProductsBeingPurchased[i].quantity
            currentQuantityBeingPurchased= currentQuantityBeingPurchased + 1;
            myProductsBeingPurchased[i].quantity = currentQuantityBeingPurchased;
            removeLinesFromPurchaseTable()
            chargeLinesOnPurchaseTable(myProductsBeingPurchased);
            calculatesTotalPurchaseAmount(myProductsBeingPurchased);
            countTheNumberOfProductsInTheShoppingCart(myProductsBeingPurchased)
        });
    });
};
function changeQuantityOfProductBeingPurchasedForLess(myProductsBeingPurchased) {
    let containerWithProductDataInsideTheTable = document.querySelectorAll('.container-with-product-data-inside-table');
    containerWithProductDataInsideTheTable.forEach( function (product, i) {
        product.addEventListener("click", function () {
            currentQuantityBeingPurchased = myProductsBeingPurchased[i].quantity
            currentQuantityBeingPurchased= currentQuantityBeingPurchased - 1;
            myProductsBeingPurchased[i].quantity = currentQuantityBeingPurchased;
            if (myProductsBeingPurchased[i].quantity < 1) {
                myProductsBeingPurchased.splice(i,1);
            }
            removeLinesFromPurchaseTable()
            chargeLinesOnPurchaseTable(myProductsBeingPurchased);
            calculatesTotalPurchaseAmount(myProductsBeingPurchased);
            countTheNumberOfProductsInTheShoppingCart(myProductsBeingPurchased)
        });
    });
};

function countTheNumberOfProductsInTheShoppingCart(myProductsBeingPurchased) {
    if (myProductsBeingPurchased.length > 0) {
        let productCounterContainerInShoppingCart = document.querySelector('.product-counter-container-in-shopping-cart');
        productCounterContainerInShoppingCart.classList.remove('hidden');
        let numberOfProductCounterInTheShoppingCart = document.querySelector('.number-of-product-counter-in-shopping-cart');
        numberOfProductCounterInTheShoppingCart.textContent = myProductsBeingPurchased.length;
    } else {
        productCounterContainerInShoppingCart.classList.add('hidden');
    }
}