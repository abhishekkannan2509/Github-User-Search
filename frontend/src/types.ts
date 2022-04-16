export interface ISearch {
    total_count: number,
    incomplete_results: boolean,
     source: string, 
     items: IItems[],
}

export interface IItems {
    login: string,
    avatar_url: string,
    id: number
}

export interface IUserDetails {
        login: string,
        avatar_url: string,
        html_url:string,
        name: string|null,
        location: string|null,
        email: string|null,
        public_repos: number,
        followers: number,
        following: number,
        source: string,
        bio: string
    }

  export  const defaultSearch: ISearch = { total_count: 0, incomplete_results: true, source: "", items: [],};

  export const defauldUserDetails: IUserDetails= {
        login: "",
        avatar_url: "",
        html_url: "",
        name: null,
        location: null,
        email: null,
        public_repos: 0,
        followers: 0,
        following: 0,
        source: "",
        bio: "",
}