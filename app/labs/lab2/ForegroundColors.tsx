export default function ForegroundColors() {
  return (
    <div id="wd-css-colors">
      <h2>Colors</h2>
      <h3 className="wd-fg-color-blue">Foreground color</h3>
      <p className="wd-fg-color-red">
        The text in this paragraph is red but{" "}
        <span className="wd-fg-color-green">this text is green</span>
      </p>

      <p className="wd-fg-color-pink">
        This main text is pink, but <span className="wd-fg-color-orange">this highlighted word is orange</span> and back to blue.
      </p>
      {/* AI Sample Paragraph */}
      <p id="wd-ai-fg" className="wd-fg-color-blue">
        This text is blue, but <span className="wd-fg-color-black">this text is black</span>.
      </p>
    </div>
  );
}
