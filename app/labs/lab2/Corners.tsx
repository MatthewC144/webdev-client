export default function Corners() {
    return (
        <div id="wd-css-corners">
            <h2>Rounded corners</h2>
            <p className="wd-rounded-corners-top wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
                Rounded corners on the top
            </p>
            <p className="wd-rounded-corners-bottom wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
                Rounded corners at the bottom
            </p>
            <p className="wd-rounded-corners-all-around wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
                Rounded corners all around
            </p>
            <p className="wd-rounded-corners-inline wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
                Different rounded corners
            </p>

            <p className="wd-rounded-corners-inline-2 wd-border-thin wd-border-yellow wd-border-solid wd-padding-fat">
                My rounded corneres with border-radius: 60px 20px 0px 15px.
            </p>

            <p
                id="wd-ai-corners"
                className="wd-ai-rounded-left wd-border-thin wd-border-blue wd-border-solid wd-padding-fat"
            >
                Rounded left
            </p>

        </div>
    );
}