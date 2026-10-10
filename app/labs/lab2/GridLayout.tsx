export default function GridLayout() {
  return (
    <div id="wd-css-grid-layout">
      <h2>Grid layout</h2>
      <div className="wd-grid-row">
        <div className="wd-grid-col-half-page wd-bg-color-yellow">
          <h3>Left half</h3>
        </div>
        <div className="wd-grid-col-half-page wd-bg-color-blue wd-fg-color-white">
          <h3>Right half</h3>
        </div>
      </div>
      <div className="wd-grid-row">
        <div className="wd-grid-col-left-sidebar wd-bg-color-yellow">
          <h3>Side bar</h3>
        </div>
        <div className="wd-grid-col-main-content wd-bg-color-blue wd-fg-color-white">
          <h3>Main content</h3>
        </div>
        <div className="wd-grid-col-right-sidebar wd-bg-color-green wd-fg-color-white">
          <h3>Side bar</h3>
        </div>
      </div>
      <div id="wd-ai-grid" className="wd-grid-row">
        <div className="wd-grid-col-third-page wd-bg-color-green wd-fg-color-white">
          <h3>One Third</h3>
        </div>
        <div className="wd-grid-col-two-thirds-page wd-bg-color-red wd-fg-color-white">
          <h3>Two Thirds</h3>
        </div>
      </div>
      <div className="wd-grid-row">
        <div className="wd-grid-col-1-sidebar wd-bg-color-yellow">
          <h3>1 Side bar</h3>
        </div>
        <div className="wd-grid-col-2-sidebar wd-bg-color-blue wd-fg-color-white">
          <h3>2 Side bar</h3>
        </div>
        <div className="wd-grid-col-3-sidebar wd-bg-color-green wd-fg-color-white">
          <h3>3 Side bar</h3>
        </div>
        <div className="wd-grid-col-4-sidebar wd-bg-color-purple wd-fg-color-white">
          <h3>4 Side bar</h3>
        </div>
        <div className="wd-float-done" />
      </div>
    </div>
  );
}