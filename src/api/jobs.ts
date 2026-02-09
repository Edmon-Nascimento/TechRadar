import axios from "axios"
import type { RemotiveJob } from "../@types/types";

const api = axios.create({
    baseURL:"https://remotive.com/api"
})

type RemotiveResponse = {
    "job-count" :number;
    "total-job-count": number;
    jobs:RemotiveJob[]
}

export async function getJobs(search?:string) {
    const {data} = await api.get<RemotiveResponse>("/remote-jobs",{
        params: search ? {search} :undefined
    })
    return data.jobs
}
