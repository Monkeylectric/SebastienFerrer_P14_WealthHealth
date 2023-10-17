import PropTypes from 'prop-types';
import './Input.css';

function Input({id, label, type, value, onChange, max, pattern, required}) {
    return (
        <div className="form-input">
            <label htmlFor={id}>{label}</label>
            <input 
                name={id} 
                id={id} 
                type={type} 
                placeholder={label} 
                value={value} 
                onChange={onChange} 
                max={max} 
                pattern={pattern} 
                required={required} 
            />
        </div>
    )
}

Input.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    max: PropTypes.string,
    pattern: PropTypes.string,
    required: PropTypes.bool,
}

export default Input;