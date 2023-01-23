describe('Teste para entrar site da Useall', () => {

//Entrar no site da Useall
  it('Entrar no site da Useall pelo Google', () => {
    cy.visit('https://www.google.com.br/')
      cy.get('input.gLFyf')
        .type('Useall Software{enter}')
      cy.get('[href="https://www.useall.com.br/"] > .LC20lb')
        .click() 
      cy.wait(3000)
  })

//Entrar na pagina de login
  it('Entrar pelo link e entrar pagina de Login', () => {
    cy.visit('https://www.useall.com.br/')
      cy.get('.agende')
          .click()
      cy.get('.botao > a')
        .click()
      cy.wait(3000)
  })

//Preencher dados na pagina de login
  it('Preencher Login e senha e validar login errado', () => {
    cy.visit('https://useallcloud.com.br/portalcliente/login/?ReturnUrl=https://useallcloud.com.br/portalcliente/#inicio&codigo=534&versaoAplicacao=2&versaoRelease=1&versaoBuild=1&versaoDB=1&nome=Useall/')
      cy.get('#usuario')
        .type('moronidocanto10@hotmail.com')
      cy.wait(1000)
      cy.get('#senha')
        .type('teste')
      cy.wait(1000)
      cy.get('#submitFormLogin').click()
      cy.wait(1000)
//Validação de login não efetuado com sucesso
      cy.get('#mensagensErroLogin').contains('Usuário e/ou senha inválido(s).')
      cy.wait(2000)

  })
})