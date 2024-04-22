import jwt from 'jsonwebtoken';
import { config } from '../config';

export function signJwt(
    object: Object,
    keyName: 'JWT_ACCESS_KEY',
    options?: jwt.SignOptions | undefined,
) {
    return jwt.sign(object, config[keyName] as string, {
        ...(options && options),
    });
}
