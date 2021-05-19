describe('Dashboard UI', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
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
    })

    it('Should contain a header', () => {
        cy.get('h1').contains('MiWi').should('be.visible')
    })
    
    it('Should contain a link to the new journal entry page', () => {
        cy.get('a').eq(1).contains('New Journal Entry')
            .click()
        cy.url().should('equal','http://localhost:3000/newJournalEntry')
    })

    it('Should navigate the user back to the home page through a home link or the app title', () => {
        cy.get('a').eq(1).click()
        cy.get('a').eq(0).contains('Home')
            .click()
        cy.url().should('equal','http://localhost:3000/')
        cy.get('a').eq(1).click()
        cy.get('h1').click()
        cy.url().should('equal','http://localhost:3000/')
    })

    it('Should contain a link to the all journal entries page', () => {
        cy.get('a').eq(2).contains('All Journal Entries')
            .click()
        cy.url().should('equal','http://localhost:3000/allJournalEntries')
    })
})