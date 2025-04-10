const { defineConfig } = require('cypress')
require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    // Define a URL base para os testes
    baseUrl: 'https://meusite.com', 

    // Tempo padrão para comandos esperarem (ex: cy.get)
    defaultCommandTimeout: 8000, 

    // Variáveis de ambiente (acessível com Cypress.env)
    env: {
      // ambiente: 'dev',
      // token: 'abc123'
      ...process.env
    }, 

    // Intervalo entre digitação de cada caractere no cy.type()
    keystrokeDelay: 20, 

    // Tempo máximo que o Cypress espera para uma página carregar
    pageLoadTimeout: 60000,

    // Timeout para requisições cy.request()
    requestTimeout: 10000, 

    // Tempo para esperar resposta após envio de requisição
    responseTimeout: 15000,

    retries: {
      runMode: 2, // Repetições no modo CI
      openMode: 0 // Repetições no modo interativo
    },

    // Tira screenshot automaticamente ao falhar um teste
    screenshotOnRunFailure: true,

    // Testes que levam mais tempo que isso serão marcados como "lentos"
    slowTestThreshold: 10000, 

    // Configuração da viewport
    viewportHeight: 720,
    viewportWidth: 1280,
  },
})
