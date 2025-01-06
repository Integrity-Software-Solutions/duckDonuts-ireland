import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import JobsEntryImage from "/assets/images/JobPageImages/JobsEntryImage.jpg";
import jobOpenings from "../data/job_openings.json";

const JobsEntry = () => {
  const { id } = useParams(); // Get the dynamic `id` from the URL
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowBackground(true);
    }, 1000);
  }, []);

  const job = jobOpenings.find((position) => position.jobId === Number(id));

  const ApplyNowButton = (endpoint) => {
    return (
      <Link to={`/jobs/job-application/?job=${endpoint.endpoint}`}>
        <button
          id="learn-more-button"
          className="block bg-[#E6427A] text-base font-[650] p-3 rounded-full w-40 transition ease-in-out duration-500 shadow-2xl hover:cursor-pointer hover:bg-[#FFE87C] text-white"
        >
          Apply Now
        </button>
      </Link>
    );
  };

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
          {job ? job.title : "Job Not Found"}
        </div>
      </div>

      {job ? (
        <div className="flex flex-col justify-self-center h-full w-full max-w-[60rem] my-8 xl:my-24 lg:mx-20 px-6 xl:px-0">
          <div
            className={` text-sky-500 text-5xl md:text-6xl lg:text-8xl font-bold py-3 font-boogaloo`}
            style={{ textShadow: "2px 2px 4px rgb(0, 0, 0, 0.5)" }}
          >
            {job.title}
          </div>
          <div className="font-bold text-2xl">{job.location}</div>
          {job.description && (
            <>
              <div className="font-bold text-xl my-2">Job Description:</div>
              <div className="font-light">{job.description}</div>
            </>
          )}

          {job.jobDetails.length > 0 && (
            <>
              <div className="font-bold text-xl my-2">Job Details:</div>
              <ul className="list-disc list-inside">
                {job.jobDetails.map((detail, index) => (
                  <li className="font-light marker:text-[#E6427A]" key={index}>
                    {detail}
                  </li>
                ))}
              </ul>
            </>
          )}
          <div className="mt-6">
            <ApplyNowButton endpoint={job.jobId} />
          </div>
        </div>
      ) : (
        <p>Job not found.</p>
      )}
    </div>
  );
};

export default JobsEntry;
