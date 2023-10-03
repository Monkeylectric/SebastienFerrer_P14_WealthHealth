import Input from '../Input/Input';
import './Form.css';

function Form() {
    return (
        <form className="form" action="#">
            <Input id="firstname" label="First Name" type="text" />
            <Input id="lastname" label="Last Name" type="text" />
            <Input id="birthdate" label="Date Of Birth" type="text" />
            <Input id="startdate" label="Start Date" type="text" />
        </form>
    )
}

export default Form;