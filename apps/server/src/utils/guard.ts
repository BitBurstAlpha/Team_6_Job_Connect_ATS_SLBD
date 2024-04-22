import g from 'express-jwt-permissions';

export const guard = g({
    requestProperty: 'identity',
    permissionsProperty: 'scopes',
});
