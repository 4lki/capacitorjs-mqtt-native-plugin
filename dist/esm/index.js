import { registerPlugin } from '@capacitor/core';
const MqttBridge = registerPlugin('MqttBridge', {
    android: () => import('./web').then(m => new m.MqttBridgeWeb()),
});
export * from './definitions';
export { MqttBridge };
//# sourceMappingURL=index.js.map