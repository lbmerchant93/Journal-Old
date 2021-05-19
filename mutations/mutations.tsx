import { gql } from '@apollo/client';

export const CREATE_JOURNAL_ENTRY = gql`
    mutation createJournalEntry ($input: CreateJournalEntryInput!) {
        createJournalEntry (input: $input) {
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

export const DELETE_JOURNAL_ENTRY = gql`
    mutation deleteJournalEntry ($id: ID!) {
        deleteJournalEntry (id: $id) {
            id
        }
    }   
`