import { baseUrl } from './index';

const client = {
    registerApi: `${baseUrl}/client/register`,
    loginApi: `${baseUrl}/auth/create-session`,
};

export { client };
