
import React from 'react';


export default function Table (props){
  console.log('PROPS', props)
  return(
    <div>
    <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name
            <button
              onClick={() => props.sortBy('lastName')}
              disabled={!props.data.length}> v
            </button>
            </th>
            <th>Country
            <button
              onClick={() => props.sortBy('country')}
              disabled={!props.data.length}> v
            </button>
            </th>
            <th>Bugs</th>
          </tr>
        </thead>
        <tbody>
        {
           props.data.map((row,index) => (
              <tr key={index}>
                <td >{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>{row.country}</td>
                <td>{row.bugs.map((bug) => ( bug.title)).join(", ")}</td>
              </tr>
            ))
        }
        </tbody>
      </table>
    </div>
  )
}
