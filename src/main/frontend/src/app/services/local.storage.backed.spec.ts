import { LocalStorageBackedService } from './local.storage.backed';


// we need to mock the LocalStorageBackedService class to test its protected methods
class MockClass extends LocalStorageBackedService {
    constructor() {
        super();
    }
    // expose protected method as public
    public override reduceDistinct<T>(a1: T[], a2: T[], cmp: (i1: T, i2: T) => boolean): T[] {
        return super.reduceDistinct(a1, a2, cmp);
    }
}

describe('LocalStorageBackedService', () => {
    let mock: MockClass;

    beforeAll(() => {
        mock = new MockClass();
    });

    describe('reduceDistinct', () => {
        it('should return distinct elements from both arrays based on comparison function', () => {
            const array1 = [1, 2, 3];
            const array2 = [3, 4, 5];
            const result = mock.reduceDistinct(array1, array2, (a, b) => a === b);
            expect(result).toEqual([3, 4, 5, 1, 2]);
        });

        it('should return the second array if the first array is empty', () => {
            const array1: number[] = [];
            const array2 = [3, 4, 5];
            const result = mock.reduceDistinct(array1, array2, (a, b) => a === b);
            expect(result).toEqual([3, 4, 5]);
        });

        it('should return the first array if the second array is empty', () => {
            const array1 = [1, 2, 3];
            const array2: number[] = [];
            const result = mock.reduceDistinct(array1, array2, (a, b) => a === b);
            expect(result).toEqual([1, 2, 3]);
        });

        it('should return an empty array if both arrays are empty', () => {
            const array1: number[] = [];
            const array2: number[] = [];
            const result = mock.reduceDistinct(array1, array2, (a, b) => a === b);
            expect(result).toEqual([]);
        });

        it('should handle complex objects with custom comparison function', () => {
            const array1 = [{ id: 1 }, { id: 2 }];
            const array2 = [{ id: 2 }, { id: 3 }];
            const result = mock.reduceDistinct(array1, array2, (a, b) => a.id === b.id);
            expect(result).toEqual([{ id: 2 }, { id: 3 }, { id: 1 }]);
        });
    });
});