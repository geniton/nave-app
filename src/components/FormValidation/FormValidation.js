import React from "react";

const validUrl = value => /^(ftp|http|https):\/\/[^ "]+$/.test(value)
const validName = value => /^[a-z][a-z\s]*$/gim.test(value);
const validEmail = value => /^[\w._+-]+(\.\w+)?@\w+\.[\w]+(\.[\w]+)?$/gim.test(value);
const validMinlength = (value, length) => value.length >= parseInt(length);

const FormValidation = (props) => {

	const submitHandler = e => {
    let formError = {};
    let isValid = true;
    
    e.preventDefault();
    
    const $validatedInputs = e.target.querySelectorAll("[data-validation]");
    
		const updateFromErrorState = (inputName) => {
      formError = {
        ...formError,
        [inputName]: true
      }
			isValid = false;
      
			return formError;
		};

		$validatedInputs.forEach($input => {
      const validation = $input.getAttribute("data-validation");
			const inputName = $input.getAttribute("name");
      const inputValue = $input.value.trim();
      
      if (/name/.test(validation) && !validName(inputValue))
      updateFromErrorState(inputName);
      if (/url/.test(validation) && !validUrl(inputValue))
      updateFromErrorState(inputName);
			if (/email/.test(validation) && !validEmail(inputValue))
        updateFromErrorState(inputName);
      if (/minlength/.test(validation) && !validMinlength(inputValue,$input.getAttribute("data-min-length")))
        updateFromErrorState(inputName);
      if (/required/.test(validation) && (!inputValue || inputValue.length <= 0))
      updateFromErrorState(inputName);
    });

	  props.onSubmit(e, isValid, formError);
	};

  return (
    <form
      onSubmit={submitHandler}
    >
      {props.children}
    </form>
  );
}

export default FormValidation;
