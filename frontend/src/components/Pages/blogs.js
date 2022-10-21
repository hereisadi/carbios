import React,{useEffect} from 'react'
import './blogs.css'
const Blogs = () => {
  useEffect(() => {
    document.title = "Blogs || CARBIOS";
  }, []);
  return (
    <>
    <h1 className='nmk'>hello</h1>
    </>
  )
}

export default Blogs;
