import React, { useState } from 'react'

function Skills() {
  const [skills, setSkills] = useState([])

  const handleSkills = (event) => {
    console.log(event.target.value, event.target.checked)

    if (event.target.checked) {
      setSkills([...skills, event.target.value])
    } else {
      setSkills(
        skills.filter((item) => item !== event.target.value)
      )
    }
  }

  return (
    <div>
      <h1>Select Your Skill</h1>

      <label htmlFor="php">PHP</label>
      <input
        onChange={handleSkills}
        type="checkbox"
        id="php"
        value="php"
      />

      <br />
      <br />

      <label htmlFor="node">Node</label>
      <input
        onChange={handleSkills}
        type="checkbox"
        id="node"
        value="node"
      />

      <br />
      <br />

      <label htmlFor="react">React</label>
      <input
        onChange={handleSkills}
        type="checkbox"
        id="react"
        value="react"
      />

      <br />
      <br />

      <label htmlFor="java">Java</label>
      <input
        onChange={handleSkills}
        type="checkbox"
        id="java"
        value="java"
      />

      <h2>Selected Skills: {skills.join(', ')}</h2>
    </div>
  )
}

export default Skills
