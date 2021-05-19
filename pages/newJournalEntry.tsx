import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from '../styles/Form.module.scss';
import { IJournalEntryData } from '../interfaces/journalEntryForm';
import { CREATE_JOURNAL_ENTRY } from '../mutations/mutations';
import { JOURNAL_ENTRIES_QUERY } from '../queries/queries';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router'

const NewJournalEntry: React.FC = () => {
    const router = useRouter();

    let formObj : IJournalEntryData;

    const [formData, setFormData] = useState(formObj = {
        date: '',
        waterIntake: 0,
        proteinIntake: 0,
        exercise: 0,
        kegels: 0,
        garlandPose: 0,
        prenatalVitamins: false,
        probiotics: false,
        userId: "1"
    })

    const [createJournalEntry] = useMutation(
        CREATE_JOURNAL_ENTRY, 
        {
            onCompleted: () => {
                alert('Journal entry was successfully posted!!'),
                router.push('/allJournalEntries')
            },
            onError: (error) => {alert(error)}
        }
    );

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        let newInput: string | number | boolean;
        let numberInputs = ['waterIntake', 'proteinIntake', 'exercise', 'kegels', 'garlandPose'];
        let booleanInputs = ['prenatalVitamins', 'probiotics']
        if (numberInputs.includes(e.currentTarget.name)) {
            newInput = parseInt(e.currentTarget.value)
        } else if (booleanInputs.includes(e.currentTarget.name) && e.currentTarget.value === "true") {
            newInput = true
        } else if (booleanInputs.includes(e.currentTarget.name) && e.currentTarget.value === "false") {
            newInput = false
        } else {
            newInput = e.currentTarget.value
        }
        setFormData({...formData, [e.currentTarget.name]: newInput})
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createJournalEntry({
            variables: {
                input: {
                    date: formData.date,
                    waterIntake: formData.waterIntake,
                    proteinIntake: formData.proteinIntake,
                    exercise: formData.exercise,
                    kegels: formData.kegels,
                    garlandPose: formData.garlandPose,
                    prenatalVitamins: formData.prenatalVitamins,
                    probiotics: formData.probiotics,
                    userId: formData.userId
                }
            }, 
            refetchQueries: [{ query: JOURNAL_ENTRIES_QUERY }]
        })
    }

    return (
        <main>
            <h2 className={styles.pageTitle}>Create a new journal entry!</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label>Date: </label>
                <input 
                    type='date' 
                    name='date' 
                    onChange={handleChange} 
                    required
                />
                <label>How many ounces of water did you drink?</label>
                <input 
                    type='number' 
                    name='waterIntake' 
                    placeholder='0' 
                    min='0' 
                    className={styles.numberInput} 
                    onChange={handleChange}
                    required
                />
                <label>How many grams of protein did you have?</label>
                <input 
                    type='number' 
                    name='proteinIntake' 
                    placeholder='0' 
                    min='0' 
                    className={styles.numberInput} 
                    onChange={handleChange}
                    required
                />
                <label>How many minutes did you exercise for?</label>
                <input 
                    type='number' 
                    name='exercise' 
                    placeholder='0' 
                    min='0' 
                    className={styles.numberInput} 
                    onChange={handleChange}
                    required
                />
                <label>How many kegels did you do?</label>
                <input 
                    type='number' 
                    name='kegels' 
                    placeholder='0' 
                    min='0' 
                    className={styles.numberInput} 
                    onChange={handleChange}
                    required
                />
                <label>How many minutes did you do garland pose for?</label>
                <input 
                    type='number' 
                    name='garlandPose' 
                    placeholder='0' 
                    min='0' 
                    className={styles.numberInput} 
                    onChange={handleChange} 
                    required
                />
                <label>
                    Did you take prenatal vitamins?  
                    <label>
                        Yes
                        <input 
                            name='prenatalVitamins' 
                            type='radio' 
                            value='true' 
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        No
                        <input 
                            name='prenatalVitamins' 
                            type='radio' 
                            value='false' 
                            onChange={handleChange}
                        />
                    </label>
                </label>
                <label>
                    Did you take probiotics? 
                    <label>
                        Yes
                        <input 
                            name='probiotics' 
                            type='radio' 
                            value='true' 
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        No
                        <input 
                            name='probiotics' 
                            type='radio' 
                            value='false' 
                            onChange={handleChange}
                        />
                    </label>
                </label>
                <button type='submit'>Submit</button>
            </form> 
        </main>
    )
}

export default NewJournalEntry;