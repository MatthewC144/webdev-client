export default function Images() {
    return (
        <div id="wd-images">
            <h4>Image tag</h4>
            Loading an image from the internet:
            <br />
            <img
                id="wd-starship"
                width="400px"
                alt="Starship"
                src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
            />
            <br />
            Loading a local image:
            <br />
            <img
                id="wd-teslabot"
                src="/images/teslabot.jpg"
                height="200px"
                alt="Tesla Bot (Optimus) humanoid robot"
            />
            <br />
            My Personal Image
            <br />
            <img
                id="wd-your-image"
                src="https://images.seeklogo.com/logo-png/34/1/northeastern-university-logo-png_seeklogo-347559.png"
                alt="NEU"
                width="200px"
            />
            <br />
            AI Sample Image
            <br />
            <img
                id="wd-ai-image"
                src="https://www.nasa.gov/wp-content/uploads/2023/07/iss069e018537-1.jpg"
                alt="NASA"
                width="200px"
            />
        </div>
    );
}