import React, { useState } from 'react';

function Radio() {
    const [gender, setGender] = useState('male');
    const [ciyt, setCity]=useState('delhi');
    return (
        <div>
            <h1>Handle Radio and Dropdown</h1>

            <h4>Select Gender</h4>

            <label htmlFor="male">Male</label>
            <input
                type="radio"
                name="gender"
                value="male"
                onChange={(event) => setGender(event.target.value)}
                checked={gender === 'male'}
                id="male"
            />

            <label htmlFor="female">Female</label>
            <input
                type="radio"
                name="gender"
                value="female"
                onChange={(event) => setGender(event.target.value)}
                checked={gender === 'female'}
                id="female"
            />

            <h2>Selected Gender: {gender}</h2>

            <h4>Select City</h4>

            <select onChange={(event)=>setCity(event.target.value)} defaultValue={"delhi"}>
                <option value="noida">noida</option>
                <option value="delhi">Gurugaon</option>
                <option value="gurgaon">Delhi</option>
            </select>
            <h2>Selected City:{city}</h2>
        </div>
    );
}

export default Radio;
