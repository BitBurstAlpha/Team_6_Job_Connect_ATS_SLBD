module.exports = {
    ...require('eslint-config/eslint-server'),
    parserOptions: {
        root: true,
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.eslint.json'],
    },
};
