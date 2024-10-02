import { compilerOptions } from './tsconfig.json'
import { pathsToModuleNameMapper } from 'ts-jest'
import type { JestConfigWithTsJest } from 'ts-jest'

export default {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    /**
     * Let Jest know about the compilerOptions.paths mapping specified in tsconfig.json,
     * so it can also compile and run i.e. the Spartan library components tests.
     * For more details s. https://kulshekhar.github.io/ts-jest/docs/getting-started/paths-mapping/
    */
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths , { prefix: '<rootDir>/' }),

    testPathIgnorePatterns: [
       '<rootDir>/libs/spartan/', /* Uncomment to ignore Spartan library tests. */
       // '<rootDir>/projects/recipe-box/src/app/app.component.spec.ts', /* Ignore individual test, i.e. app.component.spec.ts test. */
   ],

} satisfies JestConfigWithTsJest;
