/*
    Por enquanto ficou meio quebra-galho: todo o conteudo dentro de strings passadas ao innerHTML dos containers
    é chato de editar mas está concentrado num lugar só o que facilita alteracoes posteriores
*/

document.getElementById('hdr').innerHTML = `
    <div class="row header-img-container">
        <button class="icon" id="menu-button" type="button" title="Menu" onclick="sideGeneralMenu(); return false"><i class="fa fa-bars menu-icon" aria-hidden="true"></i></button>
        <img src="img/logo-header.png" alt="logo">
    </div>
    <div class="header-button-container">
        <div class="product-counter-and-shopping-cart-container" onclick="sideMyShoppingCart(); return false">
            <div class="product-counter-container-in-shopping-cart hidden">
                <p class="number-of-product-counter-in-shopping-cart"></p>
            </div>
            <button class="icon" id="my-shopping-cart" type="button" title="Compras"><i class="fa fa-shopping-cart shopping-cart-icon" aria-hidden="true"></i></button>
        </div>
        <button class="icon" id="my-account-data-button" type="button" title="Meus Dados" onclick="myAccountData(); return false"><i class="fa fa-user" aria-hidden="true"></i></button>
        <button class="icon" id="end-section-button" type="button" title="Sair" onclick=""><i class="fa fa-times-circle" aria-hidden="true"></i></button>
    </div>
`;

document.getElementById('general-menu-bar').innerHTML = `
    <button id="menu-registration-account" class="menu-button menu-header" type="button" onclick="accountMenuOptions(); return false">contas<i class="fa fa-chevron-circle-up up-down-icon1" aria-hidden="true"></i></button>
    <a id="menu-registration-search-account" href="search-account.html" class="link-text"><button class="menu-button hidden" type="button">buscar</button></a>
    <a id="menu-registration-new-account" href="register-account.html" class="link-text"><button class="menu-button hidden" type="button">novo</button></a>
    <a id="menu-registration-edit-account" href="edit-account.html" class="link-text"><button class="menu-button hidden" type="button">editar</button></a>
    <a id="menu-registration-delete-account" href="delete-account.html" class="link-text"><button class="menu-button hidden" type="button">excluir</button></a>
    <button id="menu-registration-product" class="menu-button menu-header" type="button" onclick="productMenuOptions(); return false">produtos<i class="fa fa-chevron-circle-up up-down-icon2" aria-hidden="true"></i></button>
    <a id="menu-registration-search-product" href="search-product.html" class="link-text"><button class="menu-button hidden" type="button">buscar</button></a>
    <a id="menu-registration-new-product" href="register-product.html" class="link-text"><button class="menu-button hidden" type="button" onclick="">novo</button></a>
    <a id="menu-registration-edit-product" href="edit-product.html" class="link-text"><button class="menu-button hidden" type="button" onclick="">editar</button></a>
    <a id="menu-registration-delete-product" href="delete-product.html" class="link-text"><button class="menu-button hidden" type="button" onclick="">excluir</button></a>
`;

document.getElementById('shopping-cart-bar').innerHTML = `
        <div class="table-container-shopping-cart">
            <div>
                <h2>meu carrinho</h2> 
            </div>
            <div id="my-shopping-products-table" class="table hidden">
                <div id="registration-line" class="thead tr">
                    <div>
                    </div>
                    <div class="thead-td thead-td-shopping-cart-name">
                        nome
                    </div>
                    <div class="thead-td thead-td-shopping-cart-value">
                        valor
                    </div>
                </div>
            </div>
            <div class="row">
                <p class="cart-title">total</p>
                <p id="shopping-cart-total-price">R$ 0,00</p>
            </div>
            <div class="align-center width100">
                <button class="cart-button">comprar</button>
            </div>
        </div>    
    </div>
`;


document.getElementById('ftr').innerHTML = `
<div class="row width100">
    <div class="footer-column align-center">
        <img src="img/logo-footer.png" alt="logo">
    </div>
    <div class="footer-column">
        <p class="footer-topics">Seja um vendedor:</p>
        <p class="footer-text"><a href="">Cadastre-se</a></p>
    </div>
    <div class="footer-column">
        <p class="footer-topics">Trabalhe conosco:</p>
        <p class="footer-icon"><a href="mailto:cv@mercadotech.com"><i class="fa fa-envelope" aria-hidden="true"></i></a></p>
        <p class="footer-icon"><a href="tel:+48999951728"><i class="fa fa-phone-square" aria-hidden="true"></i></a></p>
    </div>
    <div class="footer-column">
        <p class="footer-topics">Páginas:</p>
        <p class="footer-icon"><a href="https://play.google.com/store/"><i class="fa fa-android" aria-hidden="true"></i></a></p>
        <p class="footer-icon"><a href="https://www.apple.com/br/app-store/"><i class="fa fa-apple" aria-hidden="true"></i></a></p>
        <p class="footer-icon"><a href="https://www.linkedin.com/"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></p>
    </div>
    <div class="footer-column">
        <p class="footer-topics">Nosso endereço:</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.4692422883536!2d-48.49999868498831!3d-27.54794388285825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527475e01a8efef%3A0x5b0f13adab8483ec!2sSENAI%20Florian%C3%B3polis%20(CTAI)!5e0!3m2!1spt-BR!2sbr!4v1635451740192!5m2!1spt-BR!2sbr" width="100%" height="100" style="border:0; border-radius: 6px;" allowfullscreen="" loading="lazy"></iframe>
    </div>
</div>
<div class="footer-column">
    <p class="creator-rights">Todos os direitos reservados @MercadoTech 2021</p>
</div>
`;