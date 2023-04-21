import React , {useState} from 'react'



export default function Textforms(props) {

    let UpperBtn = () =>{
        let newText = text.toUpperCase()
        setText(newText)
    }

    let LowerBtn = () =>{
        let oldText = text.toLowerCase()
        setText(oldText)
    }

    let ChangeText = (event) => {
        setText(event.target.value)
    }

    let ClearText = () =>{
        setText('')
    }

    let [text , setText] = useState('');
  return (
    <>
        <div className="container my-3 p-5 shadow">
            <h1 className="display-6 ms-2">{props.heading}</h1>

            <div className="container">
                <textarea name="" value={text} id="textBox" className='form-control' onChange={ChangeText} placeholder='Enter Text Here ...'></textarea>
            </div>

            <div className="container mt-3">
                <button className='btn btn-primary me-2' onClick={UpperBtn}>UpperCase</button>
                <button className='btn btn-success me-2' onClick={LowerBtn}>LowerCase</button>

                <button className='btn btn-secondary me-2' onClick={ClearText}>ClearText</button>

            </div>
        </div>
    </>
  )
}
