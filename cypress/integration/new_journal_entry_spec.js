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
        cy.get('label').eq(1).contains('Water Intake')
    })

    it('Should contain an input for prenatal vitamins', () => {
        cy.get('label').eq(2).contains('Prenatal Vitamins')
    })

    it('Should contain an input for probiotics', () => {
        cy.get('label').eq(5).contains('Probiotics')
    })

    it('Should contain an input for protein intake', () => {
        cy.get('label').eq(8).contains('Protein Intake')
    })

    it('Should contain an input for exercise', () => {
        cy.get('label').eq(9).contains('Exercise')
    })

    it('Should contain an input for kegels', () => {
        cy.get('label').eq(10).contains('Kegels')
    })

    it('Should contain an input for garland pose', () => {
        cy.get('label').eq(11).contains('Garland Pose')
    })

    it.only('Should contain a submit button', () => {
        cy.get('input').eq(10).should('have.attr', 'type', 'submit')
    })
})