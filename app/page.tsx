"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Star Rating Component
function StarRating({ rating = 4.9, showText = true }: { rating?: number; showText?: boolean }) {
  const fullStars = Math.floor(rating);
  
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < fullStars ? 'text-kk-green fill-kk-green' : 'text-gray-400'}`}
          viewBox="0 0 20 20"
          fill={i < fullStars ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={i < fullStars ? 0 : 1.5}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      {showText && <span className="ml-2 text-sm font-medium">{rating}</span>}
    </div>
  );
}

// Animated Counter Component
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
    <span ref={ref} className="counter-number">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

// Fade In Section Component
function FadeInSection({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Chevron Down Icon
function ChevronDownIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  );
}

// Main Page Component
export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const today = new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
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
    <main className="min-h-screen">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 bg-kk-dark overflow-hidden">
        {/* Diagonal stripes pattern */}
        <div className="absolute inset-0 diagonal-stripes pointer-events-none" />
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <h1 className="headline-condensed text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-2">
              Like AI Visibility*
            </h1>
            <h2 className="headline-condensed text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              For Dealerships
            </h2>
          </motion.div>

          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-lg mb-12"
          >
            *But it&apos;s 100% ethical (pinky promise)
          </motion.p>

          {/* Email Input */}
          <motion.form 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleEmailSubmit} 
            className="max-w-xl mx-auto mb-8"
          >
            <div className="flex flex-col sm:flex-row gap-0">
              <input
                type="email"
                placeholder="Enter your email here and we'll send you some 'magic'"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-14 px-6 input-green rounded-l-md sm:rounded-r-none rounded-r-md sm:rounded-l-md text-base"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="cta-button h-14 px-8 rounded-r-md sm:rounded-l-none rounded-l-md sm:rounded-r-md font-bold whitespace-nowrap disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Get Started"}
              </button>
            </div>
          </motion.form>

          {/* Trust Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.4 }}
            className="trust-bar text-white/80 text-sm"
          >
            <StarRating rating={4.9} showText={false} />
            <span className="font-semibold text-white">4.9 stars</span>
            <span>out of 23 reviews</span>
            <span className="hidden sm:inline mx-2">|</span>
            <span>Updated: {today}</span>
          </motion.div>
        </div>

        {/* Bouncing Arrow */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button 
            onClick={() => scrollToSection("letter")} 
            className="bounce-arrow text-kk-green hover:text-white transition-colors"
          >
            <ChevronDownIcon className="w-10 h-10" />
          </button>
        </motion.div>
      </section>

      {/* ==================== LETTER SECTION ==================== */}
      <section id="letter" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl sm:text-5xl font-bold text-kk-dark mb-12">
              Dear dealership owner,
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <p className="text-xl text-kk-dark mb-6">We get it.</p>
          </FadeInSection>

          <FadeInSection delay={0.15}>
            <p className="text-lg text-kk-gray-dark mb-6 leading-relaxed">
              Selling cars is harder than ever. Really freaking hard.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <p className="text-lg text-kk-gray-dark mb-6 leading-relaxed">
              You&apos;re probably lying awake at 3 AM wondering where your next walk-in is coming from.
            </p>
            <p className="text-lg text-kk-gray-dark mb-6 leading-relaxed">
              Stressed and sleeping like a teething two-year-old.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.25}>
            <p className="text-lg text-kk-gray-dark mb-6 leading-relaxed">
              As your hair goes fifty shades of grey from all the uncertainty.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <p className="text-lg text-kk-gray-dark mb-6 leading-relaxed">
              And to top it all off.
            </p>
            <p className="text-lg text-kk-gray-dark mb-8 leading-relaxed">
              You&apos;re being pulled in a bazillion different directions.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.35}>
            <p className="text-xl text-kk-dark font-semibold mb-6">Ohmygawd!</p>
          </FadeInSection>

          <FadeInSection delay={0.4}>
            <div className="quote-block rounded-r-xl p-6 my-8">
              <p className="text-kk-gray-dark italic mb-3">&ldquo;Should we do TikTok? Start a podcast? Hire that automotive influencer?&rdquo;</p>
              <p className="text-kk-gray-dark italic mb-3">&ldquo;What about chatbots? Errrrrrbody&apos;s talkin&apos; bout chatbots.&rdquo;</p>
              <p className="text-kk-gray-dark italic mb-3">&ldquo;Should we run some ads? Drop $5k on a new website? Post on LinkedIn five times per day?&rdquo;</p>
              <p className="text-kk-gray-dark italic">*somebody please pull out my eyelashes*</p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.45}>
            <p className="text-lg text-kk-gray-dark mb-6 leading-relaxed">
              Look, most dealership owners have a bad case of &apos;shiny object syndrome&apos;…
            </p>
            <p className="text-lg text-kk-gray-dark mb-6 leading-relaxed">
              Mixed with a scoop of ADD… and a sprinkle of &quot;I can do everything&quot;.
            </p>
            <p className="text-lg text-kk-gray-dark mb-6 leading-relaxed">
              And they end up doing a little bit of this… a little bit of that.
            </p>
            <p className="text-lg text-kk-gray-dark mb-6 leading-relaxed">
              Soon, they&apos;re screaming at their computer with all the things they &quot;have to&quot; do.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.5}>
            <p className="text-xl text-kk-green font-bold mb-4">We call this mess a rat&apos;s nest.</p>
            <p className="text-lg text-kk-gray-dark mb-6 leading-relaxed">
              Also known as hell. It&apos;s hot and muggy there.
            </p>
            <p className="text-lg text-kk-gray-dark mb-12 leading-relaxed">
              And we&apos;d rather rub scorpion chillies in our eyes than run a dealership that way.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.55}>
            <div className="bg-kk-green/10 rounded-xl p-8 my-12 border-l-4 border-kk-green">
              <h3 className="text-2xl font-bold text-kk-dark">
                You&apos;re Reading This Right Now Because, In Some Way Shape or Form, Your Dealership Isn&apos;t Where You Want It To Be.
              </h3>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.6}>
            <p className="text-lg text-kk-gray-dark mb-6 leading-relaxed">
              Or maybe you&apos;re flying… and you simply want more.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.65}>
            <ul className="space-y-3 mb-12">
              {[
                "More floor traffic.",
                "More units moved.",
                "More gross per deal.",
                "More freedom from manufacturer dependency.",
                "More time with your family.",
                "More security for your team."
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg text-kk-dark">
                  <span className="text-kk-green font-bold">✓</span>{item}
                </li>
              ))}
            </ul>
          </FadeInSection>

          <FadeInSection delay={0.7}>
            <p className="text-lg text-kk-gray-dark mb-12 leading-relaxed">
              Whatever it is for you…
            </p>
            <p className="text-xl text-kk-dark font-semibold mb-8">
              It all starts by &quot;choosing your own adventure&quot; below…
            </p>
            <p className="text-kk-gray-dark italic">*cue angels singing*</p>
          </FadeInSection>
        </div>
      </section>

      {/* ==================== TWO PATHS SECTION ==================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-kk-gray">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-kk-dark mb-4">Choose Your Own Adventure</h2>
              <p className="text-kk-gray-dark italic">*cue angels singing*</p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Path A - DIY */}
            <FadeInSection delay={0.2}>
              <div className="path-card rounded-2xl p-8 h-full flex flex-col">
                <div className="w-16 h-16 rounded-full bg-kk-green/20 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-kk-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-kk-dark mb-4">Get the Audit</h3>
                <p className="text-kk-gray-dark mb-6 flex-grow">
                  AI Visibility Audit Only. Complete AVI Score assessment and priority roadmap. Perfect for DIY dealership owners who want the blueprint.
                </p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-kk-dark">$1,500-2,500</span>
                </div>
                <div className="mb-6">
                  <StarRating rating={4.9} showText={false} />
                  <span className="text-sm text-kk-gray-dark ml-2">4.9 out of 5 stars</span>
                </div>
                <button className="cta-button w-full h-14 rounded-md font-bold">
                  Get Started
                </button>
              </div>
            </FadeInSection>

            {/* Path B - Done For You */}
            <FadeInSection delay={0.3}>
              <div className="path-card path-card-popular rounded-2xl p-8 h-full flex flex-col relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-kk-green text-kk-dark text-xs font-bold rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
                <div className="w-16 h-16 rounded-full bg-kk-green flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-kk-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-kk-dark mb-4">Done For You</h3>
                <p className="text-kk-gray-dark mb-6 flex-grow">
                  Audit + Implementation. We run the audit AND implement the quick wins for you. Full-service AI visibility transformation.
                </p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-kk-dark">$3,500-5,000</span>
                </div>
                <div className="mb-6">
                  <StarRating rating={5.0} showText={false} />
                  <span className="text-sm text-kk-gray-dark ml-2">5.0 out of 5 stars</span>
                </div>
                <button className="cta-button w-full h-14 rounded-md font-bold">
                  Get Started
                </button>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ==================== STATS/SOCIAL PROOF SECTION ==================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-kk-gray-dark">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: 23, suffix: "+", label: "Dealerships Audited" },
                { value: 500, suffix: "+", label: "AI Queries Tested" },
                { value: 2.5, suffix: "M+", label: "Revenue Generated", isDecimal: true },
                { value: 12, suffix: "", label: "Markets Served" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-kk-green mb-2">
                    {stat.isDecimal ? (
                      <span>${stat.value}{stat.suffix}</span>
                    ) : (
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    )}
                  </div>
                  <p className="text-white/70 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* Trust Logos */}
          <FadeInSection delay={0.2}>
            <div className="mt-16 text-center">
              <p className="text-white/50 text-sm mb-8 uppercase tracking-widest">Trusted by dealerships across</p>
              <div className="flex flex-wrap justify-center gap-8 text-white/30">
                {["Greater Toronto", "Hamilton", "Mississauga", "Oakville", "Brampton", "Vaughan"].map((city, i) => (
                  <span key={i} className="text-lg font-medium">{city}</span>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ==================== BOOK/AUTHORITY SECTION ==================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Book Visual */}
              <div className="w-full md:w-1/3">
                <div className="aspect-[3/4] bg-gradient-to-br from-kk-green/20 to-kk-green/5 rounded-lg border-2 border-kk-green/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 diagonal-stripes opacity-50" />
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-kk-green/20 flex items-center justify-center">
                      <svg className="w-10 h-10 text-kk-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <p className="text-kk-dark font-bold text-lg">The AVI Score™</p>
                    <p className="text-kk-gray-dark text-sm">Methodology</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-2/3">
                <h2 className="text-3xl sm:text-4xl font-bold text-kk-dark mb-6">
                  We Literally Wrote The Book on AI Visibility for Automotive
                </h2>
                <p className="text-kk-gray-dark mb-6 leading-relaxed">
                  Our team pioneered AI Visibility Intelligence for car dealerships. We&apos;ve tested thousands of AI queries, analyzed hundreds of dealership digital footprints, and built the first comprehensive scoring system specifically for automotive AI search optimization.
                </p>
                <p className="text-kk-gray-dark mb-8 leading-relaxed">
                  The AVI Score™ methodology is based on 23 data points across 5 core categories: Presence, Authority, Sentiment, Content, and Technical. It&apos;s the same framework we use to help dealerships dominate AI search results.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-kk-gray border-2 border-white flex items-center justify-center">
                        <span className="text-kk-gray-dark text-xs font-bold">{String.fromCharCode(64 + i)}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-kk-gray-dark text-sm">
                    Trusted by <span className="text-kk-green font-bold">23+ dealerships</span> in GTA
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ==================== TESTIMONIALS SECTION ==================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-kk-gray">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-kk-dark mb-4 text-center">
              What Dealership Owners Say
            </h2>
            <p className="text-kk-gray-dark text-center mb-12">Don&apos;t just take our word for it</p>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                name: "Mike R.", 
                role: "GM, Honda Dealership", 
                quote: "The AVI Score opened our eyes. We had no idea AI was recommending our competitors over us. Within 60 days of implementing the roadmap, we saw measurable results." 
              },
              { 
                name: "Sarah T.", 
                role: "Owner, Ford Store", 
                quote: "Best investment we've made this year. The audit paid for itself in the first month. Our service department is busier than ever from AI referrals." 
              },
              { 
                name: "John D.", 
                role: "Dealer Principal", 
                quote: "Finally, someone who understands how AI actually works for dealerships. The Done For You package was worth every penny. Highly recommend." 
              },
            ].map((testimonial, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-6 h-full card-hover">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-kk-green/20 flex items-center justify-center">
                      <span className="text-kk-green font-bold text-lg">{testimonial.name[0]}</span>
                    </div>
                    <div>
                      <p className="font-bold text-kk-dark">{testimonial.name}</p>
                      <p className="text-sm text-kk-gray-dark">{testimonial.role}</p>
                    </div>
                  </div>
                  <StarRating rating={5} showText={false} />
                  <p className="text-kk-gray-dark mt-4 text-sm leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FAQ SECTION ==================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-kk-dark mb-12 text-center">
              Frequently Asked Questions
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                { 
                  q: "What exactly is the AVI Score?", 
                  a: "The AVI (AI Visibility Intelligence) Score is a proprietary 0-100 metric that measures how visible and recommended your dealership is across AI search systems like ChatGPT, Perplexity, Google AI Overviews, and Claude. It analyzes 23 data points across 5 categories to give you a complete picture of your AI presence." 
                },
                { 
                  q: "How is this different from regular SEO?", 
                  a: "Traditional SEO focuses on ranking in Google&apos;s blue links. AI Visibility focuses on being cited, recommended, and mentioned by AI systems when customers ask questions like &apos;best Honda dealership near me&apos; or &apos;who has the best service department in Oakville.&apos; It&apos;s a completely different optimization target with different success metrics." 
                },
                { 
                  q: "How long does the audit take?", 
                  a: "The audit process takes 5-7 business days. We test 20+ AI queries relevant to your market, analyze your digital presence across multiple platforms, benchmark against your top 3 competitors, and deliver a comprehensive 30+ page report with actionable recommendations prioritized by impact." 
                },
                { 
                  q: "Will this actually get me more customers?", 
                  a: "73% of car buyers now use AI assistants for research before visiting a dealership. If your dealership isn&apos;t being recommended by AI, you&apos;re invisible to those customers. Our clients typically see measurable increases in AI-referred traffic and &apos;I heard about you from ChatGPT&apos; customers within 60-90 days." 
                },
                { 
                  q: "Do you guarantee results?", 
                  a: "For our Done For You clients, we guarantee a 10+ point AVI Score improvement within 90 days, or month 4 is free. No fine print, no excuses. We&apos;re that confident in our methodology because we&apos;ve seen it work for dozens of dealerships." 
                },
                { 
                  q: "What markets do you serve?", 
                  a: "We currently serve car dealerships in the Greater Toronto Area, including Toronto, Mississauga, Brampton, Oakville, Hamilton, Vaughan, and surrounding markets. We&apos;re expanding to other Canadian markets soon." 
                },
              ].map((faq, i) => (
                <AccordionItem 
                  key={i} 
                  value={`item-${i}`} 
                  className="faq-item rounded-xl px-6"
                >
                  <AccordionTrigger className="text-kk-dark hover:text-kk-green text-left py-4 font-semibold">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-kk-gray-dark pb-4 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeInSection>
        </div>
      </section>

      {/* ==================== FINAL CTA SECTION ==================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-kk-dark relative overflow-hidden">
        {/* Diagonal stripes pattern */}
        <div className="absolute inset-0 diagonal-stripes pointer-events-none" />
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <FadeInSection>
            <h2 className="headline-condensed text-white text-4xl sm:text-5xl md:text-6xl mb-6">
              Ready to See Your AVI Score?
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <p className="text-xl text-white/70 mb-8">
              Book your free 30-minute assessment. No pitch fest. No pressure. Just clarity.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <form onSubmit={handleEmailSubmit} className="max-w-xl mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-0">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-14 px-6 input-green rounded-l-md sm:rounded-r-none rounded-r-md sm:rounded-l-md text-base"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cta-button h-14 px-8 rounded-r-md sm:rounded-l-none rounded-l-md sm:rounded-r-md font-bold whitespace-nowrap disabled:opacity-50"
                >
                  {isSubmitting ? "Booking..." : "Get Your Free AVI Score"}
                </button>
              </div>
            </form>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <div className="flex items-center justify-center gap-2 text-sm text-white/50">
              <svg className="w-4 h-4 text-kk-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>100% confidential. No spam. Unsubscribe anytime.</span>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-kk-dark border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-kk-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="font-bold text-white text-lg">Vizbiz</span>
            </div>
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Vizbiz. AI Visibility Intelligence for Car Dealerships.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
