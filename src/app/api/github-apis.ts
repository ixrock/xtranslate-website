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
    headers: {
      Authorization: `token ${process.env.GITHUB_API_TOKEN}`,
    },
    next: {
      revalidate: 3600,
      tags: ["github-stars"],
    }
  });

  if (!res.ok) {
    console.error(`Getting Github repo stars failed (${res.status}) ${res.statusText}`);
    return { stargazers_count: 0 } as GitHubRepoJson;
  }

  return res.json();
}
