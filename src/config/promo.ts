export const PROMO_START = new Date('2026-02-10T18:00:00-03:00');
export const PROMO_END = new Date('2026-02-14T00:00:00-03:00');

export const CHECKOUT_URL = 'https://lp.craniumcursos.com.br/checkout/portal-cranium';

export function isPromoActive(): boolean {
    const now = new Date();
    return now >= PROMO_START && now < PROMO_END;
}

export function getTimeRemaining(end: Date) {
    const total = end.getTime() - Date.now();
    if (total <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
    return {
        days: Math.floor(total / (1000 * 60 * 60 * 24)),
        hours: Math.floor((total / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((total / (1000 * 60)) % 60),
        seconds: Math.floor((total / 1000) % 60),
        total,
    };
}
