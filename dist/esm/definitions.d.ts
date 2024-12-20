import type { PluginListenerHandle } from '@capacitor/core';
export declare type onConnectionLostListener = (x: {
    connectionStatus: string;
    reasonCode: number;
    message: string;
}) => void;
export declare type onConnectCompleteListener = (x: {
    reconnected: boolean;
    serverURI: string;
}) => void;
export declare type onMessageArrivedListener = (x: {
    topic: string;
    message: string;
}) => void;
export interface MqttBridgePlugin {
    connect(options: {
        serverURI: string;
        port: number;
        clientId: string;
        username: string;
        password: string;
        setCleanSession: boolean;
        connectionTimeout: number;
        keepAliveInterval: number;
        setAutomaticReconnect: boolean;
        setLastWill?: {
            willTopic: string;
            willPayload: string;
            willQoS: number;
            setRetained: boolean;
        };
    }): Promise<any>;
    disconnect(): Promise<any>;
    subscribe(options: {
        topic: string;
        qos: number;
    }): Promise<{
        topic: string;
        qos: number;
    }>;
    publish(options: {
        topic: string;
        payload: string;
        qos: number;
        retained: boolean;
    }): Promise<{
        topic: string;
        payload: string;
        qos: number;
        retained: boolean;
        messageId: any;
    }>;
    addListener(eventName: 'onConnectionLost', listener: onConnectionLostListener): Promise<PluginListenerHandle> & PluginListenerHandle;
    addListener(eventName: 'onConnectComplete', listener: onConnectCompleteListener): Promise<PluginListenerHandle> & PluginListenerHandle;
    addListener(eventName: 'onMessageArrived', listener: onMessageArrivedListener): Promise<PluginListenerHandle> & PluginListenerHandle;
}
