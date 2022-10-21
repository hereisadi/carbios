import React, {useEffect} from 'react'
import './mission.css'
const Mission = () => {
  useEffect(() => {
    document.title = "Mission || CARBIOS";
  }, []);
  return (
    <div className='mission-top'>mission</div>
  )
}

export default Mission