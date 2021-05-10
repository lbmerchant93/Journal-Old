import * as React from 'react';
import styles from '../styles/Form.module.scss';

const NewJournalEntry: React.FC = () => {
    return (
        <main>
            <form className={styles.form}>
                <label>Date: </label>
                <input type='date' />
                <label>Water Intake: </label>
                <input type='number' placeholder='0' min='0' className={styles.numberInput}/>
                <label>Prenatal Vitamins: 
                    <label>Yes<input type='radio' value='true'/></label>
                    <label>No<input type='radio' value='false' /></label>
                </label>
                <label>Probiotics: 
                    <label>Yes<input type='radio' value='true' /></label>
                    <label>No<input type='radio' value='false' /></label>
                </label>
                <label>Protein Intake: </label>
                <input type='number' placeholder='0' min='0' className={styles.numberInput}/>
                <label>Exercise: </label>
                <input type='number' placeholder='0' min='0' className={styles.numberInput}/>
                <label>Kegels: </label>
                <input type='number' placeholder='0' min='0' className={styles.numberInput}/>
                <label>Garland Pose: </label>
                <input type='number' placeholder='0' min='0' className={styles.numberInput}/>
                <input type='submit' />
            </form> 
        </main>
    )
}

export default NewJournalEntry;