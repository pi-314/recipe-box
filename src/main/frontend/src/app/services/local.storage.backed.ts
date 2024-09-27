export class LocalStorageBackedService {
    
    protected readonly isLocalStorageAvailable = typeof localStorage !== 'undefined';

    /**
     * Reduces two arrays into a single array containing distinct elements based on a comparison function.
     * Note: if comparing complex objects partially (i.e. i1.id === i2.id), the order of a1 and a2 affects, 
     * which partially matching elements will be included in the result. In this case a2 elements will be included.
     *
     * @template T - The type of elements in the arrays.
     * @param {T[]} a1 - The first array to reduce.
     * @param {T[]} a2 - The second array to reduce.
     * @param {(i1: T, i2: T) => boolean} cmp - A comparison function that determines if two elements are considered equal.
     * @returns {T[]} - A new array containing distinct elements from both input arrays.
     */
    protected reduceDistinct<T>(a1: T[], a2: T[], cmp: (i1: T, i2: T) => boolean): T[] {
        return a1.reduce((acc: T[], i2: T) => {
            if (!acc.some((i1: T) => cmp(i1, i2))) {
                acc.push(i2);
            }
            return acc;
        }, a2);
    }
    



}