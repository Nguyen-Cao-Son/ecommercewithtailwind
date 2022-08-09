export function isReQuired (selector)  {

    return {
        selector,
        text: (value) => {
            return value.trim() ? undefined : true
        }
    }
    
}

