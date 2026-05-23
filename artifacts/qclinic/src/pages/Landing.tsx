import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { 
  Heart, 
  Sparkles, 
  MapPin, 
  Star, 
  ShieldCheck, 
  Clock, 
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";
import useEmblaCarousel from "embla-carousel-react";

import { useCountUp } from "@/hooks/use-count-up";
import heroImg from "@assets/clinic_images/hero-1.png";
import interiorImg from "@assets/clinic_images/clinic-interior.png";
import treatmentRoomImg from "@assets/clinic_images/treatment-room.png";
import dermatologiaImg from "@assets/clinic_images/dermatologia.png";
import loungeImg from "@assets/clinic_images/clinic-lounge.png";
import nutricaoImg from "@assets/clinic_images/nutricao.png";
import corporalImg from "@assets/clinic_images/corporal-facial.png";
import embelezamentoImg from "@assets/clinic_images/embelezamento-olhar.png";
import fachadaImg from "@assets/clinic_images/fachada.png";
import spaImg from "@assets/clinic_images/clinic-spa.png";

// Configuration for section fade-up animation
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Landing() {
  return (
    <div className="w-full overflow-hidden bg-background text-foreground font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <NumbersSection />
        <ExperienceSection />
        <ProceduresSection />
        <TestimonialsSection />
        <AboutSection />
        <GallerySection />
        <LocationSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${
        scrolled 
          ? "bg-white/90 backdrop-blur-md py-4 shadow-sm border-white/20" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/">
          <span className={`font-serif text-3xl font-medium tracking-wide transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-white drop-shadow-md'}`}>
            Q!Clinic
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {["Experiência", "Procedimentos", "Sobre", "Contato"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium tracking-wider uppercase transition-colors duration-300 hover:text-primary ${
                scrolled ? 'text-foreground/80' : 'text-white/90'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
        
        <div className="hidden md:block">
          <a 
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noreferrer"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-all shadow-md hover:shadow-lg"
          >
            Agendar
          </a>
        </div>

        <button 
          className="md:hidden text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} className={scrolled ? "text-foreground" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border absolute top-full left-0 w-full"
          >
            <div className="flex flex-col p-6 gap-4">
              {["Experiência", "Procedimentos", "Sobre", "Contato"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-foreground/80 hover:text-primary text-lg font-medium py-2 border-b border-border/50"
                >
                  {item}
                </a>
              ))}
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noreferrer"
                className="bg-primary text-center text-primary-foreground px-6 py-3 rounded-full font-medium mt-4"
              >
                Agendar
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Ken Burns */}
      <div className="absolute inset-0 z-0 bg-black">
        <img 
          src={heroImg} 
          alt="Q!Clinic Recepção" 
          className="w-full h-full object-cover opacity-80 animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 mix-blend-multiply"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl flex flex-col items-center"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <span className="px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white/90 text-xs font-medium tracking-widest uppercase">
              Clínica Premium em Alphaville
            </span>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light italic leading-tight mb-6 drop-shadow-lg">
            Sua autoestima merece um cuidado à altura.
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/80 font-light max-w-2xl mb-10 leading-relaxed">
            Tecnologia estética avançada, atendimento humanizado e resultados naturais em uma experiência exclusiva.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noreferrer"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium tracking-wide transition-all shadow-[0_0_20px_rgba(201,169,110,0.3)] hover:shadow-[0_0_30px_rgba(201,169,110,0.5)] w-full sm:w-auto text-center"
            >
              Agendar Avaliação
            </a>
            <a 
              href="#procedimentos"
              className="bg-transparent border border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-full font-medium tracking-wide transition-colors duration-300 w-full sm:w-auto text-center"
            >
              Conhecer Procedimentos
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-white/60 text-xs tracking-widest uppercase font-light">Descubra</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
      </motion.div>
    </section>
  );
}

function NumbersSection() {
  const { count: years, ref: refYears } = useCountUp(5);
  const { count: procedures, ref: refProcedures } = useCountUp(10000, 2.5);
  const { count: clients, ref: refClients } = useCountUp(3500, 2);

  return (
    <section className="py-24 bg-background border-b border-border/40 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-border/50">
          <div className="flex flex-col items-center text-center px-4" ref={refYears}>
            <span className="font-serif text-5xl md:text-6xl text-primary mb-3">+{years} anos</span>
            <p className="text-foreground/70 font-light">Oferecendo excelência em saúde e beleza</p>
          </div>
          <div className="flex flex-col items-center text-center px-4 pt-12 md:pt-0" ref={refProcedures}>
            <span className="font-serif text-5xl md:text-6xl text-primary mb-3">+{procedures.toLocaleString('pt-BR')}</span>
            <p className="text-foreground/70 font-light">Atendimentos realizados</p>
          </div>
          <div className="flex flex-col items-center text-center px-4 pt-12 md:pt-0" ref={refClients}>
            <span className="font-serif text-5xl md:text-6xl text-primary mb-3">+{clients.toLocaleString('pt-BR')}</span>
            <p className="text-foreground/70 font-light">Clientes atendidas</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const experiences = [
    { icon: <Heart size={28} strokeWidth={1.5} />, title: "Atendimento Humanizado", text: "Cuidado centrado em você, respeitando suas necessidades únicas." },
    { icon: <Star size={28} strokeWidth={1.5} />, title: "Ambiente Sofisticado", text: "Cada detalhe pensado para proporcionar conforto e relaxamento." },
    { icon: <Sparkles size={28} strokeWidth={1.5} />, title: "Tecnologia Avançada", text: "Equipamentos de última geração para resultados superiores." },
    { icon: <ShieldCheck size={28} strokeWidth={1.5} />, title: "Equipe Especializada", text: "Profissionais altamente qualificados e em constante atualização." },
    { icon: <MapPin size={28} strokeWidth={1.5} />, title: "Localização Premium", text: "No coração de Alphaville, com fácil acesso e segurança." },
    { icon: <Clock size={28} strokeWidth={1.5} />, title: "Experiência Acolhedora", text: "Sem pressa. O tempo dedicado que sua beleza merece." },
  ];

  return (
    <section id="experiência" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Mais do que estética.<br/><span className="italic text-primary">Uma experiência completa.</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white/60 backdrop-blur-sm border border-white/80 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="text-primary mb-6 bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {exp.icon}
              </div>
              <h3 className="text-xl font-medium mb-3 text-foreground">{exp.title}</h3>
              <p className="text-foreground/70 font-light leading-relaxed">{exp.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProceduresSection() {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    {
      name: "Corporal e Facial",
      image: corporalImg,
      procedures: ["Drenagem Linfática", "Massagem Modeladora", "Criolipólise", "Jato de Plasma", "Limpeza de Pele", "Luz Pulsada", "Ultraformer", "Lavieen", "Pós-operatório"]
    },
    {
      name: "Embelezamento do Olhar",
      image: embelezamentoImg,
      procedures: ["Lash Lifting", "Brow Lamination", "Design de Sobrancelhas", "Micropigmentação", "Remoção a Laser", "Aquarelle Lips"]
    },
    {
      name: "Dermatologia",
      image: dermatologiaImg,
      procedures: ["Skinbooster", "Harmonização Facial", "Bioestimulador de Colágeno", "Preenchimento Labial", "PDRN", "Peelings", "Fios PDO", "Tratamento de Melasma"]
    },
    {
      name: "Nutrição",
      image: nutricaoImg,
      procedures: ["Planos alimentares", "Body Metrix", "Ganho de massa", "Nutrição especializada"]
    }
  ];

  return (
    <section id="procedimentos" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Nossos Procedimentos</h2>
            <p className="text-foreground/70 font-light max-w-xl">Protocolos personalizados desenhados para realçar sua beleza natural com segurança e eficácia.</p>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar gap-8 border-b border-border mb-12 pb-4">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`whitespace-nowrap text-lg pb-4 relative transition-colors duration-300 ${activeTab === idx ? 'text-primary font-medium' : 'text-foreground/50 hover:text-foreground/80'}`}
            >
              {cat.name}
              {activeTab === idx && (
                <motion.div 
                  layoutId="activeTab" 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" 
                />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                {categories[activeTab].procedures.map((proc, idx) => (
                  <div key={idx} className="group cursor-pointer">
                    <div className="flex items-center justify-between border-b border-border/50 pb-3 mb-1">
                      <span className="text-lg text-foreground/80 group-hover:text-primary transition-colors duration-300">{proc}</span>
                      <ChevronRight size={16} className="text-border group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <div className="h-[1px] w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300 uppercase tracking-widest text-sm"
                >
                  Agendar consulta <ChevronRight size={16} />
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group">
                <img 
                  src={categories[activeTab].image} 
                  alt={categories[activeTab].name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" });

  const testimonials = [
    { text: "A clínica mais charmosa de Alphaville.", author: "Ana Paula M." },
    { text: "Me senti cuidada do começo ao fim.", author: "Fernanda R." },
    { text: "Atendimento impecável e ambiente maravilhoso.", author: "Juliana C." },
    { text: "Resultados naturais e atendimento incrível.", author: "Mariana S." },
    { text: "Superou todas as minhas expectativas.", author: "Camila B." },
  ];

  return (
    <section className="py-24 bg-[#141210] relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center mb-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="flex justify-center mb-6">
            <div className="flex gap-1 text-primary">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
            </div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">O que dizem nossas clientes</h2>
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/10">
            <span className="text-white font-medium">Nota 5.0</span>
            <span className="text-white/60 text-sm">no Google Avaliações</span>
          </div>
        </motion.div>
      </div>

      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex backface-hidden">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-[0_0_80%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-6">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl h-full flex flex-col justify-between hover:bg-white/10 transition-colors duration-300">
                <p className="font-serif text-xl text-white/90 italic mb-8 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">
                    {testimonial.author.charAt(0)}
                  </div>
                  <span className="text-white/80 font-medium">{testimonial.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={staggerContainer}
            className="order-2 lg:order-1"
          >
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8">
              Cada detalhe <span className="italic text-primary">pensado para você.</span>
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-6 text-foreground/70 font-light text-lg leading-relaxed">
              <p>
                A Q!Clinic nasceu do desejo de criar um refúgio de beleza e bem-estar no coração de Alphaville. Um espaço onde a excelência técnica se encontra com a sofisticação e o acolhimento genuíno.
              </p>
              <p>
                Acreditamos que a estética não é sobre transformação drástica, mas sobre revelar sua melhor versão. Nossa equipe de especialistas trabalha com protocolos personalizados, unindo a mais avançada tecnologia a uma sensibilidade estética apurada.
              </p>
              <p>
                Da recepção calorosa com aroma de orquídeas ao cuidado pós-procedimento, cada momento na Q!Clinic é projetado para ser uma experiência premium, tranquila e inesquecível.
              </p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="mt-10">
              <img src={dermatologiaImg} alt="Detalhe Q!Clinic" className="w-full h-64 object-cover rounded-2xl" />
            </motion.div>
          </motion.div>

          <div className="order-1 lg:order-2 relative h-[600px] sm:h-[800px]">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 right-0 w-4/5 h-[70%] rounded-2xl overflow-hidden shadow-2xl z-10"
            >
              <img src={interiorImg} alt="Interior Q!Clinic" className="w-full h-full object-cover" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute bottom-0 left-0 w-3/5 h-[50%] rounded-2xl overflow-hidden shadow-xl z-20 border-8 border-background"
            >
              <img src={loungeImg} alt="Lounge Q!Clinic" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const images = [heroImg, interiorImg, treatmentRoomImg, loungeImg, spaImg, fachadaImg];

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    if (!scrollRef.current) return;
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll-fast
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-12 flex justify-between items-end">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl text-foreground"
        >
          Nossa Clínica
        </motion.h2>
        <span className="text-foreground/50 hidden sm:flex items-center gap-2 uppercase tracking-widest text-xs font-medium">
          Arraste para explorar <ChevronRight size={14} />
        </span>
      </div>

      <div 
        ref={scrollRef}
        className={`flex overflow-x-auto hide-scrollbar gap-6 px-6 md:px-12 pb-10 select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="flex-none w-[280px] sm:w-[350px] md:w-[400px] aspect-[2/3] overflow-hidden rounded-xl">
            <img 
              src={img} 
              alt={`Galeria Q!Clinic ${idx + 1}`} 
              className="w-full h-full object-cover pointer-events-none hover:scale-105 transition-transform duration-700" 
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section id="contato" className="py-0 bg-[#1c1a17]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-12 md:p-24 flex flex-col justify-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-white mb-8">
              No coração de Alphaville.
            </motion.h2>
            
            <motion.div variants={fadeUp} className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-medium mb-1">Endereço</h4>
                  <p className="text-white/70 font-light">
                    Praça das Orquídeas, 124<br />
                    Alphaville Comercial<br />
                    Barueri/SP
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-medium mb-1">Horário de Funcionamento</h4>
                  <p className="text-white/70 font-light">
                    Segunda a Sexta: 08h às 20h<br />
                    Sábado: 08h às 14h
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.a 
              variants={fadeUp}
              href="https://goo.gl/maps/QClinicAlphaville" 
              target="_blank" 
              rel="noreferrer"
              className="inline-block bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-medium transition-colors"
            >
              Abrir no Google Maps
            </motion.a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-[400px] lg:h-auto min-h-[500px]"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.123!2d-46.847!3d-23.485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf5b19a3c9e7e7684!2sQ!Clinic!5e0!3m2!1spt-BR!2sbr!4v1" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: "grayscale(20%) contrast(1.1)" }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Q!Clinic"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="py-32 bg-[#141210] relative overflow-hidden flex items-center justify-center min-h-[70vh]">
      {/* Glow effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-primary/20 blur-[150px] rounded-full opacity-60"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={staggerContainer}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <motion.h2 variants={fadeUp} className="font-serif text-5xl md:text-7xl lg:text-8xl text-white italic font-light mb-6 leading-tight drop-shadow-lg">
            Pronta para viver sua melhor versão?
          </motion.h2>
          
          <motion.p variants={fadeUp} className="text-xl text-white/70 font-light mb-12 max-w-2xl">
            Agende sua avaliação gratuita e descubra o tratamento ideal para você.
          </motion.p>
          
          <motion.a 
            variants={fadeUp}
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noreferrer"
            className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-full text-lg font-medium tracking-wide transition-all shadow-[0_0_30px_rgba(201,169,110,0.3)] hover:shadow-[0_0_50px_rgba(201,169,110,0.5)] transform hover:-translate-y-1"
          >
            Agendar Minha Avaliação
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <span className="font-serif text-3xl text-foreground font-medium tracking-wide block mb-6">
              Q!Clinic
            </span>
            <p className="text-foreground/60 font-light text-sm">
              Sua autoestima merece um cuidado à altura. Clínica premium de estética e bem-estar em Alphaville.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-foreground mb-6 uppercase tracking-wider text-sm">Procedimentos</h4>
            <ul className="space-y-4">
              <li><a href="#procedimentos" className="text-foreground/60 hover:text-primary transition-colors text-sm font-light">Corporal e Facial</a></li>
              <li><a href="#procedimentos" className="text-foreground/60 hover:text-primary transition-colors text-sm font-light">Embelezamento do Olhar</a></li>
              <li><a href="#procedimentos" className="text-foreground/60 hover:text-primary transition-colors text-sm font-light">Dermatologia</a></li>
              <li><a href="#procedimentos" className="text-foreground/60 hover:text-primary transition-colors text-sm font-light">Nutrição</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-foreground mb-6 uppercase tracking-wider text-sm">Contato</h4>
            <ul className="space-y-4 text-sm font-light text-foreground/60">
              <li>(11) 99999-9999</li>
              <li>contato@qclinic.com.br</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-foreground/40 hover:text-primary transition-colors"><SiInstagram size={20} /></a>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" className="text-foreground/40 hover:text-primary transition-colors"><SiWhatsapp size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-foreground mb-6 uppercase tracking-wider text-sm">Endereço</h4>
            <p className="text-foreground/60 font-light text-sm leading-relaxed">
              Praça das Orquídeas, 124<br />
              Alphaville Comercial<br />
              Barueri/SP
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/40 text-xs font-light">
            © 2025 Q!Clinic. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-xs text-foreground/40 font-light">
            <a href="#" className="hover:text-foreground">Políticas de Privacidade</a>
            <a href="#" className="hover:text-foreground">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
