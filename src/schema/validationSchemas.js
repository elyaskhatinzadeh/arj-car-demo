import Joi from "joi";

const validationSchemas = {
    post: Joi.object({
        _method: Joi.string().optional().valid('put'),
        token: Joi.string().required().min(12).max(128),
    }),
};

export default validationSchemas;