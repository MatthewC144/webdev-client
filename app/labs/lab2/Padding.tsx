export default function Padding() {
  return (
    <div id="wd-css-paddings">
      <h2>Padding</h2>
      <div className="wd-padded-top-left wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow">
        Padded top left
      </div>
      <div className="wd-padded-bottom-right wd-border-fat wd-border-blue wd-border-solid wd-bg-color-yellow">
        Padded bottom right
      </div>
      <div className="wd-padding-fat wd-border-fat wd-border-yellow wd-border-solid wd-bg-color-blue wd-fg-color-white">
        Padded all around
      </div>

      <div
        id="wd-ai-padded"
        className="wd-padding-top-only wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow"
      >
        Padded top only
      </div>

      {/* 使用新的單邊 padding class 並加上粗邊框 */}
      <div className="wd-padding-left-only wd-border-fat wd-border-solid wd-border-red wd-bg-color-yellow">
        Padded Left Only (Fat Border)
      </div>

      <hr />

      <h3>Box Sizing Comparison</h3>
      
      <div className="wd-box-sizing-content">
        Content-Box (Width: 200px)
      </div>
      <br />
      <div className="wd-box-sizing-border">
        Border-Box (Width: 200px)
      </div>
    </div>
  );
}