import { getDepartments, getStates } from '../../services/utils';
import Input from '../Input/Input';
import Select from '../Select/Select';
import './Form.css';

function Form() {
    const states = getStates();
    const departments = getDepartments();

    return (
        <form className="form" action="#">
            <Input id="firstname" label="First Name" type="text" />
            <Input id="lastname" label="Last Name" type="text" />
            <Input id="birthdate" label="Date Of Birth" type="date" />
            <Input id="startdate" label="Start Date" type="date" />
            <fieldset>
                <legend>Address</legend>
                <Input id="street" label="Street" type="text" />
                <Input id="city" label="City" type="text" />
                <Select id="state" label="State" name="state" options={states} />
                <Input id="zipcode" label="Zip Code" type="number" />
            </fieldset>
            <Select id="department" label="Department" name="department" options={departments} />
            <button type="submit">Save</button>
        </form>
    )
}

export default Form;