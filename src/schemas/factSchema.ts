import { object, string } from "yup";

export const factSchema = object({
  fact: string().required("This field is mandatory."),
}).required();
