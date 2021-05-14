import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from '../styles/Form.module.scss';
import { IJournalEntryData } from '../interfaces/journalEntryForm';
import { CREATE_JOURNAL_ENTRY } from '../mutations/mutations';
import { JOURNAL_ENTRIES_QUERY } from '../queries/queries';
import { useMutation } from '@apollo/client';

const NewJournalEntry: React.FC = () => {

    let formObj : IJournalEntryData;

    const [formData, setFormData] = useState(formObj = {
        date: '',
        prenatalVitamins: false,
        probiotics: false,
        waterIntake: 0,
        proteinIntake: 0,
        exercise: 0,
        kegels: 0,
        garlandPose: 0,
        userId: "1"
    })

    const [createJournalEntry] = useMutation(CREATE_JOURNAL_ENTRY, {
        onCompleted: data => {

        }
    });

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
                    prenatalVitamins: formData.prenatalVitamins,
                    probiotics: formData.probiotics,
                    waterIntake: formData.waterIntake,
                    proteinIntake: formData.proteinIntake,
                    exercise: formData.exercise,
                    kegels: formData.kegels,
                    garlandPose: formData.garlandPose,
                    userId: formData.userId
                }
            }, 
            refetchQueries: [{ query: JOURNAL_ENTRIES_QUERY }]
        })
        console.log(formData)
    }

    return (
        <main>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label>Date: </label>
                <input 
                    type='date' 
                    name='date' 
                    onChange={handleChange} 
                    required
                />
                <label>
                    Prenatal Vitamins: 
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
                    Probiotics: 
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
                <label>Water Intake: </label>
                <input 
                    type='number' 
                    name='waterIntake' 
                    placeholder='0' 
                    min='0' 
                    className={styles.numberInput} 
                    onChange={handleChange}
                    required
                />
                <label>Protein Intake: </label>
                <input 
                    type='number' 
                    name='proteinIntake' 
                    placeholder='0' 
                    min='0' 
                    className={styles.numberInput} 
                    onChange={handleChange}
                    required
                />
                <label>Exercise: </label>
                <input 
                    type='number' 
                    name='exercise' 
                    placeholder='0' 
                    min='0' 
                    className={styles.numberInput} 
                    onChange={handleChange}
                    required
                />
                <label>Kegels: </label>
                <input 
                    type='number' 
                    name='kegels' 
                    placeholder='0' 
                    min='0' 
                    className={styles.numberInput} 
                    onChange={handleChange}
                    required
                />
                <label>Garland Pose: </label>
                <input 
                    type='number' 
                    name='garlandPose' 
                    placeholder='0' 
                    min='0' 
                    className={styles.numberInput} 
                    onChange={handleChange} 
                    required
                />
                <button type='submit'>Submit</button>
            </form> 
        </main>
    )
}

export default NewJournalEntry;