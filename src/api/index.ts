import axios from "axios"

export const backendURL = import.meta.env.VITE_BACKEND ?? ''

const backend = axios.create({
    baseURL: backendURL + '/api'
})

export interface PathInfo {
    path: string
    items: PathItemInfo[]
}

export interface PathItemInfo {
    name: string
    path: string
    isDir: boolean
}

export const api = {
    async getPathInfo(path: string): Promise<PathInfo> {
        const resp = await backend.get<PathInfo>('/list', {
            params: {
                path: path
            }
        })

        return resp.data
    }
}