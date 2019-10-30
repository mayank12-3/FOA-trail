const Validate = (() => {
    const Number = (number = '') => {
        const regex = /^[0-9]*$/;
        return number ? regex.test(number) : true;
    }

    const Text = (text = '') => {
        const regex = /(^[a-z ]+$)/i;
        return text ? regex.test(text) : true;
    }

    const Email = (email = '') => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return email ? regex.test(email) : true;
    }
    
    return {
        Number,
        Text,
        Email
    }
})();

export default Validate;