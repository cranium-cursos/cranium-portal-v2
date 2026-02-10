import { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { isPromoActive } from '../config/promo';
import logoImg from '../assets/logo-portal.png';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const hamburgerRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const closeMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(false);
        hamburgerRef.current?.focus();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Focus trap and Escape key handler for mobile menu
    useEffect(() => {
        if (!isMobileMenuOpen) return;

        // Focus first link when menu opens
        const menu = menuRef.current;
        if (menu) {
            const firstFocusable = menu.querySelector<HTMLElement>('a, button');
            firstFocusable?.focus();
        }

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeMobileMenu();
                return;
            }

            if (e.key === 'Tab') {
                const currentMenu = menuRef.current;
                if (!currentMenu) return;
                const focusable = currentMenu.querySelectorAll<HTMLElement>('a, button');
                const first = focusable[0];
                const last = focusable[focusable.length - 1];

                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isMobileMenuOpen, closeMobileMenu]);

    return (
        <nav
            role="navigation"
            aria-label="Menu principal"
            className={cn(
                'fixed w-full z-50 transition-all duration-300 px-6 py-4',
                isPromoActive() ? 'top-10' : 'top-0',
                isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src={logoImg} alt="Portal Cranium" width={120} height={48} className="h-12 w-auto object-contain" />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#cursos" className="text-gray-300 hover:text-white transition-colors">Cursos</a>
                    <a href="#sophia" className="text-gray-300 hover:text-white transition-colors">SophIA</a>
                    <a href="#precos" className="text-gray-300 hover:text-white transition-colors">Planos</a>
                    <a href="https://alunos.craniumcursos.com.br" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-primary/20 hover:bg-primary/40 text-primary border border-primary/50 rounded-full transition-all">
                        Login
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    ref={hamburgerRef}
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div ref={menuRef} className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-gray-800 p-6 flex flex-col gap-4">
                    <a href="#cursos" onClick={closeMobileMenu} className="text-gray-300 hover:text-white text-lg">Cursos</a>
                    <a href="#sophia" onClick={closeMobileMenu} className="text-gray-300 hover:text-white text-lg">SophIA</a>
                    <a href="#precos" onClick={closeMobileMenu} className="text-gray-300 hover:text-white text-lg">Planos</a>
                    <a href="https://alunos.craniumcursos.com.br" target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-primary text-white rounded-lg font-bold text-center">
                        Login
                    </a>
                </div>
            )}
        </nav>
    );
}
