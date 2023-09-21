/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        //TODO

        cy.produtos('Abominable Hoodie', 'M', 'Blue', 4)
        cy.faturamento('Malu', 'Mader', 'EBAC', 'Brasil', 'Av Paulista 1234', '15 andar - apto 151', 'Jundiaí', 'São Paulo', '01001000', '912345678', 'malu@mader.com')
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')

    });

});
