import { useState, useEffect } from 'react';
import { PROMO_END, isPromoActive, getTimeRemaining } from '../config/promo';

export function usePromoCountdown() {
    const [time, setTime] = useState(getTimeRemaining(PROMO_END));
    const active = isPromoActive() && time.total > 0;

    useEffect(() => {
        if (!active) return;
        const interval = setInterval(() => {
            setTime(getTimeRemaining(PROMO_END));
        }, 1000);
        return () => clearInterval(interval);
    }, [active]);

    return { time, active };
}

export function formatCountdown(time: ReturnType<typeof getTimeRemaining>) {
    const parts = [];
    if (time.days > 0) parts.push(`${time.days}d`);
    parts.push(`${String(time.hours).padStart(2, '0')}:${String(time.minutes).padStart(2, '0')}:${String(time.seconds).padStart(2, '0')}`);
    return parts.join(' ');
}
