import { useState } from "react";

function AddJobForm({ onAddJob }) {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !company) {
      alert("Please fill all fields");
      return;
    }

    onAddJob({
      title,
      company,
    });

    setTitle("");
    setCompany("");
  }

  return (
    <div>
      <h3>Add New Job</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Job title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <input
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddJobForm;
