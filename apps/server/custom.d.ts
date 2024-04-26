declare namespace Express {
    export interface Request {
        user: {
            id: number;
            email: string;
        };
        identity?: {
            scopes: string[];
        };
    }
}
