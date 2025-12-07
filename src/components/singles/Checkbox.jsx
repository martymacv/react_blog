import { API_BASE_URL, API_ENDPOINTS, API_DATA } from '../../constants';
import { useState } from 'react';
import styles from './Checkbox.module.css'
import { useLocation } from 'react-router-dom';
import { useGlobalState } from '../GlobalProvider';

function Checkbox({ forItem }) {
    const { userId } = useGlobalState();
    // const location = useLocation();

    const [isChecked, setIsChecked] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = async (event) => {
        const newValue = event.target.checked;
        setIsChecked(newValue);
        setIsLoading(true);

        try {
            const response = await fetch(
                `${API_BASE_URL}${API_ENDPOINTS.PROFILES.PERMISSIONS(userId)}`,
                API_DATA("POST")
            );
        
            if (!response.ok) {
                throw new Error('Update failed');
            }
        } catch(error) {
            console.error('Error:', error);
            setIsChecked(!newValue);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div>
            <input type="checkbox" 
                id={`permissions_${forItem}`} 
                name={`permissions_${forItem}`}  
                value={isChecked}
                checked={isChecked}
                onChange={handleChange}
                className={styles.customCheckbox} />
            <label htmlFor={`permissions_${forItem}`} >
                {isChecked ? 'видно всем' : 'всем, кроме...'}
            </label>
        </div>
    )
}

export default Checkbox
