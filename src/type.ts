export type FetchType = {
    method?: string,
    mode: RequestMode,
    body?: string,
    headers?: HeadersInit
}

export type ParaType = {
    url:string, 
    type?: string; 
    header?:Object
    data?:DataType;     
}

export type DataType = {
    name?: string,
    password: string,
    email: string
}

export type Nullable<T> = T | undefined | null;

export  type ContextType = {
    postReq : (url:string, data:DataType) => Function
    putReq: (url:string, data:DataType) => Function
    getReq: (url :string) => Function
    deleteReq: (url:string) => Function
}