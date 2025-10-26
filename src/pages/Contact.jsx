import { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [formData, setFormData] = useState({
    contactName: "",
    contactEmail: "",
    contactSubject: "",
    contactMessage: "",
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState("");

  //email verif fx
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    // Clear error when user starts typing
    if (errors[id]) {
      setErrors((prev) => ({
        ...prev,
        [id]: "",
      }));
    }
  };
  //validate form data
  const validateForm = () => {
    const newErrors = {};
    if (!formData.contactName.trim()) {
      newErrors.contactName = "name is required";
    }
    if (!formData.contactEmail.trim()) {
      newErrors.contactEmail = "email is required";
    } else if (!validateEmail(formData.contactEmail)) {
      newErrors.contactEmail = "enter a valid email";
    }
    if (!formData.contactSubject.trim()) {
      newErrors.contactSubject = "subject is required";
    }
    if (!formData.contactMessage.trim()) {
      newErrors.contactMessage = "message is required";
    }

    return newErrors;
  };

  //handl submissions
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // submit data if valid form
    console.log("Form submitted:", formData);
    setSubmitStatus("success");

    // Clear form
    setFormData({
      contactName: "",
      contactEmail: "",
      contactSubject: "",
      contactMessage: "",
    });

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitStatus(""), 3000);
  };

  return (
    <div className="page">
      <div className="page-content">
        <div className="container">
          <div className="row mt-3">
            <div className="col-md-5">
              <div className="box">
                <h4>Get in touch with me</h4>
                <hr></hr>
                <div className="col-md-12">
                  {submitStatus === "success" && (
                    <div className="alert alert-success" role="alert">
                      Message sent{" "}
                    </div>
                  )}
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <label htmlFor="contactName" className="form-label">
                      Name:
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.contactName ? "is-invalid" : ""
                      }`}
                      id="contactName"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.contactName && (
                      <div className="invalid-feedback">
                        {errors.contactName}
                      </div>
                    )}
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="contactEmail" className="form-label">
                      Your email address:
                    </label>
                    <input
                      type="email"
                      className={`form-control ${
                        errors.contactEmail ? "is-invalid" : ""
                      }`}
                      id="contactEmail"
                      value={formData.email}
                      onChange={handleChange}
                      aria-describedby="emailHelp"
                    />
                    {errors.contactEmail && (
                      <div className="invalid-feedback">
                        {errors.contactEmail}
                      </div>
                    )}
                  </div>
                  {/*  put subject message here */}
                  <div className="form-group mb-3">
                    <label htmlFor="contactSubject" className="form-label">
                      Subject:
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.contactSubject ? "is-invalid" : ""
                      }`}
                      id="contactSubject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    {errors.contactSubject && (
                      <div className="invalid-feedback">
                        {errors.contactSubject}
                      </div>
                    )}
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="message" className="form-label">
                      Message:
                    </label>
                    <textarea
                      className={`form-control ${
                        errors.message ? "is-invalid" : ""
                      }`}
                      id="contactMessage"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                    ></textarea>
                    {errors.message && (
                      <div className="invalid-feedback">{errors.message}</div>
                    )}
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div class="col-md-7">
              <div className="resumeBox">
                <h3>Thomas Wallace</h3>
                <p>Full stack software developer</p>
                <div className="resumeContact">
                  <p>✉️ email@gmail.com</p>
                  <p>📞 888-888-8888</p>
                  <p>
                    <a
                      href="https://github.com/tomwalla917/final_drive_challenge"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub Repository
                    </a>
                  </p>
                </div>
                <h4 className="resumeHeader">Skills</h4>
                <div className="resumeContact">
                  <p>C#</p>
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>JavaScript</p>
                  <p>SQL</p>
                  <p>React</p>
                  <p>TypeScript</p>
                </div>
                <h4 className="resumeHeader">Experience</h4>
                <div class="resumeExp">
                  <div className="jobEntry">
                    <h5>Airspace Consultant</h5>
                    <ul>
                      <li>
                        {" "}
                        <p>FAA Marking and Lighting Tool</p>
                        <p>
                          Developed a web application that determines FAA
                          marking and lighting requirements for proposed
                          developments and filed structures. Built with
                          JavaScript, HTML, CSS, C#, and SQL.
                        </p>
                      </li>
                      <li>
                        <p>FAA Circle Search Tool</p>
                        <p>
                          Created a geospatial search tool enabling users to
                          identify active and completed FAA filings within a
                          specified radius of any location. Built with
                          JavaScript, HTML, CSS, C#, and SQL.
                        </p>
                      </li>
                      <li>
                        <p>Contract Management</p>
                        <p>
                          Serve as Lead Contract Liaison for major utility
                          provider accounts, coordinating communication between
                          transmission line engineers, project managers, and
                          cost analysts to ensure seamless project execution and
                          maintain strong client relationships.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="resumeExp">
                  <div className="jobEntry">
                    <h5>Job history 2</h5>
                    <p>role and functions</p>
                  </div>
                </div>
                <div class="resumeExp">
                  <div className="jobEntry">
                    <h5>Job history 3</h5>
                    <p>role and functions</p>
                  </div>
                </div>

                <h4 className="resumeHeader">Education</h4>
                <div className="education">
                  <p>
                    <strong>UCF SplitStack Software Development Program</strong>
                  </p>
                  <p>Full-stack web development certification</p>
                  <p>
                    <strong>
                      Bachelor of Science in Psychology and Criminal Justice
                    </strong>
                  </p>
                  <p>Mercer University | Graduated 2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
