import axios from 'axios';

type GitHubRepo = {
  id: string;
  name: string;
  description: string;
  url: string;
  homepage: string;
  lastCommitDate: string;
  language: string;
  stars: number;
  forks: number;
};

// List of repositories to feature in the projects page
const featuredRepos = [
  'Promptimizer',
  'FreeSearch',
  'CopilotWebChatExporter',
  'InstagramScrapemaximus'
];

/**
 * Fetch repository data from GitHub API
 */
async function fetchRepoData(repoName: string): Promise<GitHubRepo | null> {
  try {
    // Fetch repository data
    const repoResponse = await axios.get(
      `https://api.github.com/repos/NoahTheGinger/${repoName}`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        }
      }
    );

    // Fetch latest commit data
    const commitsResponse = await axios.get(
      `https://api.github.com/repos/NoahTheGinger/${repoName}/commits?per_page=1`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        }
      }
    );

    const repoData = repoResponse.data;
    const lastCommit = commitsResponse.data[0];

    return {
      id: repoName.toLowerCase(),
      name: repoData.name,
      description: repoData.description || `A project by Noah Cantor`,
      url: repoData.html_url,
      homepage: repoData.homepage || '',
      lastCommitDate: lastCommit ? lastCommit.commit.author.date : '',
      language: repoData.language || '',
      stars: repoData.stargazers_count,
      forks: repoData.forks_count
    };
  } catch (error) {
    console.error(`Error fetching data for ${repoName}:`, error);
    // Return fallback data if API call fails
    return {
      id: repoName.toLowerCase(),
      name: repoName,
      description: `A project by Noah Cantor`,
      url: `https://github.com/NoahTheGinger/${repoName}`,
      homepage: '',
      lastCommitDate: new Date().toISOString(),
      language: '',
      stars: 0,
      forks: 0
    };
  }
}

/**
 * Fetch all featured repositories
 */
export async function fetchFeaturedRepos(): Promise<GitHubRepo[]> {
  const promises = featuredRepos.map(repo => fetchRepoData(repo));
  const results = await Promise.all(promises);
  return results.filter((repo): repo is GitHubRepo => repo !== null);
}

/**
 * Format the date to a readable format
 */
export function formatDate(dateString: string): string {
  if (!dateString) return 'Unknown date';
  
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
