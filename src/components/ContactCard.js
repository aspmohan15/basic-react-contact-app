import React from 'react';
import icon from '../images/icon.png'
export const ContactCard = (props) => {

    const { email, id, name } = props.contact;



    return (
        <div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ color: "red" }}>
                    {name}
                </div>
                <div>||</div>
                <br></br>
                <div>
                    {email}
                </div>
                <div>
                    <img src={icon} style={{ width: "30px" }} onClick ={() =>props.clickHandler(id)} />
                </div>
            </div>
        </div>
    );
};
