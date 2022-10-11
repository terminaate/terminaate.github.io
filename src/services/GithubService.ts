import axios, { AxiosResponse } from 'axios';

export type GithubUserProps = {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  followers: number;
  location: string;
  blog: string;
};

export type GithubRepoProps = {
  svn_url: string;
  owner: { avatar_url: string };
  full_name: string;
  language: string;
  description: string;
  updated_at: string;
};

class GithubService {
  public static getMe(): Promise<AxiosResponse<GithubUserProps>> {
    return axios.get('https://api.github.com/users/terminaate');
  }

  public static getMyRepos(): Promise<AxiosResponse<GithubRepoProps>> {
    return axios.get('https://api.github.com/users/terminaate/repos');
  }
}

export default GithubService;
