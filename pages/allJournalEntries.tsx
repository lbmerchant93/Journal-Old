import * as React from 'react';
import { useQuery } from '@apollo/client';
import { JOURNAL_ENTRIES_QUERY } from '../queries/queries';

const AllJournalEntries: React.FC = () => {
  const { loading, error, data } = useQuery(JOURNAL_ENTRIES_QUERY);

  let display: [];
  if(!loading) {
    display = data
    console.log(display)
  }
  return (
      <main>
        {loading && <div>Loading journal entries..</div>}
        {error && <div>{error}</div>}
      </main>
  )
}

export default AllJournalEntries;