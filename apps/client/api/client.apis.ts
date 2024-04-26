import { baseUrl } from './index';

const client = {
    registerApi: `${baseUrl}/client/register`,
    loginApi: `${baseUrl}/auth/create-session`,
    accountCreateApi: `${baseUrl}/client/account`,
    logoutApi: `${baseUrl}/auth/logout`,
};

export { client };
