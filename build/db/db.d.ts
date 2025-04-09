import { PrismaClient } from '@prisma/client';
export declare class PrismaSingleton {
    private static instance;
    prismaClient: PrismaClient;
    private readonly connectionPromise;
    private constructor();
    waitForConnection(): Promise<void>;
    static getInstance(): Promise<PrismaSingleton>;
}
