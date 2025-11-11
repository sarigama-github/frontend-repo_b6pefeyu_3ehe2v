import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900"
        >
          I help creators go from scattered to systemized
        </motion.h2>
        <div className="mt-6 grid md:grid-cols-5 gap-10 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3 text-neutral-700 leading-relaxed"
          >
            <p>
              I’m a solo creator and educator. I design practical resources that help you plan content, build offers, and ship consistently. My mission is to simplify the business side so you can spend more time creating.
            </p>
            <p className="mt-4">
              I teach audience building, content systems, and productization. Everything I share is field-tested, easy to implement, and focused on momentum.
            </p>
          </motion.div>
          <motion.blockquote
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-2 p-6 rounded-xl bg-neutral-50 border border-neutral-200"
          >
            <p className="text-lg italic text-neutral-800">
              “Clarity creates speed. Systems create freedom.”
            </p>
            <footer className="mt-3 text-sm text-neutral-600">— My creator mantra</footer>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}
