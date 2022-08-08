import { faPray } from "@fortawesome/free-solid-svg-icons"



const FormRule = ({ ...Option }) => {
    const formElement = document.querySelector(Option.form)
    if (formElement) {
    //  Option.rules
    }
 
}
const isReQuired = (selector) => {
    return {
        selector,
        text: (value) => {
            return value.trim() ? undefined : 'vui long nhap truong nay'
        }
    }
}
export { isReQuired }
export default FormRule