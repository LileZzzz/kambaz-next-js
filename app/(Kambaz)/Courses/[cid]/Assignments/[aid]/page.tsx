export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea
        id="wd-description"
        cols={50}
        rows={10}
        defaultValue="The assignment is available online Submit a link to the landing page of"
      ></textarea>
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="EXAMS">EXAMS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="PROJECTS">PROJECTS</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as" defaultValue="Percentage">
                <option value="Percentage">Percentage</option>
                <option value="Number">Number</option>
                <option value="Letter">Letter</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type" defaultValue="Online">
                <option value="Online">Online</option>
                <option value="In-Person">In-Person</option>
              </select>
            </td>
          </tr>

          <tr>
            <td> </td>
            <td>
              <label>Online Entry Options</label>
              <br />
              <input type="checkbox" name="check-genre" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label>
              <br />
              <input type="checkbox" name="check-genre" id="wd-website-url" />
              <label htmlFor="wd-website-url">Website URL</label>
              <br />
              <input
                type="checkbox"
                name="check-genre"
                id="wd-wd-media-recordings"
              />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
              <br />
              <input
                type="checkbox"
                name="check-genre"
                id="wd-student-annotation"
              />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
              <br />
              <input type="checkbox" name="check-genre" id="wd-file-upload" />
              <label htmlFor="wd-file-upload">File Uploads</label>
              <br />
              <br />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <td>
              <label> Assign to</label>
              <br />
              <input id="wd-assign-to" defaultValue={"Everyone"} />
              <br />
              <br />
              <label htmlFor="wd-due-date"> Due </label>
              <br />
              <input type="date" defaultValue="2024-05-13" id="wd-due-date" />
              <br />
              <br />
              <label htmlFor="wd-available-from"> Available from </label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label htmlFor="wd-available-until">Until</label>
              <br />
              <input
                type="date"
                defaultValue="2024-05-06"
                id="wd-available-from"
              />
              &nbsp;&nbsp;
              <input
                type="date"
                defaultValue="2024-05-20"
                id="wd-available-until"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <hr />
      
      <table width="100%">
        <tbody>
          <tr>
            <td align="right">
              <button>Cancel</button>
              &nbsp;&nbsp;
              <button>Save</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
