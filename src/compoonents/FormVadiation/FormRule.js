import { formValidate } from "./fromValidate"


const FormRule = (Option, newDatas) => {
    // console.log('data',newDatas);
    let invalid = true
    const formElement = Option.form.current
    const formGroupElement = Option.formGroup.current
    const submitElement = Option.submit.current
    if (formElement) {
        if (formGroupElement) {
            formValidate(Option)
        }
        if (submitElement) {
            if (invalid) {
                formElement.onsubmit = (e) => {
                    console.log(newDatas)
                    e.preventDefault();
                    const invalidCheck = formValidate(Option)
                    if (invalidCheck) {
                        Option.rules.forEach((rule) => {
                            const inputElement = rule.selector.current
                            const errorElement = inputElement.parentElement.querySelector(Option.error)
                            const errorMessage = rule.text(inputElement.value)
                            //error message có hai giá trị true hoặc undefine
                            console.log('error message', errorMessage);
                            if (errorMessage) {
                                errorElement.classList.remove('hidden')
                                inputElement.classList.add('border-red-600')
                            }
                            else {
                                errorElement.classList.add('hidden')
                                inputElement.classList.remove('border-red-600')
                            }
                        })
                        invalid = false;
                    }
                    else {
                        invalid = true

                    }
                }
            }

        }
    }

}



export default FormRule