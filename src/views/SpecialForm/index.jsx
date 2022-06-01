import { useLocation } from 'react-router-dom';
import EnergyMetering from './EnergyMetering';
import Orders from './Orders';
import './styles.scss';

function SpecialForm() {
    const location = useLocation();
    let form = '1';
    if (location.state && location.state.form) {
        form = location.state.form;
    }
    return (
        <div className="special-form-container">
            {
                form === '1' ? (
                    <EnergyMetering />
                ) : <Orders />
            }
        </div>
    )
}

export default SpecialForm;