import { UpstreamController } from './controllers';
import { ConsumerController } from './controllers/consumer';
import { PluginController } from './controllers/plugin';
import { RouteController } from './controllers/route';
import { ServiceController } from './controllers/service';
import { TargetController } from './controllers/target';
import { KongConfig } from './models/config';
import { Service } from './models/service';
interface KongAPIClient {
    register(service: Service): Promise<Service>;
}
export declare class Client implements KongAPIClient {
    readonly services: ServiceController;
    readonly plugins: PluginController;
    readonly consumers: ConsumerController;
    readonly routes: RouteController;
    readonly upstreams: UpstreamController;
    readonly targets: TargetController;
    constructor(config: KongConfig);
    register: (service: Service) => Promise<Service>;
}
export {};
