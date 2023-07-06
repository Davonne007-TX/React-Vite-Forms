import { useState, useEffect } from 'react'
import { useForm} from 'react-hook-form'
import { DevTool } from '@hookform/devtools';
import './App.css'

let renderCount = 0; 

const App = () => {
  const { register, control, handleSubmit } = useForm()   //this is the useForm hook, register is a function used to register form inputs for validation, while handleSubmit is a function used to handle form submission
  const onSubmit = (data, e) => console.log("Potential Volunteer",data, e)  //logs onSubmit data in the console
  const onError = (errors, e) => console.log(errors, e)

  renderCount++  //increment count value

  useEffect (() => {
    console.log("Page Mounted")
  }, []);

  
  return (
    <div className="info">
      <h1>Sign Up To Volunteer ({renderCount / 1})</h1>  
      <p>Please fill out information</p>

      <form onSubmit={handleSubmit(onSubmit, onError)}> {/* Gets the functions  */}
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" {...register("name")} />

        <label htmlFor="email">Email:</label>
        <input type="text" id="email" {...register("email")} />

        <label htmlFor="age">Age:</label>
        <input type="text" id="age" {...register("age")} />

        <label htmlFor="username">User Name:</label>
        <input type="text" id="username" {...register("username")} />

        <label htmlFor="password">Password:</label>
        <input type="text" id="password" {...register("password")} />

        <label htmlFor="confirm">Confirm Password:</label>
        <input type="text" id="confirm" {...register("confirm")} />

        <label htmlFor="country">County:</label>
        <select id="country" name="country" {...register("county")}>
          <option value="Dallas">Dallas</option>
          <option value="Denton">Denton</option>
          <option value="Wise">Wise</option>
          <option value="Hood">Hood</option>
          <option value="Ellis">Ellis</option>
          <option value="Collin">Collin</option>
          <option value="Johnson">Johnson</option>
       </select>

       <input type="submit" value="Submit" className="ourSubmit"/> 
      </form>

      <DevTool control={control}/>
    </div>
  )
}

export default App;




{
  /*

  Managing Form State: 

  //all of this below is the forms state: Lines 75-83
    - Every form has a few moving parts that keep changing from the time a user loads the form
     to time they submit it
      * current value of every field in the form
      * whether a field has been interacted with
      * whether a field's value has undergone changes
      * whether the form is valid
      * whether a field contains errors
      
    soooo React Hook Forms makes this easier 


    - The register method helps you register an input field into React Hook Form so that it is
     available for the validation, and its value can be tracked for changes
    
     - This method allows you to register an input or select element and apply validation rules
       to ReactHook Form. Validation rules are all based on the HTML standard and also allow for custom
      validation methods.

        * By invoking the register function and supplying an input's name, you will receive the following
         methods: onChange, onBlur, ref, and name

        Props: 
          *onChange is a ChangeHandler	
          onChange prop to subscribe the input change event.

          *onBlur is a 	ChangeHandler	
          onBlur prop to subscribe the input blur event.

          *ref	is a React.Ref<any>	
          Input reference for hook form to register.

          * name is a string	
          Input's name being registered
    
          soooo instead of writing them all we do {...register("theName")}

  *******

  - Render Count
   - By Rendering the count, we have a controlled form, not re-rendering the 
     component each time an input changes


    - Line 10:
     * All functions for useForm Hook.  const { register, control, handleSubmit } = useForm();
       - kinda like how useState, is  const [initialState, setNewState] = useState(); , setNewState
        is a function
      - control: This function is used to gain control over the form inputs. It provides access to the
       input's value and allows customization of its behavior


  */
}