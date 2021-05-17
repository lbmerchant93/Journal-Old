describe('Dashboard UI', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.get('a').eq(1).click()
    })

    it('Should contain a form', () => {
        cy.get('form')
    })

    it('Should contain an input for the date', () => {
        cy.get('label').eq(0).contains('Date')
    })

    it('Should contain an input for water intake', () => {
        cy.get('label').eq(1).contains('How many ounces of water did you drink?')
    })

    it('Should contain an input for protein intake', () => {
        cy.get('label').eq(2).contains('How many grams of protein did you have?')
    })

    it('Should contain an input for exercise', () => {
        cy.get('label').eq(3).contains('How many minutes did you exercise for?')
    })

    it('Should contain an input for kegels', () => {
        cy.get('label').eq(4).contains('How many kegels did you do?')
    })

    it('Should contain an input for garland pose', () => {
        cy.get('label').eq(5).contains('How many minutes did you do garland pose for?')
    })

    it('Should contain an input for prenatal vitamins', () => {
        cy.get('label').eq(6).contains('Did you take prenatal vitamins?')
    })

    it('Should contain an input for probiotics', () => {
        cy.get('label').eq(9).contains('Did you take probiotics?')
    })

    it('Should contain a submit button', () => {
        cy.get('button').eq(0).should('have.attr', 'type', 'submit')
    })
})