/**
 * Takes an array of Higher Order Component functions and curries
 * them into a final Higher Order component
 * @param  {...function} funcs Array of higher order functions
 * @return {component}   React component composed from other functions
 */
export function composer(...funcs) {
  // If only one HoC is in the args, reduce
  // skips the callback. Therefore, pass an initialValue
  // with the component using the first HoC in the args
  return (component) => funcs.reduce(
    (prev, curr) => curr(prev),
    funcs[0](component)
  );
}
