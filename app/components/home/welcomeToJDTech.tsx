import { dosis } from "../commonComponent/fontDosis";

export const WelcomeToJDTech = () => {
  return (
    <>
      {/* Welcome Message */}
      <section className="py-6 px-6 max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2
          className={`mb-4 text-3xl font-medium text-black ${dosis.className}`}
        >
          Welcome To JD TECH
        </h2>

        {/* dotted lines */}
        <div className="flex justify-center items-center gap-2">
          {/* Three red dots */}
          <div className="w-1 h-1 bg-red-700 rounded-full"></div>
          <div className="w-1 h-1 bg-red-700 rounded-full"></div>
          <div className="w-1 h-1 bg-red-700 rounded-full"></div>

          {/* Red horizontal line */}
          <div className="flex-1 h-1 max-w-[12rem] bg-red-700 rounded-2xl"></div>
        </div>

        {/* Paragraphs */}
        <div className={`mt-6 text-justify text-gray-900 leading-relaxed`}>
          <p>
            JD TECH’s primary goal has always been to build core expertise in
            the design, engineering, and maintenance of instrumentation and
            controls while offering our clients specialized services to meet
            their unique requirements.
          </p>
          <p className="mt-4">
            Our engineers have strong project management & Technical skills, and
            focus on attention to detail of all applications. They use a team
            approach to develop customer solutions, while always keeping the
            customers’ ROI a priority. A designated point-of-contact is assigned
            at each project stage to keep our customers informed and up-to-date
            on the status of their projects.
          </p>
          <p className="mt-4">
            We build systems with a variety of automation platforms, including
            fully automatic, semi-automatic, and Instrumentation. Contact us to
            get started. We have rich experience across a wide variety of
            technologies and solutions, with particular expertise in:
          </p>
        </div>

        {/* Bullet list */}
        <ul className="mt-6 text-left text-gray-800 list-disc list-outside space-y-1 pl-5">
          <li>
            <span className="hover:text-blue-400 cursor-pointer">
              TOTALLY INTEGRATED AUTOMATION
            </span>
          </li>
          <li>
            <span className="hover:text-blue-400 cursor-pointer">
              INSTRUMENTATION
            </span>
          </li>
          <li>
            <span className="hover:text-blue-400 cursor-pointer">
              ENERGY MANAGEMENT SOLUTION
            </span>
          </li>
          <li>
            <span className="hover:text-blue-400 cursor-pointer">
              COMMISSIONING SERVICES
            </span>
          </li>
          <li>
            <span className="hover:text-blue-400 cursor-pointer">
              INDUSTRIAL NETWORK SERVICES
            </span>
          </li>
          <li>
            <span className="hover:text-blue-400 cursor-pointer">
              PROCESS CONTROL & MONITORING SYSTEMS
            </span>
          </li>
          <li>
            <span className="hover:text-blue-400 cursor-pointer">
              OEM SOLUTIONS & SUPPORT
            </span>
          </li>
          <li>
            <span className="hover:text-blue-400 cursor-pointer">
              TURKEY AUTOMATION SOLUTIONS
            </span>
          </li>
          <li>
            <span className="hover:text-blue-400 cursor-pointer">
              UPGRADING OF EXISTING SYSTEMS
            </span>
          </li>
          <li>
            <span className="hover:text-blue-400 cursor-pointer">
              PROCESS CONTROL & MONITORING SYSTEMS
            </span>
          </li>
        </ul>
      </section>
    </>
  );
};
