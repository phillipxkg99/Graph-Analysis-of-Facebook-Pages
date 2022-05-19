import React, { useReducer, useState } from 'react';
import "./Profile.css";

const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value
    }
}


/*function newMonthlyExpense() {
    const [formData, setFormData] = useReducer(formReducer, {});
    const handleChange = event => {
        setFormData({
          name: event.target.name,
          value: event.target.value,
        });
    }
    
    
}*/

//const Profile = () => {
function Profile() {
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = event => {
        event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
        setSubmitting(false);
    }, 500)
    }

    const handleChange = event => {
        setFormData({
          name: event.target.name,
          value: event.target.value,
        });
    }

    return(
        <div className="wrapper">
            <h1>Profile</h1>
            {submitting &&
                <div>Submitting Form...</div>
            }
            <form onSubmit={handleSubmit}>
                <fieldset>
                <label>
                    <p>Full Name</p>
                    <input name="name" onChange={handleChange} />
                    <p>Username</p>
                    <input name="name" onChange={handleChange} />
                    <p>Monthly Income</p>
                    <input type="number" income="monthly income" onChange={handleChange} step="100"/>
                </label>
                

                <fieldset>
                <label>
                <p>Monthly Expense</p>
                <select name="addExpense" onChange={handleChange}>
                    <option value="">--Please choose an option--</option>
                    <option value="rent">Rent</option>
                    <option value="food">Food</option>
                    <option value="gas">Gas</option>
                    <option value="student loans">Loans</option>
                    <option value="other">Other</option>
                </select>
                    <p>Expense Amount</p>
                    <input type="number" name="expenses1" onChange={handleChange} step="1"/>
                </label>
                </fieldset>
                <fieldset>
                <label>
                <p>Monthly Expense</p>
                <select name="addExpense" onChange={handleChange}>
                    <option value="">--Please choose an option--</option>
                    <option value="rent">Rent</option>
                    <option value="food">Food</option>
                    <option value="gas">Gas</option>
                    <option value="student loans">Loans</option>
                    <option value="other">Other</option>
                </select>
                    <p>Expense Amount</p>
                    <input type="number" name="expenses2" onChange={handleChange} step="1"/>
                </label>
                </fieldset>
                <fieldset>
                <label>
                <p>Monthly Expense</p>
                <select name="addExpense" onChange={handleChange}>
                    <option value="">--Please choose an option--</option>
                    <option value="rent">Rent</option>
                    <option value="food">Food</option>
                    <option value="gas">Gas</option>
                    <option value="student loans">Loans</option>
                    <option value="other">Other</option>
                </select>
                    <p>Expense Amount</p>
                    <input type="number" name="expenses3" onChange={handleChange} step="1"/>
                </label>
                </fieldset>
                </fieldset>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Profile;