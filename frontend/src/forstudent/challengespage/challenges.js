import './challenges.css';
import { useNavigate } from 'react-router';

const Challenges=()=>{
    const navigate = useNavigate();

    const handleOpenplayground=()=>{
        navigate('/playground');
    }

    return(
        <div>
            <div>
                <button onClick={handleOpenplayground}>Open Play Ground</button>
            </div>
        </div>
    );
}

export default Challenges;