import React from 'react';

export default function About() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" // Use a related image link
              alt="Profile"
              className="rounded-lg shadow-lg object-cover w-full h-72 sm:h-96"
            />
          </div>
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Pratipada Madhukar Khatode
            </h2>
            <p className="mt-2 text-gray-600">Pune, Maharashtra, India</p>
            <p className="mt-2 text-gray-600">+91-9356560461</p>
            <p className="mt-2 text-gray-600">pratipada134@gmail.com</p>
            <p className="mt-2 text-gray-600">
              GitHub:{' '}
              <a
                href="https://github.com/Infix-X"
                className="text-blue-500 hover:underline"
              >
                Infix-X
              </a>
            </p>
            <p className="mt-2 text-gray-600">
              LinkedIn:{' '}
              <a
                href="https://www.linkedin.com/in/pratipada-khatode"
                className="text-blue-500 hover:underline"
              >
                Profile
              </a>
            </p>

            <h3 className="mt-6 text-xl text-gray-900 font-semibold">Education</h3>
            <ul className="mt-4 text-gray-600">
              <li>
                <strong>Bachelor of Engineering in Information Technology</strong>, Amrutvahini College Of Engineering
                <span className="block text-sm">2020–2024 (Score: 81.1%)</span>
              </li>
              <li>
                Higher Secondary Certificate (HSC), Maharashtra State Board
                <span className="block text-sm">2018–2020 (Score: 63.85%)</span>
              </li>
              <li>
                Secondary School Certificate (SSC), Maharashtra State Board
                <span className="block text-sm">2016–2018 (Score: 88.20%)</span>
              </li>
            </ul>

            <h3 className="mt-6 text-xl text-gray-900 font-semibold">Experience</h3>
            <ul className="mt-4 text-gray-600">
              <li>
                <strong>React.js Trainee</strong>, Eaglebyte Solutions Pvt. Ltd., Nashik
                <span className="block text-sm">March 2024 – May 2024</span>
                <ul className="list-disc ml-6 mt-2">
                  <li>Implemented Context API and created customized hooks</li>
                  <li>Managed complex state to enhance application performance</li>
                  <li>Designed advanced routing mechanisms including nested and dynamic routes</li>
                  <li>Utilized Jest for testing and debugging of React components</li>
                  <li>Ensured robust code with thorough test coverage and secure data handling using CORS</li>
                </ul>
              </li>
              <li>
                <strong>DevOps Trainee</strong>, Quartic.ai
                <span className="block text-sm">September 2023 – November 2023</span>
                <ul className="list-disc ml-6 mt-2">
                  <li>Designed and implemented CI/CD pipelines using Jenkins, Docker, and Kubernetes</li>
                  <li>Automated build and deployment processes, reducing manual efforts and errors</li>
                  <li>Utilized JIRA for managing development tasks and feature requests</li>
                </ul>
              </li>
            </ul>

            <h3 className="mt-6 text-xl text-gray-900 font-semibold">Projects</h3>
            <ul className="mt-4 text-gray-600">
              <li>
                <strong>Crop Disease and Pest Identification</strong>: Developed an end-to-end solution using CNN
              </li>
              <li>
                <strong>Billing System UI/UX</strong>: Designed an intuitive UI/UX to enhance user interaction
              </li>
              <li>
                <strong>Portfolio Website</strong>: Created a personal portfolio website using React.js and Tailwind CSS
              </li>
            </ul>

            <h3 className="mt-6 text-xl text-gray-900 font-semibold">Skills</h3>
            <ul className="mt-4 text-gray-600">
              <li>Programming Languages: Python, Java, JavaScript, PL/SQL</li>
              <li>Frameworks & Web Technologies: React.js, Redux, Jest</li>
              <li>Tools: Git, Docker, Jira, Jenkins, Kubernetes, AWS</li>
              <li>Methodologies: Agile, Scrum, SDLC</li>
              <li>Technologies: CI/CD, Linux, Cloud Computing, Cybersecurity</li>
              <li>Soft Skills: Problem Solving, Communication, Team Collaboration</li>
            </ul>

            <h3 className="mt-6 text-xl text-gray-900 font-semibold">Certifications</h3>
            <ul className="mt-4 text-gray-600">
              <li>Google Certified: Cybersecurity</li>
              <li>Jenkins Certified: CI/CD Intern</li>
            </ul>

            <h3 className="mt-6 text-xl text-gray-900 font-semibold">Languages</h3>
            <ul className="mt-4 text-gray-600">
              <li>English, Hindi, Marathi</li>
            </ul>

            <a
              href="/public/Pratipada_KhatodeResume_9356560461.pdf"
              download
              className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
