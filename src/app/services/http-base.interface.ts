export interface IHttpBaseService {
    getAll<T>(): Promise<T[]>;
    get<T>(id: number): Promise<T>;
    post<T>(body: string): Promise<T>;
}