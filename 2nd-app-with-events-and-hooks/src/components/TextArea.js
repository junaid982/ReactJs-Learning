import React , {useState} from 'react'
 


export default function TextArea(props) {
    let TextCapitalize = () =>{
        alert('function working');
    }



    const [text , setText] = useState('Enter Text Here')
    return (
        <>
            <div className='p-5 shadow my-5 rounded-3'>
                <h1 className='display-5 text-center '>{props.heading}</h1>

                

                <textarea cols="" rows="8" className='form-control' placeholder={text}></textarea>
                <div className='my-3'>

                    <button className='btn btn-primary' onClick={TextCapitalize} >Capitalize Text</button>
                </div>



            </div>

        </>
    )
}
