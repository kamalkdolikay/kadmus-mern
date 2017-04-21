module.exports = function validateLoginForm(payload){
    const errors = {};
    let isFormValid = true;
    let message = '';

    if(!payload || typeof payload.user !== 'string' || payload.user.trim().length === 0){
        isFormValid = false
        errors.user = 'Please provide your name'
    }

    if(!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0){
        isFormValid = false
        errors.password = 'Please provide your password'
    }

    if(!isFormValid){
        message = 'Check the form for errors'
    }

    return {
        success: isFormValid,
        message,
        errors
    }
}