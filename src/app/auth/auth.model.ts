export interface User {
    id: number;
    username: string;
    name: string;
    email: string;
    token: string;
    role: Role;
}

export interface Role {
    id: number;
    name: string;
    notes: string;
    permissions: string;
}

export interface LoginParams {
    username: string;
    password: string;
}