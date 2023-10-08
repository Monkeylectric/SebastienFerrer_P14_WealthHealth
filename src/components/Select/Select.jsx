import './Select.css';

function Select({id, label, name, options}) {
    return (
        <div className="form-select">
            <label htmlFor={id}>{label}</label>
            <select name={name} id={id}>
                {options.map(option => (<option key={option.abbreviation ?? option.name} value={option.abbreviation ?? option.name}>{option.name}</option>))}
            </select>
        </div>
    )
}

export default Select;