import './Input.css';

function Input({id, label, type}) {
    return (
        <div className="form-input">
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} />
        </div>
    )
}

export default Input;