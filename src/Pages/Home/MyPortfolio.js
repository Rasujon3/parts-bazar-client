import React from "react";
import PrimaryButton from "./../Shared/PrimaryButton";

const MyPortfolio = () => {
  return (
    <div className="mt-12">
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/YZCkmL7/ruhul-amin-sujon.png"
            class="max-w-sm rounded-lg shadow-2xl"
            alt="sujon"
          />
          <div>
            <h1 class="text-5xl font-bold mb-4">Ruhul Amin Sujon</h1>

            <p className="mb-1">
              <span className="font-bold">Email:</span> rasujon3@gmail.com
            </p>
            <p className="mb-1">
              <span className="font-bold">Address:</span> Dhanaruha, khamar
              Dhanaruha, Saghata, Gaibandha
            </p>
            <p className="mb-1">
              <span className="font-bold">Educational Background:</span>
            </p>
            <ul class="list-decimal">
              <li className="ml-6">
                B.Sc in CSE(Complete) at Sonargaon University
              </li>
              <li className="ml-6">
                H.S.C(Science) at Bonarpara Degree Collage
              </li>
              <li className="ml-6">S.S.C(Science) at Muktinogor High School</li>
            </ul>
            <p className="my-1">
              <span className="font-bold">List of Technologies & Skills:</span>
            </p>
            <ul class="list-decimal">
              <li className="ml-6">
                Front-End-Development: HTML,CSS,Bootstrap,Tailwind,ReactJS
              </li>
              <li className="ml-6">
                Back-End-Development: NodeJS, ExpressJs, MongoDB
              </li>
              <li className="ml-6">Apps-Development: React-Native</li>
              <li className="ml-6">
                Programming-Language: Javascript, Python, Java, C
              </li>
              <li className="ml-6">
                Problem Solving: LeetCode{" "}
                <a
                  className=" hover:text-yellow-500"
                  href="https://leetcode.com/Ruhul_Amin_Sujon/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (51+)
                </a>
              </li>
            </ul>
            <p className="my-1">
              <span className="font-bold">Projects:</span>
            </p>
            <ul class="list-decimal">
              <li className="ml-6 hover:text-yellow-500">
                <span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://sujonecommerce.netlify.app/"
                  >
                    Sujon E-commerce
                  </a>
                </span>
              </li>
              <li className="ml-6 hover:text-yellow-500">
                <span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://assignment-11-9c7c9.web.app/"
                  >
                    Laptop Village
                  </a>
                </span>
              </li>
              <li className="ml-6 hover:text-yellow-500">
                <span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://genius-car-services-client.web.app/"
                  >
                    Genius Car Services
                  </a>
                </span>
              </li>
            </ul>

            <a
              href="https://ruhul-amin-sujon-portfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button class="btn btn-primary mt-2">My Portfolio</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;