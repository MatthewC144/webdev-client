export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let sampleCount = 42;
  let sampleLabel = "Lab 3";
  let booleanVariable = true;
  let my_name = "Yu Chen";
  let my_age = 25;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;
  let isSampleCount = typeof sampleCount;
  let isSampleLabel = typeof sampleLabel;
  let ismyString = typeof my_name;
  let ismyNumber = typeof my_age;
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}
      <br />
      floatingPointNumber = {floatingPointNumber}
      <br />
      stringVariable = {stringVariable}
      <br />
      booleanVariable = {booleanVariable + ""}
      <br />
      sampleCount = {sampleCount}
      <br />
      sampleLabel = {sampleLabel}
      <br />
      my_name = {my_name}
      <br />
      my_age = {my_age}
      <br />
      isNumber = {isNumber}
      <br />
      isString = {isString}
      <br />
      isBoolean = {isBoolean}
      <br />
      isSampleCount = {isSampleCount}
      <br />
      isSampleLabel = {isSampleLabel}
      <br />
      ismyString = {ismyString}
      <br />
      ismyNumber = {ismyNumber}
      <hr />
    </div>
  );
}