import { BaseResource } from '../models/base';
import { Consumer } from '../models/consumer';
import { BaseController } from './base';
export declare class ConsumerController extends BaseController<Consumer> {
    getResourcePath(): string;
    getConsumerConfigForPlugin<T extends BaseResource>(consumer: Consumer, pluginName: string): Promise<T[]>;
    createConsumerConfigForPlugin<T extends BaseResource>(consumer: Consumer, pluginName: string, resource: T): Promise<T>;
}
