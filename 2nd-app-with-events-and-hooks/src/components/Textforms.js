
import React ,{useState} from 'react';
import PropsTypes from 'prop-types';

export default function Textforms(props) {

    let HandleUpCase = () => {
        // alert('Btn cliced')
        let newText = text.toUpperCase()
        setText(newText)
    }

    let HandleOnChange = (event) => {
        
        setText(event.target.value)

    }

    let ClearBox = () => {
        setText('')
    }


    let [text , setText ] = useState('');
    return (

        <>
            <div className="container my-5 shadow p-5">
                <h1 className='display-5 ps-2'>{props.heading}</h1>
                <div className="container mt-3">
                    <textarea value={text} id="mybox" cols="30" rows="10" className='form-control' placeholder='Enter Text Here ...'  onChange={HandleOnChange}></textarea>

                </div>
                <div className="container pt-3">
                    <button className='btn btn-primary me-2' onClick={HandleUpCase}>UpperCase</button>
                    <button className='btn btn-secondary me-2' onClick={ClearBox}>ClearBox</button>

                </div>

            </div>
        </>
    )
}


Textforms.PropsTypes = {
    heading: PropsTypes.string
}