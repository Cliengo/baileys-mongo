import { PrismaClient } from '@prisma/client';
import { useAuthHandlerResult } from '../../types';
export default class AuthHandler {
    private readonly prismaCLient;
    private readonly key;
    constructor(prismaCLient: PrismaClient, key: string);
    useAuthHandler: () => Promise<useAuthHandlerResult>;
    deleteKeys: (storeKey: string, prismaCLient: PrismaClient) => Promise<void>;
}
