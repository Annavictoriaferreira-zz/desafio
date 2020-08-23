/// <reference types="cypress" />

describe('Desafio', () => {
  it('Desafio', () => {
    // acessa o site codepen, para interação com o componente
    cy.visit('https://codepen.io/choskim/pen/RLYebL');

    // aguarda o frame com o componente ser renderizado (cypress-iframe)
    cy.frameLoaded('#result')

    // mapeia o elemento dentro de um iframe para a interação
    cy.iframe('#result').find('div.square').as('square');

    // verifica se o elemento está visível
    cy.get('@square').should('be.visible')

    // realiza a ação de pressionar e manter pressionado
    cy.get('@square').trigger('mousedown', 'center')

    // aguarda 10 segundos para liberar a ação
    cy.wait(10000)

    // solta o botao, finalizando a ação de pressionar
    cy.get('@square').trigger('mouseup')

    // verifica se o componente foi redimensionado corretamente
    cy.get('@square').should('have.css', 'height', '240px')
    cy.get('@square').should('have.css', 'width', '240px')
  });
});


