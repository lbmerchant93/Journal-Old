import { gql } from '@apollo/client';

export const JOURNAL_ENTRIES_QUERY = gql `
    query journalEntries {
        journalEntries {
            id
            date
            waterIntake
            prenatalVitamins
            probiotics
            proteinIntake
            exercise
            kegels
            garlandPose
            userId
        }
    }
`
