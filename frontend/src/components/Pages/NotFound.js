import React, {useEffect} from 'react'
import './NotFound.css'
const NotFound = () => {
  useEffect(() => {
    document.title = "404 Not Found";
  }, []);
  return (
    <div className='notop'>NotFound</div>
  )
}

export default NotFound