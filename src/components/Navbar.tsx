import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import logoImg from '../assets/logo-portal.png';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    return (
        <nav
            className={cn(
                'fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4',
                isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src={logoImg} alt="Portal Cranium" className="h-12 w-auto object-contain" />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">Cursos</a>
                    <a href="#sophia" className="text-gray-300 hover:text-white transition-colors">SophIA</a>
                    <a href="#precos" className="text-gray-300 hover:text-white transition-colors">Planos</a>
                    <a href="https://alunos.craniumcursos.com.br" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-primary/20 hover:bg-primary/40 text-primary border border-primary/50 rounded-full transition-all">
                        Login
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-gray-800 p-6 flex flex-col gap-4">
                    <a href="#" className="text-gray-300 hover:text-white text-lg">Cursos</a>
                    <a href="#" className="text-gray-300 hover:text-white text-lg">SophIA</a>
                    <a href="#precos" className="text-gray-300 hover:text-white text-lg">Planos</a>
                    <a href="https://alunos.craniumcursos.com.br" target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-primary text-white rounded-lg font-bold text-center">
                        Login
                    </a>
                </div>
            )}
        </nav>
    );
}
