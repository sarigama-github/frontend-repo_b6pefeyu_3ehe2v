import { motion } from 'framer-motion';

const items = [
  {
    title: 'Content OS Cheatsheet',
    desc: 'A one-page system to plan, repurpose, and publish in under 60 minutes/week.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
    cta: 'Get Cheatsheet',
  },
  {
    title: 'Creator Roadmap',
    desc: 'Your first 90 days to consistent growth: audience, offer, pipeline.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
    cta: 'Download Roadmap',
  },
  {
    title: 'Newsletter Starter Kit',
    desc: 'Templates and prompts to launch a value-packed weekly newsletter.',
    image: 'https://images.unsplash.com/photo-1733396006053-2274d3b4764b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZXdzbGV0dGVyJTIwU3RhcnRlciUyMEtpdHxlbnwwfDB8fHwxNzYyODYzNDQ2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    cta: 'Access Kit',
  },
  {
    title: 'Offer Worksheet',
    desc: 'Define your problem, promise, and product in 30 minutes.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',
    cta: 'Download Worksheet',
  },
];

export default function Resources() {
  return (
    <section id="resources" className="py-20 sm:py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900"
        >
          Free resources to get you moving
        </motion.h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="group bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-neutral-900">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{item.desc}</p>
                <a href="#community" className="mt-4 inline-flex text-sm font-medium px-3 py-2 rounded-md bg-neutral-900 text-white hover:bg-neutral-800">
                  {item.cta}
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
