export type HeaderProps = {
  onSearch: (term: string) => void
};

export type OutletContext = {
  jobs: RemotiveJob[];
  loading: boolean;
  error: string | null;
};

export type RemotiveJob = {
    id: number;
    url: string;
    title: string;
    company_name: string;
    company_logo?: string;
    category: string;
    job_type: string;
    publication_date: string;
    candidate_required_location: string;
    salary?: number;
    description: string;
}