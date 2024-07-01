import { z } from "zod";

// Define the schema for the object containing email and password

export function validateEmailAndPassword(data) {

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const signUpSchema = z.object({
    email: z.string().email().regex(emailRegex).trim(),
    password: z.string().min(8, "Password must be at least 8 characters long"),
  });

  const result = signUpSchema.safeParse(data);
  //   result --> gives object of { success and data }
  if (result.success) {
    return {
      valid: true,
      data: result.data,
      errors: null,
    };
  } else {
    return {
      valid: false,
      data: null,
      errors: result.error.errors,
    };
  }
}

// Example usage
// const data = {
//   email: 'example@gmail.com',
//   password: '123456789',
  
// };

// const validationResult = validateEmailAndPassword(data);

// console.log(validationResult);

// if (validationResult.valid) {
//     console.log('Both email and password are valid.');
// } else {
//   console.log('Validation errors:', validationResult.errors);
// }
