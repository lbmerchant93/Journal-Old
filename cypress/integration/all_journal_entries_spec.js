describe('Dashboard UI', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.get('a').eq(2).click()
    })

    it('Should be able to intercept the all journal entries query', () => {
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
        cy.wait('@allJournalEntries')
    })

})