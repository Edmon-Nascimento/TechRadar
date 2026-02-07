import { useOutletContext } from "react-router-dom";
import type { OutletContext } from "../@types/types";

export default function JobsPage() {
  const { jobs, loading, error } = useOutletContext<OutletContext>();

  if (loading) {
    return <h2>Carregando vagas...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (jobs.length === 0) {
    return <h2>Nenhuma vaga encontrada</h2>;
  }

  return (
    <main>
      <h1>{jobs.length} vagas encontradas</h1>

      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <h2>{job.title}</h2>
            <h3>{job.company_name}</h3>
            <p>{job.category}</p>
            <p>{job.job_type}</p>
            <p>{job.candidate_required_location}</p>
            <a href={job.url} target="_blank" rel="noreferrer">
              Ver vaga
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
