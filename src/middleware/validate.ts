import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { ValidationError } from '../utils/errors';

type ValidationSource = 'body' | 'params' | 'query';

export const validate = (
    schema: Joi.ObjectSchema,
    source: ValidationSource = 'body'
) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error, value } = schema.validate(req[source], {
            abortEarly: false,
            stripUnknown: true,
            convert: true,
        });

        if (error) {
            const details = error.details.map((detail) => ({
                field: detail.path.join('.'),
                message: detail.message,
                type: detail.type,
            }));

            const message = details.map(d => d.message).join(', ');

            return next(new ValidationError(message, details));
        }

        if (source === 'query') {
            Object.defineProperty(req, 'query', {
                value,
                writable: true,
                configurable: true,
                enumerable: true,
            });
        } else {
            req[source] = value;
        }

        next();
    };
};