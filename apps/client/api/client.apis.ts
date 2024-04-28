import { baseUrl } from './index';

const client = {
    registerApi: `${baseUrl}/client/register`,
    changePasswordApi: `${baseUrl}/users/change-password`,
    loginApi: `${baseUrl}/auth/create-session`,
    accountCreateApi: `${baseUrl}/client/account`,
    logoutApi: `${baseUrl}/auth/logout`,
};

export { client };
