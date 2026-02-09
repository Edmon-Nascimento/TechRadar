import { useOutletContext } from "react-router-dom";
import type { OutletContext } from "../@types/types";
import styles from './jobsPage.module.css'

export default function JobsPage() {
  const { jobs, loading, error } = useOutletContext<OutletContext>();

  if (loading) {
    return <h2 className={styles.message}>Carregando vagas...</h2>;
  }

  if (error) {
    return <h2 className={styles.message}>{error}</h2>;
  }

  if (jobs.length === 0) {
    return <h2 className={styles.message}>Nenhuma vaga encontrada</h2>;
  }

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>{jobs.length} vagas encontradas</h1>
      </div>

      <ul className={styles.list}>
        {jobs.map(job => (
          <li key={job.id} className={styles.card}>
            <div className={styles.cardContent}>
              <h2 className={styles.jobTitle}>{job.title}</h2>
              <h3 className={styles.company}>{job.company_name}</h3>

              <div className={styles.meta}>
                <span className={styles.badge}>{job.category}</span>
                <span className={styles.location}>{job.candidate_required_location}</span>
              </div>
            </div>

            <a className={styles.cta} href={job.url} target="_blank" rel="noreferrer">
              Ver vaga
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
