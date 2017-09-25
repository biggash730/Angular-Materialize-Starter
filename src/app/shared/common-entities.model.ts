export interface ResponseObject<T> {
    data: T;
    success: boolean;
    message: string;
    total: number;
}