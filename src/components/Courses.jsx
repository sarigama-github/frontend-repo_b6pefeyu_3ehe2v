import { motion } from 'framer-motion';

const courses = [
  {
    title: 'Audience Engine',
    desc: 'Grow a loyal audience with a 4-part content system that compounds.',
    price: '$149',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Offer Sprint',
    desc: 'Turn your expertise into a product in 14 days using lean validation.',
    price: '$199',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Creator Ops',
    desc: 'Build your personal operating system for consistent creation.',
    price: '$129',
    image: 'https://images.unsplash.com/photo-1517697471339-4aa32003c11a?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900"
        >
          Courses that create transformation
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {courses.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="group bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.image} alt={c.title} className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-neutral-900 text-lg">{c.title}</h3>
                  <span className="text-neutral-900 font-semibold">{c.price}</span>
                </div>
                <p className="mt-2 text-sm text-neutral-600">{c.desc}</p>
                <a href="#community" className="mt-4 inline-flex text-sm font-medium px-3 py-2 rounded-md bg-neutral-900 text-white hover:bg-neutral-800">
                  Enroll Now
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
