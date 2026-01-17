import { motion } from 'framer-motion';
import { GraduationCap, PlayCircle, Bot, Award } from 'lucide-react';

const features = [
    {
        icon: GraduationCap,
        title: "35+ Cursos",
        description: "Conteúdo completo sobre DTM, Zumbido, Disfunções Oculomotoras e muito mais."
    },
    {
        icon: PlayCircle,
        title: "170+ Aulas",
        description: "Aulas práticas e teóricas em alta definição, gravadas com equipamentos de cinema."
    },
    {
        icon: Bot,
        title: "Mentoria IA",
        description: "Tire dúvidas de casos clínicos complexos instantaneamente com nossa IA especializada."
    },
    {
        icon: Award,
        title: "Certificação",
        description: "Certificados válidos em todo território nacional para impulsionar sua carreira."
    }
];

export default function FeaturesSection() {
    return (
        <section className="py-20 px-6 bg-black relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Por que escolher o <span className="text-primary">Portal Cranium?</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Uma metodologia única que une a prática clínica baseada em evidências com tecnologia de ponta.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors group"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                <feature.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
