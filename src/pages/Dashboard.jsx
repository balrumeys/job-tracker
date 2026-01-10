import { useEffect, useState } from "react";
import { fetchJobs, deleteJob } from "../api/jobs";

function Dashboard() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <h2>Job List</h2>

      {jobs.length === 0 && <p>No jobs yet</p>}

      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            {job.title} - {job.company}
            <button onClick={() => handleDelete(job.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );

  async function handleDelete(id) {
    await deleteJob(id);
    setJobs((prev) => prev.filter((job) => job.id !== id));
  }
}

export default Dashboard;
