import React from 'react'

function Show() {
  const userData = [
    {
      name: 'sushil',
      age: 29,
      email: 'sushil@123gmail.com',
      id: 1
    },
    {
      name: 'amit',
      age: 25,
      email: 'amit@123gmail.com',
      id: 2
    },
    {
      name: 'suraj',
      age: 27,
      email: 'suraj@123gmail.com',
      id: 3
    },
    {
      name: 'pankaj',
      age: 30,
      email: 'pankaj@123gmail.com',
      id: 4
    }
  ]

  return (
    <div>
      <h1>Dynamic Table using map()</h1>

      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Show;
