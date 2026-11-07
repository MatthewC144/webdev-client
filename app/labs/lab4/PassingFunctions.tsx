export default function PassingFunctions({
  message,
  theFunction,
  theOtherFunction,
  theNameFunction,

}: {
  message: string;
  theFunction: (message: string) => void;
  theOtherFunction?: () => void;
  theNameFunction: (message: string) => void;
}) {
  return (
    <div id="wd-passing-functions">
      <h2>Passing Functions</h2>
      <button
        type="button"
        onClick={() => theFunction(`From parent: ${message}`)}
        id="wd-pass-functions-click"
        className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke the Function
      </button>
      {theOtherFunction && (
        <button
          type="button"
          onClick={theOtherFunction}
          id="wd-pass-functions-other-click"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
        >
          Invoke the Other Function
        </button>
      )}
      <button
        type="button"
        onClick={() => theNameFunction(`From parent: ${message}`)}
        id="wd-pass-functions-click"
        className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Print my Name.
      </button>

      <hr />
    </div>
  );
}