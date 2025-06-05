export interface GitHubRepoJson {
  stargazers_count: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  owner: {
    login: string;
    avatar_url: string;
  };
}

export async function getGithubRepoJson(userName: string, repoName: string): Promise<GitHubRepoJson> {
  const res = await fetch(`https://api.github.com/repos/${userName}/${repoName}`, {
    cache: "force-cache", // or use "default"
    next: { revalidate: 3600 }
  });

  if (!res.ok) {
    throw new Error(`Getting Github repo stars failed (${res.status}) ${res.statusText}`);
  }

  return res.json();
}
