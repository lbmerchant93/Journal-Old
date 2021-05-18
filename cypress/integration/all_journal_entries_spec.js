describe('Dashboard UI', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.get('a').eq(2).click()
    })

    it.only('Should be able to intercept the all journal entries query', () => {
        cy.intercept('POST', 'https://miwi-be.herokuapp.com/', (req) => {
            if (req.body) {
                req.reply(
                    {data: {
                        journalEntries: [
                                {
                                    id: "609eba03ddd9c400158928d0", 
                                    date: "2021-05-01",
                                    waterIntake: 74,
                                    proteinIntake: 70,
                                    exercise: 30,
                                    kegels: 75,
                                    garlandPose: 10,
                                    prenatalVitamins: true,
                                    probiotics: true,
                                    userId: "1"
                                },
                                {
                                    id: "609eba03ddd9c400158928d0", 
                                    date: "2021-05-02",
                                    waterIntake: 73,
                                    proteinIntake: 69,
                                    exercise: 29,
                                    kegels: 74,
                                    garlandPose: 9,
                                    prenatalVitamins: false,
                                    probiotics: false,
                                    userId: "1"
                                }
                            ]
                        }
                    }
                )
                
            }
        })
    })
    
})