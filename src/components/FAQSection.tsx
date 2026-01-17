import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "Como funciona o acesso ao Portal?",
        answer: "O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail com seus dados de login para entrar na área de membros e começar a assistir às aulas de onde e quando quiser, pelo computador ou celular."
    },
    {
        question: "Por quanto tempo terei acesso?",
        answer: "Sua assinatura é anual. Você terá acesso ilimitado a todo o conteúdo (cursos atuais e atualizações futuras) durante 12 meses. A renovação é automática para garantir que você não perca o acesso, mas você pode cancelar a qualquer momento."
    },
    {
        question: "Tem certificado?",
        answer: "Sim! Todos os cursos concluídos dentro da plataforma geram um certificado digital que você pode baixar e imprimir para comprovar suas horas de estudo e especialização."
    },
    {
        question: "Se eu não gostar, posso cancelar?",
        answer: "Sim. Oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo você achar que o Portal Cranium não é para você, basta solicitar o reembolso dentro desse prazo e devolveremos 100% do seu investimento."
    },
    {
        question: "Quais são as formas de pagamento?",
        answer: "Aceitamos cartão de crédito (em até 12x), PIX e boleto bancário. Para parcelamento, a melhor opção é o cartão de crédito."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-20 px-6 bg-[#050505]">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-white text-center mb-12">Perguntas Frequentes</h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-white/10 rounded-xl bg-[#0A0A0A] overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-white font-medium pr-8">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                )}
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-400 leading-relaxed text-sm border-t border-white/5 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
