import { motion } from 'framer-motion';
import { Layers, Video, Brain, Award } from 'lucide-react';

const features = [
    {
        icon: Layers,
        title: "35+ Cursos Completos",
        description: "Do básico ao avançado. Certificados inclusos em todos os cursos."
    },
    {
        icon: Video,
        title: "170+ Aulas Gravadas",
        description: "Atualizações constantes com casos clínicos e novas técnicas."
    },
    {
        icon: Brain,
        title: "SophIA Integrada",
        description: "Sua segunda opinião clínica, disponível 24h por dia."
    },
    {
        icon: Award,
        title: "Comunidade de Elite",
        description: "Network com os maiores especialistas do Brasil."
    }
];

export default function SolutionSection() {
    return (
        <section className="py-24 px-6 bg-black relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Não é apenas um curso. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10C1B4] to-[#0D8C86] pb-2">
                            É a sua enciclopédia viva.
                        </span>
                    </h2>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                        O Portal Cranium reúne tudo o que você precisa para se destacar no mercado, em um único lugar.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary/50 transition-colors group text-center"
                        >
                            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-primary/20 shadow-[0_0_15px_rgba(16,193,180,0.1)] group-hover:shadow-[0_0_20px_rgba(16,193,180,0.3)]">
                                <feature.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-white font-bold text-xl mb-3">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
