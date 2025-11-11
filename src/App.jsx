import { useState } from 'react'
import { Leaf, ShieldCheck, LineChart, BookOpenCheck, BellRing, ClipboardList, ArrowRight, CheckCircle2, Quote, Play } from 'lucide-react'

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-medium border border-emerald-100">
      <Leaf className="h-3.5 w-3.5" /> {children}
    </span>
  )
}

export default function App() {
  const [faqOpen, setFaqOpen] = useState(null)

  const features = [
    {
      icon: ClipboardList,
      title: 'AI-powered Audit Report Generator',
      desc: 'Turn raw audit notes into clean, actionable reports in minutes. Auto-structure sections, highlight risks, and export to PDF.',
    },
    {
      icon: ShieldCheck,
      title: 'Non-conformity Tracking',
      desc: 'Log non-conformities, assign owners, set deadlines, and follow corrective actions until closure with clear status updates.',
    },
    {
      icon: BellRing,
      title: 'Automated Regulatory Watch',
      desc: 'Receive alerts on law and standard updates relevant to your activity and geography, with simple guidance to stay compliant.',
    },
    {
      icon: BookOpenCheck,
      title: 'LMS / E-learning Modules',
      desc: 'Train operators with short, visual courses. Track completion, quiz scores, and retraining reminders directly from the platform.',
    },
    {
      icon: LineChart,
      title: 'Real-time Quality Dashboard',
      desc: 'Monitor KPIs, traceability, incidents, and alerts in one view. Share live boards with leadership and auditors securely.',
    },
  ]

  const steps = [
    { title: 'Connect your reality', desc: 'Import procedures, audits, and supplier data. We map your standards and sectors automatically.' },
    { title: 'Automate the busywork', desc: 'Generate reports, log NCs, assign actions, and notify the right people without spreadsheets.' },
    { title: 'Upskill your teams', desc: 'Publish targeted micro-learnings to operators with simple QR access in the factory.' },
    { title: 'Prove compliance', desc: 'Track evidence, versioning, and dashboards so audits become routine—not a crisis.' },
  ]

  const faqs = [
    { q: 'Who is My Quality Manager Team for?', a: 'For quality, hygiene, and food safety managers in agri-food SMEs. It is designed to be simple, robust, and ready to use without IT support.' },
    { q: 'Do I need technical skills to use it?', a: 'No. The interface is clear and guided. Most tasks are automated and explained step by step with friendly tips.' },
    { q: 'Is my data secure?', a: 'Yes. Data is encrypted in transit and at rest. Access is role-based and audit-ready. You can export your data at any time.' },
    { q: 'How long to get value?', a: 'Most teams run their first audit report and dashboard on day one. Full rollout typically takes less than two weeks.' },
  ]

  return (
    <div className="bg-white text-emerald-950">
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-64 -right-32 h-[40rem] w-[40rem] rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-[30rem] w-[30rem] rounded-full bg-lime-100/50 blur-3xl" />
        <svg className="absolute inset-0 opacity-[0.07]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 800 600">
          <defs>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#065f46" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-30 bg-white/70 backdrop-blur border-b border-emerald-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white">
              <Leaf className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-emerald-700">myqmteam.ai</p>
              <p className="text-xs text-emerald-900/70">My Quality Manager Team</p>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-emerald-900/80">
            <a href="#features" className="hover:text-emerald-700">Features</a>
            <a href="#how" className="hover:text-emerald-700">How it works</a>
            <a href="#testimonials" className="hover:text-emerald-700">Customers</a>
            <a href="#faq" className="hover:text-emerald-700">FAQ</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#demo" className="px-4 py-2 rounded-md text-emerald-700 hover:bg-emerald-50 border border-emerald-200">Book a demo</a>
            <a href="#trial" className="px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" /> Try for free
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Pill>Quality • Food Safety • Hygiene</Pill>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-emerald-900">
              The calm, modern way to run Quality in your food business
            </h1>
            <p className="mt-4 text-lg text-emerald-900/80">
              My Quality Manager Team centralizes audits, non-conformities, training and KPIs—powered by helpful AI that speaks your language.
              Simple, secure, and built for agri-food SMEs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a id="trial" href="#trial" className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 text-white px-6 py-3 font-semibold hover:bg-emerald-700">
                Start free trial <ArrowRight className="h-4 w-4" />
              </a>
              <a id="demo" href="#demo" className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-200 text-emerald-800 px-6 py-3 font-semibold hover:bg-emerald-50">
                Book a demo <Play className="h-4 w-4" />
              </a>
            </div>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-emerald-900/80">
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> No credit card</li>
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> GDPR compliant</li>
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Support in English & French</li>
            </ul>
          </div>
          {/* Mockup */}
          <div className="relative">
            <div className="absolute -inset-4 -z-10 bg-gradient-to-tr from-emerald-200/60 to-lime-200/40 rounded-3xl blur-xl" />
            <div className="rounded-2xl border border-emerald-200 bg-white/80 backdrop-blur shadow-xl overflow-hidden">
              <div className="bg-emerald-50 border-b border-emerald-100 px-4 py-2 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-300" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-green-300" />
              </div>
              <div className="p-6 sm:p-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="rounded-lg border border-emerald-100 p-4">
                    <div className="flex items-center gap-2 text-emerald-700 font-medium"><ClipboardList className="h-4 w-4" /> Audit Report</div>
                    <div className="mt-3 h-24 bg-gradient-to-br from-emerald-50 to-white rounded" />
                  </div>
                  <div className="rounded-lg border border-emerald-100 p-4">
                    <div className="flex items-center gap-2 text-emerald-700 font-medium"><ShieldCheck className="h-4 w-4" /> Non-conformities</div>
                    <div className="mt-3 h-24 bg-gradient-to-br from-emerald-50 to-white rounded" />
                  </div>
                  <div className="rounded-lg border border-emerald-100 p-4">
                    <div className="flex items-center gap-2 text-emerald-700 font-medium"><LineChart className="h-4 w-4" /> KPIs</div>
                    <div className="mt-3 h-24 bg-gradient-to-br from-emerald-50 to-white rounded" />
                  </div>
                  <div className="rounded-lg border border-emerald-100 p-4">
                    <div className="flex items-center gap-2 text-emerald-700 font-medium"><BookOpenCheck className="h-4 w-4" /> Training</div>
                    <div className="mt-3 h-24 bg-gradient-to-br from-emerald-50 to-white rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900">Everything you need to run Quality with confidence</h2>
            <p className="mt-3 text-emerald-900/80">Clear, practical tools designed for non‑technical teams. Each module works alone or better together.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <div key={i} className="group rounded-2xl border border-emerald-100 bg-white/70 backdrop-blur p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-semibold text-emerald-900">{f.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-emerald-900/80">{f.desc}</p>
                <a href="#demo" className="mt-4 inline-flex items-center gap-2 text-emerald-700 text-sm font-semibold hover:text-emerald-800">
                  Learn more <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-16 sm:py-24 bg-gradient-to-b from-emerald-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-emerald-900">How it works</h2>
              <p className="mt-3 text-emerald-900/80">A simple, guided path from setup to results. Our team is here to help at every step.</p>
              <a href="#demo" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-5 py-3 font-semibold hover:bg-emerald-700">Book a live walkthrough <ArrowRight className="h-4 w-4" /></a>
            </div>
            <ol className="lg:col-span-2 relative">
              <div className="absolute left-3 top-0 bottom-0 w-px bg-emerald-200" />
              {steps.map((s, i) => (
                <li key={i} className="relative pl-12 py-6">
                  <span className="absolute left-0 top-6 h-6 w-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">{i+1}</span>
                  <h3 className="text-lg font-semibold text-emerald-900">{s.title}</h3>
                  <p className="mt-1 text-emerald-900/80">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900">Trusted by quality leaders</h2>
            <p className="mt-3 text-emerald-900/80">Real stories from teams who made audits calmer, training smarter, and dashboards clearer.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1,2,3].map((i) => (
              <figure key={i} className="rounded-2xl border border-emerald-100 bg-white/70 backdrop-blur p-6">
                <Quote className="h-6 w-6 text-emerald-600" />
                <blockquote className="mt-3 text-emerald-900/80">
                  “We cut audit prep time by 60% and finally have one place for NCs and actions. The team actually enjoys using it.”
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <span className="h-10 w-10 rounded-full bg-emerald-200" />
                  <div>
                    <p className="font-medium text-emerald-900">Quality Manager, Dairy SME</p>
                    <p className="text-sm text-emerald-900/70">Lyon, FR</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-600 to-emerald-700 p-8 sm:p-12 text-white">
            <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
            <div className="max-w-2xl">
              <h3 className="text-3xl font-bold">Bring calm to Quality this quarter</h3>
              <p className="mt-2 text-white/90">Start a free 14‑day trial or book a 30‑minute demo with a former QA manager. No pressure, just clarity.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#trial" className="inline-flex items-center gap-2 rounded-xl bg-white text-emerald-800 px-6 py-3 font-semibold hover:bg-emerald-50">Try for free <ArrowRight className="h-4 w-4" /></a>
                <a href="#demo" className="inline-flex items-center gap-2 rounded-xl border border-white/40 text-white px-6 py-3 font-semibold hover:bg-white/10">Book a demo</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 sm:py-24 bg-emerald-50/50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-emerald-900 text-center">Frequently asked questions</h2>
          <div className="mt-8 divide-y divide-emerald-200 rounded-2xl border border-emerald-200 bg-white/70 backdrop-blur">
            {faqs.map((f, i) => (
              <div key={i} className="p-6">
                <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} className="w-full flex items-center justify-between text-left">
                  <span className="font-medium text-emerald-900">{f.q}</span>
                  <ArrowRight className={`h-5 w-5 text-emerald-700 transition-transform ${faqOpen === i ? 'rotate-90' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all ${faqOpen === i ? 'mt-3 max-h-40' : 'max-h-0'}`}>
                  <p className="text-emerald-900/80">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-emerald-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white">
                <Leaf className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-emerald-700">myqmteam.ai</p>
                <p className="text-xs text-emerald-900/70">My Quality Manager Team</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-emerald-900/80">Software that makes quality, food safety and hygiene simpler for agri‑food SMEs.</p>
          </div>
          <div>
            <h4 className="font-semibold text-emerald-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-emerald-900/80">
              <li><a href="#" className="hover:text-emerald-700">About</a></li>
              <li><a href="#" className="hover:text-emerald-700">Contact</a></li>
              <li><a href="#" className="hover:text-emerald-700">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-emerald-900">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm text-emerald-900/80">
              <li><a href="#" className="hover:text-emerald-700">Privacy</a></li>
              <li><a href="#" className="hover:text-emerald-700">Terms</a></li>
              <li><a href="#" className="hover:text-emerald-700">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-emerald-900">Follow</h4>
            <ul className="mt-3 space-y-2 text-sm text-emerald-900/80">
              <li><a href="#" className="hover:text-emerald-700">LinkedIn</a></li>
              <li><a href="#" className="hover:text-emerald-700">Twitter</a></li>
              <li><a href="#" className="hover:text-emerald-700">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-emerald-100 py-6 text-center text-xs text-emerald-900/70">
          © {new Date().getFullYear()} myqmteam.ai — All rights reserved.
        </div>
      </footer>
    </div>
  )
}
