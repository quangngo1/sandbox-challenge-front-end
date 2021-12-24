import React from 'react';

const CreateRoundsData = ({idx}) => {

  return (
      <div>
        <label>Player {idx}'s ID</label>
        <input type='number' className='form-control'/>

        <label>Player {idx} takes (i.e: 5, 3, 2, 4)</label>
        <input type='text' className='form-control'/>
        <br/>
        <br/>
      </div>
  )
}

export default CreateRoundsData;