import * as Yup from "yup";

const  signSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name "),
  email: Yup.string().email().required("Email is required"),
  number: Yup.string().min(2).max(15).required("Number is required"),
  password: Yup.string().min(2).max(25).required("Password is required"),
});

export default signSchema