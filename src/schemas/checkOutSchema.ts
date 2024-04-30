import * as Yup from "yup";

const checkOutSchema = Yup.object({
  fname: Yup.string().min(2).max(25).required("Please enter your Frist Name "),
  lname: Yup.string().min(2).max(25).required("Please enter your Last Name "),
  company: Yup.string().min(2).max(25).required("Compnay is required "),
  address: Yup.string().min(2).max(25).required("Address is required"),
  country: Yup.string().min(2).max(25).required("Country is required"),
  city: Yup.string().min(2).max(25).required("City is required"),
  state: Yup.string().min(2).max(25).required("State is required"),
  zipCode: Yup.string().min(2).max(25).required("Zipcode is required"),
  email: Yup.string().email().required("Email is required"),
  phone: Yup.string().min(2).max(15).required("Number is required"),
});

export default checkOutSchema;
