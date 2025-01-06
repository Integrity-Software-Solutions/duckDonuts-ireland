import React, { useState, useEffect } from "react";
import JobsEntryImage from "/assets/images/JobPageImages/JobsEntryImage.jpg";
import jobOpenings from "../data/job_openings.json";
import { useParams } from "react-router-dom";
import purpleWave from "/assets/images/ContactPageImages/ContactPagePurpleWave.png";

const JobApplication = () => {
  const { id } = useParams(); // Get the dynamic `id` from the URL

  const [showBackground, setShowBackground] = useState(false);
  const [fileName, setFileName] = useState("No file chosen");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    eighteenOrOlder: null,
    cvOrResume: null,
  });

  const [focusedField, setFocusedField] = useState(""); // Track the focused field
  const [validationErrors, setValidationErrors] = useState({
    firstName: false,
    lastName: false,
    phone: false,
    email: false,
    cvOrResume: false,
    eighteenOrOlder: false,
  });

  const handleFocus = (e) => {
    setFocusedField(e.target.name); // Set the currently focused field
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setFocusedField("");
    setValidationErrors((prev) => ({
      ...prev,
      [name]: value === "" && name !== "cvOrResume", // Skip validation for file input
    }));
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value === "yes" ? true : false, // Store boolean based on selection
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validFormats = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!validFormats.includes(file.type)) {
        alert("Only PDF or Word documents are allowed.");
        setFormData((prev) => ({ ...prev, cvOrResume: null }));
        setValidationErrors((prev) => ({ ...prev, cvOrResume: true }));
      } else if (file.size > 10 * 1024 * 1024) {
        alert("File size must not exceed 10MB.");
        setFormData((prev) => ({ ...prev, cvOrResume: null }));
        setValidationErrors((prev) => ({ ...prev, cvOrResume: true }));
      } else {
        const file = e.target.files[0]; // Get the first file selected
        setFileName(file ? file.name : "No file chosen"); // Update the file name or show a default message
        setFormData((prev) => ({ ...prev, cvOrResume: file }));
        setValidationErrors((prev) => ({ ...prev, cvOrResume: false }));
      }
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if "18 or Older" has been selected
    if (formData.eighteenOrOlder === null) {
      setValidationErrors((prev) => ({ ...prev, eighteenOrOlder: true }));
      return;
    }

    // Check if all required fields are filled
    const fieldsToValidate = [
      "firstName",
      "lastName",
      "phone",
      "email",
      "cvOrResume",
    ];
    const errors = {};
    let hasError = false;

    fieldsToValidate.forEach((field) => {
      if (!formData[field]) {
        errors[field] = true;
        hasError = true;
      }
    });

    if (hasError) {
      setValidationErrors((prev) => ({ ...prev, ...errors }));
      return;
    }

    // If all validations pass
    console.log("Form submitted:", formData);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowBackground(true);
    }, 1000);
  }, []);

  const job = jobOpenings.find((position) => position.jobId === Number(id));

  return (
    <div className="h-full w-full">
      <div className="bg-fuchsia-900 relative">
        <img
          alt="Jobs Entry Image"
          src={JobsEntryImage}
          className={`h-[10%] w-full max-h-[525px] bg-cover transition-opacity duration-1000 ease-in-out ${
            showBackground ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `${
              showBackground ? `url(${JobsEntryImage})` : ""
            }`,
          }}
        />
        <div
          className="uppercase absolute bottom-[3rem] left-[8%] lg:bottom-[7rem] lg:left-[22%] text-4xl md:text-5xl lg:text-6xl font-bold text-white font-boogaloo"
          style={{ textShadow: "6px 6px 12px rgba(0, 0, 0, 0.7)" }}
        >
          Job Application
        </div>
      </div>
      <div className="flex flex-col justify-self-center h-full w-full max-w-[60rem] my-8 xl:my-24 lg:mx-20 px-6 xl:px-0">
        <div className="mx-auto w-full max-w-[60rem]">
          <div className="px-[12%] bg-gradient-to-b from-[#7a51d2] to-[#8C69D8] p-[3rem] rounded-[3rem] w-full h-full shadow-2xl relative">
            <figure className="absolute left-0 top-0 w-full h-full overflow-hidden pointer-events-none rounded-[3rem]">
              <div
                style={{
                  backgroundImage: `url(${purpleWave})`,
                  backgroundPosition: "top center",
                }}
                className="bg-contain bg-repeat-y w-full h-full"
              ></div>
            </figure>
            <div className="relative z-20">
              <div
                className="text-4xl md:text-5xl lg:text-6xl uppercase text-white font-boogaloo text-center mb-2"
                style={{ textShadow: "1px 1px px rgb(0, 0, 0.5)" }}
              >
                Apply Today!
              </div>
              <div className="text-white flex justify-center space-x-2 text-sm">
                <p className="font-bold">Job Title:</p>
                <p className="font-light">{job.title}</p>
              </div>
              <div className="text-white flex justify-center space-x-2 text-sm">
                <p className="font-bold">Location:</p>
                <p className="font-light">{job.location}</p>
              </div>
              {/* add form fields here */}
              <div className="w-full mt-2">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col md:flex-row md:flex-wrap justify-between gap-4 text-white"
                >
                  <div className="w-full md:w-[47%]">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-semibold"
                    >
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      className={`w-full p-2 border text-black ${
                        focusedField === "firstName" ? "outline-blue-500" : ""
                      } ${
                        validationErrors.firstName && !formData.firstName
                          ? "border-red-500"
                          : ""
                      }`}
                      required
                    />
                  </div>

                  <div className="w-full md:w-[47%]">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-semibold"
                    >
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      className={`w-full p-2 border text-black ${
                        focusedField === "lastName" ? "outline-blue-500" : ""
                      } ${
                        validationErrors.lastName && !formData.lastName
                          ? "border-red-500"
                          : ""
                      }`}
                      required
                    />
                  </div>

                  <div className="w-full md:w-[47%]">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold"
                    >
                      Phone*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      className={`w-full p-2 border text-black ${
                        focusedField === "phone" ? "outline-blue-500" : ""
                      } ${
                        validationErrors.phone && !formData.phone
                          ? "border-red-500"
                          : ""
                      }`}
                      required
                    />
                  </div>

                  <div className="w-full md:w-[47%]">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold"
                    >
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      className={`w-full p-2 border text-black ${
                        focusedField === "email" ? "outline-blue-500" : ""
                      } ${
                        validationErrors.email && !formData.email
                          ? "border-red-500"
                          : ""
                      }`}
                      required
                    />
                  </div>

                  <div className="w-full md:w-[47%]">
                    <label
                      htmlFor="eighteenOrOlder"
                      className="block text-sm font-semibold"
                    >
                      18 or Older?*
                    </label>
                    <div className="flex items-center space-x-4">
                      <div className="form-control flex items-center">
                        <label className="label cursor-pointer space-x-2">
                          <span className="label-text">Yes</span>
                          <input
                            type="radio"
                            name="eighteenOrOlder"
                            value="yes"
                            checked={formData.eighteenOrOlder === true}
                            onChange={handleRadioChange}
                            className="radio"
                            required
                          />
                        </label>
                      </div>
                      <div className="form-control flex items-center">
                        <label className="label cursor-pointer space-x-2">
                          <span className="label-text">No</span>
                          <input
                            type="radio"
                            name="eighteenOrOlder"
                            value="no"
                            checked={formData.eighteenOrOlder === false}
                            onChange={handleRadioChange}
                            className="radio"
                            required
                          />
                        </label>
                      </div>
                    </div>
                    {validationErrors.eighteenOrOlder && (
                      <p className="text-red-500 text-sm mt-1">
                        Please select an option.
                      </p>
                    )}
                  </div>

                  <div className="w-full">
                    <label
                      htmlFor="cvOrResume"
                      className="block text-sm font-semibold"
                    >
                      Upload CV/Resume*
                    </label>
                    <input
                      type="file"
                      id="cvOrResume"
                      name="cvOrResume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="w-full p-2 border bg-white text-slate-500 text-sm"
                      required
                      placeholder="No file chosen"
                    />
                  </div>

                  <p className="w-full text-xs font-bold text-white mb-10">
                    *indicates required field
                  </p>
                  <button
                    type="submit"
                    className="transition ease-in-out delay-75 duration-700 bg-[#E6427A] rounded-[5rem] flex items-center justify-center text-white text-lg md:text-xl font-bold px-20 md:px-16 py-2 md:py-4 self-center shadow-xl hover:cursor-pointer hover:bg-[#FFE87C]"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplication;
