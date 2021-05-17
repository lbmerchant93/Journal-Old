import React, { MouseEvent } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { JOURNAL_ENTRIES_QUERY } from '../queries/queries';
import { IJournalEntriesQuery } from '../interfaces/journalEntriesQuery';
import { DELETE_JOURNAL_ENTRY } from '../mutations/mutations';
import styles from '../styles/AllJournalEntries.module.scss';

const AllJournalEntries: React.FC = () => {
  const { loading, error, data } = useQuery(JOURNAL_ENTRIES_QUERY);
  const [deleteJournalEntry] = useMutation(DELETE_JOURNAL_ENTRY);

  let display: [];
  const displayJournalEntries = () => {
    display = data;
    return data.journalEntries.map((entry: IJournalEntriesQuery) => {
      return (
        <article key={entry.id} className={styles.entry}>
          <h3>{entry.date}</h3>
          <p>Prenatal Vitamins: {entry.prenatalVitamins ? 'true' : 'false'}</p>
          <p>Probiotics: {entry.probiotics ? 'true' : 'false'}</p>
          <p>Water Intake: {entry.waterIntake} oz</p>
          <p>Protein Intake: {entry.proteinIntake} g</p>
          <p>Exercise: {entry.exercise} min</p>
          <p>Kegels: {entry.kegels} reps</p>
          <p>Garland Pose: {entry.garlandPose} min</p>
          <button id={entry.id} onClick={removeJournalEntry}>Delete Entry</button>
        </article>
      )
    })
  }

  const removeJournalEntry = (e: MouseEvent<HTMLButtonElement>) => {
    deleteJournalEntry({
      variables: { id: e.currentTarget.id },
      refetchQueries: [{ query: JOURNAL_ENTRIES_QUERY }]
    })
  }

  return (
      <main>
        <h2>Previous Journal Entries</h2>
        {loading && <div>Loading journal entries..</div>}
        {data && <section className={styles.allEntries}>{displayJournalEntries()}</section>}
        {error && <div>{error}</div>}
      </main>
  )
}

export default AllJournalEntries;