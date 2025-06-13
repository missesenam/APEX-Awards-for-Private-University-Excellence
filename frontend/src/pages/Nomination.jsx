import { useState } from "react";

export default function Nomination() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    category: "",
    nomineeType: "",
    nomineeName: "",
    nomineeInstitution: "",
    nomineeContact: "",
    nominatorName: "",
    nominatorEmail: "",
    nominatorPhone: "",
    relationship: "",
    achievements: "",
    supportingDocs: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, supportingDocs: e.target.files[0] }));
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nomination submitted:", formData);
    alert("Thank you for your nomination! We will review your submission.");
    // Reset form
    setFormData({
      category: "",
      nomineeType: "",
      nomineeName: "",
      nomineeInstitution: "",
      nomineeContact: "",
      nominatorName: "",
      nominatorEmail: "",
      nominatorPhone: "",
      relationship: "",
      achievements: "",
      supportingDocs: null,
    });
    setStep(1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="hero min-h-[50vh] bg-blue-900 text-white">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">Submit a Nomination</h1>
            <p className="text-xl">
              Honor excellence in Ghana's private university sector
            </p>
          </div>
        </div>
      </div>

      {/* Nomination Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Progress Steps */}
          <ul className="steps steps-vertical lg:steps-horizontal w-full mb-12">
            <li className={`step ${step >= 1 ? "step-primary" : ""}`}>
              Category
            </li>
            <li className={`step ${step >= 2 ? "step-primary" : ""}`}>
              Nominee Info
            </li>
            <li className={`step ${step >= 3 ? "step-primary" : ""}`}>
              Nominator Info
            </li>
            <li className={`step ${step >= 4 ? "step-primary" : ""}`}>
              Achievements
            </li>
          </ul>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Category Selection */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">
                      1. Select Award Category
                    </h2>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Award Category</span>
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="select select-bordered"
                        required
                      >
                        <option value="" disabled>
                          Select a category
                        </option>
                        <optgroup label="Institutional Awards">
                          <option>
                            Apex Institution of the Year (Overall Excellence)
                          </option>
                          <option>
                            Apex Award for University with the Most Innovative
                            Programs
                          </option>
                          {/* Add all institutional categories */}
                        </optgroup>
                        <optgroup label="Departmental Awards">
                          <option>
                            Apex Department of the Year (Academic Excellence)
                          </option>
                          {/* Add all departmental categories */}
                        </optgroup>
                        <optgroup label="Alumni Awards">
                          <option>Apex Alumnus of the Year</option>
                          {/* Add all alumni categories */}
                        </optgroup>
                        <optgroup label="Student Awards">
                          <option>Apex Young Trailblazer Award</option>
                          {/* Add all student categories */}
                        </optgroup>
                        <optgroup label="Special Recognition">
                          <option>People's Choice Award</option>
                          {/* Add all special categories */}
                        </optgroup>
                      </select>
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Nominee Type</span>
                      </label>
                      <select
                        name="nomineeType"
                        value={formData.nomineeType}
                        onChange={handleChange}
                        className="select select-bordered"
                        required
                      >
                        <option value="" disabled>
                          Select nominee type
                        </option>
                        <option>Individual</option>
                        <option>Institution</option>
                        <option>Department</option>
                        <option>Organization</option>
                      </select>
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="btn btn-primary"
                        disabled={!formData.category || !formData.nomineeType}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Nominee Information */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">
                      2. Nominee Information
                    </h2>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Nominee's Full Name</span>
                      </label>
                      <input
                        type="text"
                        name="nomineeName"
                        value={formData.nomineeName}
                        onChange={handleChange}
                        placeholder="Nominee's name"
                        className="input input-bordered"
                        required
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">
                          Nominee's Institution
                        </span>
                      </label>
                      <input
                        type="text"
                        name="nomineeInstitution"
                        value={formData.nomineeInstitution}
                        onChange={handleChange}
                        placeholder="University/Organization name"
                        className="input input-bordered"
                        required
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">
                          Nominee's Contact Information
                        </span>
                      </label>
                      <input
                        type="text"
                        name="nomineeContact"
                        value={formData.nomineeContact}
                        onChange={handleChange}
                        placeholder="Email or phone number"
                        className="input input-bordered"
                        required
                      />
                    </div>

                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="btn btn-ghost"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        className="btn btn-primary"
                        disabled={
                          !formData.nomineeName ||
                          !formData.nomineeInstitution ||
                          !formData.nomineeContact
                        }
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Nominator Information */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">
                      3. Your Information (Nominator)
                    </h2>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Your Full Name</span>
                      </label>
                      <input
                        type="text"
                        name="nominatorName"
                        value={formData.nominatorName}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="input input-bordered"
                        required
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Your Email Address</span>
                      </label>
                      <input
                        type="email"
                        name="nominatorEmail"
                        value={formData.nominatorEmail}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="input input-bordered"
                        required
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Your Phone Number</span>
                      </label>
                      <input
                        type="tel"
                        name="nominatorPhone"
                        value={formData.nominatorPhone}
                        onChange={handleChange}
                        placeholder="+233 XX XXX XXXX"
                        className="input input-bordered"
                        required
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">
                          Your Relationship to Nominee
                        </span>
                      </label>
                      <input
                        type="text"
                        name="relationship"
                        value={formData.relationship}
                        onChange={handleChange}
                        placeholder="Colleague, Alumni, Student, etc."
                        className="input input-bordered"
                        required
                      />
                    </div>

                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="btn btn-ghost"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        className="btn btn-primary"
                        disabled={
                          !formData.nominatorName ||
                          !formData.nominatorEmail ||
                          !formData.nominatorPhone ||
                          !formData.relationship
                        }
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 4: Achievements and Submission */}
                {step === 4 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">
                      4. Nominee's Achievements
                    </h2>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">
                          Summary of Achievements
                        </span>
                        <span className="label-text-alt">
                          (1000-2000 words)
                        </span>
                      </label>
                      <textarea
                        name="achievements"
                        value={formData.achievements}
                        onChange={handleChange}
                        className="textarea textarea-bordered h-64"
                        placeholder="Describe the nominee's exceptional achievements, impact, and why they deserve this award..."
                        required
                      ></textarea>
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Supporting Documents</span>
                        <span className="label-text-alt">
                          (PDF, DOC, or JPG)
                        </span>
                      </label>
                      <input
                        type="file"
                        onChange={handleFileChange}
                        className="file-input file-input-bordered w-full"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      />
                      <label className="label">
                        <span className="label-text-alt">
                          CV, certificates, media coverage, or other supporting
                          materials
                        </span>
                      </label>
                    </div>

                    <div className="divider">Nomination Agreement</div>

                    <div className="form-control">
                      <label className="label cursor-pointer justify-start gap-4">
                        <input type="checkbox" className="checkbox" required />
                        <span className="label-text">
                          I confirm that all information provided is accurate to
                          the best of my knowledge. I understand that false
                          information may lead to disqualification.
                        </span>
                      </label>
                    </div>

                    <div className="form-control">
                      <label className="label cursor-pointer justify-start gap-4">
                        <input type="checkbox" className="checkbox" required />
                        <span className="label-text">
                          I agree to the APEX Awards terms and conditions and
                          privacy policy.
                        </span>
                      </label>
                    </div>

                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="btn btn-ghost"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={!formData.achievements}
                      >
                        Submit Nomination
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Nomination Guidelines */}
          <div className="mt-12">
            <div className="collapse collapse-plus bg-base-200">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
                Nomination Guidelines
              </div>
              <div className="collapse-content">
                <div className="prose">
                  <h3>Nomination Standards & Awardee Eligibility</h3>
                  <p>
                    The APEX Awards celebrate the pinnacle of excellence within
                    Ghana's private university sector. To ensure a fair and
                    rigorous evaluation, nominations must adhere to the
                    following standards:
                  </p>

                  <h4>Awardee Eligibility:</h4>
                  <ul>
                    <li>
                      Nominees must demonstrate a significant and verifiable
                      connection to Ghana's private university sector
                    </li>
                    <li>
                      For alumni awards, nominees must be graduates of Ghanaian
                      private universities
                    </li>
                    <li>
                      For institutional awards, nominees must be accredited
                      private universities in Ghana
                    </li>
                    <li>
                      Current students are eligible only for student-specific
                      categories
                    </li>
                  </ul>

                  <h4>Core Requirements:</h4>
                  <ul>
                    <li>
                      Concise narrative (1000-2000 words) highlighting the
                      nominee's achievements
                    </li>
                    <li>
                      Emphasis on measurable contributions and verifiable impact
                    </li>
                    <li>
                      Clear articulation of how the nominee embodies APEX values
                    </li>
                    <li>Supporting documentation to substantiate claims</li>
                    <li>Professional presentation of all materials</li>
                  </ul>

                  <p>
                    Nominations are free of charge and will be evaluated based
                    on authenticity, clarity, and demonstrated impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
