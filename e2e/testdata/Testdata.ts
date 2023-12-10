
export type LoginParams = {
    username: string;
    password: string;
};

export const validCreds: LoginParams[] = [
    { username: 'student', password: 'Password123' },
];

export const invalidCreds: LoginParams[] = [
    { username: ' ', password: 'Password123' },
    { username: 'student', password: ' ' },
    { username: 'student', password: 'password123' },
    { username: 'studen2', password: 'Password123' },
    { username: ' ', password: ' ' }
];


export type RegisterParams = {
    username: string;
    password: string;
};