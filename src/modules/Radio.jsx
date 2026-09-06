import { useState } from 'react'

function Radio() {
  const [gender, setGender] = useState('male')
  const [city, setCity] = useState('delhi')

  return (
    <div>
      <h1>Handle Radio and Dropdown</h1>

      <h4>Select Gender</h4>

      <label htmlFor="male">Male</label>
      <input
        type="radio"
        name="gender"
        value="male"
        id="male"
        checked={gender === 'male'}
        onChange={(event) => setGender(event.target.value)}
      />

      <label htmlFor="female">Female</label>
      <input
        type="radio"
        name="gender"
        value="female"
        id="female"
        checked={gender === 'female'}
        onChange={(event) => setGender(event.target.value)}
      />

      <h2>Selected Gender: {gender}</h2>

      <h4>Select City</h4>

      <select
        value={city}
        onChange={(event) => setCity(event.target.value)}
      >
        <option value="noida">Noida</option>
        <option value="delhi">Delhi</option>
        <option value="gurgaon">Gurgaon</option>
      </select>

      <h2>Selected City: {city}</h2>
    </div>
  )
}

export default Radio;
