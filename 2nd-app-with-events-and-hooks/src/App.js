

import './App.css';

import Navbar from './components/Navbar';
import TextArea from './components/TextArea';

function App() {
  return (
    <>

      <Navbar heading="TextUtils" />

      <div className='container'>
        
        <TextArea heading="Welcome to TextUtls" />

      </div>


    </>

  );
}

export default App;
