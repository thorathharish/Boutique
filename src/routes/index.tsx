import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import logo from "@/assets/logo.png";
import heroBride from "@/assets/hero-bride.jpg";
import couple from "@/assets/couple.jpg";
import coupleHarmony from "@/assets/Couple-harmony.jpg";
import groom from "@/assets/groom.jpg";
import kids from "@/assets/kids.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import occWedding from "@/assets/Occ - wedding.jpg";
import occReception from "@/assets/Occ - reception.jpg";
import occEngagement from "@/assets/Occ - Enagement.jpg";
import occSangeet from "@/assets/Occ - Sangeet.jpg";
import occMehendi from "@/assets/Occ - Mehandi.jpg";
import occHaldi from "@/assets/Occ - Haldi.jpg";
import menOccWedding from "@/assets/Men-Occ - wedding.jpg";
import menOccReception from "@/assets/Men-Occ - Reception.jpg";
import menOccEngagement from "@/assets/Men-Occ - Engagement.jpg";
import menOccSangeet from "@/assets/Men-Occ - Sangeet.jpg";
import menOccMehendi from "@/assets/Men-Occ - Mehandi.jpg";
import menOccHaldi from "@/assets/Men-Occ - Haldi.jpg";
import kidOccWedding from "@/assets/Kid-Occ - wedding.jpg";
import kidOccReception from "@/assets/Kid-Occ - Reception.jpg";
import kidOccEngagement from "@/assets/Kid-Occ - Engagement.jpg";
import kidOccSangeet from "@/assets/Kid-Occ - Sangeet.jpg";
import kidOccMehendi from "@/assets/Kid-Occ - Mehandi.jpg";
import kidOccHaldi from "@/assets/Kid-Occ - Haldi.jpg";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Sparkles,
  UserRound,
  Palette,
  Ruler,
  Gem,
  Heart,
  Camera,
  Users,
  Crown,
  Wand2,
  ShieldCheck,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CalendarCheck,
  Bot,
  Snowflake,
  Sun,
  Flame,
  Leaf,
  Star,
  BookOpen,
  Shirt,
  Menu,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vivora Elegance Studio — Couture for Brides & Grooms" },
      {
        name: "description",
        content:
          "Vivora Elegance Studio — luxury bridal & groom couture. Discover the dresses, designs and occasion edits crafted for your special day.",
      },
      { property: "og:title", content: "Vivora Elegance Studio" },
      {
        property: "og:description",
        content:
          "Luxury couture for brides, grooms and families. Designs, occasions, seasonal edits and a private trial experience.",
      },
      { property: "og:image", content: heroBride },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

const BRAND = "Vivora Elegance Studio";

function FloatingPetals() {
  const petals = Array.from({ length: 14 });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
      {petals.map((_, i) => {
        const left = (i * 7.3) % 100;
        const size = 8 + ((i * 11) % 18);
        const dur = 18 + ((i * 5) % 22);
        const delay = (i * 1.7) % 14;
        const colors = [
          "oklch(0.93 0.04 25 / 0.7)",
          "oklch(0.78 0.11 80 / 0.7)",
          "oklch(0.85 0.1 85 / 0.6)",
          "oklch(0.88 0.08 70 / 0.6)",
        ];
        const c = colors[i % colors.length];
        return (
          <span
            key={i}
            className="absolute bottom-[-10%] rounded-full animate-drift blur-[1px]"
            style={{
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              background: c,
              animationDuration: `${dur}s`,
              animationDelay: `${delay}s`,
              boxShadow: `0 0 12px ${c}`,
            }}
          />
        );
      })}
    </div>
  );
}

function Logo() {
  return (
    <a href="#top" className="flex flex-col items-center gap-0">
      <img src={logo} alt="Vivora Elegance Boutique logo" className="h-11 w-11 sm:h-20 sm:w-44 lg:h-24 lg:w-52 object-contain" />
      <span className="-mt-1 sm:-mt-2 leading-tight text-center">
        <span className="block font-serif text-xs sm:text-base tracking-[0.18em] text-foreground">VIVORA</span>
        <span className="block text-[7px] sm:text-[9px] tracking-[0.28em] sm:tracking-[0.35em] text-gold uppercase">Elegance Boutique</span>
      </span>
    </a>
  );
}

