

export function formValidate(Option) {
    let errorMessage = true
    Option.rules.forEach((rule) => {
        const inputElement = rule.selector.current
        //*lấy error element thông qua parent element 
        if (inputElement) { //*lấy ra các element trong rule selector   
            inputElement.onblur = function () {
                const errorElement = inputElement.parentElement.querySelector(Option.error)
                errorMessage = rule.text(inputElement.value)
                //*error message có hai giá trị true hoặc undefine
                console.log('error message', errorMessage);
                if (errorMessage) { //* khi có lỗi 
                    errorElement.classList.remove('hidden')
                    inputElement.classList.add('border-red-600')
                }
                else {             //* khi không có lỗi
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

