import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Alex P.',
    role: 'Writer & Coach',
    quote: 'I doubled my newsletter subscribers in 60 days. The systems are simple and they work.',
    avatar: 'https://i.pravatar.cc/100?img=1',
  },
  {
    name: 'Maya L.',
    role: 'YouTuber',
    quote: 'The Offer Sprint paid for itself in a week. Clear, actionable, and no fluff.',
    avatar: 'https://i.pravatar.cc/100?img=5',
  },
  {
    name: 'Sam R.',
    role: 'Designer',
    quote: 'Finally a roadmap that respects my time. I shipped my first product in two weeks.',
    avatar: 'https://i.pravatar.cc/100?img=3',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 text-center"
        >
          What creators are saying
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm"
            >
              <p className="text-neutral-800">“{t.quote}”</p>
              <div className="mt-4 flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <div className="font-semibold text-neutral-900">{t.name}</div>
                  <div className="text-sm text-neutral-600">{t.role}</div>
                </div>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
