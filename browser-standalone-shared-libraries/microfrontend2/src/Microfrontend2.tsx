import React, {useCallback, useEffect, useState} from 'react';
import styles from './Microfrontend2.module.scss';

type Props = {
    welcomeMessage: string;
    messageBus: {
        publish: (topic: 'ping', data: { ping: true }) => void;
        subscribe: (topic: 'ping', cb: () => void) => void;
        unsubscribe: (topic: 'ping', cb: () => void) => void;
    }
};

export function Microfrontend2({welcomeMessage, messageBus}: Props) {
    const [pings, setPings] = useState(0);
    const ping = useCallback(() => {
        messageBus.publish('ping', { ping: true });
    }, [])
    useEffect(() => {
        const cb = () => setPings(p => p + 1);
        messageBus.subscribe('ping', cb);
        return () => messageBus.unsubscribe('ping', cb);
    }, []);

    return (
        <div className={styles.Microfrontend2}>
            <h3>{welcomeMessage}</h3>
            <button onClick={ping}>Send Ping</button>
            <div className={styles.PingsReceived}>
                Received Pings:
                <span>
                    {pings}
                </span>
            </div>
        </div>
    );
}
