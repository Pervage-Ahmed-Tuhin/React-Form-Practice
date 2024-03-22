
import { data } from 'autoprefixer'
// import './App.css'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import Reusableform from './components/ReusableForm/Reusableform'
// import SimpleForm from './components/simpleforum/SimpleForm'
// import StateFulForm from './components/stateFulForm/StateFulForm'
import Reusableform from './components/ReusableForm/Reusableform';
function App() {
  const handleSubmit = data => {
    const { name, email, password } = data;
    console.log(name);
    console.log(email);
    console.log(password);
  }

  return (
    <>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <Reusableform formTitle={'SignUp'} handleSubmit={handleSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up</p>
          {/* This is just the example of how to use the children proptype in react this html code will be retrived by the children prop */}
        </div>
      </Reusableform>
      <Reusableform handleSubmit={handleSubmit} formTitle={'ProfileUpdate'} submitButtonText='Update'>
        <h2>Update Your Profile with top Up</h2>
        <p>Please sign up</p>
      </Reusableform>
    </>
  )
}

export default App
