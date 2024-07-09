/**
* Validation service contains the Form validation
**/

import * as Yup from 'yup';

/**
* Assign Validation for field
* @fields pass the name and Validation type
**/
const createSchema = (fields) => {
  const schema = {};
  fields.forEach((field) => {
    schema[field.name] = field.validation;
  });
  return Yup.object().shape(schema);
};

/**
* Form Validation function
* @values pass the input field value
* @fields pass the name and Validation type  }
**/
const validate = async (values, fields) => {
  const validationSchema = createSchema(fields);
  try {
    await validationSchema.validate(values, { abortEarly: false });
    return {};
  } catch (error) {
    const errors = {};
    error.inner.forEach((err) => {
      errors[err.path] = err.message;
    });
    return errors;
  }
};

export {validate};