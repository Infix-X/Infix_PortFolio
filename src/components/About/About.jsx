import React from 'react';

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="Profile"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Pratipada Madhukar Khatode
            </h2>
            <p className="mt-2 text-gray-600">+91-9356560461</p>
            <p className="mt-2 text-gray-600">pratipada134@gmail.com</p>
            <p className="mt-2 text-gray-600">GitHub: <a href="https://github.com/Infix-X" className="text-blue-500 hover:underline">Infix-X</a></p>
            <p className="mt-2 text-gray-600">LinkedIn: <a href="https://www.linkedin.com/in/pratipada-khatode" className="text-blue-500 hover:underline">Profile</a></p>
            <h3 className="mt-6 text-xl text-gray-900 font-semibold">Education</h3>
            <ul className="mt-4 text-gray-600">
              <li>BE in Information Technology, Amrutvahini College of Engineering, 2020-2024 (Score: 89%)</li>
              <li>HSC, Board of Maharashtra, 2020 (Score: 63.85%)</li>
              <li>SSC, Board of Maharashtra, 2018 (Score: 88.20%)</li>
            </ul>
            <h3 className="mt-6 text-xl text-gray-900 font-semibold">Experience</h3>
            <ul className="mt-4 text-gray-600">
              <li>
                <strong>React.js Trainee</strong>, Eaglebyte Solutions Pvt. Ltd., Nashik (March 2024 – May 2024)
                <ul className="list-disc ml-6 mt-2">
                  <li>Developed scalable React applications, improving load times by 50%</li>
                  <li>Collaborated with a team and participated in Agile processes</li>
                  <li>Conducted software analysis, testing, and debugging with Jest</li>
                  <li>Performed database testing, regression testing, and prepared test reports</li>
                </ul>
              </li>
              <li>
                <strong>DevOps Trainee</strong>, Quartic.ai (Sep 2023 – Nov 2023)
                <ul className="list-disc ml-6 mt-2">
                  <li>Designed and implemented CI/CD pipelines using Jenkins, Docker, and Kubernetes</li>
                  <li>Automated build and deployment processes, reducing manual efforts and errors</li>
                  <li>Utilized JIRA for managing development tasks, bugs, and feature requests</li>
                </ul>
              </li>
            </ul>
            <h3 className="mt-6 text-xl text-gray-900 font-semibold">Projects</h3>
            <ul className="mt-4 text-gray-600">
              <li>
                <strong>Crop Disease and Pest Identification</strong>: Developed an end-to-end solution using CNN
              </li>
              <li>
                <strong>Billing System UI/UX</strong>: Designed an intuitive UI/UX, enhancing user interaction and operational efficiency
              </li>
            </ul>
            <h3 className="mt-6 text-xl text-gray-900 font-semibold">Skills</h3>
            <ul className="mt-4 text-gray-600">
              <li>Programming Languages: Python, Java, JavaScript, PL/SQL</li>
              <li>Frameworks & Web Technologies: React.js, Redux, Jest</li>
              <li>Tools: Git, Docker, Jira, Jenkins, Kubernetes, AWS</li>
              <li>Methodologies: Agile, Scrum, SDLC</li>
              <li>Technologies: CI/CD, Linux, Cloud Computing, Cybersecurity</li>
              <li>Soft Skills: Problem Solving, Communication, Presentation</li>
            </ul>
            <h3 className="mt-6 text-xl text-gray-900 font-semibold">Certifications</h3>
            <ul className="mt-4 text-gray-600">
              <li>Google Certified: Cybersecurity</li>
              <li>Jenkins Certified: CI/CD Intern</li>
            </ul>
            <a 
              href="/public/Pratipada_KhatodeResume 9356560461.pdf" 
              download 
              className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
