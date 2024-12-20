import { WebPlugin } from '@capacitor/core';
// Define the MqttBridgeWeb class that implements the MqttBridgePlugin interface
export class MqttBridgeWeb extends WebPlugin {
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
//# sourceMappingURL=web.js.map