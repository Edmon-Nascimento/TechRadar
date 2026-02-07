import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../header";
import { getJobs } from "../../api/jobs";
import type { RemotiveJob } from "../../@types/types";

export default function Layout() {
  const [jobs, setJobs] = useState<RemotiveJob[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function loadJobs(search?: string) {
    setLoading(true);
    setError(null);

    try {
      const jobsFromApi = await getJobs(search);
      setJobs(jobsFromApi);
    } catch {
      setError("Não foi possível carregar as vagas. Tente novamente");
      setJobs([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadJobs();
  }, []);

  function handleSearch(term: string) {
    loadJobs(term);
  }

  return (
    <>
      <Header onSearch={handleSearch} />
      <Outlet context={{ jobs, loading, error }} />
    </>
  );
}
