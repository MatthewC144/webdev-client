"use client";

const hello = () => {
  alert("Hello World!");
};
const goodbye = () => {
  alert("Goodbye World!");
};
const myName = () => {
    alert("Hi! im Yu Chen.")
}

export default function ClickEvent() {
  return (
    <div id="wd-click-event">
      <h2>Click Event</h2>
      <button
        type="button"
        onClick={hello}
        id="wd-onclick-hello"
        className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Click Hello
      </button>
      <button
        type="button"
        onClick={goodbye}
        id="wd-onclick-goodbye"
        className="ml-2 rounded bg-neutral-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Click Goodbye
      </button>
      <button
      type='button'
      onClick={myName}
      id="wd-onclick-myname"
      className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
>
        Click myName
      </button>
      <hr />
    </div>
  );
}