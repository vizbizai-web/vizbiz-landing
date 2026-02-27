import { 
  Search, 
  MessageSquare, 
  Shield, 
  Map, 
  Phone, 
  FileSearch, 
  ClipboardList, 
  Rocket,
  ChevronRight,
  Check,
  Mail,
  Linkedin,
  Twitter,
  Menu,
  X
} from 'lucide-react'
import { cn } from '@/lib/utils'

// UI Components
function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className,
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}) {
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25',
    secondary: 'bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-600/25',
    outline: 'border border-white/20 hover:bg-white/5 text-white',
    ghost: 'hover:bg-white/5 text-white',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  return (
    <button 
      className={cn(
        'rounded-full font-medium transition-all duration-200 flex items-center gap-2',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn(
      'bg-[#141414] border border-white/[0.06] rounded-2xl p-6 card-hover',
      className
    )}>
      {children}
    </div>
  )
}

function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn(
      'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20',
      className
    )}>
      {children}
    </span>
  )
}

// Navigation
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Search className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold">Vizbiz</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#problem" className="text-sm text-gray-400 hover:text-white transition-colors">Problem</a>
            <a href="#solution" className="text-sm text-gray-400 hover:text-white transition-colors">Solution</a>
            <a href="#how-it-works" className="text-sm text-gray-400 hover:text-white transition-colors">How It Works</a>
            <a href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="text-sm text-gray-400 hover:text-white transition-colors">FAQ</a>
          </div>
          
          <Button size="sm">
            Get Audit
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </nav>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px]" />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <Badge className="mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Now accepting new dealerships
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Make Your Dealership{' '}
            <span className="gradient-text">Unmissable to AI</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Car buyers use ChatGPT, Claude, and Perplexity to find dealerships. 
            Most dealers are invisible. <span className="text-white font-medium">We fix that.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto animate-pulse-glow">
              Get Your AI Visibility Audit
              <ChevronRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              See How It Works
            </Button>
          </div>
          
          {/* Trusted by */}
          <div className="mt-16 pt-8 border-t border-white/[0.06]">
            <p className="text-sm text-gray-500 mb-6">Trusted by innovative dealerships</p>
            <div className="flex items-center justify-center gap-8 opacity-50">
              {['Toyota', 'Honda', 'Ford', 'BMW', 'Mercedes'].map((brand) => (
                <span key={brand} className="text-lg font-semibold text-gray-400">{brand}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Problem Section
function ProblemSection() {
  return (
    <section id="problem" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="mb-6">The Problem</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              The AI Search Revolution Has{' '}
              <span className="text-red-400">Already Started</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              While you're optimizing for Google, your customers are asking ChatGPT 
              "What's the best Honda dealership near me?" — and if you're not in 
              the answer, you don't exist.
            </p>
            
            <div className="space-y-4">
              {[
                '73% of car buyers now use AI assistants for research',
                'Traditional SEO doesn\'t guarantee AI visibility',
                'Dealerships without AI presence are becoming invisible',
                'Your competitors are already adapting',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-red-400" />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl" />
            <Card className="relative p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-white/[0.06]">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">ChatGPT Search</p>
                    <p className="text-sm text-gray-500">"Best BMW dealer in Toronto"</p>
                  </div>
                </div>
                
                <div className="bg-[#0a0a0a] rounded-xl p-4">
                  <p className="text-gray-400 text-sm mb-2">AI Response:</p>
                  <p className="text-white">
                    "Based on recent reviews and reputation, <span className="text-green-400 font-medium">Toronto BMW Central</span> stands out 
                    as the top choice. They have excellent customer feedback..."
                  </p>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Your competitor just won a customer
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

// Solution/Services Section
function SolutionSection() {
  const services = [
    {
      icon: Search,
      title: 'AI Visibility Audit',
      description: 'Comprehensive analysis of how AI assistants perceive and rank your dealership. We test your visibility across ChatGPT, Claude, Gemini, and Perplexity.',
      color: 'blue',
    },
    {
      icon: MessageSquare,
      title: 'Review Sentiment Analysis',
      description: 'AI-powered analysis of your review landscape. We identify sentiment patterns that influence AI recommendations and trust signals.',
      color: 'purple',
    },
    {
      icon: Shield,
      title: 'Trust Gap Analysis',
      description: 'Discover what trust signals AI looks for that you might be missing. We benchmark you against competitors winning AI recommendations.',
      color: 'green',
    },
    {
      icon: Map,
      title: 'AI Search Optimization Roadmap',
      description: 'Actionable strategy to improve your AI visibility. Priority-ranked recommendations based on impact and implementation effort.',
      color: 'orange',
    },
  ]
  
  const colorClasses: Record<string, { bg: string; text: string }> = {
    blue: { bg: 'bg-blue-500/10', text: 'text-blue-400' },
    purple: { bg: 'bg-purple-500/10', text: 'text-purple-400' },
    green: { bg: 'bg-green-500/10', text: 'text-green-400' },
    orange: { bg: 'bg-orange-500/10', text: 'text-orange-400' },
  }
  
  return (
    <section id="solution" className="py-24 sm:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-6">Our Services</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Everything You Need to{' '}
            <span className="gradient-text">Dominate AI Search</span>
          </h2>
          <p className="text-lg text-gray-400">
            We provide end-to-end AI visibility solutions tailored for car dealerships. 
            From audit to implementation, we've got you covered.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <Card key={i} className="group">
              <div className={cn(
                'w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110',
                colorClasses[service.color].bg
              )}>
                <service.icon className={cn('w-6 h-6', colorClasses[service.color].text)} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      icon: Phone,
      title: 'Discovery Call',
      description: '15-minute conversation to understand your dealership, goals, and current online presence. No pitch, just listening.',
    },
    {
      number: '02',
      icon: FileSearch,
      title: 'AI Audit',
      description: 'We run comprehensive tests across all major AI platforms, analyzing how they perceive and rank your dealership.',
    },
    {
      number: '03',
      icon: ClipboardList,
      title: 'Report Delivery',
      description: 'Receive a detailed report with findings, competitive analysis, and prioritized recommendations within 5 business days.',
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Implementation',
      description: 'Work with us to implement recommendations, or take the roadmap and execute with your team. Your choice.',
    },
  ]
  
  return (
    <section id="how-it-works" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-6">Process</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            How It{' '}
            <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-gray-400">
            Simple, transparent process designed for busy dealership owners. 
            From first call to actionable insights in under a week.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <Card className="h-full">
                <span className="text-4xl font-bold text-white/10">{step.number}</span>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center my-4">
                  <step.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
              </Card>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px] bg-gradient-to-r from-blue-500/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Stats Section
function StatsSection() {
  const stats = [
    { value: '200+', label: 'Dealerships Analyzed' },
    { value: '73%', label: 'Buyers Using AI Search' },
    { value: '5 Days', label: 'Average Delivery Time' },
    { value: '4.9/5', label: 'Client Satisfaction' },
  ]
  
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-[#0a0a0a] to-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Pricing Section
function PricingSection() {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-6">Pricing</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Simple, Transparent{' '}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-lg text-gray-400">
            No hidden fees, no long-term contracts. Just results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Starter */}
          <Card className="flex flex-col">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">AI Visibility Audit</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">$1,500</span>
              </div>
              <p className="text-sm text-gray-400 mt-2">One-time comprehensive analysis</p>
            </div>
            
            <ul className="space-y-3 mb-8 flex-1">
              {[
                'Multi-platform AI testing',
                'Competitive landscape analysis',
                'Review sentiment report',
                'Trust gap identification',
                'Prioritized recommendations',
                '5-day delivery',
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <Button variant="outline" className="w-full">
              Request Quote
            </Button>
          </Card>
          
          {/* Professional */}
          <Card className="flex flex-col relative border-blue-500/30">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <Badge className="bg-blue-500 text-white border-0">Most Popular</Badge>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Complete Package</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">$3,500</span>
              </div>
              <p className="text-sm text-gray-400 mt-2">Audit + Implementation support</p>
            </div>
            
            <ul className="space-y-3 mb-8 flex-1">
              {[
                'Everything in Audit package',
                'Content optimization strategy',
                'FAQ & trust content creation',
                'Implementation roadmap',
                '2 weeks of support',
                'Monthly check-in call',
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <Button className="w-full">
              Request Quote
              <ChevronRight className="w-4 h-4" />
            </Button>
          </Card>
          
          {/* Enterprise */}
          <Card className="flex flex-col">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Enterprise</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <p className="text-sm text-gray-400 mt-2">For dealership groups & OEMs</p>
            </div>
            
            <ul className="space-y-3 mb-8 flex-1">
              {[
                'Multi-location audit',
                'Group-wide benchmarking',
                'Custom reporting dashboard',
                'Dedicated account manager',
                'Quarterly strategy reviews',
                'Priority support',
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <Button variant="outline" className="w-full">
              Contact Sales
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      question: 'What exactly is "AI visibility"?',
      answer: 'AI visibility refers to how often and how prominently your dealership appears in responses from AI assistants like ChatGPT, Claude, and Perplexity when potential customers ask car-buying questions. It\'s the new frontier of digital presence.',
    },
    {
      question: 'How is this different from regular SEO?',
      answer: 'Traditional SEO optimizes for Google\'s ranking algorithm. AI visibility optimizes for how large language models understand and recommend businesses. The signals are different — LLMs prioritize reputation, expertise, and trust over traditional ranking factors.',
    },
    {
      question: 'How long does the audit take?',
      answer: 'From our discovery call to report delivery is typically 5 business days. Rush delivery is available for an additional fee if you need insights sooner.',
    },
    {
      question: 'Do you implement the recommendations?',
      answer: 'Our Complete Package includes implementation support and strategy guidance. For execution, you can either work with us or use our detailed roadmap with your internal team or existing agency.',
    },
    {
      question: 'Which AI platforms do you test?',
      answer: 'We test visibility across ChatGPT (including Search), Claude, Google Gemini, Perplexity, and Microsoft Copilot. We also monitor emerging platforms as they gain market share.',
    },
    {
      question: 'What if I\'m not satisfied with the audit?',
      answer: 'We stand behind our work. If you don\'t find actionable insights in your audit, we\'ll refund 100% of your fee. No questions asked.',
    },
  ]
  
  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-6">FAQ</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <Card key={i} className="group">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-medium pr-4">{faq.question}</h3>
                  <ChevronRight className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0" />
                </summary>
                <p className="mt-4 text-gray-400 leading-relaxed">{faq.answer}</p>
              </details>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Final CTA Section
function FinalCTASection() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Ready to Become{' '}
          <span className="gradient-text">Unmissable?</span>
        </h2>
        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
          Don't let your competitors own the AI conversation. 
          Get your free AI visibility audit and see where you stand.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email"
            className="w-full px-6 py-4 rounded-full bg-[#141414] border border-white/[0.06] text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors"
          />
          <Button size="lg" className="w-full sm:w-auto whitespace-nowrap">
            Get Free Audit
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
        
        <p className="text-sm text-gray-500 mt-6">
          Or{' '}
          <a href="#" className="text-blue-400 hover:text-blue-300 underline">
            book a 15-minute discovery call
          </a>
        </p>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="py-12 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Search className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold">Vizbiz</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              Making car dealerships unmissable to AI. 
              The future of automotive search is here.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#141414] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1a1a1a] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#141414] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1a1a1a] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#141414] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1a1a1a] transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">AI Audit</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sentiment Analysis</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trust Gap Analysis</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Implementation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2025 Vizbiz. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Made for car dealerships that want to win.
          </p>
        </div>
      </div>
    </footer>
  )
}

// Main Page Component
export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <StatsSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}