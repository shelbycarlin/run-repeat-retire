import React from 'react';
import '../../styles/LifeLeftBar.scss'

const LifeLeftBar = (props) => {
  const  percent  = props.lifeLeft
  console.log(percent)
  const llFillerStyle = {
    width: `${percent}%`
  }

  return(
    <div className='llContainer'>
      <div className='llFiller' style={llFillerStyle}>
        <span className='llLabel'>{`${percent}%`}</span>
      </div>
    </div>
  )
}
export default LifeLeftBar