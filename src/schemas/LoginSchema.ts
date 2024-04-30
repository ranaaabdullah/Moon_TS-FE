import * as Yup from "yup";

const  LoginSchema = Yup.object({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().min(2).max(25).required("Password is required"),
});

export default LoginSchema