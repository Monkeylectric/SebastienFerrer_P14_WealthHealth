import { useState } from 'react';
import Fieldset from '../../layouts/Fieldset/Fieldset';
import { getDepartments, getStates } from '../../services/utils';
import Input from '../Input/Input';
import Select from '../Select/Select';
import './Form.css';
import FormRow from '../../layouts/FormRow/FormRow';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../store/storeActions';

function Form() {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        birthdate: "",
        startdate: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        department: "",
    });
    const states = getStates();
    const departments = getDepartments();
    const dispatch = useDispatch();
    
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

        // console.log(formData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const isFormValid = e.currentTarget.checkValidity();
        console.log(isFormValid, formData);

        if (isFormValid) {
            dispatch(addEmployee(formData));
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <FormRow>
                <Input 
                    id="firstname" 
                    label="First Name" 
                    type="text" 
                    value={formData.firstname} 
                    onChange={handleChange} 
                    pattern="^[a-zA-Zéèàêôâîûüù]{2,50}$" 
                    required
                />
                <Input 
                    id="lastname" 
                    label="Last Name" 
                    type="text" 
                    value={formData.lastname} 
                    onChange={handleChange} 
                    pattern="^[a-zA-Zéèàêôâîûüù]{2,50}$" 
                    required
                />
            </FormRow>
            <FormRow>
                <Input 
                    id="birthdate" 
                    label="Date Of Birth" 
                    type="date" 
                    max={new Date().toISOString().split("T")[0]} 
                    value={formData.birthdate} 
                    onChange={handleChange} 
                    required 
                />
                <Input 
                    id="startdate" 
                    label="Start Date" 
                    type="date" 
                    max={new Date().toISOString().split("T")[0]} 
                    value={formData.startdate} 
                    onChange={handleChange} 
                    required
                />
            </FormRow>
            <Fieldset legend="Address">
                <Input 
                    id="street" 
                    label="Street" 
                    type="text" 
                    value={formData.street} 
                    onChange={handleChange} 
                    pattern="^[0-9a-zA-Zéèàêôâîûüù]{2,50}$" 
                    required
                />
                <Input 
                    id="city" 
                    label="City" 
                    type="text" 
                    value={formData.city} 
                    onChange={handleChange} 
                    pattern="^[a-zA-Zéèàêôâîûüù]{2,50}$" 
                    required
                />
                <Select 
                    id="state" 
                    label="State" 
                    name="state" 
                    options={states} 
                    value={formData.state} 
                    onChange={handleChange} 
                    required
                />
                <Input 
                    id="zipcode" 
                    label="Zip Code" 
                    type="number" 
                    value={formData.zipcode} 
                    onChange={handleChange} 
                    pattern="^[0-9]{5}$" 
                    required
                />
            </Fieldset>
            <Select 
                id="department" 
                label="Department" 
                name="department" 
                options={departments} 
                value={formData.department} 
                onChange={handleChange} 
                required
            />
            <button type="submit">Save</button>
        </form>
    )
}

export default Form;