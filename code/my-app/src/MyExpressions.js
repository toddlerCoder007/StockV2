function MyExpressions() {
  /* use this for ternary operator */
  let isOn = false;

  /* Use this for iteration map */
  let array = [5, 4, 3, 2, 1];

  function myFunction(item) {
    return item + ' ';
  }

  return (
    <>
      <h2>Embedding JS expressions in JSX</h2>

      {/* Math expression */}
      <p>23 * 78 is {23 * 78}</p>

      {/* Math library functions */}
      <p>Square root of 81 is {Math.sqrt(81)}</p>

      {/* Conditional operators (ternary) */}
      {/* if...else will not work */}
      <p>The light is {isOn ? 'ON' : 'OFF'}</p>

      {/* Loop with map ... using callback function */}
      <p>Counting down: {array.map(myFunction)} </p>

      {/* Loop with map ... using arrow function */}
      <p>Counting down: {array.map((item) => item + ' ')} </p>
    </>
  );
}
export default MyExpressions;
