import { useState } from "react";
import { Link } from "react-router-dom";

export default function Categories() {
  const [activeTab, setActiveTab] = useState("institutional");

  const awardCategories = {
    institutional: [
      { id: 1, name: "Apex Institution of the Year (Overall Excellence)" },
      {
        id: 2,
        name: "Apex Award for University with the Most Innovative Programs",
      },
      {
        id: 3,
        name: "Apex Award for University with the Strongest Industry Partnerships",
      },
      {
        id: 4,
        name: "Apex Award for University with the Most Impactful Community Engagement",
      },
      {
        id: 5,
        name: "Apex Award for University Committed to Sustainability Initiatives",
      },
    ],
    departmental: [
      { id: 6, name: "Apex Department of the Year (Academic Excellence)" },
      {
        id: 7,
        name: "Apex Award for Department with the Most Innovative Teaching Methods",
      },
      {
        id: 8,
        name: "Apex Award for Department with the Highest Graduate Employability",
      },
      {
        id: 9,
        name: "Apex Award for Department with Outstanding Research Output",
      },
      {
        id: 10,
        name: "Apex Award for Department with Exceptional Student Support Services",
      },
    ],
    alumni: [
      { id: 11, name: "Apex Alumnus of the Year" },
      {
        id: 12,
        name: "Apex Honorary Award for Institutional Leadership (Alumni)",
      },
      {
        id: 13,
        name: "Apex Honorary Award for Female Entrepreneur of the Year (Alumni)",
      },
      // ... Continue with all alumni categories up to 56
      {
        id: 56,
        name: "Global Ambassador for Private University Excellence (Alumni)",
      },
    ],
    student: [
      {
        id: 57,
        name: "Apex Young Trailblazer Award (Undergraduate Student of the Year - Academic Excellence)",
      },
      {
        id: 58,
        name: "Apex Award for Postgraduate Student of the Year (Research Excellence)",
      },
      { id: 59, name: "Apex Student Entrepreneur of the Year" },
      { id: 60, name: "Apex Student Leader of the Year" },
      {
        id: 61,
        name: "Apex Student Impact Award (Outstanding Contribution to the University Community)",
      },
    ],
    special: [
      { id: 62, name: "People's Choice Award (Open to Alumni and Students)" },
      { id: 63, name: "Apex Award for Outstanding Private University Partner" },
      { id: 64, name: "Education Policy Champion Award" },
      { id: 65, name: "Legacy Awards (To be determined)" },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="hero min-h-[50vh] bg-blue-900 text-white">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">Award Categories</h1>
            <p className="text-xl">
              65 Prestigious Categories Celebrating Excellence in Private
              University Education
            </p>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-gray-100 py-4 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="tabs tabs-boxed bg-gray-100">
            <button
              className={`tab ${
                activeTab === "institutional" ? "tab-active" : ""
              }`}
              onClick={() => setActiveTab("institutional")}
            >
              Institutional
            </button>
            <button
              className={`tab ${
                activeTab === "departmental" ? "tab-active" : ""
              }`}
              onClick={() => setActiveTab("departmental")}
            >
              Departmental
            </button>
            <button
              className={`tab ${activeTab === "alumni" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("alumni")}
            >
              Alumni
            </button>
            <button
              className={`tab ${activeTab === "student" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("student")}
            >
              Student
            </button>
            <button
              className={`tab ${activeTab === "special" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("special")}
            >
              Special Recognition
            </button>
          </div>
        </div>
      </div>

      {/* Category Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 capitalize">
              {activeTab === "institutional" && "Institutional Awards"}
              {activeTab === "departmental" && "Departmental Awards"}
              {activeTab === "alumni" && "Alumni Awards"}
              {activeTab === "student" && "Student Awards"}
              {activeTab === "special" && "Special Recognition Awards"}
            </h2>
            <p className="text-gray-600 mb-6">
              {activeTab === "institutional" &&
                "Recognizing excellence at the institutional level across Ghana's private universities"}
              {activeTab === "departmental" &&
                "Celebrating outstanding academic departments and their achievements"}
              {activeTab === "alumni" &&
                "Honoring distinguished alumni making impacts in various professional fields"}
              {activeTab === "student" &&
                "Acknowledging exceptional current students and their accomplishments"}
              {activeTab === "special" &&
                "Special awards recognizing unique contributions to private university excellence"}
            </p>
          </div>

          {/* Category Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awardCategories[activeTab].map((category) => (
              <div
                key={category.id}
                className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="card-body">
                  <h3 className="card-title text-lg">
                    <span className="text-blue-800 mr-2">{category.id}.</span>
                    {category.name}
                  </h3>
                  <div className="card-actions justify-end mt-4">
                    <button className="btn btn-sm btn-outline btn-primary">
                      Nominate Now
                    </button>
                    <button className="btn btn-sm btn-ghost">Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Alumni Categories Note */}
          {activeTab === "alumni" && (
            <div className="alert alert-info mt-8">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span>
                  Alumni awards include 45 specialized categories recognizing
                  excellence in specific fields. Scroll to view all categories
                  or{" "}
                  <Link to="/contact" className="link link-primary">
                    contact us
                  </Link>{" "}
                  for more information.
                </span>
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="text-center mt-12">
            <Link to="/nominate" className="btn btn-primary btn-wide">
              Submit a Nomination
            </Link>
            <p className="mt-4 text-gray-600">
              Nominations close on{" "}
              <span className="font-semibold">[Insert Deadline Date]</span>
            </p>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img
                src="/images/categories-eligibility.jpg"
                alt="Award Eligibility"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">
                Nomination Standards & Eligibility
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-800"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    Nominees must demonstrate a verifiable connection to Ghana's
                    private university sector
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-800"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    Supporting documentation required for all categories
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-800"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    No nomination fees - completely free to participate
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  to="/about#eligibility"
                  className="link link-primary font-semibold"
                >
                  View complete eligibility criteria →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer would be imported here */}
    </div>
  );
}
