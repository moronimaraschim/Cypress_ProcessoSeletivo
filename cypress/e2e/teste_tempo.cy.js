describe('Teste para ver previsão do tempo', () => {
  it('Ver previsão e ver Temperatura, Chuva e Vento', () => {
    cy.visit('https://www.google.com.br/')
        cy.get('input.gLFyf')
            .type('Previsão do Tempo{enter}')
        cy.get('#wob_temp')
            .click() 
        cy.wait(2000)
        cy.get('#wob_rain')
            .click() 
        cy.wait(2000)
        cy.get('#wob_wind')
            .click()
        cy.wait(2000) 
        cy.get('#wob_temp')
            .click() 
        cy.wait(3000)
    })
})