import Countdown from "../components/Countdown";
import CategoryCard from "../components/CategoryCard";
import HeroSection from "../components/HeroSection";
import img from "../assets/img.jpg";

export default function Home() {
  const featuredCategories = [
    {
      id: 1,
      title: "Apex Institution of the Year",
      description: "Recognizing overall excellence in private universities",
      image: `${img}`,
    },
    {
      id: 2,
      title: "Apex Alumnus of the Year",
      description: "Celebrating outstanding alumni achievements",
      image: `${img}`,
    },
    {
      id: 3,
      title: "Young Trailblazer Award",
      description: "Honoring exceptional undergraduate students",
      image: `${img}`,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <HeroSection />
      {/* Countdown */}
      <Countdown />
      {/* Featured Categories */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Award Categories
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {featuredCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="btn btn-outline btn-primary">
            View All Categories
          </button>
        </div>
      </section>
      {/* About Section */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">About APEX Awards</h2>
              <p className="mb-4">
                The APEX Awards for Private Universities Excellence is an
                initiative by Private Universities Students Association of Ghana
                (PUSAG), PUSAG Alumni & Emezak Limited.
              </p>
              <p>
                This prestigious scheme aims to acknowledge the growth,
                achievements, and leadership within Ghana's indigenous private
                universities and their stakeholders.
              </p>
              <button className="btn btn-primary mt-6">Learn More</button>
            </div>
            <div className="lg:w-1/2">
              <img
                src={img}
                alt="About APEX Awards"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
