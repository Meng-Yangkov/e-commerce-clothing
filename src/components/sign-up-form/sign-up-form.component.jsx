import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.style.scss';
import Button from "../button/button.component";
import { 
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";

const defaultField = {
  displayName : '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [formField, setFormFields] = useState(defaultField);
  const {displayName,email,password,confirmPassword} = formField;
  
  console.log(formField);
  const resetFormFields = () => {
    setFormFields(defaultField);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(password !== confirmPassword) {
      alert("Password don't match!")
      return;
    }

    try{
      const {user} = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, {displayName});
      resetFormFields();
    }catch(error){
      if(error.code === 'auth/email-already-in-use'){
        alert('Cannot create user, email alreay is use')
      }
      console.log("Error creating user!",error);
    }
  };

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({...formField, [name]: value});
  };

  return(
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Enter Your info to sign up</span>
      <form onSubmit={handleSubmit}>
        <FormInput label='Display Name' type="text" 
         required onChange={handleChange}
         name="displayName" value={displayName}/>

        <FormInput label='Email' type="email" 
         required onChange={handleChange}
         name="email" value={email}/>

        <FormInput label='Password' type="password" 
         required onChange={handleChange} 
         name="password" value={password}/>

        <FormInput label='Confirm Password' type="password" 
         required onChange={handleChange}
         name="confirmPassword" value={confirmPassword}/>
        <Button ButtonType='google-sign-in' type="Submit">Sign up</Button>
      </form>

    </div>
  )
}
export default SignUpForm;