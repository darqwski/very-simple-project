module.exports = {
    verbose: true,
    reporters: ['default'],
    modulePaths: ['node_modules', '<rootDir>'],
    transform: {
        '^.+\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest',
        '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$'],
    testTimeout: 30000,
    testEnvironment: 'jest-environment-jsdom',
    testEnvironmentOptions: {
        url: 'http://localhost/',
    },
}
