import React, { useState } from 'react';


const initialState = {
    name: "",
    email: "",

}

export const AddContact = (props) => {

    const [details, setDetails] = useState(initialState);

    const onChangeValue = (e) => {
        const { value, name } = e.target
        setDetails({ ...details, [name]: value })
    }
    const onFormSubmitClick = (e) => {

        e.preventDefault()
    }
    const submitClick = (e) => {
        e.preventDefault()
        if (details.email === "" && details.name === "") {
            alert("Plase Enter all details")
     
        }
        props.addcontactHandler(details)

    }




    return (
        <div style={{ textAlign: "center" }}>
            <h2>
                Addcontact
            </h2>
            <form onSubmit={onFormSubmitClick}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        placeholder='name'
                        name='name'

                        onChange={onChangeValue}
                    />

                </div>
                <div><br></br></div>
                <div>
                    <label>Email</label>
                    <input
                        type="text"
                        placeholder='email'
                        name='email'

                        onChange={onChangeValue}
                    />

                </div>
                <br></br>
                <button onClick={submitClick}>Add</button>

            </form>
        </div>
    );
};
