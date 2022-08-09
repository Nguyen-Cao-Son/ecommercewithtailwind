export function isReQuired(selector) {

    return {
        selector,
        text: (value) => {
            return value.trim() ? undefined : true
        }
    }
}
export function isUrl(selector) {
    return {
        selector,
        text: (value) => {
            const regex = "^(?:(?:http(?:s)?|ftp)://)(?:\\S+(?::(?:\\S)*)?@)?(?:(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)(?:\\.(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)*(?:\\.(?:[a-z0-9\u00a1-\uffff]){2,})(?::(?:\\d){2,5})?(?:/(?:\\S)*)?$";
            return regex.test(value) ? undefined : true
        }
    }

}



