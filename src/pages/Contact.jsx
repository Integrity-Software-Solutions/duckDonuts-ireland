import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import purpleWave from "/assets/images/ContactPageImages/ContactPagePurpleWave.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    zipCode: "",
    location: "",
    reason: "",
    message: "",
  });

  const [directionsHovered, setDirectionsHovered] = useState(false);
  const [focusedField, setFocusedField] = useState(""); // Track the focused field
  const [validationErrors, setValidationErrors] = useState({
    firstName: false,
    lastName: false,
    phone: false,
    email: false,
    zipCode: false,
    location: false,
    reason: false,
  });

  const handleFocus = (e) => {
    setFocusedField(e.target.name); // Set the currently focused field
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setFocusedField(""); // Reset focus state
    setValidationErrors((prev) => ({
      ...prev,
      [name]: value === "", // Mark field as invalid if empty
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

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // You can send this data to an API or handle further logic here
  };
  return (
    <div className="py-10 lg:py-[4.944rem] px-[1.15rem] h-full w-full flex justify-center items-center">
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
              className="text-5xl md:text-6xl lg:text-7xl uppercase text-white font-boogaloo text-center"
              style={{ textShadow: "1px 1px px rgb(0, 0, 0.5)" }}
            >
              Quack at us!
            </div>
            <div className="text-center text-white font-bold text-xs">
              To contact Duck Donuts' Customer Service Team, please fill out the
              form below.
            </div>
            <div className="text-center text-white font-bold md:font-normal text-sm">
              If you are looking for local community donations or to place an
              order, pleaase contact your local Duck Donuts store.
            </div>
          </div>
          <div className="mt-4 flex flex-col-reverse lg:flex-row w-full relative z-20">
            <div className="w-full max-w-[35%] mt-6 cursor-default">
              <div className="my-4 text-white font-bold uppercase text-xl text-nowrap">
                Duck Donuts
              </div>
              <div className="flex items-center space-x-4 text-white font-bold text-xl pb-[10px]">
                <FontAwesomeIcon icon={faPhone} />
                <a href="tel:+447384855061" className="text-nowrap">
                  +44 7384 855061
                </a>
              </div>
              <div className="flex space-x-5 text-white font-bold text-xl">
                <div className="ml-[3px]">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className="text-sm font-normal text-nowrap">
                  <p>304 Ormeau Road</p>
                  {/* <p>Suite 206</p> */}
                  <p>Belfast, United Kingdom</p>
                  <p
                    className="cursor-pointer uppercase font-bold text-base mt-2 relative transition ease-in-out duration-7000 w-max"
                    onMouseEnter={() => {
                      setDirectionsHovered(true);
                    }}
                    onMouseLeave={() => {
                      setDirectionsHovered(false);
                    }}
                    onClick={() => {
                      const mapsUrl =
                        "https://www.google.com/maps/search/?api=1&query=304+Ormeau+Road,Belfast,United+Kingdom";
                      window.open(mapsUrl, "_blank", "noopener noreferrer");
                    }}
                  >
                    Get Directions
                    <span
                      className={`absolute left-0 bottom-[-2.5px] w-full h-[3.5px] bg-current transition-opacity duration-700 ease-in-out ${
                        directionsHovered ? "opacity-0" : "opacity-100"
                      }`}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full">
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
                    className={`w-full p-2 border ${
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
                    className={`w-full p-2 border ${
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
                    className={`w-full p-2 border ${
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
                    className={`w-full p-2 border ${
                      focusedField === "email" ? "outline-blue-500" : ""
                    } ${
                      validationErrors.email && !formData.email
                        ? "border-red-500"
                        : ""
                    }`}
                    required
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="zipCode"
                    className="block text-sm font-semibold"
                  >
                    Zip Code*
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={`w-full p-2 border ${
                      focusedField === "zipCode" ? "outline-blue-500" : ""
                    } ${
                      validationErrors.zipCode && !formData.zipCode
                        ? "border-red-500"
                        : ""
                    }`}
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="location"
                    className="block text-sm font-semibold"
                  >
                    Select Location*
                  </label>
                  <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={`w-full p-2 border text-black ${
                      focusedField === "location" ? "outline-blue-500" : ""
                    } ${
                      validationErrors.location && !formData.location
                        ? "border-red-500"
                        : ""
                    }`}
                    required
                  >
                    <option value=""></option>
                    <optgroup label="Ireland">
                      <option value="belfast">Belfast</option>
                    </optgroup>
                  </select>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="reason"
                    className="block text-sm font-semibold"
                  >
                    Reason for Contact*
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={`w-full p-2 border text-black ${
                      focusedField === "reason" ? "outline-blue-500" : ""
                    } ${
                      validationErrors.reason && !formData.reason
                        ? "border-red-500"
                        : ""
                    }`}
                    required
                  >
                    <option value=""></option>
                    <option value="Complaint">Complaint</option>
                    <option value="Compliment">Compliment</option>
                    <option value="General Information">
                      General Information
                    </option>
                    <option value="Vendor Inquiry">Vendor Inquiry</option>
                    <option value="Menu Suggestions">Menu Suggestions</option>
                    <option value="Menu Information and Allergens">
                      Menu Information and Allergens
                    </option>
                    <option value="Franchising">Franchising</option>
                  </select>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold"
                  >
                    Message
                  </label>
                  <textarea
                    type="text"
                    id="message"
                    className={`w-full p-2 border min-h-[8.5em] ${
                      focusedField === "message" ? "outline-blue-500" : ""
                    } ${
                      validationErrors.message && !formData.message
                        ? "border-red-500"
                        : ""
                    }`}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  ></textarea>
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
  );
};

export default Contact;
