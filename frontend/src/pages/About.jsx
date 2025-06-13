import { Link } from "react-router-dom";
import img from "../assets/img.jpg";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="hero min-h-[50vh] bg-blue-900 text-white">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">About APEX Awards</h1>
            <p className="text-xl">
              Celebrating Excellence in Ghana's Private University Sector
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img
                src={img}
                alt="APEX Awards Mission"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2 text-blue-800">
                  Mission
                </h3>
                <p className="text-gray-700">
                  To recognize and reward individuals and organizations
                  connected to private universities in Ghana who are setting
                  benchmarks in leadership, innovation, entrepreneurship,
                  advocacy, academia, and community development, while providing
                  a credible platform to honor outstanding contributions within
                  Ghana's private universities.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-800">
                  Vision
                </h3>
                <p className="text-gray-700">
                  To become the premier awards scheme that honors, amplifies,
                  and celebrates the achievements and impact of alumni,
                  institutions, and stakeholders within Ghana's private
                  university space — with the potential to evolve into a
                  continental celebration of private tertiary education
                  excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our History</h2>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                Origins of the Awards
              </h3>
              <p className="text-gray-700 mb-4">
                Ghana's education liberalization policies, initiated in 1987,
                empowered private entities to play a vital role in university
                education. Today, private tertiary institutions constitute a
                significant portion of Ghana's higher education landscape, with
                137 private universities compared to 19 public institutions.
              </p>
              <p className="text-gray-700 mb-6">
                The APEX Awards were established to recognize and celebrate the
                achievements of these institutions, their departments,
                distinguished alumni, and promising current students,
                acknowledging their contributions to national development.
              </p>
              <Link to="/categories" className="btn btn-primary">
                View Award Categories
              </Link>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <img
                src={img}
                alt="APEX Awards History"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Objectives
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Celebrate outstanding achievements of private university graduates, faculty, and partners",
              "Showcase the excellence and relevance of private university education",
              "Inspire current students and young professionals through success stories",
              "Create a strong alumni network supporting education reform",
              "Generate funding for scholarships and educational projects",
              "Recognize accomplishments of private universities and departments",
            ].map((objective, index) => (
              <div key={index} className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700">{objective}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizers Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Organizing Partners
          </h2>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img
                src={img}
                alt="APEX Awards Organizers"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <p className="mb-6 text-lg">
                The APEX Awards is an initiative by the Private Universities
                Students Association of Ghana (PUSAG), PUSAG Alumni & Emezak
                Limited.
              </p>
              <p className="mb-6 text-lg">
                This collaboration brings together student leadership, alumni
                networks, and professional event organizers to create a
                prestigious platform that celebrates excellence in Ghana's
                private higher education sector.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="badge badge-outline p-4">PUSAG</div>
                <div className="badge badge-outline p-4">PUSAG Alumni</div>
                <div className="badge badge-outline p-4">Emezak Limited</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Nominate or Participate?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join us in celebrating excellence in Ghana's private university
            sector. Nominate deserving individuals or institutions today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/nominate" className="btn btn-primary btn-lg">
              Submit a Nomination
            </Link>
            <Link to="/contact" className="btn btn-outline btn-lg">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
