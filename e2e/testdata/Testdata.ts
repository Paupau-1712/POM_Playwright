
export type LoginParams = {
    tcid:string;
    username: string;
    password: string;
};

export const validCreds: LoginParams[] = [
    { tcid:'TC001',username: 'student',
        password: 'Password123' },
];

export const invalidCreds: LoginParams[] = [
    { tcid:'TC002', username: ' ', password: 'Password123' },
    { tcid:'TC003', username: 'student', password: ' ' },
    { tcid:'TC004', username: 'student', password: 'password123' },
    { tcid:'TC005', username: 'studen2', password: 'Password123' },
    { tcid:'TC006', username: ' ', password: ' ' }
];


export type RegisterParams = {
    tcid: string;
    username: string;
    password: string;
};