import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import type { Course } from '../data/courses';

interface CourseCarouselProps {
    title: string;
    courses: Course[];
}

export default function CourseCarousel({ title, courses }: CourseCarouselProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -300 : 300;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="py-4 px-6 relative z-30 group/carousel">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 group cursor-pointer w-fit">
                {title}
                <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-primary" aria-hidden="true" />
            </h2>

            <div className="relative">
                {/* Left Arrow - Hidden on Mobile */}
                <button
                    onClick={() => scroll('left')}
                    aria-label="Curso anterior"
                    className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-40 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-sm border border-white/10 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center transform hover:scale-110"
                >
                    <ChevronLeft className="w-6 h-6" aria-hidden="true" />
                </button>

                {/* Right Arrow - Hidden on Mobile */}
                <button
                    onClick={() => scroll('right')}
                    aria-label="Próximo curso"
                    className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-40 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-sm border border-white/10 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center transform hover:scale-110"
                >
                    <ChevronRight className="w-6 h-6" aria-hidden="true" />
                </button>

                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto overflow-y-visible pb-8 pt-6 scrollbar-hide pl-2 snap-x"
                >
                    {courses.map((course, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05, y: -8, zIndex: 50 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="w-[240px] md:w-[260px] aspect-[3/4] rounded-lg relative cursor-pointer flex-none group snap-start"
                        >
                            {/* Main Image Container with Border and Glow */}
                            <div className="w-full h-full rounded-lg overflow-hidden relative shadow-lg transition-all duration-300 border-2 border-transparent group-hover:border-primary group-hover:shadow-[0_0_40px_rgba(16,193,180,0.6)]">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    loading="lazy"
                                    decoding="async"
                                    width={260}
                                    height={347}
                                    className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-500"
                                />

                                {/* Glossy Reflection Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />

                                {/* Cinematic Dark Gradient for Text */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

                                {/* Content -- Duration Only on Hover */}
                                <div className="absolute inset-x-0 bottom-0 p-5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end items-center">
                                    <span className="bg-primary text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 shadow-[0_0_15px_rgba(16,193,180,0.6)] whitespace-nowrap">
                                        Carga Horária {course.duration || "4hs"}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
