import axios from 'axios'

export const backendURL = (import.meta.env.VITE_BACKEND ?? '') + '/api'

const backend = axios.create({
    baseURL: backendURL
})

export interface PathInfo {
    path: string
    items: PathItemInfo[]
}

export interface PathItemInfo {
    name: string
    path: string
    isDir?: boolean
    mimeType?: string
}

export const api = {
    async getPathInfo(path: string): Promise<PathInfo> {
        const resp = await backend.get<PathInfo>('/list', {
            params: {
                path: path
            }
        })

        return resp.data
    },
    getDirectLink(path: string): string {
        return axios.getUri({
            method: 'GET',
            url: backendURL + '/down',
            params: {
                path: path
            }
        })
    }
}