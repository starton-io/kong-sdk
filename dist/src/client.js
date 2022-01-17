"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const controllers_1 = require("./controllers");
const consumer_1 = require("./controllers/consumer");
const plugin_1 = require("./controllers/plugin");
const route_1 = require("./controllers/route");
const service_1 = require("./controllers/service");
const target_1 = require("./controllers/target");
class Client {
    constructor(config) {
        this.register = (service) => __awaiter(this, void 0, void 0, function* () {
            return yield this.services.createOrUpdate(service);
        });
        this.services = new service_1.ServiceController(config);
        this.plugins = new plugin_1.PluginController(config);
        this.consumers = new consumer_1.ConsumerController(config);
        this.routes = new route_1.RouteController(config);
        this.upstreams = new controllers_1.UpstreamController(config);
        this.targets = new target_1.TargetController(config);
    }
}
exports.Client = Client;
