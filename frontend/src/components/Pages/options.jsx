import React, {useEffect} from 'react';
import './options.css'
import { optio } from '../Dataset';
import { Link } from 'react-router-dom';
const Options = () => {
    useEffect(() => {
        document.title = "Options || CARBIOS";
      }, []);
    return (
        <div className="options-top">
            <div className="options-head">
                {optio.map((item) => {
                    return (
                        <>
                            <div className="option-main">
                                <h1>{item.first}</h1>
                                    <Link to={item.route}>
                                        <button className="option-link1btn">{item.btn}</button>
                                    </Link>
                                
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Options