import { useForm } from "react-hook-form";
import { FormGroup } from "./assets/Form.jsx";
export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);

  return (
    <div className="container">
      <form action="form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name=""
            id
            {...register("email", {
              required: true,
              validate: (value) => {
                if (!value.endsWith("@Rajpoot.com")) {
                  return "must end with @Rajpoot.com";
                }
              },
            })}
          />
          <FormGroup errorMessage={errors?.email?.message}></FormGroup>
        </div>
        <div className="password">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name=""
            id=""
            {...register("password", {
              required: { value: true, message: "Password is required" },
              validate: {
                hasLowerCase: value =>{
                  if(!value.match(/[a-z]/) ){
                    return " must container an lower case letter"
                  }
                },
                hasUpperCase:value=>{
                  if(!value.match(/[A-Z]/)){
                    return "must contain upper case letter "
                  }
                },
                hasNumber: value=>{
                  if(value.match(/[0-8]/)){
                    return "must be less than 8 digits"
                  }
                }
              }
            })}
          />
          <FormGroup errorMessage={errors?.password?.message}   />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
//  npm install react-hook-form is used in this form