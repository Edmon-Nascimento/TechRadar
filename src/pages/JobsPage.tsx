import { getJobs } from "../api/jobs";
import type { RemotiveJob } from "../types/jobs";
import { useEffect, useState } from "react";

export default function JobsPage(){

    const [jobs, setJobs] = useState<RemotiveJob[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string|null>(null)

    useEffect(()=>{
        async function loadJobs(){
            setLoading(true)
            setError(null)

            try{
                const jobsFromApi = await getJobs()
                setJobs(jobsFromApi)
            }catch(err){
                setError("Não foi possível carregar as vagas. Tente novamente")   
                setJobs([])
            }finally{
                setLoading(false)
            }
        }
        loadJobs()
    },[])

   if(loading){
        return  (
            <div>
                <h2>Carregando vagas...</h2>
            </div>
        )
   }else if(error != null){
        return(
            <div>
                <h2>{error}</h2>
            </div>
        )
   }else if(jobs.length === 0){
        return(
            <div>
                <h2>Nenhuma vaga encontrada</h2>
            </div>
        )
   } else 
    
    return(
        <main>
            <h1>{jobs.length} vagas encontradas</h1>
            <ul>
                {jobs.map(job => <li key={job.id}>
                    <h2>{job.title}</h2>
                    <h3>{job.company_name}</h3>
                    <p>{job.category}</p>
                    <p>{job.job_type}</p>
                    <p>{job.candidate_required_location}</p>
                    <a href={job.url} target="_blank" rel="noreferrer">Ver vaga</a>
                </li>)}
            </ul>
        </main>
   )
}