import { useState ,useContext} from "react";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.style.scss';
import Button from "../button/button.component";
import { UserContext } from "../../contexts/user.contexts";
import { 
  createUserDocumentFromAuth,
  signInWithGooglePopUp,
  signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";

const defaultField = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [formField, setFormFields] = useState(defaultField);
  const {email,password} = formField;

  const {setCurrentUser} = useContext(UserContext);
  
  const resetFormFields = () => {
    setFormFields(defaultField);
  }

  const signInwithGoogle = async () => {
    await signInWithGooglePopUp();
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try{
      const user = await signInAuthUserWithEmailAndPassword(email,password);
      setCurrentUser(user);
      resetFormFields();
    }catch(error){
      if(error.code === "auth/invalid-credential"){
        alert("incorrect email && password for email");
      }
      console.log(error)
    }
  };

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({...formField, [name]: value});
  };

  return(
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign In with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label='Email' type="email" 
         required onChange={handleChange}
         name="email" value={email}/>

        <FormInput label='Password' type="password" 
         required onChange={handleChange} 
         name="password" value={password}/>
         <div className="buttons-container">
            <Button type="Submit">Sign In</Button>
            <Button ButtonType='google' onClick={signInwithGoogle} type="button">Google sign in</Button>
         </div>
      </form>

    </div>
  )
}
export default SignInForm;