import React from "react";

const NominationForm = () => {
  return (
    <>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Nominee Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select className="select select-bordered w-full">
              <option disabled selected>
                Select category
              </option>
              {categories.map((cat) => (
                <option key={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Reason for Nomination</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Explain why this nominee deserves the award"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit Nomination</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NominationForm;
