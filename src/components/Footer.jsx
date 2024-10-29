import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white w-full pt-20">
      <section className="bg-sky-500">
        <div className="flex flex-col items-center justify-center py-10">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Get in Touch</h1>
            <p className="text-white">
              We are here to help you with all your needs.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-5">
            <h1 className="text-2xl font-bold text-white">Contact Us</h1>
            <p className="text-white">Phone: 1-800-123-4567</p>
            <p className="text-white">Email:</p>
          </div>
        </div>
      </section>
      <section className="bg-black px-10 py-6 flex justify-between text-white">
        <small>
          {/* make the year dynamic using todate and get the year from that */}
          <p className="pb-1">
            @ {new Date().getFullYear()} All rights reserved.
          </p>

          <nav class="flex justify-start">
            <a className="pr-6 underline hover:no-underline" href="/site-map/">
              Site Map
            </a>
            <a
              className="pr-6 underline hover:no-underline"
              href="/ada-notice/"
            >
              Accessibility
            </a>
            <a
              className="pr-6 underline hover:no-underline"
              href="/privacy-policy/"
            >
              Privacy Policy
            </a>
          </nav>
        </small>
        <a href="https://www.scorpion.co/franchises/" target="_blank" className="flex justify-end">
          <img
            src="https://d2nmqj11l1ij0u.cloudfront.net//common/scorpion/logo/stack-gray.png"
            alt="Scorpion Internet Marketing Experts"
            className="w-1/2"
          />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
