let jobs = [
  { id: 1, title: "Frontend Developer Başvurusu", company: "Google" },
  { id: 2, title: "React Developer", company: "Amazon" },
];

//GET
export function fetchJobs() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...jobs]);
    }, 500);
  });
}
//POST
export function addJob(job) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (job.title.toLowerCase().includes("fail")) {
        reject(new Error("Server error: could not add job"));
        return;
      }

      const newJob = { ...job, id: Date.now() };
      jobs.push(newJob);
      resolve(newJob);
    }, 500);
  });
}

//DELETE
export function deleteJob(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      jobs = jobs.filter((job) => job.id !== id);
      resolve(true);
    }, 500);
  });
}
