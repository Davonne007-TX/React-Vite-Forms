import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools"; //tracking field values
import "./App.css";

let renderCount = 0;

const App = () => {
  const { register, control, handleSubmit } = useForm(); //this is the useForm hook, register is a function used to register form inputs for validation, while handleSubmit is a function used to handle form submission
  const onSubmit = (data, e) => console.log("Potential Volunteer", data, e); //logs onSubmit data in the console
  const onError = (errors, e) => console.log(errors, e);

  renderCount++; //increment count value

  useEffect(() => {
    console.log("Page Mounted");
  }, []);

  return (
    <div className="info">
      <h1>Sign Up To Volunteer ({renderCount / 1})</h1>{" "}
      {/*makes the page not re-render when entering text in input*/}
      <p>Please fill out information</p>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        {" "}
        {/* Gets the functions  */}
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
        <input type="submit" value="Submit" className="ourSubmit" />
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default App;
