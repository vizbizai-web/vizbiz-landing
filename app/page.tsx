"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
      setEmail("");
    }
  };

  const scrollToForm = () => {
    document.getElementById("cta-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Breaking News Ticker */}
      <div className="bg-red-600 text-white py-2 overflow-hidden relative z-50">
        <div className="ticker whitespace-nowrap flex items-center">
          <span className="mx-8 font-bold text-sm md:text-base">🚨 BREAKING: AI Search Just Killed Traditional SEO</span>
          <span className="mx-8 font-bold text-sm md:text-base">⚡ URGENT: Dealerships Losing 40% of Traffic to AI Overviews</span>
          <span className="mx-8 font-bold text-sm md:text-base">🔥 WARNING: Your Competitors Are Already Adapting</span>
          <span className="mx-8 font-bold text-sm md:text-base">💀 REALITY CHECK: If You're Not in AI Search, You Don't Exist</span>
          <span className="mx-8 font-bold text-sm md:text-base">🚨 BREAKING: AI Search Just Killed Traditional SEO</span>
          <span className="mx-8 font-bold text-sm md:text-base">⚡ URGENT: Dealerships Losing 40% of Traffic to AI Overviews</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-12 pb-20 md:pt-20 md:pb-32">
        <div className="max-w-6xl mx-auto">
          {/* Breaking News Badge */}
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-sm mb-6 md:mb-8">
            <span className="animate-pulse w-2 h-2 bg-white rounded-full"></span>
            <span className="font-bold text-sm tracking-wider">BREAKING NEWS</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] mb-6 md:mb-8 tracking-tight uppercase" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>
            <span className="block text-white">WILD DETAILS</span>
            <span className="block text-white">EMERGE ABOUT...</span>
          </h1>

          {/* Sub Headline */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-red-500 mb-8 md:mb-12 max-w-4xl leading-tight red-glow">
            The AI Search Revolution That's Stealing Your Customers While You Sleep
          </h2>

          {/* Lead Paragraph */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mb-8 md:mb-12 leading-relaxed">
            While you're counting inventory and haggling over floorplan interest, 
            <span className="text-white font-bold"> AI search engines are eating your lunch.</span> 
            And the worst part? You don't even know it's happening.
          </p>

          {/* First CTA */}
          <button 
            onClick={scrollToForm}
            className="aggressive-pulse bg-red-600 hover:bg-red-700 text-white font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-sm transition-all transform hover:scale-105 glitch"
          >
            GET YOUR FREE AVI SCORE →
          </button>

          <p className="text-sm text-gray-500 mt-4">Takes 30 seconds. No credit card required.</p>
        </div>
      </section>

      {/* Dear Dealership Owner Letter */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-zinc-950">
        <div className="max-w-3xl mx-auto">
          <h3 className="uppercase text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-12 text-white">
            DEAR DEALERSHIP OWNER,
          </h3>

          <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            <p>
              Lemme guess—you're lying awake at 3am wondering where tomorrow's walk-in is coming from?
            </p>

            <p>
              You're not alone. I've talked to hundreds of dealers just like you. And imma shoot you straight...
            </p>

            <p className="text-white font-semibold text-xl md:text-2xl border-l-4 border-red-600 pl-6 py-2">
              Everything you know about getting customers through the door is becoming obsolete. 
              Not tomorrow. Not next year. <span className="text-red-500">Right now.</span>
            </p>

            <p>
              Remember when Google was just a search engine? Those days are gone, buttercup. 
              Now it's an <span className="text-white font-bold">AI-powered answer machine</span> that decides 
              whether customers ever see your dealership—or your competitor's.
            </p>

            <p>
              And here's the part that should make your stomach turn: 
            </p>

            <p className="text-white font-bold text-2xl md:text-3xl text-center py-8">
              YOUR COMPETITORS ALREADY KNOW THIS.
            </p>

            <p>
              While you're still buying billboards and praying for lot traffic, 
              they're gaming the AI. They're feeding the machine. 
              They're showing up in every goddamn AI search result that matters.
            </p>

            <p>
              And you? You're becoming invisible.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h3 className="uppercase text-5xl md:text-6xl lg:text-7xl mb-8 md:mb-12 text-center">
            THE VAMPIRE IN YOUR BUSINESS
          </h3>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 text-lg text-gray-300">
              <p className="text-xl md:text-2xl text-white font-semibold">
                AI search is like a vampire. It sucks the life out of traditional search traffic.
              </p>

              <p>
                When someone asks ChatGPT, Google Gemini, or Perplexity 
                <span className="text-white"> "What's the best Toyota dealership near me?"</span>—
                they get ONE answer. Not a list of ten. ONE.
              </p>

              <p>
                If that's not you? You're dead to that customer. 
                They never even knew you existed.
              </p>

              <div className="bg-red-900/20 border border-red-600/50 p-6 rounded-sm">
                <p className="text-red-400 font-bold text-xl mb-2">THE BRUTAL MATH:</p>
                <p className="text-white">
                  73% of car buyers now use AI tools for research. 
                  If you're not optimized for AI search, 
                  <span className="text-red-500 font-bold"> you're invisible to 3 out of 4 potential customers.</span>
                </p>
              </div>
            </div>

            <div className="bg-zinc-900 p-8 rounded-sm border border-zinc-800">
              <h4 className="uppercase text-2xl mb-6 text-red-500">OLD WAY vs NEW WAY</h4>
              
              <div className="space-y-4">
                <div className="opacity-50">
                  <p className="text-sm text-gray-500 mb-1">BEFORE (RIP 2023)</p>
                  <div className="bg-zinc-800 p-4 rounded">
                    <p className="text-gray-400">Google Search → 10 Blue Links → Customer Chooses</p>
                  </div>
                </div>

                <div className="text-4xl text-center text-red-600">↓</div>

                <div>
                  <p className="text-sm text-red-400 mb-1">NOW (2025)</p>
                  <div className="bg-red-950/30 border border-red-600/50 p-4 rounded">
                    <p className="text-white font-semibold">AI Search → ONE Curated Answer → Winner Takes All</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agitation Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-b from-red-950/30 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="uppercase text-5xl md:text-6xl lg:text-8xl mb-8 md:mb-12">
            THEY'RE WINNING.<br />
            <span className="text-red-500">YOU'RE NOT.</span>
          </h3>

          <div className="space-y-8 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            <p>
              Every day your competitors show up in AI search results is a day 
              <span className="text-white font-bold"> they steal customers that should've been yours.</span>
            </p>

            <p>
              That guy across town with the flashy website? He's not just winning on Google anymore. 
              He's winning on ChatGPT. On Claude. On every AI tool your customers are using.
            </p>

            <div className="bg-black border-2 border-red-600 p-8 rounded-sm my-12">
              <p className="uppercase text-3xl md:text-4xl text-white mb-4">
                HERE'S WHAT HAPPENS NEXT:
              </p>
              <ul className="text-left space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-2xl">→</span>
                  <span>AI search gets bigger (it's already 40% of queries)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-2xl">→</span>
                  <span>Traditional SEO becomes worthless for local business</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-2xl">→</span>
                  <span>Your competitors cement their AI advantage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-2xl">→</span>
                  <span>You keep wondering why foot traffic keeps dropping</span>
                </li>
              </ul>
            </div>

            <p className="text-2xl md:text-3xl text-white font-bold">
              Sound familiar? Keep reading.
            </p>
          </div>

          {/* Second CTA */}
          <button 
            onClick={scrollToForm}
            className="aggressive-pulse bg-red-600 hover:bg-red-700 text-white font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-sm transition-all transform hover:scale-105 glitch"
          >
            STOP THE BLEEDING → GET MY AVI SCORE
          </button>
        </div>
      </section>

      {/* Solution Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h3 className="uppercase text-5xl md:text-6xl lg:text-7xl mb-8 md:mb-12 text-center">
            TIME TO HIRE A BODYGUARD
          </h3>

          <div className="space-y-8 text-lg md:text-xl text-gray-300 mb-12">
            <p className="text-xl md:text-2xl text-white font-semibold text-center">
              Meet your new digital bodyguard: The AVI Score.
            </p>

            <p>
              Think of AVI (AI Visibility Index) like having a 6'4" ex-Marine standing between 
              your business and the chaos of AI search. 
            </p>

            <p>
              While your competitors are out there fumbling in the dark, 
              <span className="text-white font-bold"> AVI tells you EXACTLY how visible you are</span> 
              to AI search engines—and exactly how to fix it.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-12">
              <div className="bg-zinc-900 p-6 rounded-sm border border-zinc-800 text-center">
                <div className="text-5xl mb-4">🔍</div>
                <h4 className="uppercase text-2xl text-white mb-2">AUDIT</h4>
                <p className="text-gray-400">We scan 200+ AI visibility factors</p>
              </div>

              <div className="bg-zinc-900 p-6 rounded-sm border border-zinc-800 text-center">
                <div className="text-5xl mb-4">📊</div>
                <h4 className="uppercase text-2xl text-white mb-2">SCORE</h4>
                <p className="text-gray-400">Get your AVI Score (0-100)</p>
              </div>

              <div className="bg-zinc-900 p-6 rounded-sm border border-zinc-800 text-center">
                <div className="text-5xl mb-4">🚀</div>
                <h4 className="uppercase text-2xl text-white mb-2">DOMINATE</h4>
                <p className="text-gray-400">Execute the playbook. Win.</p>
              </div>
            </div>

            <p className="text-white font-bold text-xl md:text-2xl border-l-4 border-red-600 pl-6 py-2">
              This isn't guesswork. This isn't "hope and pray" marketing. 
              This is a goddamn battle plan for AI search domination.
            </p>

            <p>
              Comprende? Good.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <h3 className="uppercase text-5xl md:text-6xl lg:text-7xl mb-4 text-center">
            WHAT YOU GET
          </h3>
          <p className="text-center text-gray-400 text-lg mb-12 md:mb-16">
            Buckle up buttercup—this is the full arsenal
          </p>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                num: "01",
                title: "Complete AI Visibility Audit",
                desc: "We crawl your entire digital footprint across all major AI platforms. Every weakness exposed."
              },
              {
                num: "02",
                title: "Your AVI Score (0-100)",
                desc: "One number that tells you exactly where you stand. No bullshit. Just facts."
              },
              {
                num: "03",
                title: "Competitor Comparison",
                desc: "See exactly how you stack up against the guy stealing your customers."
              },
              {
                num: "04",
                title: "Critical Issues Report",
                desc: "The 10 things killing your AI visibility RIGHT NOW. Fix these first."
              },
              {
                num: "05",
                title: "Entity Optimization Guide",
                desc: "How to make AI systems actually understand who you are and what you sell."
              },
              {
                num: "06",
                title: "Citation Repair List",
                desc: "Every inconsistent NAP (Name/Address/Phone) hurting your rankings."
              },
              {
                num: "07",
                title: "Content Gap Analysis",
                desc: "What AI thinks your competitors know that you don't."
              },
              {
                num: "08",
                title: "90-Day Action Playbook",
                desc: "Step-by-step instructions to dominate AI search. Just follow the damn plan."
              }
            ].map((item) => (
              <div key={item.num} className="bg-black border border-zinc-800 p-6 md:p-8 rounded-sm hover:border-red-600/50 transition-colors group">
                <div className="flex items-start gap-4">
                  <span className="uppercase text-4xl md:text-5xl text-red-600 group-hover:text-red-500 transition-colors">
                    {item.num}
                  </span>
                  <div>
                    <h4 className="uppercase text-xl md:text-2xl text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h3 className="uppercase text-5xl md:text-6xl lg:text-7xl mb-4 text-center">
            DON'T TAKE MY WORD FOR IT
          </h3>
          <p className="text-center text-gray-400 text-lg mb-12 md:mb-16">
            Here's what dealers who actually DID something say:
          </p>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-zinc-900 p-6 md:p-8 rounded-sm border border-zinc-800">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-red-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-lg text-gray-300 mb-6 italic">
                "I thought this was more marketing BS. Then I saw my AVI Score was 23. 
                TWENTY-THREE. Fixed the issues they flagged and within 6 weeks we were 
                showing up in ChatGPT results. Game changer."
              </p>
              <div>
                <p className="text-white font-bold">Mike R.</p>
                <p className="text-gray-500 text-sm">Owner, Prestige Auto Group</p>
              </div>
            </div>

            <div className="bg-zinc-900 p-6 md:p-8 rounded-sm border border-zinc-800">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-red-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-lg text-gray-300 mb-6 italic">
                "The competitor comparison alone was worth it. I had NO idea they were 
                beating us on entity signals. Fixed that one thing and watched our AI 
                visibility climb month over month."
              </p>
              <div>
                <p className="text-white font-bold">Sarah K.</p>
                <p className="text-gray-500 text-sm">GM, Metro Ford</p>
              </div>
            </div>

            <div className="bg-zinc-900 p-6 md:p-8 rounded-sm border border-zinc-800">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-red-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-lg text-gray-300 mb-6 italic">
                "Finally, someone who speaks my language. No fluff, no buzzwords. 
                Just 'here's what's broken, here's how to fix it.' My AVI went from 31 to 78 
                in 90 days."
              </p>
              <div>
                <p className="text-white font-bold">David T.</p>
                <p className="text-gray-500 text-sm">Owner, Tri-State Motors</p>
              </div>
            </div>

            <div className="bg-zinc-900 p-6 md:p-8 rounded-sm border border-zinc-800">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-red-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-lg text-gray-300 mb-6 italic">
                "We were bleeding money on ads while our competitors got free AI traffic. 
                The AVI audit showed us exactly where we were invisible. Best $0 I've ever spent."
              </p>
              <div>
                <p className="text-white font-bold">Jennifer L.</p>
                <p className="text-gray-500 text-sm">Marketing Director, AutoMax</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-red-600 py-12 md:py-16 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="mx-8 md:mx-12 font-display text-3xl md:text-4xl text-white">
                500+ DEALERSHIPS AUDITED
              </span>
              <span className="mx-8 md:mx-12 text-white text-2xl">★</span>
              <span className="mx-8 md:mx-12 font-display text-3xl md:text-4xl text-white">
                AVG AVI SCORE: 34/100
              </span>
              <span className="mx-8 md:mx-12 text-white text-2xl">★</span>
              <span className="mx-8 md:mx-12 font-display text-3xl md:text-4xl text-white">
                73% OF BUYERS USE AI
              </span>
              <span className="mx-8 md:mx-12 text-white text-2xl">★</span>
              <span className="mx-8 md:mx-12 font-display text-3xl md:text-4xl text-white">
                ARE YOU ONE OF THEM?
              </span>
              <span className="mx-8 md:mx-12 text-white text-2xl">★</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Form Section */}
      <section id="cta-form" className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="uppercase text-5xl md:text-6xl lg:text-7xl mb-6">
            READY TO STOP GETTING YOUR ASS KICKED?
          </h3>

          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Get your free AVI Score. See exactly where you stand. 
            Get the playbook to fix it.
          </p>

          <div className="bg-zinc-900 p-8 md:p-12 rounded-sm border border-zinc-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-left text-sm font-medium text-gray-400 mb-2">
                  YOUR EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@yourdealership.com"
                  className="w-full px-4 py-4 bg-black border border-zinc-700 rounded-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-600 transition-colors text-lg"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full aggressive-pulse bg-red-600 hover:bg-red-700 text-white font-bold text-xl md:text-2xl px-8 py-5 rounded-sm transition-all transform hover:scale-[1.02] glitch"
              >
                GET MY FREE AVI SCORE →
              </button>
            </form>

            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>No spam. No selling your data. Just your AVI Score.</span>
            </div>
          </div>

          <p className="text-gray-500 mt-6">
            Takes 30 seconds. Delivered to your inbox instantly.
          </p>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-full mb-8">
            <span className="text-4xl">🛡️</span>
          </div>

          <h3 className="uppercase text-4xl md:text-5xl lg:text-6xl mb-6">
            THE "NO BULLSHIT" GUARANTEE
          </h3>

          <div className="space-y-6 text-lg md:text-xl text-gray-300">
            <p>
              Here's my promise to you:
            </p>

            <p className="text-white font-semibold text-xl md:text-2xl border-l-4 border-red-600 pl-6 py-2 text-left">
              If your AVI Score audit doesn't show you at least 3 critical issues 
              you didn't know existed, I'll personally apologize for wasting your time.
            </p>

            <p>
              This isn't some garbage AI grift. This is real data about your real 
              visibility in AI search—and actionable steps to fix it.
            </p>

            <p className="text-white font-bold text-2xl">
              You literally have nothing to lose. 
              <br />
              <span className="text-red-500">Except more customers if you don't act.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Final Push */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-t from-red-950/50 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="uppercase text-5xl md:text-6xl lg:text-8xl mb-8">
            THE CHOICE IS YOURS
          </h3>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-zinc-900 p-8 rounded-sm border border-zinc-800 opacity-50">
              <h4 className="uppercase text-2xl text-gray-500 mb-4">DO NOTHING</h4>
              <ul className="text-left space-y-3 text-gray-500">
                <li>→ Keep wondering where customers went</li>
                <li>→ Watch competitors win</li>
                <li>→ Stay invisible in AI search</li>
                <li>→ Keep paying for ads that don't work</li>
              </ul>
            </div>

            <div className="bg-red-950/30 p-8 rounded-sm border-2 border-red-600">
              <h4 className="uppercase text-2xl text-white mb-4">GET YOUR AVI SCORE</h4>
              <ul className="text-left space-y-3 text-white">
                <li>→ Know exactly where you stand</li>
                <li>→ See what your competitors are doing</li>
                <li>→ Get the playbook to dominate</li>
                <li>→ Start winning in AI search</li>
              </ul>
            </div>
          </div>

          <p className="text-2xl md:text-3xl text-white font-bold mb-8">
            What's it gonna be?
          </p>

          <button 
            onClick={scrollToForm}
            className="aggressive-pulse bg-red-600 hover:bg-red-700 text-white font-bold text-xl md:text-2xl px-10 md:px-16 py-5 md:py-6 rounded-sm transition-all transform hover:scale-105 glitch"
          >
            GET MY AVI SCORE NOW →
          </button>

          <p className="text-sm text-gray-500 mt-6">
            Still reading? Stop procrastinating. Your competitors already clicked.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 lg:px-8 py-12 bg-black border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h4 className="uppercase text-3xl text-white">VIZBIZ.AI</h4>
              <p className="text-gray-500 text-sm">AI Visibility for Dealerships That Want to Win</p>
            </div>

            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-zinc-900 text-center text-gray-600 text-sm">
            <p>© 2025 VizBiz.ai. All rights reserved.</p>
            <p className="mt-2">Built for dealerships who are done losing.</p>
          </div>
        </div>
      </footer>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 border-2 border-red-600 p-8 rounded-sm max-w-md w-full text-center">
            <div className="text-5xl mb-4">🚀</div>
            <h4 className="uppercase text-3xl text-white mb-4">YOU'RE IN!</h4>
            <p className="text-gray-300 mb-6">
              Check your inbox. Your AVI Score audit is on its way. 
              <br /><br />
              <span className="text-red-400 font-semibold">Time to dominate.</span>
            </p>
            <button 
              onClick={() => setShowPopup(false)}
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-sm transition-colors"
            >
              HELL YEAH →
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
