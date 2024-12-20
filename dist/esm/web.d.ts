import { WebPlugin } from '@capacitor/core';
import type { MqttBridgePlugin } from './definitions';
export declare class MqttBridgeWeb extends WebPlugin implements MqttBridgePlugin {
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
}
