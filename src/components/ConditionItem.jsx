import React from 'react'

function ConditionItem({label,value}) {
  return (
    <div>
      <p className='detailHeading'>{label}</p>
      <p>{value}</p>
    </div>
  )
}

export default ConditionItem