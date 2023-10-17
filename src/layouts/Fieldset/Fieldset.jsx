import './Fieldset.css';

function Fieldset({legend, children}) {
    return (
        <fieldset className="form-fieldset">
            {legend ? <legend>{legend}</legend> : null}
            {children}
        </fieldset>
    )
}

export default Fieldset;