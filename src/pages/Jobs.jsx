import React, { useEffect, useState } from "react";
import JobsImage from "/assets/images/JobPageImages/JobsImage.jpg";
import purpleWave from "/assets/images/ContactPageImages/ContactPagePurpleWave.png";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [showBackground, setShowBackground] = useState(false);
  const [locationValue, setLocationValue] = useState("");
  const [jobTitleValue, setJobTitleValue] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setShowBackground(true);
    }, 1000);
  }, []);

  const allPositions = [
    {
      jobId: 1,
      title: "Barista",
      location: "Duck Donuts Northern Ireland",
      description:
        "We are looking for a Barista to prepare and serve hot and cold beverages, including various types of coffee and tea. Barista responsibilities include educating customers on our drinks menu, making recommendations based on their preferences, up-selling special items and taking orders. To be successful in this role, you should have customer service skills and knowledge of how brewing equipment operates. You should also be able to work various shifts. Note: This position is for our Belfast, Ireland location.",
      jobDetails: [""],
    },
    {
      jobId: 2,
      title: "Kitchen Staff",
      location: "Duck Donuts NorthernIreland",
      description:
        "We are looking for a Kitchen Staff member to prepare all the food items as per our standard recipes. Kitchen Staff responsibilities include preparing food items, cleaning the kitchen, and maintaining the kitchen equipment. To be successful in this role, you should have knowledge of how kitchen equipment operates. You should also be able to work various shifts. Note: This position is for our Belfast, Ireland location.",
      jobDetails: [""],
    },
  ];

  const [filteredPositions, setFilteredPositions] = useState(allPositions);

  const filterJobs = () => {
    let filtered = allPositions;

    if (locationValue) {
      filtered = filtered.filter(
        (position) => position.location === locationValue
      );
    }

    if (jobTitleValue && jobTitleValue !== "All Positions") {
      filtered = filtered.filter(
        (position) => position.title === jobTitleValue
      );
    }

    setFilteredPositions(filtered);
  };

  useEffect(() => {
    filterJobs();
  }, [locationValue, jobTitleValue]);

  const LearnMoreButton = (endpoint) => {
    return (
      <Link to={`/jobs/jobs-entry/${endpoint.endpoint}`}>
        <button
          id="learn-more-button"
          className="block bg-[#E6427A] text-base font-[650] p-3 rounded-full w-40 transition ease-in-out duration-500 shadow-2xl hover:cursor-pointer hover:bg-[#FFE87C] text-white"
        >
          Learn More
        </button>
      </Link>
    );
  };

  const Position = (position, index) => {
    return (
      <div key={index} className="py-8 border-b-2 border-[#E6427A]">
        <div className="mb-2 text-2xl font-bold">{position.position.title}</div>
        <div className="font-semibold">{position.position.location}</div>
        <div className="my-4 font-light">{position.position.description}</div>
        <LearnMoreButton endpoint={position.position.jobId} />
      </div>
    );
  };

  return (
    <div className="h-full w-full">
      <div className="bg-fuchsia-900 relative">
        <img
          alt="Jobs Image"
          src={JobsImage}
          className={`h-[10%] w-full max-h-[525px] bg-cover transition-opacity duration-1000 ease-in-out ${
            showBackground ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `${showBackground ? `url(${JobsImage})` : ""}`,
          }}
        />
        <div
          className="uppercase absolute bottom-[3rem] left-[8%] lg:bottom-[7rem] lg:left-[22%] text-4xl md:text-5xl lg:text-6xl font-bold text-white font-boogaloo"
          style={{ textShadow: "6px 6px 12px rgba(0, 0, 0, 0.7)" }}
        >
          Join Our Team Today!
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
                className="text-4xl md:text-5xl lg:text-6xl uppercase text-white font-boogaloo text-center"
                style={{ textShadow: "1px 1px px rgb(0, 0, 0.5)" }}
              >
                Duck Donuts Job Openings
              </div>
              <div className="block sm:flex w-full justify-center items-center my-4 space-x-10">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-white">
                      Select Location
                    </span>
                  </div>
                  <select
                    name="location"
                    className="select select-bordered w-full focus:outline-none h-9"
                    onChange={(e) => setLocationValue(e.target.value)}
                  >
                    <option disabled selected>
                      Select a Location
                    </option>
                    <option>All Locations</option>
                    <option>Duck Donuts Northern Ireland</option>
                  </select>
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-white">Job Title</span>
                  </div>
                  <select
                    className="select select-bordered w-full focus:outline-none h-9"
                    onChange={(e) => setJobTitleValue(e.target.value)}
                  >
                    <option disabled selected>
                      Select Job Title
                    </option>
                    <option>All Positions</option>
                    <option>Barista</option>
                    <option>Kitchen Staff</option>
                  </select>
                </label>
              </div>
              <div className="text-center text-white font-bold md:font-normal text-sm">
                Check out job openings for all of our locations below!
              </div>
            </div>
          </div>
        </div>
        {filteredPositions.map((position, index) => (
          <Position position={position} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
