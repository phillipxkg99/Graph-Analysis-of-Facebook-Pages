import React, {useState} from 'react'
import "./Walc.css";
import { render } from 'react-dom'

var data = [
    { Category: localStorage.getItem("addExpense"), AmountSpent: localStorage.getItem("my-input")},
    { Category: "Groceries", AmountSpent: 77.21},
    { Category: "Education", AmountSpent: 164.25},
]

function Walc() {
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        localStorage.setItem("addExpense", event.target.elements[1].value);
        localStorage.setItem("my-input", event.target.elements[2].value);
        // localStorage.setItem("monthlyExpenses1Selection", event.target.elements[5].value);
        // localStorage.setItem("monthlyExpenses2", event.target.elements[9].value);
        // localStorage.setItem("monthlyExpenses2Selection", event.target.elements[8].value);
        // localStorage.setItem("monthlyExpenses3", event.target.elements[12].value);
        // localStorage.setItem("monthlyExpenses3Selection", event.target.elements[11].value);

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
    const [state, setState] = useState('')
    return (
        <><div>
            <p>Expense</p>
                <select name="addExpense" onChange={handleChange}>
                    <option value="">--Please choose an option--</option>
                    <option value="travel">Travel</option>
                    <option value="food">Food</option>
                    <option value="shopping">Shopping</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="other">Other</option>
                </select>
            <label htmlFor={'my-input'}>Enter amount spent: </label>
            <input
                id={'my-input'}
                type={'number'}
                value={state}
                placeholder={'Type here'}
                onChange={event => {
                    setState(event.target.value);
                } } />
            <br />
            <br />
            You entered: {state}
        </div><div className="Walc">
                <table>
                    <tr>
                        <th>Category</th>
                        <th>Amount Spent</th>
                        <th>Percent of Total</th>
                    </tr>
                    {data.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.Category}</td>
                                <td>{val.AmountSpent}</td>
                                <td>{val.PercentofTotal}</td>
                            </tr>
                        );
                    })}
                </table>
            </div></>
   );
}
export default Walc;