function NavLogo() {
  return (
    <a href="#top" className="flex items-center gap-2.5 sm:gap-3.5">
      <img
        src={logo}
        alt="Vivora Elegance Boutique logo"
        className="h-12 w-12 sm:h-14 sm:w-14 lg:h-20 lg:w-20 object-contain flex-shrink-0"
      />
      <span className="leading-tight">
        <span className="block font-serif text-base sm:text-lg lg:text-2xl tracking-[0.18em] text-foreground">
          VIVORA
        </span>
        <span className="block text-[8px] sm:text-[9px] lg:text-[11px] tracking-[0.28em] text-gold uppercase">
          Elegance Boutique
        </span>
      </span>
    </a>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute top-0 inset-x-0 z-30">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 h-16 sm:h-20 lg:h-28 flex items-center">

        {/* Left slot — hamburger (mobile) / nav links (desktop) */}
        <div className="flex-1 flex items-center">
          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-7 text-sm text-foreground/80">
            <a href="#designs" className="hover:text-foreground transition">Designs</a>
            <a href="#occasion" className="hover:text-foreground transition">Occasion</a>
            <a href="#how" className="hover:text-foreground transition">How it works</a>
            <a href="#blog" className="hover:text-foreground transition">Blog</a>
          </div>
          {/* Mobile hamburger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="md:hidden p-2 rounded-lg hover:bg-background/60 transition"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6 text-foreground" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-8 pt-4">
                <Logo />
                <div className="flex flex-col">
                  {[
                    ["#designs", "Designs"],
                    ["#occasion", "Occasion"],
                    ["#how", "How it works"],
                    ["#blog", "Blog"],
                  ].map(([href, label]) => (
                    <a
                      key={href}
                      href={href}
                      onClick={() => setOpen(false)}
                      className="text-foreground/80 hover:text-foreground transition py-3 border-b border-border/40 text-base"
                    >
                      {label}
                    </a>
                  ))}
                </div>
                <a
                  href="#cta"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--maroon)] text-primary-foreground px-6 py-3 text-sm font-medium shadow-soft"
                >
                  Book a Trial <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Center slot — horizontal logo fits within nav height */}
        <NavLogo />

        {/* Right slot — CTA (desktop) / spacer to balance hamburger (mobile) */}
        <div className="flex-1 flex items-center justify-end">
          <a
            href="#cta"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-foreground/90 transition"
          >
            Book a Trial <ArrowRight className="h-4 w-4" />
          </a>
          {/* Spacer matches hamburger button width so logo stays truly centered */}
          <div className="md:hidden w-10 h-10" />
        </div>

      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-ivory">
      <div className="lively-bg" />
      <FloatingPetals />
      <div className="absolute -top-40 -right-40 h-[18rem] w-[18rem] sm:h-[28rem] sm:w-[28rem] lg:h-[36rem] lg:w-[36rem] rounded-full bg-blush blur-3xl opacity-50 -z-10 animate-float-slow" />
      <div className="absolute -bottom-40 -left-32 h-[14rem] w-[14rem] sm:h-[20rem] sm:w-[20rem] lg:h-[28rem] lg:w-[28rem] rounded-full bg-gold/30 blur-3xl -z-10 animate-float-slower" />

      <Nav />

      {/* Tagline ribbon */}
      <div className="relative z-10 pt-20 sm:pt-24 lg:pt-28 flex justify-center px-4">
        <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-gold/40 bg-background/70 backdrop-blur px-4 sm:px-5 py-2 text-xs sm:text-sm tracking-wide text-foreground/80 shadow-soft animate-fade-up">
          <Sparkles className="h-3.5 w-3.5 text-gold" />
          <span>
            <span className="text-[color:var(--maroon)] font-medium">AI Bridal Harmony</span> is coming —
            crafted to make <em className="not-italic text-gold">YOUR</em> special day even more special.
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 pt-8 sm:pt-10 pb-16 sm:pb-20 lg:pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
        <div className="md:col-span-1 lg:col-span-6 animate-fade-up">
          <h1 className="mt-2 font-serif text-4xl sm:text-5xl md:text-4xl lg:text-7xl leading-[1.05] text-balance">
            Where every couple finds their{" "}
            <span className="italic text-[color:var(--maroon)]">forever</span> look.
          </h1>
          <p className="mt-5 sm:mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Vivora Elegance Boutique is a luxury couture house for brides and grooms — heirloom
            lehengas, regal sherwanis and timeless drapes, curated for your most cherished moments.
          </p>
          <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--maroon)] text-primary-foreground px-5 py-3 sm:px-7 sm:py-3.5 text-sm font-medium shadow-soft hover:shadow-gold transition"
            >
              Book a Trial
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#designs"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-3 sm:px-7 sm:py-3.5 text-sm font-medium hover:bg-background transition"
            >
              Explore Designs
            </a>
          </div>

          <dl className="mt-10 sm:mt-14 grid grid-cols-3 gap-3 sm:gap-6 max-w-lg">
            {[
              ["50+", "Designs"],
              ["6", "Occasions"],
              ["100%", "Matched"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-serif text-2xl sm:text-3xl text-[color:var(--maroon)]">{n}</dt>
                <dd className="text-[9px] sm:text-xs uppercase tracking-widest text-muted-foreground mt-1">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Hero visuals */}
        <div className="md:col-span-1 lg:col-span-6 relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
          {/* Mobile / tablet: single centered image */}
          <div className="block lg:hidden">
            <div className="relative max-w-xs md:max-w-none mx-auto">
              <div className="absolute -inset-4 rounded-[2rem] gradient-gold opacity-30 blur-2xl" />
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] shadow-gold ring-1 ring-gold/30">
                <img
                  src={heroBride}
                  alt="Bride in blush couture lehenga"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 gradient-veil pointer-events-none" />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-2xl bg-background/95 backdrop-blur px-4 py-2.5 shadow-soft border border-gold/30 text-center whitespace-nowrap">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Bride · Groom</p>
                <p className="font-serif text-sm mt-0.5">Crafted to look beautiful — together.</p>
              </div>
            </div>
          </div>
          {/* Desktop: two overlapping images */}
          <div className="hidden lg:block">
            <div className="relative h-[38rem] w-full max-w-xl mx-auto">
              <div className="absolute -inset-6 rounded-[2rem] gradient-gold opacity-30 blur-2xl" />
              <div className="absolute left-0 top-6 w-[58%] aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-gold ring-1 ring-gold/30 animate-float-slow">
                <img
                  src={heroBride}
                  alt="Bride in blush couture lehenga"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 gradient-veil pointer-events-none" />
              </div>
              <div className="absolute right-0 bottom-0 w-[55%] aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-gold ring-1 ring-gold/30 animate-float-slower">
                <img
                  src={groom}
                  alt="Groom in regal sherwani"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 gradient-veil pointer-events-none" />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-2xl bg-background/95 backdrop-blur px-5 py-3 shadow-soft border border-gold/30 text-center">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Bride · Groom</p>
                <p className="font-serif text-base mt-0.5">Crafted to look beautiful — together.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================
   DESIGNS — Bride & Groom dress types
   ============================ */
const womenDesigns = [
  { name: "Bridal Lehenga", note: "Voluminous, embroidered, heirloom" },
  { name: "Anarkali", note: "Flowing, romantic, festive" },
  { name: "Designer Saree", note: "Timeless drapes, statement borders" },
  { name: "Gown", note: "Reception-ready, contemporary couture" },
  { name: "Sharara & Gharara", note: "Regal, twirl-worthy silhouettes" },
  { name: "Indo-Western Set", note: "Modern, fusion, statement details" },
];
const menDesigns = [
  { name: "Sherwani", note: "Regal, structured, ceremonial" },
  { name: "Bandhgala & Achkan", note: "Sharp, princely, tailored" },
  { name: "Indo-Western", note: "Modern silhouettes, fusion details" },
  { name: "Kurta Set", note: "Refined daywear, festive ease" },
  { name: "Tuxedo & Suit", note: "Reception-ready, modern formals" },
  { name: "Jodhpuri", note: "Heritage tailoring, classic lines" },
];

function Designs() {
  const [tab, setTab] = useState<"women" | "men">("women");
  const list = tab === "women" ? womenDesigns : menDesigns;
  return (
    <section id="designs" className="py-16 sm:py-20 lg:py-28 bg-secondary/40 relative overflow-hidden">
      <div className="absolute -right-24 top-10 h-[18rem] w-[18rem] sm:h-[26rem] sm:w-[26rem] rounded-full bg-blush/60 blur-3xl -z-0 animate-float-slow" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 relative">
        <div className="flex flex-wrap items-end justify-between gap-4 sm:gap-6">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Designs & Dresses</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl text-balance">
              Couture made for brides & grooms.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Browse the silhouettes our atelier crafts — for her, and for him.
            </p>
          </div>

          {/* Women / Men toggle */}
          <div className="inline-flex p-1 rounded-full bg-background border border-gold/30 shadow-soft">
            {(["women", "men"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-4 sm:px-6 py-2 rounded-full text-sm capitalize transition ${
                  tab === t
                    ? "bg-[color:var(--maroon)] text-primary-foreground shadow-soft"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                For {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {list.map((v) => (
            <button
              key={v.name}
              className="group text-left rounded-2xl bg-background border border-border hover:border-gold p-4 sm:p-6 hover:shadow-soft transition"
            >
              <div className="h-10 w-10 rounded-full bg-blush flex items-center justify-center mb-4 group-hover:gradient-gold transition">
                <Shirt className="h-4 w-4 text-[color:var(--maroon)]" />
              </div>
              <h3 className="font-serif text-xl">{v.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{v.note}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================
   OCCASION — interactive Women / Men / Kids with scrolling occasion dresses
   ============================ */
const occasionList = [
  { name: "Wedding",    desc: "Heirloom-grade couture for the main day.",  womenImage: occWedding,    menImage: menOccWedding,    kidsImage: kidOccWedding    },
  { name: "Reception",  desc: "Modern silhouettes, statement palettes.",    womenImage: occReception,  menImage: menOccReception,  kidsImage: kidOccReception  },
  { name: "Engagement", desc: "Soft elegance, refined sparkle.",           womenImage: occEngagement, menImage: menOccEngagement, kidsImage: kidOccEngagement, menObjectPosition: "top" },
  { name: "Sangeet",    desc: "Movement-ready, joyful and colorful.",      womenImage: occSangeet,    menImage: menOccSangeet,    kidsImage: kidOccSangeet    },
  { name: "Mehendi",    desc: "Florals, light fabrics, daylight tones.",    womenImage: occMehendi,    menImage: menOccMehendi,    kidsImage: kidOccMehendi    },
  { name: "Haldi",      desc: "Sunlit yellows, breathable drapes.",        womenImage: occHaldi,      menImage: menOccHaldi,      kidsImage: kidOccHaldi      },
];


function Occasion() {
  const [who, setWho] = useState<"women" | "men" | "kids">("women");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

  const scroll = (dir: "left" | "right") => {
    const amount = scrollRef.current ? scrollRef.current.clientWidth * 0.8 : 300;
    scrollRef.current?.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragStartX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    dragScrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
    if (scrollRef.current) scrollRef.current.style.cursor = "grabbing";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - dragStartX.current) * 1.2;
    scrollRef.current.scrollLeft = dragScrollLeft.current - walk;
  };

  const onMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };

  return (
    <section id="occasion" className="py-16 sm:py-20 lg:py-28 bg-background relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Curated Edits</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl text-balance">
              Shop the Occasion.
            </h2>
            <p className="mt-4 text-muted-foreground">
              From the haldi to the reception — outfits styled for every ceremony, for every member of the family.
            </p>
          </div>

          <div className="inline-flex p-1 rounded-full bg-secondary/60 border border-gold/30 shadow-soft">
            {(["women", "men", "kids"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setWho(t)}
                className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm capitalize transition ${
                  who === t
                    ? "bg-[color:var(--maroon)] text-primary-foreground shadow-soft"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel wrapper */}
        <div className="relative mt-8 sm:mt-10">
          {/* Desktop arrows — absolute beside carousel (sm+) */}
          <button
            onClick={() => scroll("left")}
            className={`hidden sm:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-background border border-gold/40 shadow-soft items-center justify-center text-[color:var(--maroon)] hover:bg-[color:var(--maroon)] hover:text-primary-foreground hover:border-[color:var(--maroon)] transition-all duration-300 ${canScrollLeft ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}`}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className={`hidden sm:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-background border border-gold/40 shadow-soft items-center justify-center text-[color:var(--maroon)] hover:bg-[color:var(--maroon)] hover:text-primary-foreground hover:border-[color:var(--maroon)] transition-all duration-300 ${canScrollRight ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}`}
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Scrollable strip — no native scrollbar, drag enabled */}
          <div
            ref={scrollRef}
            onScroll={updateScrollButtons}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            className="-mx-4 sm:-mx-6 md:-mx-8 lg:-mx-10 px-4 sm:px-6 md:px-8 lg:px-10 overflow-x-auto pb-2 select-none"
            style={{ scrollbarWidth: "none", cursor: "grab" }}
          >
            <div className="flex gap-4 sm:gap-5 min-w-max">
              {occasionList.map((o, i) => (
                <article
                  key={`${who}-${o.name}`}
                  className="relative w-[78vw] sm:w-72 md:w-80 flex-shrink-0 rounded-3xl overflow-hidden shadow-soft group bg-background border border-border"
                  style={{ animation: "fade-up 0.7s both", animationDelay: `${i * 60}ms` }}
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={who === "women" ? o.womenImage : who === "men" ? o.menImage : o.kidsImage}
                      alt={`${who} ${o.name} outfit`}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      style={who === "men" && o.menObjectPosition ? { objectPosition: o.menObjectPosition } : undefined}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--maroon)]/85 via-[color:var(--maroon)]/20 to-transparent" />
                  </div>
                  <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end text-primary-foreground">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gold">For {who}</p>
                    <h3 className="font-serif text-xl sm:text-2xl mt-1">{o.name}</h3>
                    <p className="text-xs text-primary-foreground/80 mt-1 max-w-[16rem]">{o.desc}</p>
                    <a
                      href="#cta"
                      className="mt-3 inline-flex items-center gap-1 text-sm text-gold hover:gap-2 transition-all w-fit"
                    >
                      Explore <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Mobile arrows — row below carousel, no image overlap */}
          <div className="flex sm:hidden justify-end gap-2 mt-3 px-1">
            <button
              onClick={() => scroll("left")}
              className={`h-10 w-10 rounded-full bg-background border border-gold/40 shadow-soft flex items-center justify-center text-[color:var(--maroon)] hover:bg-[color:var(--maroon)] hover:text-primary-foreground transition-all duration-300 ${canScrollLeft ? "opacity-100" : "opacity-30 pointer-events-none"}`}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className={`h-10 w-10 rounded-full bg-background border border-gold/40 shadow-soft flex items-center justify-center text-[color:var(--maroon)] hover:bg-[color:var(--maroon)] hover:text-primary-foreground transition-all duration-300 ${canScrollRight ? "opacity-100" : "opacity-30 pointer-events-none"}`}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================
   HOW IT WORKS — six steps
   ============================ */
const steps = [
  { icon: UserRound, title: "Role Selection", desc: "Begin as bride or groom — your journey is tailored from the first tap." },
  { icon: Palette, title: "Design Preference", desc: "Lehenga, gown, sherwani, indo-western — choose the silhouettes you love." },
  { icon: Ruler, title: "Physical Profile", desc: "Height, weight and body shape inform silhouette-correct recommendations." },
  { icon: Gem, title: "Skin Science", desc: "Vein test and jewelry preference unlock your true undertone palette." },
  { icon: Heart, title: "Mood & Event", desc: "Traditional, royal or modern — for wedding, reception or mehendi." },
  { icon: Users, title: "Partner Sync", desc: "Link profiles to unlock couple harmony and twinning intelligence." },
];

function HowItWorks() {
  return (
    <section id="how" className="relative py-16 sm:py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">The Journey</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl text-balance">
            Six elegant steps to your style identity.
          </h2>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg">
            A quiet, considered consultation — guided by our atelier, refined for you.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative bg-background p-5 sm:p-6 lg:p-8 hover:bg-secondary/40 transition"
              >
                <div className="flex items-start justify-between">
                  <div className="h-12 w-12 rounded-full gradient-gold flex items-center justify-center shadow-soft">
                    <Icon className="h-5 w-5 text-[color:var(--maroon)]" />
                  </div>
                  <span className="font-serif text-2xl sm:text-3xl text-gold/70">0{i + 1}</span>
                </div>
                <h3 className="mt-6 font-serif text-xl sm:text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


const featureGroups = [
  {
    label: "For the Bride",
    number: "01",
    tag: "Bride",
    image: heroBride,
    icon: Crown,
    items: [
      "Silhouette-correct outfit logic",
      "Color glow enhancement by undertone",
      "Dupatta & embroidery placement",
      "Virtual try-on (coming soon)",
    ],
  },
  {
    label: "For the Groom",
    number: "02",
    tag: "Groom",
    image: groom,
    icon: ShieldCheck,
    items: [
      "Structure enhancement & posture flattering",
      "Regal proportion logic",
      "Layer coordination across pieces",
      "Accessory syncing — safa, mojari, brooch",
    ],
  },
  {
    label: "For the Couple",
    number: "03",
    tag: "Couple",
    image: couple,
    icon: Heart,
    items: [
      "Harmony score across outfits",
      "Twinning notifications",
      "Side-by-side preview",
      "Shared shortlist & decisions",
    ],
  },
];

function Features() {
  return (
    <section id="features" className="relative py-16 sm:py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Features</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl text-balance">
              Couture craftsmanship — for her, for him, for both.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Every recommendation is shaped by your inputs and refined by our atelier — never replaced.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {featureGroups.map((g) => {
            const Icon = g.icon;
            return (
              <article
                key={g.label}
                className="group relative overflow-hidden rounded-3xl bg-background border border-border shadow-soft hover:shadow-gold hover:border-gold transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={g.image} alt={g.label} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <span className="absolute bottom-4 left-6 bg-[color:var(--maroon)] text-primary-foreground text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                    {g.tag}
                  </span>
                </div>

                <div className="h-[2px] bg-gradient-to-r from-gold/60 via-gold to-gold/60" />

                <div className="relative p-5 sm:p-6 lg:p-7 bg-gradient-to-b from-blush/30 to-background">
                  <span className="absolute top-3 right-5 font-serif text-7xl text-gold/10 select-none leading-none pointer-events-none">
                    {g.number}
                  </span>

                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-blush ring-1 ring-gold/40 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-4 w-4 text-[color:var(--maroon)]" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl underline decoration-gold decoration-1 underline-offset-4">
                      {g.label}
                    </h3>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {g.items.map((it, idx) => (
                      <li key={it} className={`flex gap-2.5 ${idx === 0 ? "text-sm font-medium text-foreground" : "text-sm text-foreground/70"}`}>
                        <span className="mt-0.5 flex-shrink-0 text-gold text-xs">✦</span>
                        {it}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#cta"
                    className="mt-6 inline-flex items-center gap-1 text-sm text-[color:var(--maroon)] hover:gap-2 transition-all"
                  >
                    Explore <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const seasons = [
  { icon: Sun, name: "Summer Soirées", desc: "Breathable silks, daylight ivories, mehendi-ready florals." },
  { icon: Leaf, name: "Monsoon & Autumn", desc: "Jewel tones, deeper drapes, candle-lit palettes." },
  { icon: Snowflake, name: "Winter Weddings", desc: "Velvet sherwanis, layered shawls, ruby and emerald notes." },
  { icon: Flame, name: "Festival Edits", desc: "Diwali, Karva Chauth, Eid and Navratri — themed collections." },
];

function Seasonal() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Seasonal & Festival Theming</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl text-balance">A wardrobe that knows the season.</h2>
          <p className="mt-4 text-muted-foreground">
            Vivora tunes every recommendation to the climate, the calendar and the celebration.
          </p>
        </div>
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {seasons.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.name} className="rounded-2xl border border-border bg-secondary/40 p-4 sm:p-6 hover:shadow-soft transition">
                <div className="h-12 w-12 rounded-full gradient-gold flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-[color:var(--maroon)]" />
                </div>
                <h3 className="font-serif text-xl">{s.name}</h3>
                <p className="text-sm text-muted-foreground mt-1.5">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TrialAndAI() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <div className="rounded-3xl bg-background border border-border p-5 sm:p-7 lg:p-10 shadow-soft">
          <div className="h-12 w-12 rounded-full gradient-gold flex items-center justify-center">
            <CalendarCheck className="h-5 w-5 text-[color:var(--maroon)]" />
          </div>
          <p className="mt-5 text-xs uppercase tracking-[0.3em] text-gold">Trial Booking</p>
          <h3 className="mt-2 font-serif text-2xl sm:text-3xl">Book a private trial at the boutique.</h3>
          <p className="mt-3 text-muted-foreground">
            Reserve a slot with our stylists. We guide you through the process in person — fittings, fabric and final picks.
          </p>
          <ul className="mt-5 space-y-2 text-sm">
            {["Choose a date & city", "Stylist confirms shortlist", "Try, refine, decide — together"].map((t) => (
              <li key={t} className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-gold" />{t}</li>
            ))}
          </ul>
          <a href="#cta" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[color:var(--maroon)] text-primary-foreground px-5 sm:px-6 py-3 text-sm font-medium hover:shadow-gold transition">
            Book a Trial <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="rounded-3xl bg-[color:var(--maroon)] text-primary-foreground p-5 sm:p-7 lg:p-10 shadow-soft relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 h-32 w-32 sm:h-60 sm:w-60 rounded-full bg-gold/20 blur-3xl animate-float-slow" />
          <div className="h-12 w-12 rounded-full gradient-gold flex items-center justify-center">
            <Bot className="h-5 w-5 text-[color:var(--maroon)]" />
          </div>
          <p className="mt-5 text-xs uppercase tracking-[0.3em] text-gold">A Glimpse — AI Bridal Harmony</p>
          <h3 className="mt-2 font-serif text-2xl sm:text-3xl">Your couture co-pilot, coming soon.</h3>
          <p className="mt-3 text-primary-foreground/80">
            A quiet AI assistant that learns your style identity and your partner's — and harmonises them.
            Ask anything about palette, jewelry or cultural etiquette.
          </p>
          <div className="mt-6 space-y-3">
            {[
              "Suggest a sherwani palette to match a maroon lehenga.",
              "Best fabrics for a December reception in Jaipur?",
              "Which jewelry suits my warm undertone?",
            ].map((q) => (
              <div key={q} className="rounded-xl bg-white/10 border border-gold/20 px-3 sm:px-4 py-2.5 text-xs sm:text-sm">
                <span className="text-gold mr-2">›</span>{q}
              </div>
            ))}
          </div>
          <a href="#cta" className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold text-[color:var(--maroon)] px-5 sm:px-6 py-3 text-sm font-medium hover:opacity-90 transition">
            Join the Waitlist <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function USP() {
  const items = [
    "A couture house, not a marketplace — every piece is studio-curated.",
    "Designs and fittings that remove anxiety and ensure outfit confidence.",
    "Bridges digital guidance with real boutique execution — your shortlist becomes reality.",
  ];
  return (
    <section id="why" className="relative py-16 sm:py-20 lg:py-28 bg-background overflow-hidden">
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 h-[18rem] w-[18rem] sm:h-[30rem] sm:w-[30rem] rounded-full bg-blush blur-3xl opacity-60 -z-10 animate-float-slower" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[5/6] rounded-[2rem] overflow-hidden shadow-gold ring-1 ring-gold/30">
            <img src={coupleHarmony} alt="Couple in couture" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="absolute right-2 lg:-right-4 -bottom-2 lg:-bottom-6 rounded-2xl bg-background/95 backdrop-blur p-4 sm:p-5 border border-gold/30 shadow-soft max-w-[11rem] lg:max-w-[14rem]">
            <p className="text-xs uppercase tracking-widest text-gold">Couple Harmony</p>
            <p className="font-serif text-2xl sm:text-3xl mt-1">98<span className="text-gold">/100</span></p>
            <p className="text-xs text-muted-foreground mt-1">Twinning alert: ivory & maroon palette aligned.</p>
          </div>
        </div>
        <div className="lg:col-span-7 mt-6 lg:mt-0">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Why Vivora</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl text-balance">
            A studio of couture decisions — not another scroll.
          </h2>
          <div className="gold-divider my-6 sm:my-8" />
          <ul className="space-y-5 sm:space-y-6">
            {items.map((t) => (
              <li key={t} className="flex gap-3 sm:gap-4">
                <Sparkles className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-foreground/85 leading-relaxed">{t}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Technology() {
  const blocks = [
    { icon: Wand2, title: "AI Skin Analysis", desc: "Vein test inputs reveal your true undertone palette." },
    { icon: Camera, title: "Visual Validation", desc: "Computer vision refines silhouette and color recommendations privately." },
    { icon: Heart, title: "Couple Harmony Logic", desc: "Two style identities merge into a single, balanced palette and silhouette plan." },
  ];
  return (
    <section id="technology" className="py-16 sm:py-20 lg:py-28 bg-[color:var(--maroon)] text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08] -z-0"
        style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 relative">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">A Glimpse · Technology</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl text-balance">
            AI that refines your taste — never overrides it.
          </h2>
          <p className="mt-5 text-primary-foreground/75 text-base sm:text-lg">
            A small preview of what's coming inside Vivora — quiet intelligence that supports your stylist, not replaces them.
          </p>
        </div>
        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {blocks.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.title} className="rounded-2xl border border-gold/30 bg-white/5 backdrop-blur p-5 sm:p-6 lg:p-7 hover:bg-white/10 transition">
                <div className="h-12 w-12 rounded-full gradient-gold flex items-center justify-center">
                  <Icon className="h-5 w-5 text-[color:var(--maroon)]" />
                </div>
                <h3 className="mt-5 font-serif text-xl sm:text-2xl">{b.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/75 leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const blogs = [
  { img: blog1, tag: "Fabric Edit", title: "Choosing the right silk for a summer wedding", excerpt: "From Banarasi to Chanderi — how to pick fabrics that drape beautifully even in the heat." },
  { img: blog2, tag: "Groom Style", title: "The modern sherwani — five details that matter", excerpt: "Collar, cuff, brooch, layer, footwear. The small choices that elevate a princely silhouette." },
  { img: blog3, tag: "Bridal Beauty", title: "Decoding undertones: warm, cool, neutral", excerpt: "Why your jewelry, not your skin tone, is the real palette key." },
];

function Blog() {
  return (
    <section id="blog" className="py-16 sm:py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4 sm:gap-6">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">From the Journal</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl text-balance">From the Blog.</h2>
            <p className="mt-4 text-muted-foreground">
              Stylist notes, fabric science, and couture stories — for couples who care about the details.
            </p>
          </div>
          <a href="#cta" className="text-sm text-[color:var(--maroon)] inline-flex items-center gap-1 hover:gap-2 transition-all">
            Read all stories <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogs.map((b) => (
            <article key={b.title} className="group rounded-3xl overflow-hidden border border-border bg-background hover:shadow-gold transition">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={b.img} alt={b.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-gold flex items-center gap-2">
                  <BookOpen className="h-3.5 w-3.5" />{b.tag}
                </p>
                <h3 className="mt-3 font-serif text-xl sm:text-2xl leading-tight">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.excerpt}</p>
                <a href="#cta" className="mt-4 inline-flex items-center gap-1 text-sm text-[color:var(--maroon)] hover:gap-2 transition-all">
                  Read more <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="py-16 sm:py-20 lg:py-28 bg-secondary/40 relative overflow-hidden">
      <FloatingPetals />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8 lg:px-10 text-center relative">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Begin</p>
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-6xl text-balance">
          AI Bridal Harmony — coming soon to design your{" "}
          <span className="italic text-[color:var(--maroon)]">special day</span>, even more specially.
        </h2>
        <p className="mt-5 sm:mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          Step into Vivora Elegance Studio — book a private trial, and let our atelier guide you through couture made for you and your forever.
        </p>
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#top"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--maroon)] text-primary-foreground px-6 py-3 sm:px-8 sm:py-4 text-sm font-medium shadow-soft hover:shadow-gold transition w-full sm:w-auto"
          >
            Book a Trial
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a
            href="#designs"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 px-6 py-3 sm:px-8 sm:py-4 text-sm font-medium hover:bg-background transition w-full sm:w-auto"
          >
            Explore Designs
          </a>
        </div>
        <div className="gold-divider mt-16 sm:mt-20" />
        <footer className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>
            <span className="font-serif text-foreground">{BRAND}</span> — Couture, quietly engineered.
          </p>
          <p>© {new Date().getFullYear()} {BRAND}</p>
        </footer>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main>
      <Hero />
      <Designs />
      <Occasion />
      <HowItWorks />
      <Features />
      <Seasonal />
      <TrialAndAI />
      <USP />
      <Technology />
      <Blog />
      <CTA />
    </main>
  );
}
