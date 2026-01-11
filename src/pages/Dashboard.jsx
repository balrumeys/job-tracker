import { useEffect, useState } from "react";
import { fetchJobs, deleteJob, addJob } from "../api/jobs";
import AddJobForm from "../components/AddJobForm";

function Dashboard() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);
  const [addError, setAddError] = useState("");
  const [deletingId, setDeletingId] = useState(null);
  const [deleteError, setDeleteError] = useState("");

  async function handleAddJob(jobData) {
    setAddError("");
    setAdding(true);

    try {
      const newJob = await addJob(jobData);
      setJobs((prev) => [...prev, newJob]);
    } catch (err) {
      setAddError("Job could not be added");
    } finally {
      setAdding(false);
    }
  }

  useEffect(() => {
    async function loadJobs() {
      const data = await fetchJobs();
      setJobs(data);
      setLoading(false);
    }

    loadJobs();
  }, []);

  if (loading) {
    return <p>Loading jobs...</p>;
  }

  return (
    <div>
      <AddJobForm onAddJob={handleAddJob} adding={adding} error={addError} />

      <h2>Job List</h2>

      {deleteError && <p style={{ color: "red" }}>{deleteError}</p>}

      {jobs.length === 0 && <p>No jobs yet</p>}

      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            {job.title} - {job.company}
            <button
              onClick={() => handleDelete(job.id)}
              disabled={deletingId === job.id}
            >
              {deletingId === job.id ? "Deleting..." : "Delete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

  async function handleDelete(id) {
    setDeleteError("");
    setDeletingId(id);
    try {
      await deleteJob(id);
      setJobs((prev) => prev.filter((job) => job.id !== id));
    } catch (err) {
      setDeleteError("Job could not be deleted");
    } finally {
      setDeletingId(null);
    }
  }
}

export default Dashboard;
