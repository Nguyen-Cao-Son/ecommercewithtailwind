import { formValidate, formValidateOnSubmit } from "./fromValidate"
import React, { useEffect } from "react"



const FormRule = (Option,) => {

    let invalid = true
    const formElement = Option.form.current
    const formGroupElement = Option.formGroup.current
    const submitElement = Option.submit.current

    if (formElement) {
        if (formGroupElement) {
            formValidate(Option)
        }
    
    }
}






export default FormRule