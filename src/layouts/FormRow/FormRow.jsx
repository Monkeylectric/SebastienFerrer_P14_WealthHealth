import './FormRow.css';

function FormRow({legend, children}) {
    return (
        <div className="form-input-row">
            {children}
        </div>
    )
}

export default FormRow;