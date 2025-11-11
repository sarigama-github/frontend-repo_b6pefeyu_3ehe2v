import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32">
      <div className="absolute inset-0 h-[70vh] min-h-[520px]">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-white/70 to-white" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[70vh]">
          <div className="lg:col-span-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900"
            >
              Helping creators build smart, simple, and sustainable digital businesses
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              className="mt-4 text-lg text-neutral-700 leading-relaxed"
            >
              I share proven frameworks, step-by-step roadmaps, and practical tools to help you grow faster—without burning out.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#resources" className="inline-flex justify-center items-center px-5 py-3 rounded-md bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors">
                Download Free Resources
              </a>
              <a href="#community" className="inline-flex justify-center items-center px-5 py-3 rounded-md bg-white text-neutral-900 border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 font-medium transition-colors">
                Join My Creator Circle
              </a>
            </motion.div>

            <div className="mt-8 flex items-center gap-6 text-sm text-neutral-600">
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-500" /> 50k+ creators helped</div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-500" /> Action-first, fluff-free</div>
            </div>
          </div>

          <div className="lg:col-span-6" />
        </div>
      </div>
    </section>
  );
}
