import React, { useState } from 'react'

function Skills() {
    const [Skills, setSkills] = useState([]);
    const handleSkills = (event) => {
        console.log(event.target.value, event.target.checked);
        if (event.target.checked) {
            setSkills([...Skills, event.target.value])
        } else {
            setSkills([...Skills.filter((item) => item != event.target.value)])
        }
    }
    return (
        <div>
            <h1>select Your  Skill</h1>
            <label htmlFor='php'>php</label>
            <input onChange={handleSkills} type='checkbox' id='php' value='php' />
            <br />
            <br />
            <label htmlFor='node'>node</label>
            <input onChange={handleSkills} type='checkbox' id='node' value='node' />
            <br />
            <br />
            <label htmlFor='react'>react</label>
            <input onChange={handleSkills} type='checkbox' id='react' value='react' />
            <br />
            <br />
            <label htmlFor='java'>java</label>
            <input onChange={handleSkills} type='checkbox' id='java' value='java' />
            <h1>{Skills.toString}</h1>
        </div>
    )
}
export default Skills;