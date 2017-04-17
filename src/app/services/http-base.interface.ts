export interface IHttpBaseService {
    getAll<T>(): Promise<T[]>;
    get<T>(id: string): Promise<T>;
    post<T>(body: any): Promise<T>;
}
