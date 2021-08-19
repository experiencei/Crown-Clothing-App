import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends React.Component{
  constructor(props){
      super(props);

   this.state = {
       email : '' ,
       password : ''
   }

  }
  handleSubmit = e => {
    this.setState({email : '' , password : ''})
    e.preventDefault();
  }

  handleChange = e => {
    const {name , value} = e.target;
    this.setState({ [name] : value})
  }

  render(){
      return(
         <div className='sign-in'>
         <h2 className='title'>I already have an account</h2>
         <span>sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
            <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} label="Email" required />   
            <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} label="Password" required />
            <CustomButton type="submit">Sign in </CustomButton>
        </form>
        </div>
          
      )
  }
}

export default SignIn;