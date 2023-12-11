const validator = (data, schema) => {

    let errors = {}

    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
        console.log(error)
        const validationErrors = {};
        error.details.forEach((err) => {
            validationErrors[err.path[0]] = err.message;
        });
        errors = validationErrors
    }

    return { errors };
};

export default validator;