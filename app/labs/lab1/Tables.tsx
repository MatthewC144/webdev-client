export default function Tables() {
    return (
        <div id="wd-tables">
            <h4>Table Tag</h4>
            <table border={1} width="100%">
                <thead>
                    <tr>
                        <th>Quiz</th>
                        <th align="center">Topic</th>
                        <th align="center">Date</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Q1</td>
                        <td align="center">HTML</td>
                        <td align="center">2/3/21</td>
                        <td align="right">85</td>
                    </tr>
                    <tr>
                        <td>Q2</td>
                        <td align="center">CSS</td>
                        <td align="center">2/10/21</td>
                        <td align="right">90</td>
                    </tr>
                    <tr>
                        <td>Q3</td>
                        <td align="center">JavaScript</td>
                        <td align="center">2/17/21</td>
                        <td align="right">95</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>Average</td>
                        <td align="right">90</td>
                    </tr>
                </tfoot>
            </table>


            <h4>My Schedule</h4>
            <table id="wd-your-table" border={1} width="100%">
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Activity</th>
                        <th align="right">Time (Hours)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td align="center">Monday</td>
                        <td>Web Development Lecture</td>
                        <td align="right">2.5</td>
                    </tr>
                    <tr>
                        <td align="center">Wednesday</td>
                        <td>Database</td>
                        <td align="right">2.0</td>
                    </tr>
                    <tr>
                        <td align="center">Friday</td>
                        <td>Algorithm</td>
                        <td align="right">3.0</td>
                    </tr>
                    <tr>
                        <td align="center">Sunday</td>
                        <td>Assignment</td>
                        <td align="right">4.0</td>
                    </tr>
                </tbody>
            </table>

            <h4>AI Table</h4>
            <table border={1} width="100%">
                <thead>
                    <tr>
                        <th>Quiz</th>
                        <th>Topic</th>
                        <th>Date</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Q1</td>
                        <td align="center">HTML</td>
                        <td align="center">2/3/21</td>
                        <td align="right">85</td>
                    </tr>
                    <tr>
                        <td>Q2</td>
                        <td align="center">CSS</td>
                        <td align="center">2/10/21</td>
                        <td align="right">90</td>
                    </tr>
                    <tr>
                        <td>Q3</td>
                        <td align="center">JavaScript</td>
                        <td align="center">2/17/21</td>
                        <td align="right">95</td>
                    </tr>
                    <tr>
                        <td>Q4</td>
                        <td align="center">React</td>
                        <td align="center">2/24/21</td>
                        <td align="right">88</td>
                    </tr>
                    <tr>
                        <td>Q5</td>
                        <td align="center">Routing</td>
                        <td align="center">3/3/21</td>
                        <td align="right">92</td>
                    </tr>
                    <tr>
                        <td>Q6</td>
                        <td align="center">State Management</td>
                        <td align="center">3/10/21</td>
                        <td align="right">90</td>
                    </tr>
                    <tr>
                        <td>Q7</td>
                        <td align="center">Node.js</td>
                        <td align="center">3/17/21</td>
                        <td align="right">84</td>
                    </tr>
                    <tr>
                        <td>Q8</td>
                        <td align="center">REST APIs</td>
                        <td align="center">3/24/21</td>
                        <td align="right">96</td>
                    </tr>
                    <tr>
                        <td>Q9</td>
                        <td align="center">MongoDB</td>
                        <td align="center">3/31/21</td>
                        <td align="right">91</td>
                    </tr>
                    <tr>
                        <td>Q10</td>
                        <td align="center">Deployment</td>
                        <td align="center">4/7/21</td>
                        <td align="right">89</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>Average</td>
                        <td align="right">90</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}