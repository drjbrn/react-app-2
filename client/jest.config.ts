export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '\\.(css|less)$': 'identity-obj-proxy',
    '^.+\\.svg$': 'jest-transformer-svg',
  },
  globals: {
    tsconfig: './tsconfig.json',
    babelConfig: true,
  },
};
