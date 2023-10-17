import PropTypes from 'prop-types';
import './Select.css';

function Select({id, label, name, value, onChange, options, required}) {
    return (
        <div className="form-select">
            <label htmlFor={id}>{label}</label>
            <select 
                name={name} 
                id={id} 
                value={value} 
                onChange={onChange} 
                required={required} 
            >
                {options.map(option => (
                    <option key={option.abbreviation ?? option.name} value={option.abbreviation ?? option.name}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}

Select.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    name: PropTypes.string,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    required: PropTypes.bool,
}

export default Select;