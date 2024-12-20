'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const MqttBridge = core.registerPlugin('MqttBridge', {
    android: () => Promise.resolve().then(function () { return web; }).then(m => new m.MqttBridgeWeb()),
});

// Define the MqttBridgeWeb class that implements the MqttBridgePlugin interface
class MqttBridgeWeb extends core.WebPlugin {
    // Implement the `connect` method from the `MqttBridgePlugin` interface
    connect(options) {
        // Log the `options` parameter
        console.log(options);
        // Throw an error indicating that this method is not implemented
        throw new Error('Method not implemented.');
    }
    // Implement the `disconnect` method from the `MqttBridgePlugin` interface
    disconnect() {
        // Throw an error indicating that this method is not implemented
        throw new Error('Method not implemented.');
    }
    // Implement the `subscribe` method from the `MqttBridgePlugin` interface
    subscribe(options) {
        // Log the `options` parameter
        console.log(options);
        // Throw an error indicating that this method is not implemented
        throw new Error('Method not implemented.');
    }
    // Implement the `publish` method from the `MqttBridgePlugin` interface
    publish(options) {
        // Log the `options` parameter
        console.log(options);
        // Throw an error indicating that this method is not implemented
        throw new Error('Method not implemented.');
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    MqttBridgeWeb: MqttBridgeWeb
});

exports.MqttBridge = MqttBridge;
//# sourceMappingURL=plugin.cjs.js.map
