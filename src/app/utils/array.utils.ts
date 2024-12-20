/**
 * Provide the [TypeScript] missing findLastIndex :(
 *
 * @param array - to traverse in reverse order
 * @param {predicateCallback} predicate - to check if a match is found
 */
export const findLastIndex = <T>(array: T[], predicate: (element: T, index: number, array: T[]) => boolean): number => {
  for(let i = array.length - 1; i >= 0; i--) {
    if (predicate(array[i], i, array)) return i;
  }
  return -1;
}

/**
 * A function to execute for each element in the array. It should return a truthy value to indicate a matching element
 * has been found, and a falsy value otherwise. The function is called with the following arguments
 *
 * @callback predicateCallback
 * @param element - current element being processed in the array
 * @param index - index of the current element being processed in the array
 * @param array - array findLastIndex() was called with
 */
