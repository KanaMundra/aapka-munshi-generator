import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";

type Service = { title: string; description: string; icon: string };
type FieldName = "name" | "phone" | "email" | "service" | "message";

type FormValues = Record<FieldName, string>;
type FormErrors = Partial<Record<FieldName, string>>;

const navItems = [
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Why Us", id: "why-us" },
  { label: "Clients", id: "clients" },
  { label: "Contact", id: "contact" },
];

const societyServices: Service[] = [
  { title: "Monthly & Quarterly Billing", description: "Accurate billing with receipts delivered on time, every billing cycle.", icon: "M6 3h12v18H6z M9 7h6 M9 11h6 M9 15h3" },
  { title: "Full Bookkeeping", description: "Cash Book, Bank Book, Members Ledger, and Income & Expenses Ledgers, always up to date.", icon: "M4 5h16v14H4z M8 9h8 M8 13h8 M8 17h4" },
  { title: "Account Finalization & Balance Sheet", description: "Complete Income & Expenditure Accounts and Balance Sheet prepared professionally.", icon: "M4 19h16 M7 16V8 M12 16V5 M17 16v-6" },
  { title: "Audit by Panel Auditors", description: "Statutory audit through our empanelled auditors, hassle-free and fully compliant.", icon: "M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7z M9.5 12l1.7 1.7 3.5-4" },
  { title: "Society Register Maintenance", description: "I Register, J Register, Share Certificate, Nominee, Lien, Fixed Assets, written and current.", icon: "M5 4h11l3 3v13H5z M16 4v4h4 M8 12h8 M8 16h8" },
  { title: "MCM / AGM Minutes Books", description: "Accurate documentation of every meeting, maintained as per legal requirements.", icon: "M8 4h8 M9 2v4 M15 2v4 M5 7h14v13H5z M8 11h8 M8 15h5" },
  { title: "Income Tax, GST & TDS Filing", description: "All society tax and compliance returns filed accurately and on time.", icon: "M12 3v18 M6 7h9a3 3 0 010 6H9a3 3 0 000 6h9" },
  { title: "Cheque Preparation & Deposits", description: "We prepare and deposit cheques on your society's behalf.", icon: "M3 7h18v10H3z M6 11h5 M15 13h3" },
];

const businessServices: Service[] = [
  { title: "Accounting & Audits", description: "End-to-end bookkeeping and audit for individuals, societies, and small companies.", icon: "M4 6h16 M4 12h16 M4 18h10" },
  { title: "Income Tax Returns (ITR)", description: "ITR filing for individuals and companies, correct and before every deadline.", icon: "M7 3h10v18H7z M10 8h4 M10 12h4 M10 16h2" },
  { title: "GST Registration & Returns", description: "From registration to monthly/quarterly filings, handled completely.", icon: "M12 2l3 6 6 .9-4.5 4.4 1.1 6.7L12 16l-5.6 4 1.1-6.7L3 8.9 9 8z" },
  { title: "TDS Returns", description: "Never miss a TDS deadline. We file and keep you penalty-free.", icon: "M5 13l4 4L19 7 M5 7h8 M5 11h5" },
  { title: "PF, ESIC & PT Filing", description: "Stay compliant with all employee-related statutory filings.", icon: "M16 11a4 4 0 10-8 0 M4 21a8 8 0 0116 0 M19 8v6 M16 11h6" },
  { title: "Payroll Processing", description: "Accurate payroll and pay slips for your team, every month.", icon: "M4 7h16v10H4z M7 11h4 M15 13h2 M7 15h6" },
  { title: "Company Registration", description: "Starting a business? Full registration handled from start to finish.", icon: "M3 21h18 M6 21V7l6-4 6 4v14 M9 10h1 M14 10h1 M9 14h1 M14 14h1" },
  { title: "All Key Registrations", description: "PAN, TAN, IEC, PF, ESI, Gumasta License, MSME (Udyam Mitra), Digital Signature (DSC).", icon: "M9 12l2 2 4-5 M12 22a10 10 0 110-20 10 10 0 010 20z" },
];

