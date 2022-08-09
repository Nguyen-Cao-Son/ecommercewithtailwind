

function formValidate(Option){
    let errorMessage = true
    Option.rules.forEach((rule) => {
        const inputElement = rule.selector.current
        //lấy error element thông qua parent element 
        console.log(inputElement);
        if (inputElement) {
            inputElement.onblur = function () {
                const errorElement = inputElement.parentElement.querySelector(Option.error)
                errorMessage = rule.text(inputElement.value)
                //error message có hai giá trị true hoặc undefine
                console.log('error message',errorMessage);
                if (errorMessage) {
                    errorElement.classList.remove('hidden')
                    inputElement.classList.add('border-red-600')
                }
                else {
                    errorElement.classList.add('hidden')
                    inputElement.classList.remove('border-red-600')
                }
            }
            //khi nhập vào thì hidden warning
            inputElement.oninput = function () {
                const errorElement = inputElement.parentElement.querySelector(Option.error)
                //error message có hai giá trị true hoặc undefine
                errorElement.classList.add('hidden')
                inputElement.classList.remove('border-red-600')
            }
        }
    }
)
 return errorMessage
}

export default formValidate
