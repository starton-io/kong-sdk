import { Method } from 'axios';
import { KongConfig } from '../models/config';
import { BaseResource } from '../models/base';
export declare abstract class BaseController<T extends BaseResource> {
    readonly _config: KongConfig;
    constructor(config: KongConfig);
    abstract getResourcePath(resource?: T): string;
    performRequest<R extends T | T[]>(method: Method, endpoint: string, data?: any): Promise<R>;
    create(resource: T): Promise<T>;
    createOrUpdate(resource: T): Promise<T>;
    update(resource: T): Promise<T>;
    get(idOrName?: string): Promise<T | T[]>;
    delete(idOrName: string): Promise<T>;
}
