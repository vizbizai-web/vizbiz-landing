"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Star,
  ChevronDown,
  BookOpen,
  Shield,
  Zap,
  CheckCircle2,
  Sparkles,
  BarChart3,
  Users,
  DollarSign,
  MapPin,
} from "lucide-react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-kingkong-green font-bold">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function StarRating({ rating = 4.9 }: { rating?: number }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
        >
          <Star
            className={`w-4 h-4 ${
              i < Math.floor(rating) ? "fill-kingkong-green text-kingkong-green" : "text-gray-600"
            }`}
          />
        </motion.div>
      ))}
      <span className="ml-2 text-sm text-gray-400">{rating}</span>
    </div>
  );
}

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const today = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Thanks! We'll send your AVI Score analysis shortly.");
    setIsSubmitting(false);
    setEmail("");
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-kingkong-dark">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-kingkong-dark via-kingkong-dark to-kingkong-card opacity-50" />
        
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-kingkong-green/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-kingkong-green/5 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kingkong-green/10 text-kingkong-green text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Now Auditing Dealerships in Greater Toronto
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Like AI-Powered Visibility*</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold mb-2">For Car Dealerships</motion.p>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-sm mb-8">*But it&apos;s 100% ethical (pinky promise)</motion.p>

          <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleEmailSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input type="email" placeholder="Enter your email and we'll show you the 'magic'" value={email}
                onChange={(e) => setEmail(e.target.value)} required
                className="flex-1 h-14 bg-kingkong-card border-kingkong-green/30 text-white placeholder:text-gray-500 input-glow" />
              <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="cta-button h-14 px-8 rounded-md font-semibold text-white whitespace-nowrap disabled:opacity-50">
                {isSubmitting ? "Revealing..." : "Reveal My Score"}
              </motion.button>
            </div>
          </motion.form>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <StarRating rating={4.9} />
              <span className="text-kingkong-green font-semibold">4.9 stars</span>
              <span>from 23 dealership audits</span>
            </div>
            <span className="hidden sm:block text-gray-600">|</span>
            <span>Updated: {today}</span>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.button onClick={() => scrollToSection("letter")} animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-500 hover:text-kingkong-green transition-colors">
            <ChevronDown className="w-8 h-8" />
          </motion.button>
        </motion.div>
      </section>

      {/* LETTER */}
      <section id="letter" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-white">Dear Dealership Owner,</h2>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <p className="text-xl text-gray-300 mb-6">We get it.</p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">Selling cars is harder than ever. Really freaking hard.</p>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              You&apos;re probably lying awake at 3 AM wondering where your next walk-in is coming from.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <div className="bg-kingkong-card rounded-xl p-6 my-8 border-l-4 border-kingkong-green">
              <p className="text-gray-300 italic mb-4">&ldquo;Should we do TikTok? Start a podcast? Hire that automotive influencer?&rdquo;</p>
              <p className="text-gray-300 italic mb-4">&ldquo;What about chatbots? Errrrrrbody&apos;s talkin&apos; bout chatbots.&rdquo;</p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.4}>
            <p className="text-xl text-kingkong-green font-semibold mb-4">We call this mess a rat&apos;s nest.</p>
            <p className="text-lg text-gray-400 mb-12 leading-relaxed">
              Also known as hell. It&apos;s hot and muggy there. And we&apos;d rather rub scorpion chillies in our eyes than run a dealership that way.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.5}>
            <div className="bg-gradient-to-r from-kingkong-green/20 to-transparent rounded-xl p-8 my-12 border border-kingkong-green/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                You&apos;re Reading This Right Now Because, In Some Way Shape or Form, Your Dealership Isn&apos;t Where You Want It To Be.
              </h3>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.6}>
            <ul className="space-y-3 mb-12">
              {["More floor traffic.", "More units moved.", "More gross per deal.", "More freedom from manufacturer dependency."].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-kingkong-green flex-shrink-0" />{item}
                </li>
              ))}
            </ul>
          </FadeInSection>
        </div>
      </section>

      {/* CHANGED */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-kingkong-card/50">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-white">The Way People Buy Cars Has Fundamentally Changed.</h2>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-300 mb-4">Old way:</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Customer Googles &ldquo;Honda dealership Oakville&rdquo; → clicks 3-4 websites → visits 2 dealerships → buys from the one they like.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="bg-kingkong-dark rounded-xl p-6 mb-8 border border-kingkong-green/30">
              <h3 className="text-xl font-semibold text-kingkong-green mb-4">New way:</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Customer asks ChatGPT <em>&ldquo;best Honda dealership near me with good service department&rdquo;</em> → gets <strong>ONE answer</strong> with 3 citations → visits the dealership that&apos;s mentioned → buys.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <div className="bg-kingkong-green/10 rounded-xl p-6 mb-8 border-l-4 border-kingkong-green">
              <h3 className="text-xl font-semibold text-white mb-4">The difference?</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                In the new way, if AI doesn&apos;t mention you, <strong className="text-kingkong-green">you don&apos;t exist.</strong>
              </p>
              <p className="text-gray-400 mt-4">The customer never sees your website. Never sees your inventory. Never compares your prices.</p>
              <p className="text-kingkong-green font-bold text-xl mt-4">Period.</p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* AVI SCORE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white">Introducing: The AVI Score™</h2>
            <p className="text-gray-400 mb-6">(AI Visibility Intelligence Score)</p>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <p className="text-lg text-gray-300 mb-8">Your proprietary 0-100 metric that tells you exactly where you stand.</p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="bg-kingkong-dark rounded-2xl p-8 border-2 border-kingkong-green/50 mb-12">
              <h3 className="text-xl font-semibold text-white mb-6">Calculated from 23 data points across 5 categories:</h3>
              <div className="space-y-4">
                {[
                  { name: "Presence", percent: "30%", desc: "Are you visible where AI looks?", icon: MapPin },
                  { name: "Authority", percent: "25%", desc: "Do AI systems trust and cite you?", icon: Shield },
                  { name: "Sentiment", percent: "20%", desc: "What do your reviews tell AI?", icon: Star },
                  { name: "Content", percent: "15%", desc: "Can AI understand what you offer?", icon: BookOpen },
                  { name: "Technical", percent: "10%", desc: "Can AI access your site?", icon: Zap },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-kingkong-card rounded-lg p-4">
                    <div className="w-10 h-10 rounded-lg bg-kingkong-green/20 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-kingkong-green" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-white">{item.name}</span>
                        <span className="text-kingkong-green font-bold">{item.percent}</span>
                      </div>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* PATHS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-kingkong-card/50">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Choose Your Own Adventure</h2>
              <p className="text-gray-400">*cue angels singing*</p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeInSection delay={0.2}>
              <motion.div whileHover={{ scale: 1.02, y: -4 }} className="bg-kingkong-card rounded-2xl p-8 border border-kingkong-green/30 h-full">
                <div className="w-12 h-12 rounded-xl bg-kingkong-green/20 flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-kingkong-green" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Path A: Get the Audit</h3>
                <p className="text-gray-400 mb-6">AI Visibility Audit Only. Complete AVI Score assessment and priority roadmap.</p>
                <div className="text-3xl font-bold text-kingkong-green mb-6">$1,500-2,500</div>
                <ul className="space-y-3 mb-8">
                  {["Complete AVI Score assessment", "Competitor benchmarking", "Priority action roadmap", "20 AI queries tested"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-kingkong-green flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                <Button className="w-full cta-button h-12 text-lg font-semibold">Get the Audit</Button>
              </motion.div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <motion.div whileHover={{ scale: 1.02, y: -4 }} className="bg-gradient-to-br from-kingkong-green/20 to-kingkong-card rounded-2xl p-8 border-2 border-kingkong-green h-full relative">
                <span className="absolute top-4 right-4 px-3 py-1 bg-kingkong-green text-black text-xs font-bold rounded-full">MOST POPULAR</span>
                <div className="w-12 h-12 rounded-xl bg-kingkong-green flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Path B: Done For You</h3>
                <p className="text-gray-400 mb-6">Audit + Implementation. We run the audit AND implement the quick wins for you.</p>
                <div className="text-3xl font-bold text-kingkong-green mb-6">$3,500-5,000</div>
                <ul className="space-y-3 mb-8">
                  {["Everything in Path A", "Google Business Profile optimization", "Schema markup installation", "Review response strategy", "30-day implementation support"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-kingkong-green flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                <Button className="w-full cta-button h-12 text-lg font-semibold">Do It For Me</Button>
              </motion.div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Users, value: 23, suffix: "+", label: "Dealerships Audited" },
                { icon: BarChart3, value: 500, suffix: "+", label: "AI Queries Tracked" },
                { icon: DollarSign, value: 2500000, suffix: "+", label: "Revenue Generated" },
                { icon: MapPin, value: 12, suffix: "", label: "Markets Served" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-kingkong-green/20 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-kingkong-green" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-kingkong-card/50">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-white text-center">What Dealership Owners Say</h2>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Mike R.", role: "GM, Honda Dealership", quote: "The AVI Score opened our eyes. We had no idea AI was recommending our competitors." },
              { name: "Sarah T.", role: "Owner, Ford Store", quote: "Within 60 days of implementing the roadmap, we saw a 40% increase in 'AI referred' customers." },
              { name: "John D.", role: "Dealer Principal", quote: "Best investment we've made. The audit paid for itself in the first month." },
            ].map((testimonial, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <motion.div whileHover={{ y: -4 }} className="bg-kingkong-card rounded-xl p-6 border border-gray-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-kingkong-green/20 flex items-center justify-center">
                      <span className="text-kingkong-green font-bold">{testimonial.name[0]}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <StarRating rating={5} />
                  <p className="text-gray-300 mt-4 text-sm leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* AUTHORITY */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="bg-gradient-to-br from-kingkong-card to-kingkong-dark rounded-2xl p-8 md:p-12 border border-kingkong-green/30">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-40 bg-kingkong-green/20 rounded-lg flex items-center justify-center flex-shrink-0 border-2 border-kingkong-green/50">
                  <BookOpen className="w-16 h-16 text-kingkong-green" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">We Literally Wrote The Book</h2>
                  <p className="text-gray-400 mb-6">
                    Our team pioneered AI Visibility Intelligence for automotive. We&apos;ve tested thousands of AI queries, analyzed hundreds of dealerships, and built the first comprehensive scoring system for AI search optimization.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full bg-kingkong-green/30 border-2 border-kingkong-dark flex items-center justify-center">
                          <Users className="w-5 h-5 text-kingkong-green" />
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-400">Trusted by <span className="text-kingkong-green font-semibold">23+ dealerships</span> in GTA</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-kingkong-card/50">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-white text-center">Frequently Asked Questions</h2>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                { q: "What exactly is the AVI Score?", a: "The AVI (AI Visibility Intelligence) Score is a proprietary 0-100 metric that measures how visible and recommended your dealership is across AI search systems like ChatGPT, Perplexity, and Google AI Overviews." },
                { q: "How is this different from SEO?", a: "Traditional SEO focuses on ranking in Google search results. AI Visibility focuses on being cited and recommended by AI systems when customers ask questions. It's a completely different optimization target." },
                { q: "How long does an audit take?", a: "The audit process takes 5-7 business days. We test 20+ AI queries, analyze your digital presence, benchmark against competitors, and deliver a comprehensive report with actionable recommendations." },
                { q: "Will this actually get me more customers?", a: "73% of car buyers now use AI assistants for research. If your dealership isn't being recommended by AI, you're invisible to those customers. Our clients typically see measurable increases in AI-referred traffic within 60-90 days." },
                { q: "Do you guarantee results?", a: "For our Full Management clients, we guarantee a 10+ point AVI Score improvement within 90 days, or month 4 is free. No fine print, no excuses." },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-kingkong-card rounded-xl border border-gray-800 px-6 data-[state=open]:border-kingkong-green/50">
                  <AccordionTrigger className="text-white hover:text-kingkong-green text-left py-4">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-gray-400 pb-4">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeInSection>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInSection>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Ready to See Your AVI Score?</h2>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <p className="text-xl text-gray-400 mb-8">Book your free 30-minute assessment. No pitch fest. No pressure. Just clarity.</p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input type="email" placeholder="Enter your email address" value={email}
                  onChange={(e) => setEmail(e.target.value)} required
                  className="flex-1 h-14 bg-kingkong-card border-kingkong-green/30 text-white placeholder:text-gray-500 input-glow" />
                <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="cta-button h-14 px-8 rounded-md font-semibold text-white whitespace-nowrap disabled:opacity-50">
                  {isSubmitting ? "Booking..." : "Get Your Free AVI Score"}
                </motion.button>
              </div>
            </form>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <Shield className="w-4 h-4 text-kingkong-green" />
              <span>100% confidential. No spam. Unsubscribe anytime.</span>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-kingkong-green" />
              <span className="font-bold text-white">Vizbiz</span>
            </div>
            <p className="text-gray-500 text-sm">© 2024 Vizbiz. AI Visibility Intelligence for Car Dealerships.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
