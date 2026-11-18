import { Router } from 'express';
import { UserController } from '../controllers/userController';
import { validate } from '../middleware/validate';
import { authMiddleware } from '../middleware/auth';
import {
    createUserSchema,
    updateUserSchema,
    idParamSchema,
    paginationQuerySchema
} from '../dto/user.dto';
import { asyncHandler } from '../utils/asyncHandler';

export const userRoutes = Router();

// All /api/users routes require a valid Bearer token
userRoutes.use(authMiddleware);

userRoutes.get(
    '/',
    validate(paginationQuerySchema, 'query'),
    asyncHandler(UserController.getAll)
);

userRoutes.get(
    '/:id',
    validate(idParamSchema, 'params'),
    asyncHandler(UserController.getById)
);

userRoutes.post(
    '/',
    validate(createUserSchema),
    asyncHandler(UserController.create)
);

userRoutes.put(
    '/:id',
    validate(idParamSchema, 'params'),
    validate(updateUserSchema),
    asyncHandler(UserController.update)
);

userRoutes.delete(
    '/:id',
    validate(idParamSchema, 'params'),
    asyncHandler(UserController.delete)
);
