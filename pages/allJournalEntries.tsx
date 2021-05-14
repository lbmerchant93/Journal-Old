import * as React from 'react';
import { useQuery } from '@apollo/client';
import { JOURNAL_ENTRIES_QUERY } from '../queries/queries';
import { IJournalEntriesQuery } from '../interfaces/journalEntriesQuery';

const AllJournalEntries: React.FC = () => {
  const { loading, error, data } = useQuery(JOURNAL_ENTRIES_QUERY);

  let display: [];
  const displayJournalEntries = () => {
    display = data;
    return data.journalEntries.map((entry: IJournalEntriesQuery) => {
      return (
        <article key={entry.id} id={entry.id}>
          <h3>{entry.date}</h3>
          <p>Prenatal Vitamins: {entry.prenatalVitamins}</p>
          <p>Probiotics: </p>
          <p>Water Intake: {entry.waterIntake} oz</p>
          <p>Protein Intake: {entry.proteinIntake} g</p>
          <p>Exercise: {entry.exercise} min</p>
          <p>Kegels: {entry.kegels} reps</p>
          <p>Garland Pose: {entry.garlandPose} min</p>
          <button>Delete Entry</button>
        </article>
      )
    })
    console.log(display)
  }

  return (
      <main>
        <h2>Previous Journal Entries</h2>
        {loading && <div>Loading journal entries..</div>}
        {data && displayJournalEntries()}
        {error && <div>{error}</div>}
      </main>
  )
}

export default AllJournalEntries;