const whyCards = [
  { title: "CA-Led Expert Team", description: "Your accounts are managed directly by qualified Chartered Accountants. CA Piyush Laddha and CA Anju Laddha personally oversee every client.", icon: "M4 10l8-5 8 5-8 5-8-5z M8 13v4c2 1.3 6 1.3 8 0v-4" },
  { title: "One Firm, Every Service", description: "Accounting, tax, audit, payroll, registrations, all under one roof. No need to run to multiple consultants.", icon: "M12 3l8 4-8 4-8-4 8-4z M4 12l8 4 8-4 M4 17l8 4 8-4" },
  { title: "Equal Attention for Every Client", description: "Whether you are a large corporate or a small housing society, you receive the same quality of service. No client is too small.", icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 11a4 4 0 100-8 4 4 0 000 8 M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75" },
  { title: "Your Data is Secure & Always Yours", description: "10 years of secure electronic data storage. Your data stays under your control, always accessible, never lost.", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9.5 12l1.8 1.8 3.7-4.3" },
  { title: "Always On Time", description: "We track every tax and compliance deadline so you never face a late penalty. Timely delivery is non-negotiable.", icon: "M12 8v5l3 2 M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { title: "Complete Confidentiality", description: "Your financial information stays private. We maintain strict professional independence and confidentiality at all times.", icon: "M3 3l18 18 M10.6 10.6A2 2 0 0013.4 13.4 M9.9 4.2A10.8 10.8 0 0121 12s-1.7 3.4-4.6 5.4 M6.1 6.1C4.2 7.3 3 9.1 3 12s4 8 9 8c1.4 0 2.7-.3 3.9-.9" },
];

const testimonials = [
  { quote: "Aapka Munshi handles all our society's accounts, filings, and registers. Since we engaged them, we have had zero compliance issues and complete peace of mind.", author: "Secretary, Sonam Heights CHS Ltd." },
  { quote: "As a small business owner, I used to dread tax season. Now Aapka Munshi takes care of everything, GST, TDS, ITR, and I hear about it only when it's done.", author: "Business Owner, Mumbai" },
  { quote: "What sets them apart is that they treat our society with the same seriousness as a large corporate. Every register, every minute book, perfectly maintained.", author: "Chairman, Evershine Helio CHS Ltd." },
];

const clients = [
  "VRR Fortuna, Bengaluru",
  "Sonam Heights CHS Ltd.",
  "Evershine Helio CHS Ltd., Kandivali",
  "Eaze Zone Mall, Malad West",
  "Iraisa Co-op Housing Society",
  "Savory Kitchen",
  "Epsilon, Ocular Instruments",
];

const softwareFeatures = [
  "Bills and receipts sent to members via Email & SMS automatically",
  "All legal documents maintained digitally (Share Register, Nominee Register, Election Rolls)",
  "Free mobile app for flat owners, access data anytime, anywhere",
  "Online payment gateway with error protection",
  "10 years of secure electronic data storage",
  "Data remains in your society's possession, even if you discontinue service",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aapka Munshi | CA Accounting & Tax Services" },
      { name: "description", content: "CA-led accounting, tax, audit, compliance, and housing society services in Mumbai by Aapka Munshi." },
      { property: "og:title", content: "Aapka Munshi | CA Accounting & Tax Services" },
      { property: "og:description", content: "Trusted CA-led accounting, tax, and compliance services for housing societies, businesses, and individuals across Mumbai." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Icon({ path, className = "" }: { path: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

function useCountUp(target: number, suffix: string) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setStarted(true);
    }, { threshold: 0.45 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let frame = 0;
    const total = 90;
    const tick = () => {
      frame += 1;
      const progress = Math.min(frame / total, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, target]);

  return { ref, display: `${value}${suffix}` };
}

function StatCard({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { ref, display } = useCountUp(target, suffix);
  return (
    <div ref={ref} className="rounded-2xl border border-munshi-border bg-white p-7 shadow-munshi-card">
      <div className="text-4xl font-bold text-munshi-primary">{display}</div>
      <p className="mt-2 text-munshi-secondary">{label}</p>
    </div>
  );
}

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [activeTab, setActiveTab] = useState<"societies" | "business">("societies");
  const [testimonial, setTestimonial] = useState(0);
  const [pauseSlider, setPauseSlider] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [values, setValues] = useState<FormValues>({ name: "", phone: "", email: "", service: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const services = activeTab === "societies" ? societyServices : businessServices;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      setShowTop(window.scrollY > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["hero", ...navItems.map((item) => item.id)];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    }, { threshold: 0.18 });
    document.querySelectorAll(".reveal-card").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (pauseSlider) return;
    const timer = window.setInterval(() => setTestimonial((current) => (current + 1) % testimonials.length), 4000);
    return () => window.clearInterval(timer);
  }, [pauseSlider]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  const validateField = (name: FieldName, value: string) => {
    if (!value.trim()) return "This field is required.";
    if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) return "Enter a valid email address.";
    if (name === "phone" && value.replace(/\D/g, "").length < 10) return "Enter a valid phone number.";
    return "";
  };

  const updateField = (name: FieldName, value: string) => {
    const next = name === "phone" ? formatPhone(value) : value;
    setValues((current) => ({ ...current, [name]: next }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: validateField(name, next) || undefined }));
  };

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    if (digits.length <= 5) return digits;
    return `${digits.slice(0, 5)} ${digits.slice(5)}`;
  };

  const handleBlur = (name: FieldName) => setErrors((current) => ({ ...current, [name]: validateField(name, values[name]) || undefined }));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = (Object.keys(values) as FieldName[]).reduce<FormErrors>((acc, key) => {
      const error = validateField(key, values[key]);
      if (error) acc[key] = error;
      return acc;
    }, {});
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setSubmitted(true);
  };

  const navClass = scrolled ? "bg-white/95 text-munshi-primary shadow-[0_8px_32px_rgba(27,67,50,0.12)] backdrop-blur" : "bg-transparent text-white";

  return (
    <main className="min-h-screen bg-white font-poppins text-munshi-text">
      <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${navClass}`}>
        <div className="mx-auto flex max-w-[1140px] items-center justify-between px-5 py-4 lg:px-0">
          <button onClick={() => scrollTo("hero")} className="text-left" aria-label="Aapka Munshi home">
            <div className="text-xl font-bold leading-none">Aapka Munshi<sup className="ml-0.5 text-xs">®</sup></div>
            <div className={`mt-1 text-[11px] italic leading-none ${scrolled ? "text-munshi-secondary" : "text-white/80"}`}>बुक्स आपकी जिम्मेदारी हमारी</div>
          </button>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className={`border-b-2 py-2 text-sm font-medium transition-colors ${activeSection === item.id ? "border-munshi-highlight" : "border-transparent hover:border-munshi-highlight"}`}>
                {item.label}
              </button>
            ))}
          </nav>

          <button onClick={() => scrollTo("contact")} className={`hidden rounded-lg px-5 py-3 text-sm font-semibold transition-colors lg:inline-flex ${scrolled ? "bg-munshi-primary text-white hover:bg-munshi-accent" : "bg-white text-munshi-primary hover:bg-munshi-surface"}`}>
            Book a Meeting
          </button>

          <button className="lg:hidden" onClick={() => setMobileOpen((open) => !open)} aria-label="Toggle menu" aria-expanded={mobileOpen}>
            <span className="block h-0.5 w-7 bg-current"></span>
            <span className="mt-1.5 block h-0.5 w-7 bg-current"></span>
            <span className="mt-1.5 block h-0.5 w-7 bg-current"></span>
          </button>
        </div>
        <div className={`overflow-hidden bg-white text-munshi-primary shadow-xl transition-all duration-300 lg:hidden ${mobileOpen ? "max-h-96" : "max-h-0"}`}>
          <div className="space-y-1 px-5 pb-5 pt-2">
            {navItems.map((item) => <button key={item.id} onClick={() => scrollTo(item.id)} className="block w-full border-b border-munshi-border py-3 text-left font-medium">{item.label}</button>)}
            <button onClick={() => scrollTo("contact")} className="mt-4 w-full rounded-lg bg-munshi-primary px-5 py-3 font-semibold text-white">Book a Meeting</button>
          </div>
        </div>
      </header>

      <section id="hero" className="munshi-hero-gradient relative flex min-h-[760px] items-center overflow-hidden pt-28 text-white md:min-h-[720px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_80%_60%,rgba(82,183,136,0.18),transparent_32%)]"></div>
        <div className="relative mx-auto max-w-[1140px] px-5 py-16 lg:px-0">
          <p className="animate-hero-up text-[13px] font-medium uppercase tracking-[0.08em] text-white/80">Chartered Accountants · Mumbai</p>
          <h1 className="animate-hero-up mt-5 max-w-4xl text-[34px] font-bold leading-[1.12] md:text-[52px]">Your Accounts. Your Taxes.<br />Our Responsibility.</h1>
          <p className="animate-hero-up animation-delay-200 mt-6 max-w-3xl text-lg leading-[1.75] text-white/88">Aapka Munshi is a CA-led firm providing complete accounting, tax, and compliance services for housing societies, businesses, and individuals across Mumbai, so you can focus on what you do best.</p>
          <div className="animate-hero-up animation-delay-400 mt-9 flex flex-col gap-4 sm:flex-row">
            <button onClick={() => scrollTo("contact")} className="rounded-lg bg-white px-8 py-3.5 font-semibold text-munshi-primary transition-colors hover:bg-munshi-surface">Book a Meeting</button>
            <button onClick={() => scrollTo("services")} className="rounded-lg border-2 border-white px-8 py-3.5 font-semibold text-white transition-colors hover:bg-white hover:text-munshi-primary">View Our Services</button>
          </div>
          <div className="mt-10 grid gap-4 text-sm font-medium text-white/90 md:grid-cols-3">
            <div>✓ CA Piyush & CA Anju Laddha</div>
            <div>✓ Housing Societies & Businesses</div>
            <div>✓ Mumbai-Based, Personally Managed</div>
          </div>
        </div>
      </section>

      <section id="about" className="section-pad scroll-mt-24 bg-white">
        <div className="mx-auto grid max-w-[1140px] gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-0">
          <div>
            <p className="section-label">Who We Are</p>
            <h2 className="section-title mt-3">Your Financial Partner,<br />Not Just Your Accountant</h2>
            <div className="mt-7 space-y-5 text-base leading-[1.75] text-munshi-secondary">
              <p>Your financial matters deserve more than just a number-cruncher, they deserve a trusted partner.</p>
              <p>Aapka Munshi is a team of Chartered Accountants led by <strong className="font-semibold text-munshi-text">CA Piyush Laddha</strong> and <strong className="font-semibold text-munshi-text">CA Anju Laddha</strong>, dedicated to managing your day-to-day accounting, business compliances, and tax filings with precision and care.</p>
              <p>We serve clients of all sizes, from housing societies and small businesses to growing companies and individuals, delivering the same personalized, high-quality attention to every account we handle.</p>
            </div>
          </div>
          <div className="grid gap-5 self-center sm:grid-cols-3 lg:grid-cols-1">
            <StatCard target={10} suffix="+" label="Years of Experience" />
            <StatCard target={50} suffix="+" label="Clients Served" />
            <StatCard target={100} suffix="%" label="Compliance Rate" />
          </div>
        </div>
      </section>

      <section id="services" className="section-pad scroll-mt-24 bg-white">
        <div className="mx-auto max-w-[1140px] px-5 lg:px-0">
          <div className="max-w-3xl">
            <p className="section-label">What We Do</p>
            <h2 className="section-title mt-3">Everything You Need,<br />Under One Roof</h2>
            <p className="mt-5 leading-[1.75] text-munshi-secondary">Complete financial, accounting, and compliance services, tailored for housing societies and businesses.</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-8 border-b border-munshi-border">
            <button onClick={() => setActiveTab("societies")} className={`border-b-2 pb-4 text-lg transition-colors ${activeTab === "societies" ? "border-munshi-highlight font-bold text-munshi-primary" : "border-transparent font-medium text-munshi-secondary"}`}>Housing Societies</button>
            <button onClick={() => setActiveTab("business")} className={`border-b-2 pb-4 text-lg transition-colors ${activeTab === "business" ? "border-munshi-highlight font-bold text-munshi-primary" : "border-transparent font-medium text-munshi-secondary"}`}>Companies & Individuals</button>
          </div>
          <div key={activeTab} className="mt-8 grid animate-fade-soft gap-7 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="service-card group rounded-2xl border border-munshi-border bg-munshi-surface p-7 shadow-munshi-card transition-all duration-250 hover:-translate-y-1.5 hover:border-l-4 hover:border-l-munshi-highlight hover:shadow-munshi-card-hover">
                <Icon path={service.icon} className="h-9 w-9 text-munshi-accent transition-transform duration-250 group-hover:scale-112" />
                <h3 className="mt-5 text-lg font-semibold text-munshi-text">{service.title}</h3>
                <p className="mt-3 leading-[1.75] text-munshi-secondary">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="section-pad scroll-mt-24 bg-munshi-surface">
        <div className="mx-auto max-w-[1140px] px-5 lg:px-0">
          <p className="section-label">Why Aapka Munshi</p>
          <h2 className="section-title mt-3 max-w-4xl">We Do More Than File Returns.<br />We Become Your Financial Backbone.</h2>
          <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((card, index) => (
              <article key={card.title} className="reveal-card rounded-2xl border border-munshi-border bg-white p-7 shadow-munshi-card" style={{ transitionDelay: `${index * 0.1}s` }}>
                <Icon path={card.icon} className="h-10 w-10 text-munshi-accent" />
                <h3 className="mt-5 text-lg font-semibold text-munshi-text">{card.title}</h3>
                <p className="mt-3 leading-[1.75] text-munshi-secondary">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-[1140px] items-center gap-12 px-5 lg:grid-cols-[1fr_0.85fr] lg:px-0">
          <div>
            <p className="section-label">Our Technology</p>
            <h2 className="section-title mt-3">Backed by Smart Software</h2>
            <p className="mt-5 leading-[1.75] text-munshi-secondary">We use <strong className="font-semibold text-munshi-text">SSSociety</strong>, purpose-built software for housing societies, giving your committee and members full transparency and control.</p>
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {softwareFeatures.map((feature) => <li key={feature} className="flex gap-3 leading-[1.6] text-munshi-secondary"><span className="text-munshi-highlight">✓</span><span>{feature}</span></li>)}
            </ul>
          </div>
          <div className="relative mx-auto h-[430px] w-full max-w-sm">
            <div className="absolute left-4 top-6 h-[360px] w-[260px] rounded-[28px] border-[10px] border-munshi-primary bg-white shadow-munshi-card-hover">
              <div className="h-full rounded-[18px] bg-munshi-surface p-5">
                <div className="h-12 rounded-xl bg-munshi-primary"></div>
                <div className="mt-5 space-y-3"><div className="h-4 w-4/5 rounded bg-munshi-border"></div><div className="h-4 w-3/5 rounded bg-munshi-border"></div><div className="h-20 rounded-xl bg-white"></div><div className="h-20 rounded-xl bg-white"></div></div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 h-[250px] w-[190px] rounded-[22px] border-[8px] border-munshi-accent bg-white shadow-munshi-card">
              <div className="h-full rounded-[14px] bg-white p-4"><div className="h-8 rounded-lg bg-munshi-highlight"></div><div className="mt-5 h-24 rounded-xl bg-munshi-surface"></div><div className="mt-4 space-y-2"><div className="h-3 rounded bg-munshi-border"></div><div className="h-3 w-2/3 rounded bg-munshi-border"></div></div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="clients" className="section-pad scroll-mt-24 bg-munshi-primary text-white">
        <div className="mx-auto max-w-[1140px] px-5 lg:px-0">
          <p className="section-label text-munshi-highlight">Our Clientele</p>
          <h2 className="section-title mt-3 !text-white">Trusted By Businesses &<br />Societies Across Mumbai</h2>
          <p className="mt-5 max-w-3xl leading-[1.75] text-white/78">From housing societies to growing enterprises, clients across Mumbai and Bengaluru rely on Aapka Munshi.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {clients.map((client) => <div key={client} className="rounded-2xl border border-white/15 bg-white/8 p-6 font-semibold text-white backdrop-blur">{client}</div>)}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto max-w-[900px] px-5 text-center lg:px-0">
          <p className="section-label">What Clients Say</p>
          <h2 className="section-title mt-3">Real Words From<br />Real Clients</h2>
          <div className="mt-10" onMouseEnter={() => setPauseSlider(true)} onMouseLeave={() => setPauseSlider(false)}>
            <article key={testimonial} className="animate-fade-soft rounded-2xl border border-munshi-border bg-munshi-surface p-8 shadow-munshi-card md:p-10">
              <p className="text-xl leading-[1.75] text-munshi-text">“{testimonials[testimonial].quote}”</p>
              <p className="mt-6 font-semibold text-munshi-primary">- {testimonials[testimonial].author}</p>
              <p className="mt-3 text-munshi-highlight">★★★★★</p>
            </article>
            <div className="mt-6 flex items-center justify-center gap-4">
              <button className="slider-control" onClick={() => setTestimonial((testimonial + testimonials.length - 1) % testimonials.length)} aria-label="Previous testimonial">‹</button>
              <div className="flex gap-2">{testimonials.map((_, index) => <button key={index} onClick={() => setTestimonial(index)} className={`h-2.5 rounded-full transition-all ${testimonial === index ? "w-8 bg-munshi-primary" : "w-2.5 bg-munshi-border"}`} aria-label={`Show testimonial ${index + 1}`} />)}</div>
              <button className="slider-control" onClick={() => setTestimonial((testimonial + 1) % testimonials.length)} aria-label="Next testimonial">›</button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-pad scroll-mt-24 bg-munshi-surface">
        <div className="mx-auto grid max-w-[1140px] gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-0">
          <div>
            <p className="section-label">Get In Touch</p>
            <h2 className="section-title mt-3">Let's Talk</h2>
            <p className="mt-5 leading-[1.75] text-munshi-secondary">Have a question or ready to get started? Reach out, we typically respond within 24 hours.</p>
            <div className="mt-8 space-y-4 leading-[1.7] text-munshi-secondary">
              <p>📞 +91 99306 97936</p><p>📞 +91 90792 15030</p><p>✉️ munshiaapka@gmail.com</p><p>📍 Office No. 509, Dimple Arcade, Asha Nagar Road, Thakur Complex, Kandivali East, Mumbai – 400101</p>
            </div>
            <div className="mt-8 rounded-2xl bg-munshi-primary p-6 text-white shadow-munshi-card"><h3 className="font-semibold">Office Hours</h3><p className="mt-2 text-white/82">Monday – Saturday: 10:00 AM – 7:00 PM</p></div>
          </div>
          <div className="rounded-2xl border border-munshi-border bg-white p-6 shadow-munshi-card md:p-8">
            {submitted ? (
              <div className="animate-fade-soft flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-munshi-highlight text-4xl text-white">✓</div>
                <h3 className="mt-6 text-2xl font-bold text-munshi-primary">Thank you!</h3>
                <p className="mt-3 text-munshi-secondary">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <FormField label="Full Name" name="name" value={values.name} error={errors.name} onChange={updateField} onBlur={handleBlur} />
                <FormField label="Phone Number" name="phone" value={values.phone} error={errors.phone} onChange={updateField} onBlur={handleBlur} type="tel" />
                <FormField label="Email Address" name="email" value={values.email} error={errors.email} onChange={updateField} onBlur={handleBlur} type="email" />
                <label className="block"><span className="form-label">I need help with:</span><select value={values.service} onChange={(e) => updateField("service", e.target.value)} onBlur={() => handleBlur("service")} className={`form-input ${errors.service ? "border-red-500" : ""}`}><option value="">Select a service</option><option>Housing Society Accounting</option><option>Business Accounting & Tax</option><option>GST / TDS Filing</option><option>Company Registration</option><option>Payroll</option><option>Other</option></select>{errors.service && <span className="form-error">{errors.service}</span>}</label>
                <label className="block"><span className="form-label">Message</span><textarea rows={4} value={values.message} onChange={(e) => updateField("message", e.target.value)} onBlur={() => handleBlur("message")} className={`form-input resize-none ${errors.message ? "border-red-500" : ""}`}></textarea>{errors.message && <span className="form-error">{errors.message}</span>}</label>
                <button className="w-full rounded-lg bg-munshi-primary px-8 py-3.5 font-semibold text-white transition-colors hover:bg-munshi-accent">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-munshi-dark text-white">
        <div className="mx-auto grid max-w-[1140px] gap-10 px-5 py-14 md:grid-cols-3 lg:px-0">
          <div><h3 className="text-2xl font-bold">Aapka Munshi<sup className="text-xs">®</sup></h3><p className="mt-2 italic text-white/70">बुक्स आपकी जिम्मेदारी हमारी</p><p className="mt-5 leading-[1.75] text-white/70">CA-led accounting, tax, and compliance services for housing societies, businesses, and individuals across Mumbai.</p></div>
          <div><p className="text-[13px] font-medium uppercase tracking-[0.08em] text-white/55">Quick Links</p><div className="mt-5 space-y-3 text-white/72">{["About Us", "Services, Housing Societies", "Services, Companies & Individuals", "Why Choose Us", "Contact"].map((link, index) => <button key={link} onClick={() => scrollTo(["about", "services", "services", "why-us", "contact"][index])} className="block transition-colors hover:text-munshi-highlight">{link}</button>)}</div></div>
          <div><p className="text-[13px] font-medium uppercase tracking-[0.08em] text-white/55">Contact</p><div className="mt-5 space-y-3 leading-[1.7] text-white/72"><p>📞 99306 97936 / 90792 15030</p><p>✉ munshiaapka@gmail.com</p><p>📍 Office No. 509, Dimple Arcade, Kandivali East, Mumbai – 400101</p></div></div>
        </div>
        <div className="border-t border-white/12 px-5 py-5 text-center text-sm text-white/60">© 2025 Aapka Munshi. All rights reserved. | CA Piyush Laddha & CA Anju Laddha</div>
      </footer>

      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-munshi-primary text-2xl text-white shadow-munshi-card transition-all hover:bg-munshi-accent ${showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`} aria-label="Back to top">↑</button>
    </main>
  );
}

function FormField({ label, name, value, error, type = "text", onChange, onBlur }: { label: string; name: FieldName; value: string; error?: string; type?: string; onChange: (name: FieldName, value: string) => void; onBlur: (name: FieldName) => void }) {
  return (
    <label className="block">
      <span className="form-label">{label}</span>
      <input type={type} value={value} onChange={(e) => onChange(name, e.target.value)} onBlur={() => onBlur(name)} className={`form-input ${error ? "border-red-500" : ""}`} />
      {error && <span className="form-error">{error}</span>}
    </label>
  );
}
