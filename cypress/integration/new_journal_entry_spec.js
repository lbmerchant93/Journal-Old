describe('Dashboard UI', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.get('a').eq(1).click()
    })

    it('Should contain a form', () => {
        cy.get('form')
    })

    it('Should contain an input for the date and should be required', () => {
        cy.get('label').eq(0).contains('Date')
        cy.get('input').eq(0).should('have.attr', 'required')
        cy.get('input').eq(0).type('2021-05-01')
    })

    it('Should contain an input for water intake and should be required', () => {
        cy.get('label').eq(1).contains('How many ounces of water did you drink?')
        cy.get('input').eq(1).should('have.attr', 'required')
        cy.get('input').eq(1).type('74')
    })

    it('Should contain an input for protein intake and should be required', () => {
        cy.get('label').eq(2).contains('How many grams of protein did you have?')
        cy.get('input').eq(2).should('have.attr', 'required')
        cy.get('input').eq(2).type('70')
    })

    it('Should contain an input for exercise and should be required', () => {
        cy.get('label').eq(3).contains('How many minutes did you exercise for?')
        cy.get('input').eq(3).should('have.attr', 'required')
        cy.get('input').eq(3).type('30')
    })

    it('Should contain an input for kegels and should be required', () => {
        cy.get('label').eq(4).contains('How many kegels did you do?')
        cy.get('input').eq(4).should('have.attr', 'required')
        cy.get('input').eq(4).type('75')
    })

    it('Should contain an input for garland pose and should be required', () => {
        cy.get('label').eq(5).contains('How many minutes did you do garland pose for?')
        cy.get('input').eq(5).should('have.attr', 'required')
        cy.get('input').eq(5).type('10')
    })

    it('Should contain an input for prenatal vitamins', () => {
        cy.get('label').eq(6).contains('Did you take prenatal vitamins?')
        cy.get('label').eq(7).contains('Yes')
        cy.get('input').eq(6).should('have.attr', 'value', 'true').click()
        cy.get('label').eq(8).contains('No')
        cy.get('input').eq(7).should('have.attr', 'value', 'false').click()
    })

    it('Should contain an input for probiotics', () => {
        cy.get('label').eq(9).contains('Did you take probiotics?')
        cy.get('label').eq(10).contains('Yes')
        cy.get('input').eq(8).should('have.attr', 'value', 'true').click()
        cy.get('label').eq(11).contains('No')
        cy.get('input').eq(9).should('have.attr', 'value', 'false').click()
    })

    it('Should contain a submit button', () => {
        cy.get('button').eq(0).should('have.attr', 'type', 'submit')
    })

    it.only('Should be able to submit the form when the required fields are input, it will then redirect you to the All Journal Entries page after alerting that the entry was posted successfully', () => {
        cy.get('input').eq(0).type('2021-05-01')
        cy.get('input').eq(1).type('74')
        cy.get('input').eq(2).type('70')
        cy.get('input').eq(3).type('30')
        cy.get('input').eq(4).type('75')
        cy.get('input').eq(5).type('10')
        cy.get('input').eq(6).click()
        cy.get('input').eq(8).click()
        cy.fixture('create_journal_entry.json')
            .then((newJournalEntry) => {
                cy.intercept('POST', 'https://miwi-be.herokuapp.com/', (req) => {
                    if (req.body.data.createJournalEntry) {
                        req.reply(
                            newJournalEntry
                        )
                    } 
                }).as('createJournalEntry')
            })
        cy.fixture('all_journal_entries.json')
            .then((allJournalEntries) => {
                cy.intercept('POST', 'https://miwi-be.herokuapp.com/', (req) => {
                    if (req.body) {
                        req.reply(
                            allJournalEntries
                        )
                    }
                }).as('allJournalEntries')
            })
        cy.get('button').eq(0).click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Journal entry was successfully posted!!`)
        })
        cy.url().should('equal','http://localhost:3000/allJournalEntries')
    })
})