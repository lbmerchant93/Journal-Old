describe('Dashboard UI', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.get('a').eq(2).click().wait(400)
        // Cypress fixtures dont always work for some reason. Dont know if it is a logic thing or a cypress issue. Cant call multiple fixtures on the same request to have it choose which data to display.....
        // let interceptCount = 0;
        // cy.intercept('POST', 'https://miwi-be.herokuapp.com/', (req) => {
        //     req.reply(res => {
        //         if (interceptCount === 0) {
        //             interceptCount += 1
        //             res.send({ fixture: 'all_journal_entries.json' })
        //         } else {
        //         res.send({ fixture: 'filtered_journal_entries.json' })
        //         }
        //     })
        // })
    })

    it.only('Should have a page description', () => {
        cy.get('h2').contains('Previous Journal Entries')
    })

    it('Should contain cards for all of the journal entries stored for the user', () => {
        cy.get('article').should('have.length', '4')
    })

    it('Should display all of the information from the journal entry input on the card for a journal entry', () => {
        cy.get('h3').should('have.length', '4').eq(0).contains('2021-05-01')
        cy.get('p').should('have.length', '29').eq(0).contains('Amount of water you drank: 74 oz')
        cy.get('p').eq(1).contains('Amount of protein you had: 70 g')
        cy.get('p').eq(2).contains('How long you exercised for: 30 min')
        cy.get('p').eq(3).contains('How many kegels you did: 75')
        cy.get('p').eq(4).contains('How long you did garland pose for: 10 min')
        cy.get('p').eq(5).contains('Took your prenatal vitamins? yes')
        cy.get('p').eq(6).contains('Took your probiotics? yes')
    })

    it('Should display a delete button for each journal entry, when selected deletes that entry', () => {
        cy.get('button').should('have.length', '4')
        cy.get('button').eq(0).click()
        cy.get('button').should('have.length', '3')
    })

})