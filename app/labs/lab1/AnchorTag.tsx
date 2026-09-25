export default function AnchorTag() {
    return (
        <>
            <h4>Anchor tag</h4>
            Please{" "}
            <a href="https://www.lipsum.com" id="wd-lipsum">
                click here
            </a>{" "}
            to get dummy text
            <br />
            <a href="https://github.com/jannunzi" id="wd-github">
                GitHub
            </a>

            <h3>My Personal Links</h3>
            <p>
                My Favorite Site:{" "}
                <a id="wd-your-link" href="https://www.youtube.com">
                    Youtube
                </a>
            </p>
            <p>
                My Profile:{" "}
                <a
                    id="wd-your-github"
                    href="https://github.com/MatthewC144"
                    target="_blank"
                    rel="noreferrer"
                >
                    My GitHub Profile
                </a>
            </p>

            <h3>AI Sample Link</h3>
            <p>
                MDN Documentation:{" "}
                <a
                    id="wd-ai-link"
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
                >
                    MDN: table element
                </a>
            </p>

            {/* Hash target anchor */}
            <p id="wd-anchor-bottom">
                You landed on this paragraph via the hash link above (#wd-anchor-bottom).
            </p>
        </>
    );
}