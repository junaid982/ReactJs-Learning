

import './App.css';

import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Footer from './components/Footer';

function App() {
  return (
    <>

      <Navbar heading="TextUtils" />

      <div className='container'>
        
        <TextArea heading="Welcome to TextUtls" />

      </div>


    <Footer />
    </>

  );
}

export default App;
