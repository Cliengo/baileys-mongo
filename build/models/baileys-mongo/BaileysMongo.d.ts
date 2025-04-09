import { PrismaClient } from '@prisma/client';
import { CreateNewAuthResult } from '../../types';
export declare class BaileysMongo {
    static _instance: BaileysMongo;
    private constructor();
    private readonly createNewAuth;
    init: () => Promise<{
        createNewAuth: (storeKey: string, payload?: Record<string, any>) => Promise<CreateNewAuthResult>;
    }>;
    getDb: () => Promise<PrismaClient>;
}
declare const _default: BaileysMongo;
export default _default;
