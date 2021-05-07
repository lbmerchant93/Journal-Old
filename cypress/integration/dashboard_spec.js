describe('Dashboard UI', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('Should contain a header', () => {
        cy.get('h1').contains('MiWi').should('be.visible')
    })
})