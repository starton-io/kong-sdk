import { Plugin } from '../models/plugin';
import { Route } from '../models/route';
import { BaseController } from './base';
export declare class PluginController extends BaseController<Plugin> {
    getResourcePath(): string;
    getPluginsForRoute(route: Route): Promise<Plugin[]>;
}
