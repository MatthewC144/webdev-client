export default function YourForm() {
  return (
    <form id="wd-your-form">
        <h2>Student Profile</h2>
        <h4>Personal Information</h4>
        <label htmlFor="wd-your-first-name">First Name:</label><br />
        <input
            id="wd-your-first-name"
            type="text"
            placeholder="Yu"
            defaultValue="Yu"
        /><br /><br />

        <label htmlFor="wd-your-last-name">Last Name:</label><br />
        <input
            id="wd-your-last-name"
            type="text"
            placeholder="Chen"
            defaultValue="Chen"
        /><br /><br />

        <label htmlFor="wd-your-password">Student ID / Password:</label><br />
        <input
            id="wd-your-password"
            type="password"
            defaultValue="002123456"
        /><br /><br />

        <h4>Biography</h4>
        <label htmlFor="wd-your-bio">Why I am taking this course:</label><br />
        <textarea
            id="wd-your-bio"
            cols={40}
            rows={5}
            defaultValue="I am taking Web Development to learn how to build full-stack applications."
        /><br /><br />

        <h4>Class Standing</h4>
        <input
            type="radio"
            name="your-class-standing"
            id="wd-your-freshman"
        />
        <label htmlFor="wd-your-freshman">Freshman</label><br />
        <input
            type="radio"
            name="your-class-standing"
            id="wd-your-sophomore"
        />
        <label htmlFor="wd-your-sophomore">Sophomore</label><br />
        <input
            type="radio"
            name="your-class-standing"
            id="wd-your-junior"
        />
        <label htmlFor="wd-your-junior">Junior</label><br />
        <input
            type="radio"
            name="your-class-standing"
            id="wd-your-senior"
        />
        <label htmlFor="wd-your-senior">Senior</label><br />
        <input
            type="radio"
            name="your-class-standing"
            id="wd-your-graduate"
            defaultChecked
        />
        <label htmlFor="wd-your-graduate">Graduate</label><br /><br />

        <h4>Enrollment Status</h4>
        <input
            type="radio"
            name="your-enrollment-status"
            id="wd-your-full-time"
            defaultChecked
        />
        <label htmlFor="wd-your-full-time">Full-Time</label><br />
        <input
            type="radio"
            name="your-enrollment-status"
            id="wd-your-part-time"
        />
        <label htmlFor="wd-your-part-time">Part-Time</label><br /><br />

        <h4>Interests & Goals</h4>
        <input
            type="checkbox"
            id="wd-your-interest-react"
            defaultChecked
        />
        <label htmlFor="wd-your-interest-react">React & Next.js</label><br />
        <input
            type="checkbox"
            id="wd-your-interest-node"
            defaultChecked
        />
        <label htmlFor="wd-your-interest-node">Node.js & Express</label><br />
        <input
            type="checkbox"
            id="wd-your-interest-ai"
        />
        <label htmlFor="wd-your-interest-ai">AI Integration</label><br /><br />

        <h4>Academic Focus</h4>
        <label htmlFor="wd-your-major">Major / College:</label><br />
        <select id="wd-your-major" defaultValue="CS">
            <option value="CS">Computer Science</option>
            <option value="DS">Data Science</option>
            <option value="IS">Information Systems</option>
            <option value="SE">Software Engineering</option>
        </select><br /><br />

        <label htmlFor="wd-your-topics">Topics to deepen this term (hold Ctrl/Cmd to select multiple):</label><br />
        <select
            id="wd-your-topics"
            multiple
            size={4}
            defaultValue={["frontend", "backend"]}
        >
            <option value="frontend">Frontend Frameworks</option>
            <option value="backend">REST APIs & Servers</option>
            <option value="database">Database Systems</option>
            <option value="devops">Cloud & Deployment</option>
        </select><br /><br />

        <h4>Additional Info</h4>
        <label htmlFor="wd-your-email">School Email:</label><br />
        <input
            type="email"
            id="wd-your-email"
            placeholder="chen.y9@northeastern.edu"
            defaultValue="chen.y9@northeastern.edu"
        /><br /><br />

        <label htmlFor="wd-your-grad-year">Expected Graduation Year:</label><br />
        <input
            type="number"
            id="wd-your-grad-year"
            min={2024}
            max={2030}
            defaultValue={2027}
        /><br /><br />

        <label htmlFor="wd-your-start-date">Program Start Date:</label><br />
        <input
            type="date"
            id="wd-your-start-date"
            defaultValue="2025-09-01"
        /><br /><br />

        <label htmlFor="wd-your-excitement">Course Excitement Level (0-10):</label><br />
        <input
            type="range"
            id="wd-your-excitement"
            min={0}
            max={10}
            defaultValue={9}
        /><br /><br />

        <button type="submit" id="wd-your-save-btn">
            Save Profile
        </button>{" "}
        <button type="button" id="wd-your-cancel-btn">
            Cancel
        </button>
        </form>
  );
}