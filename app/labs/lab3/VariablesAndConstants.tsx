import { Micro_5 } from "next/font/google";

export default function VariablesAndConstants() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  let my_number = 5;
  const constant2 = blockScoped * my_number;
  const sampleSum = functionScoped + blockScoped;
  return (
    <div id="wd-variables-and-constants">
      <h4>Variables and Constants</h4>
      functionScoped = {functionScoped}
      <br />
      blockScoped = {blockScoped}
      <br />
      constant1 = {constant1}
      <br />
      sampleSum = {sampleSum}
      <br />
      my_number = {my_number}
      <br />
      constant2 = {constant2}
      <hr />
    </div>
  );
}