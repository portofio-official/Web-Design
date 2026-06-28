import React, { useState, useRef, useEffect } from 'react';
    import { createRoot } from 'react-dom/client';
    import { createPortal } from 'react-dom';
    // Menambahkan Award untuk ikon Course/Sertifikat, dan Rocket untuk Antigravity
import { Star, User, Instagram, Linkedin, Github, Trophy, LineChart, Sun, Moon, Smartphone, Monitor, Menu, Mail, Download, Palette, ArrowRight, ArrowLeft, MessageCircle, X, Settings, GraduationCap, Calendar, ChevronDown, ChevronRight, ChevronLeft, Briefcase, ExternalLink, Camera, MapPin, Award, Rocket, Wrench, Send, Home, Image, Play, Pause, Lock, Unlock, ZoomIn, ZoomOut, RotateCcw, Database, Code } from 'lucide-react';

import { 
  skillsData, 
  educationData, 
  experienceData, 
  coursesData, 
  projectsData, 
  certificatesData, 
  activitiesData 
} from './data.js';

export const toggleScrollLock = (isLocked) => {
  document.body.style.overflow = isLocked ? 'hidden' : '';
  const mainScroll = document.getElementById('main-scroll-container');
  if (mainScroll) {
    mainScroll.style.overflowY = isLocked ? 'hidden' : 'auto';
  }
};

    // ==========================================
    // 1. KONFIGURASI TEMA & WARNA
    // ==========================================
    const colorSchemes = {
      purple: {
        darkBg: 'bg-[#111126]',
        darkCard: 'bg-[#16172E]',
        darkElement: 'bg-[#1D1E3A]',
        darkElementHover: 'hover:bg-[#282a52]',
        accentTextDark: 'text-[#847BFF]',
        accentTextLight: 'text-[#6366F1]',
        accentBgDark: 'bg-[#9B93FF]',
        accentBgLight: 'bg-[#6366F1]',
        accentHoverDark: 'hover:bg-[#867eff]',
        accentHoverLight: 'hover:bg-[#4f46e5]',
        glow1: 'bg-[#2d1b54]',
        glow2: 'bg-[#392570]',
        glow3: 'bg-[#1e2354]',
        glowLight1: 'bg-purple-200',
        glowLight2: 'bg-indigo-200',
        glowLight3: 'bg-blue-200',
        gradient: 'from-[#9371FF] via-[#7B5CFF] to-[#A084FF]',
      },
      emerald: {
        darkBg: 'bg-[#020617]',
        darkCard: 'bg-[#0f172a]',
        darkElement: 'bg-[#1e293b]',
        darkElementHover: 'hover:bg-[#334155]',
        accentTextDark: 'text-emerald-400',
        accentTextLight: 'text-emerald-600',
        accentBgDark: 'bg-emerald-400',
        accentBgLight: 'bg-emerald-500',
        accentHoverDark: 'hover:bg-emerald-500',
        accentHoverLight: 'hover:bg-emerald-600',
        glow1: 'bg-emerald-900/40',
        glow2: 'bg-teal-900/40',
        glow3: 'bg-slate-800/60',
        glowLight1: 'bg-emerald-200',
        glowLight2: 'bg-teal-200',
        glowLight3: 'bg-green-200',
        gradient: 'from-emerald-400 via-teal-500 to-emerald-300',
      },
      ocean: {
        darkBg: 'bg-[#020617]',
        darkCard: 'bg-[#0f172a]',
        darkElement: 'bg-[#1e293b]',
        darkElementHover: 'hover:bg-[#334155]',
        accentTextDark: 'text-blue-400',
        accentTextLight: 'text-blue-600',
        accentBgDark: 'bg-blue-400',
        accentBgLight: 'bg-blue-500',
        accentHoverDark: 'hover:bg-blue-500',
        accentHoverLight: 'hover:bg-blue-600',
        glow1: 'bg-blue-900/40',
        glow2: 'bg-indigo-900/40',
        glow3: 'bg-sky-900/40',
        glowLight1: 'bg-blue-200',
        glowLight2: 'bg-indigo-200',
        glowLight3: 'bg-sky-200',
        gradient: 'from-blue-400 via-indigo-500 to-sky-400',
      },
      rose: {
        darkBg: 'bg-[#0a0a0a]',
        darkCard: 'bg-[#171717]',
        darkElement: 'bg-[#262626]',
        darkElementHover: 'hover:bg-[#404040]',
        accentTextDark: 'text-rose-400',
        accentTextLight: 'text-rose-600',
        accentBgDark: 'bg-rose-400',
        accentBgLight: 'bg-rose-500',
        accentHoverDark: 'hover:bg-rose-500',
        accentHoverLight: 'hover:bg-rose-600',
        glow1: 'bg-rose-900/40',
        glow2: 'bg-pink-900/40',
        glow3: 'bg-red-900/40',
        glowLight1: 'bg-rose-200',
        glowLight2: 'bg-pink-200',
        glowLight3: 'bg-red-200',
        gradient: 'from-rose-400 via-pink-500 to-rose-300',
      },
      google: {
        darkBg: 'bg-[#0d1117]',
        darkCard: 'bg-[#161b22]',
        darkElement: 'bg-[#21262d]',
        darkElementHover: 'hover:bg-[#30363d]',
        accentTextDark: 'text-[#4285F4]',
        accentTextLight: 'text-[#4285F4]',
        accentBgDark: 'bg-[#4285F4]',
        accentBgLight: 'bg-[#4285F4]',
        accentHoverDark: 'hover:bg-[#5a95f5]',
        accentHoverLight: 'hover:bg-[#3367d6]',
        glow1: 'bg-[#4285F4]/20',
        glow2: 'bg-[#EA4335]/15',
        glow3: 'bg-[#34A853]/15',
        glowLight1: 'bg-blue-200',
        glowLight2: 'bg-red-200',
        glowLight3: 'bg-green-200',
        gradient: 'from-[#4285F4] via-[#EA4335] to-[#FBBC05]',
      }
    };

    const paletteColors = {
      purple: '#847BFF',
      emerald: '#34d399',
      ocean: '#60a5fa',
      rose: '#fb7185',
      google: '#4285F4'
    };


    // ==========================================
    // FUNGSI HELPER UNTUK ACTION BUTTON STANDAR
    // ==========================================
    const renderActionButton = (text, onClick, actualTheme, theme) => {
      const textClass = actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight;
      return React.createElement("button", {
        onClick: onClick,
        className: `inline-flex items-center gap-2 font-bold text-sm hover:underline transition-all ${textClass} py-3 px-4 mt-2 sm:mt-4`
      }, 
        text,
        React.createElement(ArrowRight, { size: 14 })
      );
    };


    // ==========================================
    // FUNGSI HELPER UNTUK ACCENT TEXT (GOOGLE GRADIENT)
    // ==========================================
    const renderAccentSpan = (text, actualTheme, theme, activePalette) => {
      return React.createElement("span", {
        className: actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight
      }, text);
    };

    // ==========================================
    // 2. KOMPONEN NAVBAR
    // ===========================
    const IDCardWidget = ({ actualTheme, theme, isMobileView, activePalette, language }) => {
      const [isFlipped, setIsFlipped] = useState(false);
      const [isCardHovered, setIsCardHovered] = useState(false);
      const activeColor = 
        activePalette === 'purple' ? '#847BFF' :
        activePalette === 'emerald' ? '#34d399' :
        activePalette === 'ocean' ? '#60a5fa' :
        activePalette === 'rose' ? '#fb7185' :
        activePalette === 'google' ? '#4285F4' :
        '#847BFF';

      return (
        React.createElement("div", { 
          className: "relative w-full flex flex-col items-center justify-center pt-0 pb-4 overflow-visible -mt-8" 
        },
          // Aura Glow (Option 1)
          React.createElement("div", {
            className: `absolute top-32 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full blur-[60px] pointer-events-none transition-colors duration-700 z-0 ${actualTheme === 'dark' ? `${theme.glow1} opacity-50 mix-blend-screen` : `${theme.accentBgLight} opacity-20`}`
          }),

          // Floating Tech Particles (Option 3)
          React.createElement("div", { className: `absolute top-16 left-6 z-10 opacity-50 animate-float-1 pointer-events-none ${actualTheme === 'dark' ? 'text-zinc-500' : 'text-slate-300'}` },
            React.createElement(Database, { size: 16 })
          ),
          React.createElement("div", { className: `absolute top-36 right-8 z-10 opacity-40 animate-float-3 pointer-events-none ${actualTheme === 'dark' ? 'text-zinc-600' : 'text-slate-300'}` },
            React.createElement(Code, { size: 14 })
          ),
          React.createElement("div", { className: `absolute top-44 left-8 z-10 opacity-50 animate-float-2 pointer-events-none ${actualTheme === 'dark' ? 'text-zinc-500' : 'text-slate-300'}` },
            React.createElement(LineChart, { size: 15 })
          ),
          
          React.createElement("div", { 
              className: "relative flex flex-col items-center cursor-pointer origin-top z-10",
              onClick: () => setIsFlipped(!isFlipped),
              onMouseEnter: () => setIsCardHovered(true),
              onMouseLeave: () => setIsCardHovered(false)
            },
            React.createElement("div", { 
                className: "relative flex flex-col items-center animate-swing origin-top w-full"
              },
              React.createElement("div", {
                className: "relative w-3 h-12 flex flex-col items-center justify-start overflow-hidden rounded-b-sm bg-slate-200 border-x border-slate-300 shadow-sm"
              },
                // Light texture stitching
                React.createElement("div", { className: "absolute inset-y-0 left-[0.5px] right-[0.5px] border-l border-r border-dotted border-slate-400 opacity-40" }),
                // Center colorful theme strip
                React.createElement("div", {
                  className: `w-[2px] h-full bg-gradient-to-b ${
                    activePalette === 'purple' ? 'from-purple-300 via-purple-400 to-indigo-400' :
                    activePalette === 'emerald' ? 'from-emerald-300 via-emerald-400 to-teal-400' :
                    activePalette === 'ocean' ? 'from-blue-300 via-blue-400 to-indigo-400' :
                    activePalette === 'rose' ? 'from-rose-300 via-rose-400 to-pink-400' :
                    activePalette === 'google' ? 'from-[#4285F4] via-[#EA4335] to-[#FBBC05]' :
                    'from-slate-400 to-slate-500'
                  }`,
                  style: { WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 25%)', maskImage: 'linear-gradient(to bottom, transparent, black 25%)' }
                })
              ),
              // Matte Black/Plastic Quick-release Buckle
              React.createElement("div", { 
                className: "bg-zinc-800 rounded-sm z-10 -mt-1 w-3.5 h-3.5 shadow-sm border border-zinc-700/50 flex flex-col items-center justify-between py-[1.5px]"
              },
                React.createElement("div", { className: "w-2.5 h-[1px] bg-zinc-700" }),
                React.createElement("div", { className: "w-2 h-[1px] bg-zinc-900" })
              ),
              // Matte Black plastic hook attachment
              React.createElement("div", { 
                className: "bg-zinc-800 rounded-[1px] z-10 shadow-sm -mt-0.5 w-1.5 h-2.5 border border-zinc-700"
              }),
              
              React.createElement("div", { 
                  className: "mt-[-4px] relative group perspective-[1000px] w-[140px] h-[200px]" 
                },
                React.createElement("div", {
                     className: "w-full h-full relative transition-transform duration-[800ms]",
                     style: { transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }
                  },
                  
                  // FRONT FACE (Matte White Clean Tech Badge)
                  React.createElement("div", { 
                      className: `absolute inset-0 flex flex-col overflow-hidden shadow-xl rounded-[16px] border transition-all duration-500 ${
                        actualTheme === 'dark' 
                          ? 'bg-zinc-900 border-white/10 shadow-black/40' 
                          : 'bg-white border-slate-200 shadow-slate-300/20'
                      }`,
                      style: { 
                        backfaceVisibility: 'hidden', 
                        WebkitBackfaceVisibility: 'hidden',
                        boxShadow: isCardHovered
                          ? (actualTheme === 'dark' ? '0 12px 25px -8px rgba(0,0,0,0.6)' : '0 12px 20px -8px rgba(0,0,0,0.15)')
                          : undefined
                      }
                    },
                    React.createElement("div", { className: `absolute left-1/2 -translate-x-1/2 rounded-full z-20 shadow-inner top-2.5 w-6 h-1.5 ${actualTheme === 'dark' ? 'bg-zinc-950' : 'bg-slate-100'}` }),
                    React.createElement("div", { className: "absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20" }),
                    
                    // Photo Container
                    React.createElement("div", { className: `flex-1 overflow-hidden relative rounded-lg mt-9 mx-2.5 mb-4 ${actualTheme === 'dark' ? 'bg-zinc-950 border border-zinc-850' : 'bg-slate-50 border border-slate-100'}` },
                      React.createElement("img", {
                        src: "001. Aset Hero Section/Photo Lanyard.PNG",
                        alt: "Achmad Noorman Setiawan",
                        className: "w-full h-full object-cover object-[56%_18.3%] scale-[3.75] origin-[56%_18.3%]",
                        style: { filter: 'contrast(1.02) saturate(1.02)' },
                        onError: (e) => { e.target.src = 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800'; }
                      }),
                      React.createElement("div", { className: "absolute inset-0 shadow-[inset_0_0_6px_rgba(0,0,0,0.2)] pointer-events-none" })
                    ),
                    
                    // Bottom color bar accent
                    React.createElement("div", { 
                      className: `absolute bottom-0 inset-x-0 h-[3px] bg-gradient-to-r ${
                        activePalette === 'purple' ? 'from-purple-400 to-indigo-500' :
                        activePalette === 'emerald' ? 'from-emerald-400 to-teal-500' :
                        activePalette === 'ocean' ? 'from-blue-400 to-indigo-500' :
                        activePalette === 'rose' ? 'from-rose-400 to-pink-500' :
                        activePalette === 'google' ? 'from-[#4285F4] via-[#EA4335] to-[#FBBC05]' :
                        'from-slate-400 to-slate-500'
                      }`
                    })
                  ),
 
                  // BACK FACE (Matte White Clean Tech Badge - Back)
                  React.createElement("div", { 
                      className: `absolute inset-0 flex flex-col overflow-hidden items-center justify-center shadow-xl rounded-[16px] border transition-all duration-500 ${
                        actualTheme === 'dark' 
                          ? 'bg-zinc-900 border-white/10 shadow-black/40' 
                          : 'bg-white border-slate-200 shadow-slate-300/20'
                      }`,
                      style: { 
                        backfaceVisibility: 'hidden', 
                        WebkitBackfaceVisibility: 'hidden', 
                        transform: 'rotateY(180deg)'
                      }
                    },
                    React.createElement("div", { className: `absolute left-1/2 -translate-x-1/2 rounded-full z-20 shadow-inner top-2.5 w-6 h-1.5 ${actualTheme === 'dark' ? 'bg-zinc-950' : 'bg-slate-100'}` }),
                    
                    // Google G Logo (Original big watermark style)
                    React.createElement("div", { className: "absolute inset-0 overflow-hidden rounded-xl z-0 opacity-[0.08] pointer-events-none flex items-center justify-center p-2" },
                      React.createElement("svg", {
                        viewBox: "0 0 24 24",
                        className: "w-[120%] h-auto max-w-[150px] object-contain translate-x-[2.5%] -translate-y-[2%]",
                        fill: "none"
                      },
                        React.createElement("path", { d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z", fill: "#4285F4" }),
                        React.createElement("path", { d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z", fill: "#34A853" }),
                        React.createElement("path", { d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z", fill: "#FBBC05" }),
                        React.createElement("path", { d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z", fill: "#EA4335" })
                      )
                    ),
                    React.createElement("div", { className: "absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/20 pointer-events-none rounded-xl" }),
                    
                    // Bottom color bar accent (back side)
                    React.createElement("div", { 
                      className: `absolute bottom-0 inset-x-0 h-[3px] bg-gradient-to-r ${
                        activePalette === 'purple' ? 'from-purple-400 to-indigo-500' :
                        activePalette === 'emerald' ? 'from-emerald-400 to-teal-500' :
                        activePalette === 'ocean' ? 'from-blue-400 to-indigo-500' :
                        activePalette === 'rose' ? 'from-rose-400 to-pink-500' :
                        activePalette === 'google' ? 'from-[#4285F4] via-[#EA4335] to-[#FBBC05]' :
                        'from-slate-400 to-slate-500'
                      }`
                    })
                  )
                )
              )
            )
          )
        )
      );
    };

    const Sidebar = ({ actualTheme, theme, isMobileView, toggleTheme, activePalette, setActivePalette, activeSection, setActiveSection, setActiveResumeTab, language }) => {
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
      const [showColorPicker, setShowColorPicker] = useState(false);
      const mobileMenuRef = useRef(null);
      const colorPickerRef = useRef(null);
      const isCreatorMode = typeof window !== 'undefined' ? (window.location.pathname.startsWith('/demo') || new URLSearchParams(window.location.search).get('demo') === 'true') : false;

      useEffect(() => {
        const handleClickOutside = (event) => {
          if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
            setIsMobileMenuOpen(false);
          }
          if (colorPickerRef.current && !colorPickerRef.current.contains(event.target)) {
            setShowColorPicker(false);
          }
        };
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
          document.removeEventListener('touchstart', handleClickOutside);
        };
      }, []);

      useEffect(() => {
        if (isMobileMenuOpen) {
          toggleScrollLock(true);
        } else {
          toggleScrollLock(false);
        }
        return () => {
          toggleScrollLock(false);
        };
      }, [isMobileMenuOpen]);

      useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.key === 'Escape' && isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
          }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
      }, [isMobileMenuOpen]);

      const handleNavClick = (e, item) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        if (setActiveSection) setActiveSection(item);
        const targetId = item.toLowerCase();
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };

      const navLinks = ['Projects'];

      const renderSidebarContent = () => {
        return React.createElement("div", { className: "flex flex-col h-full justify-start w-full" },
          React.createElement("div", { className: "flex flex-col gap-5 items-center w-full" },
            // 1. ID Card Widget at the Top
            React.createElement(IDCardWidget, {
              actualTheme: actualTheme,
              theme: theme,
              isMobileView: false,
              activePalette: activePalette,
              language: language
            }),

            // 2. Personal Brand / Name
            React.createElement("div", { className: "text-center flex flex-col gap-1 w-full" },
              React.createElement("h2", { className: `text-xl font-bold tracking-tight ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'}` },
                "Achmad Noorman Setiawan"
              ),
              React.createElement("div", { className: "text-[13px] font-semibold tracking-wide flex items-center justify-center gap-1.5 mt-1" }, 
                renderAccentSpan("Data Analyst", actualTheme, theme, activePalette),
                React.createElement("span", { className: `w-1 h-1 rounded-full ${actualTheme === 'dark' ? 'bg-white/20' : 'bg-slate-300'}` }),
                React.createElement("span", { className: `font-medium flex items-center gap-1 ${actualTheme === 'dark' ? 'text-zinc-400' : 'text-slate-500'}` }, 
                  React.createElement(MapPin, { size: 12, className: "shrink-0" }),
                  "Jakarta, Indonesia"
                )
              ),
              React.createElement("p", { className: `text-xs leading-relaxed mt-2 px-3.5 ${actualTheme === 'dark' ? 'text-zinc-400' : 'text-slate-500'}` },
                language === 'ID' 
                  ? "Berpengalaman dalam merancang dan membangun otomatisasi pengolahan data bisnis dan individu untuk mempercepat pengambilan keputusan strategis."
                  : "Experienced in designing and building business and individual data processing automation to accelerate strategic decision-making."
              ),

              // Skills Pills (Marquee Effect)
              React.createElement("div", { className: "overflow-hidden w-full mt-2.5 relative group" },
                // Add a fading mask on edges to make it look smooth
                React.createElement("div", { className: `absolute inset-y-0 left-0 w-6 z-10 pointer-events-none bg-gradient-to-r ${actualTheme === 'dark' ? 'from-[#0B0C10] to-transparent' : 'from-white to-transparent'}` }),
                React.createElement("div", { className: `absolute inset-y-0 right-0 w-6 z-10 pointer-events-none bg-gradient-to-l ${actualTheme === 'dark' ? 'from-[#0B0C10] to-transparent' : 'from-white to-transparent'}` }),

                React.createElement("div", { className: "flex flex-row w-max animate-marquee gap-1.5 px-1.5" },
                  // First Set
                  React.createElement("div", { className: `px-2.5 py-1 text-[9px] font-bold tracking-wide flex items-center gap-1.5 ${actualTheme === 'dark' ? 'text-zinc-400' : 'text-slate-600'}` },
                    React.createElement("img", { src: "002. Aset Software & Tools/Data Studio.png", alt: "Data Studio", className: "h-3.5 w-3.5 object-contain" }),
                    "Data Studio"
                  ),
                  React.createElement("div", { className: `px-2.5 py-1 text-[9px] font-bold tracking-wide flex items-center gap-1.5 ${actualTheme === 'dark' ? 'text-zinc-400' : 'text-slate-600'}` },
                    React.createElement("img", { src: "002. Aset Software & Tools/Google Sheets.png", alt: "Google Sheet", className: "h-3.5 w-3.5 object-contain" }),
                    "Google Sheet"
                  ),
                  React.createElement("div", { className: `px-2.5 py-1 text-[9px] font-bold tracking-wide flex items-center gap-1.5 ${actualTheme === 'dark' ? 'text-zinc-400' : 'text-slate-600'}` },
                    React.createElement("img", { src: "002. Aset Software & Tools/Apps Script.png", alt: "Apps Script", className: "h-3.5 w-3.5 object-contain" }),
                    "Apps Script"
                  ),
                  React.createElement("div", { className: `px-2.5 py-1 text-[9px] font-bold tracking-wide flex items-center gap-1.5 ${actualTheme === 'dark' ? 'text-zinc-400' : 'text-slate-600'}` },
                    React.createElement("img", { src: "001. Aset Hero Section/Logo Antigravity.png", alt: "Antigravity", className: "h-3.5 w-3.5 object-contain" }),
                    "Antigravity"
                  ),
                  // Second Set (Duplicate for seamless loop)
                  React.createElement("div", { className: `px-2.5 py-1 text-[9px] font-bold tracking-wide flex items-center gap-1.5 ${actualTheme === 'dark' ? 'text-zinc-400' : 'text-slate-600'}` },
                    React.createElement("img", { src: "002. Aset Software & Tools/Data Studio.png", alt: "Data Studio", className: "h-3.5 w-3.5 object-contain" }),
                    "Data Studio"
                  ),
                  React.createElement("div", { className: `px-2.5 py-1 text-[9px] font-bold tracking-wide flex items-center gap-1.5 ${actualTheme === 'dark' ? 'text-zinc-400' : 'text-slate-600'}` },
                    React.createElement("img", { src: "002. Aset Software & Tools/Google Sheets.png", alt: "Google Sheet", className: "h-3.5 w-3.5 object-contain" }),
                    "Google Sheet"
                  ),
                  React.createElement("div", { className: `px-2.5 py-1 text-[9px] font-bold tracking-wide flex items-center gap-1.5 ${actualTheme === 'dark' ? 'text-zinc-400' : 'text-slate-600'}` },
                    React.createElement("img", { src: "002. Aset Software & Tools/Apps Script.png", alt: "Apps Script", className: "h-3.5 w-3.5 object-contain" }),
                    "Apps Script"
                  ),
                  React.createElement("div", { className: `px-2.5 py-1 text-[9px] font-bold tracking-wide flex items-center gap-1.5 ${actualTheme === 'dark' ? 'text-zinc-400' : 'text-slate-600'}` },
                    React.createElement("img", { src: "001. Aset Hero Section/Logo Antigravity.png", alt: "Antigravity", className: "h-3.5 w-3.5 object-contain" }),
                    "Antigravity"
                  )
                )
              ),

              // 3 Stats Items (Horizontal layout matching the mockup, positioned above the divider line)
              React.createElement("div", { className: "flex items-center w-full mt-3.5 px-1" },
                // Box 1: Experience
                React.createElement("div", { className: "flex-1 flex items-center justify-center gap-1.5 -translate-x-2" },
                  React.createElement("h4", { className: `font-bold text-xl sm:text-2xl leading-none ${actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight}` }, "3"),
                  React.createElement("span", { className: `text-[7px] font-extrabold uppercase tracking-wider leading-tight text-left ${actualTheme === 'dark' ? 'text-zinc-400' : 'text-slate-500'}` }, language === 'ID' ? "Tahun" : "Years", React.createElement("br", null), language === 'ID' ? "Pengalaman" : "Experience")
                ),
                // Divider 1
                React.createElement("div", { className: `w-[1px] h-6 ${actualTheme === 'dark' ? 'bg-white/10' : 'bg-slate-200'}` }),
                // Box 2: Projects
                React.createElement("div", { className: "flex-1 flex items-center justify-center gap-1.5" },
                  React.createElement("h4", { className: `font-bold text-xl sm:text-2xl leading-none ${actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight}` }, `${projectsData.length}`),
                  React.createElement("span", { className: `text-[7px] font-extrabold uppercase tracking-wider leading-tight text-left ${actualTheme === 'dark' ? 'text-zinc-400' : 'text-slate-500'}` }, language === 'ID' ? "Proyek" : "Projects", React.createElement("br", null), language === 'ID' ? "Selesai" : "Completed")
                ),
                // Divider 2
                React.createElement("div", { className: `w-[1px] h-6 ${actualTheme === 'dark' ? 'bg-white/10' : 'bg-slate-200'}` }),
                // Box 3: Certificates
                React.createElement("div", { className: "flex-1 flex items-center justify-center gap-1.5 translate-x-2" },
                  React.createElement("h4", { className: `font-bold text-xl sm:text-2xl leading-none ${actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight}` }, `${coursesData.length}`),
                  React.createElement("span", { className: `text-[7px] font-extrabold uppercase tracking-wider leading-tight text-left ${actualTheme === 'dark' ? 'text-zinc-400' : 'text-slate-500'}` }, language === 'ID' ? "Sertifikat" : "Skills", React.createElement("br", null), language === 'ID' ? "Keahlian" : "Certificates")
                )
              ),

              // Divider line above Download CV
              React.createElement("div", { className: `w-full h-[1px] mt-3.5 ${
                actualTheme === 'dark' ? 'bg-white/5' : 'bg-slate-200/60'
              }` }),

              // Download CV Button (Full width button positioned under stats boxes)
              React.createElement("a", { 
                href: "#", 
                className: `w-full font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all text-xs shadow-sm mt-2.5 ${
                  actualTheme === 'dark' 
                    ? `${theme.accentBgDark} ${theme.accentHoverDark} text-white` 
                    : `${theme.accentBgLight} ${theme.accentHoverLight} text-white`
                }` 
              },
                React.createElement(Download, { size: 14 }),
                "Download CV"
              ),

              // Divider Line above Contact section
              React.createElement("div", { className: `w-full h-[1px] mt-2.5 ${
                actualTheme === 'dark' ? 'bg-white/5' : 'bg-slate-200/60'
              }` })
            ),

            // Let's Connect Section
            React.createElement("div", { className: "flex flex-col items-center gap-3 mt-0.5 w-full px-3.5" },
              // Title
              React.createElement("h3", { className: `text-center text-[10px] font-bold uppercase tracking-widest ${
                actualTheme === 'dark' ? 'text-zinc-500' : 'text-slate-400'
              }` }, "Let's Connect"),
              
              // Socials (Gmail, Linkedin, Whatsapp) horizontally aligned
              React.createElement("div", { className: "flex flex-row justify-center gap-3 items-center" },
                // Gmail
                React.createElement("a", { 
                  href: "https://mail.google.com/mail/?view=cm&fs=1&to=achmadnoormansetiawan@gmail.com", 
                  target: "_blank", 
                  rel: "noreferrer", 
                  title: "Email", 
                  className: "transition-all hover:-translate-y-1 group"
                },
                  React.createElement("div", { className: `w-12 h-8 rounded-xl flex items-center justify-center shadow-sm transition-all group-hover:scale-110 ${
                    actualTheme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-slate-50 border border-slate-200'
                  }` },
                    React.createElement("img", {
                      src: "009. Let's Connect/Gmail.png",
                      alt: "Gmail",
                      className: "w-[16px] h-[16px] object-contain pointer-events-none"
                    })
                  )
                ),
                // LinkedIn
                React.createElement("a", { 
                  href: "https://www.linkedin.com/in/achmadnoorman/", 
                  target: "_blank", 
                  rel: "noreferrer", 
                  title: "LinkedIn", 
                  className: "transition-all hover:-translate-y-1 group"
                },
                  React.createElement("div", { className: `w-12 h-8 rounded-xl flex items-center justify-center shadow-sm transition-all group-hover:scale-110 ${
                    actualTheme === 'dark' ? 'bg-[#0077B5]/10 border border-[#0077B5]/20' : 'bg-[#0077B5]/10 border border-[#0077B5]/20'
                  }` },
                    React.createElement("svg", {
                      viewBox: "0 0 448 512",
                      className: "w-[14px] h-[14px] fill-[#0077B5]"
                    }, 
                      React.createElement("path", { d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" })
                    )
                  )
                ),
                // WhatsApp
                React.createElement("a", { 
                  href: "https://wa.me/6281230607050", 
                  target: "_blank", 
                  rel: "noreferrer", 
                  title: "WhatsApp", 
                  className: "transition-all hover:-translate-y-1 group"
                },
                  React.createElement("div", { className: `w-12 h-8 rounded-xl flex items-center justify-center shadow-sm transition-all group-hover:scale-110 ${
                    actualTheme === 'dark' ? 'bg-[#25D366]/10 border border-[#25D366]/20' : 'bg-[#25D366]/10 border border-[#25D366]/20'
                  }` },
                    React.createElement("svg", {
                      viewBox: "0 0 448 512",
                      className: "w-[16px] h-[16px] fill-[#25D366]"
                    }, 
                      React.createElement("path", { d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" })
                    )
                  )
                )
              )
            ),

            // Divider Line below Contact section
            React.createElement("div", { className: `w-full h-[1px] mt-0.5 ${
              actualTheme === 'dark' ? 'bg-white/5' : 'bg-slate-200/60'
            }` }),

            // 3. Navigation Links removed (using top floating glass navbar instead)
            null
          ),

          // Copyright Text (Centered vertically in remaining space)
          React.createElement("div", { className: "w-full flex justify-center mt-[22px] mb-2" },
            React.createElement("div", { className: `text-center text-[10px] font-medium tracking-wider capitalize ${
              actualTheme === 'dark' ? 'text-zinc-500' : 'text-slate-400'
            }` },
              "© 2026 achmad noorman setiawan"
            )
          )
        );
      };

      if (!isMobileView) {
        // Desktop Sidebar layout wrapper (static fixed)
        return React.createElement("aside", { 
          className: `fixed left-6 top-8 bottom-6 w-80 z-30 flex flex-col justify-between border rounded-3xl shadow-md select-none py-8 px-6 transition-colors duration-500 overflow-y-auto hide-scrollbar ${
            actualTheme === 'dark' ? `${theme.darkCard} border-white/5` : 'bg-white border-slate-200'
          }` 
        },
          renderSidebarContent()
        );
      }

      // Mobile Layout (Sticky Top Header Bar + Drawer Menu)
      return React.createElement("div", { className: "w-full" },
        // Top Header Bar
        React.createElement("header", { 
          className: `fixed top-0 left-0 right-0 h-16 z-40 flex items-center justify-between px-6 border-b transition-colors duration-300 backdrop-blur-md ${
            actualTheme === 'dark' 
              ? `${theme.darkBg.replace('bg-', 'bg-').replace(']', ']/80')} border-white/5` 
              : 'bg-slate-50/80 border-slate-200/50'
          }` 
        },
          React.createElement("button", {
            onClick: () => setIsMobileMenuOpen(true),
            className: `w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
              actualTheme === 'dark' ? `${theme.darkElement} text-gray-300` : 'bg-slate-200 text-slate-700'
            }`
          }, React.createElement(Menu, { size: 18 })),

          React.createElement("div", { className: "text-lg font-bold tracking-wide" },
            React.createElement("span", { className: actualTheme === 'dark' ? 'text-white' : 'text-slate-900' }, "Achmad "),
            renderAccentSpan("Noorman", actualTheme, theme, activePalette)
          ),

          // Theme Toggle & Color Palette Picker on Mobile Header Bar
          React.createElement("div", { className: "flex items-center gap-3" },
            // Theme Toggle
            React.createElement("button", {
              onClick: () => toggleTheme(),
              title: actualTheme === 'dark' ? 'Light Mode' : 'Dark Mode',
              className: `w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                actualTheme === 'dark' 
                  ? `${theme.darkElement} ${theme.darkElementHover} text-gray-300` 
                  : 'bg-slate-200 hover:bg-slate-300 text-slate-700'
              }`
            }, actualTheme === 'dark' ? React.createElement(Sun, { size: 14 }) : React.createElement(Moon, { size: 14 })),

            // Color Palette Picker
            isCreatorMode && React.createElement("div", { className: "relative", ref: colorPickerRef },
              React.createElement("button", {
                onClick: () => setShowColorPicker(!showColorPicker),
                title: `Theme Color: ${activePalette}`,
                className: `w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ring-2 ring-offset-2 ${
                  actualTheme === 'dark' ? 'ring-slate-700' : 'ring-slate-200'
                }`,
                style: activePalette === 'google' 
                  ? { background: 'conic-gradient(#4285F4 0deg 90deg, #EA4335 90deg 180deg, #FBBC05 180deg 270deg, #34A853 270deg 360deg)' }
                  : { backgroundColor: paletteColors[activePalette] }
              }),
              
              showColorPicker && React.createElement("div", {
                className: `absolute top-full mt-2 right-0 p-2 rounded-xl shadow-xl flex gap-1.5 z-50 border transition-all ${
                  actualTheme === 'dark' ? `${theme.darkCard} border-white/10` : 'bg-white border-slate-200'
                }`
              },
                Object.keys(colorSchemes).map(key => (
                  React.createElement("button", {
                    key: key,
                    onClick: () => {
                      setActivePalette(key);
                      setShowColorPicker(false);
                    },
                    className: `w-5 h-5 rounded-full transition-transform hover:scale-110 ${activePalette === key ? 'ring-2 ring-offset-1 ring-gray-400' : 'opacity-70'}`,
                    style: key === 'google' 
                      ? { background: 'conic-gradient(#4285F4 0deg 90deg, #EA4335 90deg 180deg, #FBBC05 180deg 270deg, #34A853 270deg 360deg)' }
                      : { backgroundColor: paletteColors[key] }
                  })
                ))
              )
            )
          )
        ),

        // Backdrop Overlay when drawer is open
        React.createElement("div", {
          className: `fixed inset-0 h-[100vh] bg-black/60 backdrop-blur-sm z-40 transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`,
          onClick: () => setIsMobileMenuOpen(false)
        }),

        // Drawer Sidebar (Slides in from left)
        React.createElement("div", {
          ref: mobileMenuRef,
          className: `fixed top-0 left-0 bottom-0 w-[280px] h-[100vh] z-50 transform transition-transform duration-300 ease-out shadow-2xl flex flex-col py-6 px-5 overflow-y-auto hide-scrollbar ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } ${actualTheme === 'dark' ? `${theme.darkCard} border-r border-white/10` : 'bg-white border-r border-slate-200'}`
        },
          // Header drawer close button
          React.createElement("div", { className: "flex justify-end w-full mb-3 shrink-0" },
            React.createElement("button", {
              onClick: () => setIsMobileMenuOpen(false),
              className: `w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                actualTheme === 'dark' ? 'hover:bg-white/10 text-gray-300' : 'hover:bg-slate-100 text-slate-500'
              }`
            }, React.createElement(X, { size: 18 }))
          ),
          // Content inside drawer
          renderSidebarContent()
        )
      );
    };

    // ==========================================
    // 3. KOMPONEN HERO SECTION
    // ==========================================
    
    const HeroSection = ({ actualTheme, theme, isMobileView, activePalette }) => {
      return (
        React.createElement("main", { className: `scroll-mt-24 grid items-center w-full ${isMobileView ? 'mt-0 grid-cols-1 gap-6 pb-12' : 'mt-0 min-h-[calc(100vh-120px)] grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16'}` },
          React.createElement("div", { className: `relative z-10 flex flex-col justify-center ${isMobileView ? 'order-last space-y-4' : 'order-last lg:order-first space-y-6 max-w-xl'}` },
            // Location info hidden
            null,
            React.createElement("div", { className: "space-y-2 sm:space-y-3 w-full overflow-visible" },
              React.createElement("h1", { className: `font-bold tracking-tight leading-[1.1] ${isMobileView ? 'text-3xl' : 'text-5xl lg:text-6xl'} ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'}` }, "Achmad Noorman Setiawan"),
              React.createElement("div", { className: `flex items-center gap-2 sm:gap-2.5 flex-wrap ${isMobileView ? 'text-lg sm:text-xl' : 'text-2xl lg:text-3xl'}` },
                React.createElement("h2", { className: `font-bold leading-normal ${actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight}` }, "Data Analyst"),
                React.createElement("span", { className: `w-1 h-1 rounded-full ${actualTheme === 'dark' ? 'bg-white/20' : 'bg-slate-300'}` }),
                React.createElement("span", { className: `font-semibold flex items-center gap-1.5 ${actualTheme === 'dark' ? 'text-zinc-400' : 'text-slate-500'}` }, 
                  React.createElement(MapPin, { size: isMobileView ? 16 : 20, className: "shrink-0" }),
                  "Jakarta, Indonesia"
                )
              )
            ),
            React.createElement("p", { className: `leading-relaxed ${isMobileView ? 'text-sm mt-0' : 'text-base'} ${actualTheme === 'dark' ? 'text-gray-400' : 'text-slate-600'}` },
              "Berpengalaman dalam merancang dan membangun otomatisasi pengolahan data bisnis dan individu untuk mempercepat pengambilan keputusan strategis."
            ),
            React.createElement("div", { className: `flex items-center flex-wrap gap-4 pt-4` },
              React.createElement("a", { href: "#", className: `font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors ${actualTheme === 'dark' ? `${theme.accentBgDark} ${theme.accentHoverDark} text-white` : `${theme.accentBgLight} ${theme.accentHoverLight} text-white`} ${isMobileView ? 'px-4 py-2.5 text-[13px]' : 'px-6 py-3 text-sm'}` },
                React.createElement(Download, { size: isMobileView ? 16 : 18 }),
                "Download CV"
              ),
              React.createElement("div", { className: `flex items-center gap-3` },
                React.createElement("a", { href: "https://wa.me/6281230607050", target: "_blank", rel: "noreferrer", title: "WhatsApp", className: `rounded-full flex items-center justify-center transition-colors ${isMobileView ? 'w-9 h-9' : 'w-11 h-11'} ${actualTheme === 'dark' ? `${theme.darkElement} ${theme.darkElementHover} text-gray-400 hover:text-white` : 'bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm'}` },
                  React.createElement("svg", { width: isMobileView ? "16" : "18", height: isMobileView ? "16" : "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                    React.createElement("path", { d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" })
                  )
                ),
                React.createElement("a", { href: "https://mail.google.com/mail/?view=cm&fs=1&to=achmadnoormansetiawan@gmail.com", target: "_blank", rel: "noreferrer", title: "Email", className: `rounded-full flex items-center justify-center transition-colors ${isMobileView ? 'w-9 h-9' : 'w-11 h-11'} ${actualTheme === 'dark' ? `${theme.darkElement} ${theme.darkElementHover} text-gray-400 hover:text-white` : 'bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm'}` },
                  React.createElement(Mail, { size: isMobileView ? 16 : 18 })
                ),
                React.createElement("a", { href: "https://www.linkedin.com/in/achmadnoorman/", target: "_blank", rel: "noreferrer", title: "LinkedIn", className: `rounded-full flex items-center justify-center transition-colors ${isMobileView ? 'w-9 h-9' : 'w-11 h-11'} ${actualTheme === 'dark' ? `${theme.darkElement} ${theme.darkElementHover} text-gray-400 hover:text-white` : 'bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm'}` },
                  React.createElement(Linkedin, { size: isMobileView ? 16 : 18 })
                )
              )
            )
          ),
          React.createElement("div", { className: `relative w-full flex justify-center items-center ${isMobileView ? 'hidden' : 'order-first lg:order-last min-h-[400px]'}` },
            React.createElement("div", { className: "relative w-72 h-72 flex items-center justify-center" },
              React.createElement("div", { className: `absolute w-48 h-48 rounded-full blur-3xl opacity-35 transition-colors duration-500 ${actualTheme === 'dark' ? theme.glow1 : 'bg-slate-200/50'}` }),
              React.createElement("div", { className: "absolute top-4 left-4 w-16 h-16 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-slate-200/20 dark:border-white/10 shadow-lg flex items-center justify-center animate-float-1 hover:scale-110 transition-transform duration-300 cursor-pointer", title: "Antigravity" },
                React.createElement("img", { src: "001. Aset Hero Section/Logo Antigravity.webp", className: "w-10 h-10 object-contain" })
              ),
              React.createElement("div", { className: "absolute top-20 right-4 w-20 h-20 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-slate-200/20 dark:border-white/10 shadow-lg flex items-center justify-center animate-float-2 hover:scale-110 transition-transform duration-300 cursor-pointer", title: "Gemini" },
                React.createElement("img", { src: "002. Aset Software & Tools/Google Gemini.webp", className: "w-14 h-14 object-contain" })
              ),
              React.createElement("div", { className: "absolute bottom-4 left-10 w-22 h-22 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-slate-200/20 dark:border-white/10 shadow-lg flex items-center justify-center animate-float-3 hover:scale-110 transition-transform duration-300 cursor-pointer", title: "Google Developer" },
                React.createElement("img", { src: "002. Aset Software & Tools/Google Developers.svg", className: "w-16 h-16 object-contain" })
              )
            )
          )
        )
      );
    };

    // ==========================================
    const AboutSection = ({ actualTheme, theme, isMobileView, activePalette }) => {
      const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
      const [isHovered, setIsHovered] = useState(false);
      const cardRef = useRef(null);

      const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePos({ x, y });
      };

      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      };

      const cardTransform = isHovered
        ? `perspective(1000px) rotateY(${mousePos.x * 25}deg) rotateX(${-mousePos.y * 25}deg) scale3d(1.02, 1.02, 1.02)`
        : 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';

      return (
        React.createElement("section", { className: `scroll-mt-[72px] w-full py-12 lg:py-16` },
          React.createElement("div", { className: `w-full max-w-6xl mx-auto px-6 grid items-center relative z-10 ${isMobileView ? 'grid-cols-1 gap-12' : 'grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24'}` },
          React.createElement("div", { className: `relative flex justify-center w-full ${isMobileView ? 'order-first' : ''}` },
            React.createElement("div", { className: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[3rem] filter blur-[60px] opacity-40 transition-colors duration-500 z-0 ${isMobileView ? 'w-[280px] h-[350px]' : 'w-[320px] h-[400px]'} ${actualTheme === 'dark' ? theme.accentBgDark : theme.accentBgLight}` }),
            React.createElement("div", {
              ref: cardRef,
              onMouseMove: handleMouseMove,
              onMouseEnter: handleMouseEnter,
              onMouseLeave: handleMouseLeave,
              className: `relative z-10 flex flex-col items-center overflow-hidden shadow-2xl rounded-[2rem] cursor-pointer ${isMobileView ? 'w-[310px] h-[440px]' : 'w-[360px] h-[520px]'} ${actualTheme === 'dark' ? `${theme.darkCard}` : 'bg-slate-900 shadow-slate-900/50'}`,
              style: {
                transform: cardTransform,
                transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out, background-color 0.5s',
              }
            },
              React.createElement("div", {
                className: "absolute inset-0 opacity-[0.15] pointer-events-none overflow-hidden",
                style: {
                  transform: isHovered ? `translateX(${mousePos.x * -30}px) translateY(${mousePos.y * -30}px)` : 'translateX(0px) translateY(0px)',
                  transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
                }
              },
                React.createElement(LineChart, { className: `absolute top-12 left-4 w-16 h-16 -rotate-12 ${actualTheme === 'dark' ? theme.accentTextDark : 'text-slate-400'}` }),
                React.createElement(Monitor, { className: "absolute top-32 -right-6 w-24 h-24 rotate-12 text-white" }),
                React.createElement(Smartphone, { className: "absolute bottom-32 -left-4 w-20 h-20 -rotate-12 text-white" }),
                React.createElement("div", { className: `absolute top-24 right-10 text-6xl font-bold ${actualTheme === 'dark' ? theme.accentTextDark : 'text-slate-400'}` }, "<>"),
                React.createElement("div", { className: "absolute top-6 right-6 text-8xl font-black opacity-30 text-white" }, "G")
              ),
              React.createElement("div", {
                className: "absolute inset-0 w-full h-full z-10 pointer-events-none flex justify-center items-end overflow-hidden rounded-[2rem]"
              },
                React.createElement("img", {
                  src: "003. Aset About Us/Photo 1.PNG",
                  alt: "Achmad Noorman Setiawan",
                  className: "w-full h-full object-cover object-[50%_5%]",
                  style: {
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
                    filter: 'contrast(1.1) saturate(1.1)',
                    transform: isHovered 
                      ? `scale(2) translateX(calc(${mousePos.x * 15}px + ${isMobileView ? 4 : 8}px)) translateY(calc(${mousePos.y * 15}px + ${isMobileView ? 68 : 75}px))` 
                      : `scale(2) translateX(${isMobileView ? 4 : 8}px) translateY(${isMobileView ? 68 : 75}px)`,
                    transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
                  },
                  onError: (e) => { e.target.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=800'; }
                })
              ),
              React.createElement("div", { className: `absolute bottom-5 left-1/2 -translate-x-1/2 w-[calc(100%-2.5rem)] p-3 rounded-2xl flex items-center justify-between border backdrop-blur-xl z-40 pointer-events-auto ${actualTheme === 'dark' ? 'bg-[#1D1E3A]/60 border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]' : 'bg-white/10 border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]'}` },
                React.createElement("div", { className: "flex items-center gap-3" },
                  React.createElement("div", { className: "relative" },
                    React.createElement("div", { className: "w-10 h-10 rounded-full overflow-hidden border-2 border-green-500 bg-slate-800" },
                      React.createElement("img", {
                        src: "001. Aset Hero Section/Photo Lanyard.PNG",
                        alt: "Avatar",
                        className: "w-full h-full object-cover object-[56%_18.5%] scale-[3.75] origin-[56%_18.5%]",
                        style: { filter: 'contrast(1.1) saturate(1.1)' },
                        onError: (e) => { e.target.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200'; }
                      })
                    ),
                    React.createElement("div", { className: "absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-[2px] border-slate-900 rounded-full" })
                  ),
                  React.createElement("div", { className: "flex flex-col text-left" },
                    React.createElement("span", { className: "text-xs font-bold leading-tight text-white drop-shadow-sm" }, "@achmadnoorman"),
                    React.createElement("span", { className: "text-[10px] text-green-400 font-semibold mt-0.5 drop-shadow-sm" }, "Online")
                  )
                ),
                React.createElement("a", { href: "#contact", className: `flex items-center justify-center rounded-xl bg-white/20 hover:bg-white/30 text-white transition-colors border border-white/10 shadow-sm ${isMobileView ? 'w-10 h-10' : 'px-4 py-2 text-xs font-bold'}` },
                  isMobileView ? React.createElement(Mail, { size: 16 }) : 'Contact Me'
                )
              ),
              React.createElement("div", {
                className: "absolute inset-0 pointer-events-none z-50 rounded-[2rem]",
                style: {
                  background: `radial-gradient(circle at ${isHovered ? (mousePos.x + 0.5) * 100 : 50}% ${isHovered ? (mousePos.y + 0.5) * 100 : 50}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
                  opacity: isHovered ? 1 : 0,
                  transition: 'opacity 0.3s ease-out'
                }
              })
            )
          ),
          React.createElement("div", { className: `flex flex-col justify-center ${isMobileView ? 'space-y-4' : 'space-y-5'}` },
            React.createElement("div", { className: "flex flex-col gap-1 text-left align-left mb-1" },
              React.createElement("h2", { className: `font-bold tracking-tight ${isMobileView ? 'text-3xl' : 'text-4xl lg:text-5xl'} ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'}` }, 
                "About ",
                renderAccentSpan("Me", actualTheme, theme, activePalette)
              )
            ),
            
            // Deskripsi
            React.createElement("div", { className: `space-y-4 leading-relaxed ${isMobileView ? 'text-sm' : 'text-base'} ${actualTheme === 'dark' ? 'text-gray-300' : 'text-slate-600'}` },
              React.createElement("p", null, language === 'ID' ? "Saya adalah seorang profesional data yang memiliki minat besar dalam analisis dan otomatisasi proses bisnis. Saya terbiasa mengolah dan memvisualisasikan data kompleks menggunakan Google Sheet, Excel dan Data Studio" : "I am a data professional with a huge interest in business process analysis and automation. I am accustomed to processing and visualizing complex data using Google Sheets, Excel, and Data Studio"),
              React.createElement("p", null, language === 'ID' ? "Dalam beberapa proyek terakhir, saya berperan penuh mulai dari merancang arsitektur data hingga membangun dashboard interaktif dan laporan yang memudahkan manajemen dalam mengambil keputusan secara strategis dan akurat." : "In my recent projects, I played a full role from designing data architecture to building interactive dashboards and reports that make it easier for management to make strategic and accurate decisions.")
            ),
            
            // Core Focus Tags
            React.createElement("div", { className: "flex flex-wrap gap-2 pt-1" },
              React.createElement("span", { className: `px-3 py-1.5 rounded-full text-[11px] font-semibold border ${actualTheme === 'dark' ? 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20' : 'bg-slate-200/50 text-slate-700 border-slate-200'}` }, "Business Intelligence"),
              React.createElement("span", { className: `px-3 py-1.5 rounded-full text-[11px] font-semibold border ${actualTheme === 'dark' ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20' : 'bg-slate-200/50 text-slate-700 border-slate-200'}` }, "Process Automation"),
              React.createElement("span", { className: `px-3 py-1.5 rounded-full text-[11px] font-semibold border ${actualTheme === 'dark' ? 'bg-blue-500/10 text-blue-300 border-blue-500/20' : 'bg-slate-200/50 text-slate-700 border-slate-200'}` }, "Data Visualisation")
            ),

            // Divider
            React.createElement("div", { className: `w-full max-w-sm h-px my-2 ${actualTheme === 'dark' ? 'bg-white/10' : 'bg-slate-200'}` }),

            // Stats (No boxes)
            React.createElement("div", { className: "flex items-center gap-6 sm:gap-8 mt-1 mb-2" },
              React.createElement("div", { className: "flex items-center gap-2.5" },
                React.createElement("h4", { className: `font-bold leading-none text-xl lg:text-2xl ${actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight}` }, "3"),
                React.createElement("span", { className: `text-[9px] sm:text-[10px] font-bold uppercase tracking-wider leading-tight ${actualTheme === 'dark' ? 'text-gray-400' : 'text-slate-500'}` }, "Tahun", React.createElement("br", null), "Pengalaman")
              ),
              React.createElement("div", { className: "flex items-center gap-2.5" },
                React.createElement("h4", { className: `font-bold leading-none text-xl lg:text-2xl ${actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight}` }, `${projectsData.length}`),
                React.createElement("span", { className: `text-[9px] sm:text-[10px] font-bold uppercase tracking-wider leading-tight ${actualTheme === 'dark' ? 'text-gray-400' : 'text-slate-500'}` }, "Proyek", React.createElement("br", null), "Selesai")
              ),
              React.createElement("div", { className: "flex items-center gap-2.5" },
                React.createElement("h4", { className: `font-bold leading-none text-xl lg:text-2xl ${actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight}` }, `${coursesData.length + 1}`),
                React.createElement("span", { className: `text-[9px] sm:text-[10px] font-bold uppercase tracking-wider leading-tight ${actualTheme === 'dark' ? 'text-gray-400' : 'text-slate-500'}` }, "Sertifikat", React.createElement("br", null), "Keahlian")
              )
            ),

            // Buttons (Temporarily hidden)
            React.createElement("div", { className: `hidden flex-wrap items-center gap-3 pt-3 ${isMobileView ? 'sm:gap-4' : 'sm:gap-4'}` },
              React.createElement("a", { href: "#projects", className: `font-semibold rounded-full flex items-center justify-center transition-colors ${actualTheme === 'dark' ? `${theme.accentBgDark} ${theme.accentHoverDark} text-white` : `${theme.accentBgLight} ${theme.accentHoverLight} text-white`} ${isMobileView ? 'px-5 py-2.5 text-sm' : 'px-6 py-3'}` }, "Lihat Project"),
              React.createElement("a", { href: "#contact", className: `group flex items-center justify-center rounded-full font-semibold transition-all duration-300 border ${actualTheme === 'dark' ? 'bg-transparent border-white/20 hover:bg-white/10 text-white' : 'bg-transparent border-slate-300 hover:bg-slate-50 hover:border-slate-400 text-slate-700'} ${isMobileView ? 'px-5 py-2.5 text-sm' : 'px-6 py-3'}` },
                "Contact Me",
                React.createElement(ArrowRight, { size: 16, className: "ml-2 transition-transform duration-300 group-hover:translate-x-1" })
              )
            )
          )
          )
        )
      );
    };

    // ==========================================
    // 5. KOMPONEN RESUME TERPADU (EDUCATION, EXPERIENCE, & SKILLS)
    // ==========================================
    const ResumeSection = ({ actualTheme, theme, isMobileView, activePalette, activeTab: propActiveTab, setActiveTab: propSetActiveTab, language }) => {
      const [localActiveTab, localSetActiveTab] = useState('education');
      const activeTab = propActiveTab !== undefined ? propActiveTab : localActiveTab;
      const setActiveTab = propSetActiveTab !== undefined ? propSetActiveTab : localSetActiveTab;
      const [selectedItem, setSelectedItem] = useState(null); // Detail modal pop-up

      const activeColor = activePalette ? paletteColors[activePalette] : '#847BFF';

      // Custom CSS hover shadows
      const hoverBorderClass = activePalette === 'purple' ? 'hover:border-[#847BFF]/30 hover:shadow-[0_0_20px_rgba(132,123,255,0.12)]' :
                                activePalette === 'emerald' ? 'hover:border-emerald-400/30 hover:shadow-[0_0_20px_rgba(52,211,153,0.12)]' :
                                activePalette === 'ocean' ? 'hover:border-blue-400/30 hover:shadow-[0_0_20px_rgba(96,165,250,0.12)]' :
                                activePalette === 'google' ? 'hover:border-[#4285F4]/30 hover:shadow-[0_0_20px_rgba(66,133,244,0.12)]' :
                                'hover:border-rose-400/30 hover:shadow-[0_0_20px_rgba(251,113,133,0.12)]';

      // --- Fitur Mouse Drag-to-Scroll ---
      const carouselRef = useRef(null);
      const [isDragging, setIsDragging] = useState(false);
      const [startX, setStartX] = useState(0);
      const [scrollLeft, setScrollLeft] = useState(0);
      const dragRef = useRef(false);

      // --- Body Scroll Lock ---
      useEffect(() => {
        if (selectedItem) {
          toggleScrollLock(true);
        } else {
          toggleScrollLock(false);
        }
        return () => {
          toggleScrollLock(false);
        };
      }, [selectedItem]);

      // --- Escape Key ---
      useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.key === 'Escape' && selectedItem) {
            setSelectedItem(null);
          }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
      }, [selectedItem]);

      const [canScrollLeftCarousel, setCanScrollLeftCarousel] = useState(false);
      const [canScrollRightCarousel, setCanScrollRightCarousel] = useState(true);

      const handleCarouselScroll = (e) => {
        const { scrollLeft, scrollWidth, clientWidth } = e.target;
        setCanScrollLeftCarousel(scrollLeft > 0);
        setCanScrollRightCarousel(scrollLeft + clientWidth < scrollWidth - 1);
      };

      useEffect(() => {
        if (carouselRef.current) {
           const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
           setCanScrollLeftCarousel(scrollLeft > 0);
           setCanScrollRightCarousel(scrollLeft + clientWidth < scrollWidth - 1);
        }
      }, [activeTab]);

      const handleMouseDown = (e) => {
        if (!carouselRef.current) return;
        setIsDragging(true);
        dragRef.current = false;
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
      };
      const handleMouseLeave = () => setIsDragging(false);
      const handleMouseUp = () => {
        setIsDragging(false);
        setTimeout(() => { dragRef.current = false; }, 50);
      };
      const handleMouseMove = (e) => {
        if (!isDragging || !carouselRef.current) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 1.2;
        if (Math.abs(walk) > 5) { dragRef.current = true; }
        carouselRef.current.scrollLeft = scrollLeft - walk;
      };

      // --- State & Ref untuk tab Skills & Tools (Mobile Carousel Dots) ---
      const skillsContainerRef = useRef(null);
      const [skillsScrollIndex, setSkillsScrollIndex] = useState(0);

      const handleSkillsScroll = (e) => {
        const container = e.currentTarget;
        const scrollLeft = container.scrollLeft;
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (maxScroll <= 0) return;
        const ratio = scrollLeft / maxScroll;
        const activeDot = ratio > 0.5 ? 1 : 0;
        setSkillsScrollIndex(activeDot);
      };

      const handleSkillsDotClick = (dotIdx) => {
        if (!skillsContainerRef.current) return;
        const container = skillsContainerRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (maxScroll <= 0) return;
        const targetScroll = dotIdx === 1 ? maxScroll : 0;
        container.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
        });
        setSkillsScrollIndex(dotIdx);
      };

      // Reset scroll position when tab changes
      useEffect(() => {
        if (carouselRef.current) {
          carouselRef.current.scrollLeft = 0;
        }
        if (skillsContainerRef.current) {
          skillsContainerRef.current.scrollLeft = 0;
        }
        setSkillsScrollIndex(0);
      }, [activeTab]);

      return (
        React.createElement("section", { className: `scroll-mt-[72px] w-full py-12 lg:py-16` },
          React.createElement("div", { className: `w-full max-w-6xl mx-auto px-6 grid relative z-10 ${isMobileView ? 'grid-cols-1 gap-10' : 'grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16'}` },
            
            React.createElement("div", { className: `flex flex-col ${isMobileView ? 'w-full text-center items-center space-y-3' : 'text-left lg:col-span-4 lg:sticky lg:top-28 lg:self-start space-y-4'}` },
              React.createElement("div", { key: `title-${activeTab}`, className: `flex flex-col gap-1 ${isMobileView ? 'items-center' : 'animate-fade-in-up-custom'}` },
                React.createElement("h2", { className: `font-bold tracking-tight ${isMobileView ? 'text-3xl' : 'text-4xl lg:text-5xl'} ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'}` },
                  activeTab === 'education' ? "My " : activeTab === 'experience' ? "My " : "Technical ",
                  activeTab === 'education' ? renderAccentSpan("Education", actualTheme, theme, activePalette) :
                  activeTab === 'experience' ? renderAccentSpan("Experience", actualTheme, theme, activePalette) :
                  renderAccentSpan("Skill", actualTheme, theme, activePalette)
                )
              ),
              React.createElement("p", { key: `desc-${activeTab}`, className: `leading-relaxed ${isMobileView ? '' : 'animate-fade-in-up-custom'} ${isMobileView ? 'text-sm' : 'text-base'} ${actualTheme === 'dark' ? 'text-gray-400' : 'text-slate-600'}` },
                activeTab === 'education' ? (language === 'ID' ? "Perjalanan pendidikan yang membangun dasar pengetahuan dan kemampuan profesional saya." : "An educational journey that built the foundation of my knowledge and professional skills.") :
                activeTab === 'experience' ? (language === 'ID' ? "Perjalanan karir yang membangun pengalaman, pengetahuan, dan kemampuan profesional saya." : "A career journey that built my experience, knowledge, and professional skills.") :
                (language === 'ID' ? "Kumpulan keterampilan teknis yang mendukung pekerjaan dan pengembangan profesional saya." : "A collection of technical skills that support my work and professional development.")
              ),

              // Ilustrasi 3D Dinamis berdasarkan Tab aktif (Hanya di Desktop)
              !isMobileView && React.createElement("div", {
                key: activeTab,
                className: "relative flex items-center justify-center overflow-hidden w-full animate-fade-in-up-custom lg:h-[460px] mt-8 lg:mt-16 lg:-translate-x-[11%]"
              },
                React.createElement("img", {
                  src: activeTab === 'education' ? 'Education.webp' :
                       activeTab === 'experience' ? 'Experience.webp' :
                       'Tools.webp',
                  alt: activeTab,
                  className: `h-full lg:h-[75%] w-auto mx-auto object-contain pointer-events-none drop-shadow-md translate-y-[1%] ${
                    activeTab === 'skills' ? '-translate-x-[13.5%]' : '-translate-x-[16.5%]'
                  }`
                })
              )
            ),

            // --- KOLOM KANAN: Tab Switcher & Konten Dinamis ---
            React.createElement("div", { className: `flex flex-col ${isMobileView ? 'w-full' : 'lg:col-span-8'}` },
              
              // 1. Header Tab Switcher (Gaya minimalis premium seperti di Course & Certificate)
              React.createElement("div", { className: `flex items-center gap-4 sm:gap-6 border-b pb-px mb-8 overflow-x-auto overscroll-x-contain hide-scrollbar ${actualTheme === 'dark' ? 'border-white/10' : 'border-slate-200'}` },
                [
                  { id: 'education', name: 'Education' },
                  { id: 'experience', name: 'Experience' },
                  { id: 'skills', name: 'Skills & Tools' }
                ].map(tab => {
                  const isActive = activeTab === tab.id;
                  return React.createElement("button", {
                    key: tab.id,
                    onClick: () => setActiveTab(tab.id),
                    className: `group relative pb-3 text-sm sm:text-base whitespace-nowrap transition-colors shrink-0 ${isActive ? 'font-bold' : 'font-medium'} ${
                      isActive 
                        ? (actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight) 
                        : (actualTheme === 'dark' ? `text-gray-400 hover:${theme.accentTextDark}` : `text-slate-500 hover:${theme.accentTextLight}`)
                    } -mb-px`,
                  },
                    tab.name,
                    React.createElement("span", {
                      className: `absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'} ${
                        actualTheme === 'dark' ? theme.accentTextDark.replace('text-', 'bg-') : theme.accentTextLight.replace('text-', 'bg-')
                      }`
                    })
                  );
                })
              ),

              // 2. Konten Tab Dinamis dengan Animasi Fade
              React.createElement("div", {
                key: activeTab,
                className: `w-full ${isMobileView ? '' : 'animate-fade-in-up-custom'} min-h-[480px]`
              },
                
                // --- TAB: EXPERIENCE ---
                activeTab === 'experience' && React.createElement("div", { className: "relative w-full group/slider" },
                  React.createElement("div", {
                    ref: carouselRef,
                    onMouseDown: handleMouseDown,
                    onMouseLeave: handleMouseLeave,
                    onMouseUp: handleMouseUp,
                    onMouseMove: handleMouseMove,
                    onScroll: handleCarouselScroll,
                    className: "flex gap-6 overflow-x-auto overscroll-x-contain scroll-smooth pb-6 cursor-grab active:cursor-grabbing hide-scrollbar select-none w-full relative z-10 text-left"
                  },
                  experienceData.map((item, idx) => {
                    const isFirst = idx === 0;
                    const isLast = idx === experienceData.length - 1;
                    return React.createElement("div", {
                      key: item.id,
                      className: "shrink-0 w-[290px] sm:w-[340px] snap-start flex flex-col items-center relative z-10 group"
                    },
                      // Timeline Node
                      React.createElement("div", { className: "w-full relative flex items-center justify-center h-6 mb-6" },
                        !isFirst && React.createElement("div", { className: `absolute left-[-12px] right-1/2 h-[2px] ${actualTheme === 'dark' ? 'bg-white/10' : 'bg-slate-200'}` }),
                        !isLast && React.createElement("div", { className: `absolute left-1/2 right-[-12px] h-[2px] ${actualTheme === 'dark' ? 'bg-white/10' : 'bg-slate-200'}` }),
                        React.createElement("div", { 
                          className: `w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-[3px] relative z-10 shadow-sm transition-transform duration-300 group-hover:scale-125`,
                          style: { 
                            backgroundColor: activeColor, 
                            borderColor: actualTheme === 'dark' ? '#111126' : '#ffffff' 
                          }
                        })
                      ),

                      // Card
                      React.createElement("div", {
                        onClick: () => { if (!dragRef.current) setSelectedItem({ ...item, type: 'experience' }); },
                        className: `w-full ${isMobileView ? 'h-[350px]' : 'h-[450px]'} flex flex-col text-left p-5 sm:p-6 rounded-3xl cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-md border ${
                          actualTheme === 'dark' 
                            ? `${theme.darkCard} border-white/10 hover:shadow-white/5` 
                            : 'bg-white border-slate-100 hover:shadow-slate-200/50'
                        } ${hoverBorderClass}`
                      },
                        // Card Header (Icon & Title)
                        React.createElement("div", { className: "flex items-center gap-3 w-full" },
                          React.createElement("div", { className: `shrink-0 w-12 h-12 rounded-[1rem] overflow-hidden flex items-center justify-center text-[10px] font-black tracking-wider shadow-sm ` + (item.logo ? "" : `bg-gradient-to-tr ${item.gradient} text-white`) },
                            item.logo ? React.createElement("img", { src: item.logo, alt: item.company, className: "w-full h-full object-contain" }) : item.monogram
                          ),
                          React.createElement("div", { className: "flex flex-col min-w-0 pr-2 flex-1" },
                            React.createElement("h3", { className: `font-bold text-[14px] sm:text-[15px] leading-tight ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'} truncate` }, item.role),
                            React.createElement("h4", { className: `font-medium text-[11px] sm:text-xs mt-1.5 ${actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight} truncate` }, item.company)
                          )
                        ),
                        
                        // Divider Line
                        React.createElement("div", { className: `w-full mx-auto h-px mt-5 mb-1 ${actualTheme === 'dark' ? 'bg-white/10' : 'bg-slate-200'}` }),
                        
                        // Period Label
                        React.createElement("div", { className: "mt-4 flex items-center gap-1.5" },
                          React.createElement(Calendar, { size: 10, className: actualTheme === 'dark' ? 'text-gray-400' : 'text-slate-500' }),
                          React.createElement("span", { className: `text-[10px] font-medium ${actualTheme === 'dark' ? 'text-gray-400' : 'text-slate-500'}` }, language === 'ID' ? item.period : (item.periodEN || item.period))
                        ),

                        // Overview Heading
                        React.createElement("h5", { className: `font-poppins text-[13px] font-normal tracking-wider mt-4 ${actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight}` }, language === 'ID' ? "Pencapaian & Pengalaman" : "Achievements & Experience"),

                        // Description (First Achievement)
                        (() => {
                          const achievements = language === 'ID' ? item.achievements : (item.achievementsEN || item.achievements);
                          if (achievements && achievements[0]) {
                            return React.createElement("p", { className: `text-xs mt-1 mb-4 flex-1 line-clamp-4 leading-relaxed ${actualTheme === 'dark' ? 'text-gray-300' : 'text-slate-600'}` }, achievements[0]);
                          }
                          return null;
                        })(),

                        // Tools (Dengan Horizontal Scroll jika lebih dari atau sama dengan 6 di Mobile)
                        item.tools && React.createElement("div", { 
                          className: `mb-4 flex gap-1 ${
                            isMobileView 
                              ? (item.tools.length >= 6 ? 'flex-nowrap overflow-x-auto overscroll-x-contain hide-scrollbar max-w-full pb-1' : 'flex-wrap') 
                              : 'flex-wrap'
                          }` 
                        },
                          (isMobileView ? item.tools : item.tools.slice(0, 4)).map((tool, idx) => (
                            React.createElement("span", {
                              key: idx,
                              className: `font-poppins px-1.5 py-0.5 rounded border text-[9px] font-semibold shrink-0`,
                              style: {
                                backgroundColor: actualTheme === 'dark' ? `${activeColor}15` : `${activeColor}10`,
                                borderColor: actualTheme === 'dark' ? `${activeColor}30` : `${activeColor}20`,
                                color: activeColor
                              }
                            }, tool.name)
                          ))
                        ),
                        
                        // Detail Button Footer
                        React.createElement("div", { className: `mt-auto pt-4 flex items-center justify-between border-t ${actualTheme === 'dark' ? 'border-white/5' : 'border-slate-100'}` },
                          React.createElement("span", { className: `text-[9px] font-bold uppercase tracking-wider ${actualTheme === 'dark' ? 'text-gray-400' : 'text-slate-500'} flex items-center gap-1` },
                            "Detail",
                            React.createElement(ChevronRight, { size: 12 })
                          )
                        )
                      )
                    );
                  })
                  ),
                  
                  // Action Button (Next)
                  canScrollRightCarousel && React.createElement("div", {
                    onClick: () => {
                      if (carouselRef.current) {
                        carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
                      }
                    },
                    className: "flex sm:hidden absolute right-[-20px] top-[45%] -translate-y-1/2 z-20 items-center justify-center cursor-pointer p-1",
                    "aria-label": "Lihat data selanjutnya"
                  },
                    React.createElement(ChevronRight, { size: 24, strokeWidth: 3, className: `${actualTheme === 'dark' ? 'text-red-500' : 'text-slate-400'} animate-pulse drop-shadow-md` })
                  ),
                  // Action Button (Prev)
                  canScrollLeftCarousel && React.createElement("div", {
                    onClick: () => {
                      if (carouselRef.current) {
                        carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
                      }
                    },
                    className: "flex sm:hidden absolute left-[-35px] top-[45%] -translate-y-1/2 z-20 items-center justify-center cursor-pointer p-1",
                    "aria-label": "Lihat data sebelumnya"
                  },
                    React.createElement(ChevronLeft, { size: 24, strokeWidth: 3, className: `${actualTheme === 'dark' ? 'text-red-500' : 'text-slate-400'} animate-pulse drop-shadow-md` })
                  )
                ),

                // --- TAB: EDUCATION ---
                activeTab === 'education' && React.createElement("div", { className: "relative w-full group/slider" },
                  React.createElement("div", {
                    ref: carouselRef,
                    onMouseDown: handleMouseDown,
                    onMouseLeave: handleMouseLeave,
                    onMouseUp: handleMouseUp,
                    onMouseMove: handleMouseMove,
                    onScroll: handleCarouselScroll,
                    className: "flex gap-6 overflow-x-auto overscroll-x-contain scroll-smooth pb-6 cursor-grab active:cursor-grabbing hide-scrollbar select-none w-full relative z-10 text-left"
                  },
                  educationData.map((item, idx) => {
                    const isFirst = idx === 0;
                    const isLast = idx === educationData.length - 1;
                    return React.createElement("div", {
                      key: item.id,
                      className: "shrink-0 w-[290px] sm:w-[340px] snap-start flex flex-col items-center relative z-10 group"
                    },
                      // Timeline Node
                      React.createElement("div", { className: "w-full relative flex items-center justify-center h-6 mb-6" },
                        !isFirst && React.createElement("div", { className: `absolute left-[-12px] right-1/2 h-[2px] ${actualTheme === 'dark' ? 'bg-white/10' : 'bg-slate-200'}` }),
                        !isLast && React.createElement("div", { className: `absolute left-1/2 right-[-12px] h-[2px] ${actualTheme === 'dark' ? 'bg-white/10' : 'bg-slate-200'}` }),
                        React.createElement("div", { 
                          className: `w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-[3px] relative z-10 shadow-sm transition-transform duration-300 group-hover:scale-125`,
                          style: { 
                            backgroundColor: activeColor, 
                            borderColor: actualTheme === 'dark' ? '#111126' : '#ffffff' 
                          }
                        })
                      ),

                      // Card
                      React.createElement("div", {
                        onClick: () => { if (!dragRef.current) setSelectedItem({ ...item, type: 'education' }); },
                        className: `w-full ${isMobileView ? 'h-[350px]' : 'h-[450px]'} flex flex-col text-left p-5 sm:p-6 rounded-3xl cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-md border ${
                          actualTheme === 'dark' 
                            ? `${theme.darkCard} border-white/10 hover:shadow-white/5` 
                            : 'bg-white border-slate-100 hover:shadow-slate-200/50'
                        } ${hoverBorderClass}`
                      },
                        // Card Header (Icon & Title)
                        React.createElement("div", { className: "flex items-center gap-3 w-full" },
                          React.createElement("div", { className: `shrink-0 w-12 h-12 rounded-[1rem] overflow-hidden flex items-center justify-center text-[10px] font-black tracking-wider shadow-sm ` + (item.logo ? "" : `bg-gradient-to-tr ${item.gradient} text-white`) },
                            item.logo ? React.createElement("img", { src: item.logo, alt: item.institution, className: "w-full h-full object-contain" }) : item.monogram
                          ),
                          React.createElement("div", { className: "flex flex-col min-w-0 pr-2 flex-1" },
                            React.createElement("h3", { className: `font-bold text-[14px] sm:text-[15px] leading-tight ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'} truncate` }, item.degree),
                            React.createElement("h4", { className: `font-medium text-[11px] sm:text-xs mt-1.5 ${actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight} truncate` }, item.institution)
                          )
                        ),
                        
                        // Divider Line
                        React.createElement("div", { className: `w-full mx-auto h-px mt-5 mb-1 ${actualTheme === 'dark' ? 'bg-white/10' : 'bg-slate-200'}` }),
                        
                        // Period Label
                        React.createElement("div", { className: "mt-4 flex items-center gap-1.5" },
                          React.createElement(Calendar, { size: 10, className: actualTheme === 'dark' ? 'text-gray-400' : 'text-slate-500' }),
                          React.createElement("span", { className: `text-[10px] font-medium ${actualTheme === 'dark' ? 'text-gray-400' : 'text-slate-500'}` }, language === 'ID' ? item.period : (item.periodEN || item.period))
                        ),

                        // GPA
                        item.gpa && React.createElement("div", { className: "mt-2 flex items-center gap-1" },
                          React.createElement(Star, { size: 10, className: "fill-amber-500 text-amber-500" }),
                          React.createElement("span", { className: "text-[10px] font-bold text-amber-500" }, `IPK: ${item.gpa}`)
                        ),
                        
                        // Overview Heading
                        React.createElement("h5", { className: `font-poppins text-[13px] font-normal tracking-wider mt-4 ${actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight}` }, language === 'ID' ? "Gambaran Umum" : "Overview"),
                        
                        // Description (First Achievement)
                        React.createElement("p", { className: `text-xs mt-1 mb-4 flex-1 line-clamp-4 leading-relaxed ${actualTheme === 'dark' ? 'text-gray-300' : 'text-slate-600'}` }, language === 'ID' ? item.description : (item.descriptionEN || item.description)),
                        
                        // Detail Button Footer
                        React.createElement("div", { className: `mt-auto pt-4 flex items-center justify-between border-t ${actualTheme === 'dark' ? 'border-white/5' : 'border-slate-100'}` },
                          React.createElement("span", { className: `text-[9px] font-bold uppercase tracking-wider ${actualTheme === 'dark' ? 'text-gray-400' : 'text-slate-500'} flex items-center gap-1` },
                            "Detail",
                            React.createElement(ChevronRight, { size: 12 })
                          )
                        )
                      )
                    );
                  })
                  ),
                  
                  // Action Button (Next)
                  canScrollRightCarousel && React.createElement("div", {
                    onClick: () => {
                      if (carouselRef.current) {
                        carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
                      }
                    },
                    className: "flex sm:hidden absolute right-[-20px] top-[45%] -translate-y-1/2 z-20 items-center justify-center cursor-pointer p-1",
                    "aria-label": "Lihat data selanjutnya"
                  },
                    React.createElement(ChevronRight, { size: 24, strokeWidth: 3, className: `${actualTheme === 'dark' ? 'text-red-500' : 'text-slate-400'} animate-pulse drop-shadow-md` })
                  ),
                  // Action Button (Prev)
                  canScrollLeftCarousel && React.createElement("div", {
                    onClick: () => {
                      if (carouselRef.current) {
                        carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
                      }
                    },
                    className: "flex sm:hidden absolute left-[-35px] top-[45%] -translate-y-1/2 z-20 items-center justify-center cursor-pointer p-1",
                    "aria-label": "Lihat data sebelumnya"
                  },
                    React.createElement(ChevronLeft, { size: 24, strokeWidth: 3, className: `${actualTheme === 'dark' ? 'text-red-500' : 'text-slate-400'} animate-pulse drop-shadow-md` })
                  )
                ),

                // --- TAB: SKILLS ---
                activeTab === 'skills' && React.createElement("div", { className: "flex flex-col w-full" },
                  React.createElement("div", { 
                    ref: skillsContainerRef,
                    onScroll: isMobileView ? handleSkillsScroll : undefined,
                    className: isMobileView 
                      ? "grid grid-rows-6 grid-flow-col gap-3 overflow-x-auto overscroll-x-contain text-left max-w-full pt-2 pb-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" 
                      : "grid grid-cols-3 gap-4 text-left" 
                  },
                    skillsData.map((skill, index) => (
                      React.createElement("div", {
                        key: `skill-${index}`,
                        onMouseEnter: (e) => { if (activeColor) e.currentTarget.style.borderColor = activeColor; },
                        onMouseLeave: (e) => { e.currentTarget.style.borderColor = ''; },
                        className: `group flex flex-row items-center ${isMobileView ? 'w-[140px] shrink-0 p-2.5 rounded-xl gap-2' : 'p-3.5 rounded-2xl gap-3.5'} border transition-all duration-300 hover:-translate-y-1 shadow-sm ${
                          actualTheme === 'dark' ? `${theme.darkCard} border-white/10 hover:shadow-white/5` : 'bg-white border-slate-100 hover:shadow-slate-200/50'
                        }`
                      },
                        React.createElement("div", { className: "flex items-center justify-center shrink-0 rounded-xl " + (isMobileView ? "w-8 h-8 text-[10px]" : "w-10 h-10 text-xs") + " font-bold shadow-sm overflow-hidden " + (skill.logo ? "bg-white p-1.5 border border-slate-100" : "bg-gradient-to-tr " + skill.gradient + " text-white") },
                          skill.logo 
                            ? React.createElement("img", { src: skill.logo, alt: skill.name, className: "w-full h-full object-contain pointer-events-none" })
                            : skill.monogram
                        ),
                        React.createElement("div", { className: "flex-1 min-w-0 pr-1 pointer-events-none" },
                          React.createElement("h3", { className: `font-bold truncate ${isMobileView ? 'text-[11px]' : 'text-[13px]'} ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'}` }, skill.name)
                        )
                      )
                    ))
                  ),
                  isMobileView && skillsData.length > 12 && React.createElement("div", { className: "flex justify-center gap-1.5 mt-2 pb-1" },
                    Array.from({ length: 2 }).map((_, dotIdx) => 
                      React.createElement("button", {
                        key: `skills-dot-${dotIdx}`,
                        onClick: () => handleSkillsDotClick(dotIdx),
                        className: `h-2 rounded-full transition-all duration-300 ${
                          skillsScrollIndex === dotIdx ? "w-5" : "w-2"
                        }`,
                        style: skillsScrollIndex === dotIdx 
                          ? { backgroundColor: activeColor } 
                          : { backgroundColor: actualTheme === 'dark' ? 'rgba(255, 255, 255, 0.3)' : '#64748b' }
                      })
                    )
                  )
                )

              )
            )

          ),

          // --- MODAL DETAIL TERPADU ---
          selectedItem && createPortal(
            React.createElement("div", {
              onClick: () => setSelectedItem(null),
              className: "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity"
            },
              React.createElement("div", {
                onClick: (e) => e.stopPropagation(),
                className: `relative w-full ${isMobileView ? 'max-w-[340px]' : 'max-w-2xl'} ${isMobileView ? 'max-h-[560px]' : 'max-h-[85vh]'} flex flex-col overflow-hidden rounded-3xl shadow-2xl ${actualTheme === 'dark' ? `${theme.darkBg} border border-white/10` : 'bg-slate-50 border border-slate-200'}`
              },
                
                // Header Modal
                React.createElement("div", { className: `flex items-center justify-between ${isMobileView ? 'p-5' : 'p-6 sm:p-8'} border-b shrink-0 ${actualTheme === 'dark' ? 'border-white/10' : 'border-slate-200'}` },
                  React.createElement("h3", { className: `font-bold ${isMobileView ? 'text-lg' : 'text-xl sm:text-2xl'} ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'}` }, 
                    selectedItem.type === 'experience' ? (language === 'ID' ? "Detail Pengalaman Kerja" : "Work Experience Details") : (language === 'ID' ? "Detail Riwayat Pendidikan" : "Education History Details")
                  ),
                  React.createElement("button", {
                    onClick: () => setSelectedItem(null),
                    className: `p-2 rounded-full transition-colors ${actualTheme === 'dark' ? 'hover:bg-white/10 text-gray-400' : 'hover:bg-slate-200 text-slate-500'}`
                  }, React.createElement(X, { size: isMobileView ? 20 : 24 }))
                ),

                // Body Modal
                React.createElement("div", { className: `overflow-y-auto ${isMobileView ? 'p-5' : 'p-6 sm:p-8'} hide-scrollbar flex-1` },
                  React.createElement("div", { className: "flex flex-col gap-4 text-left" },
                    
                    React.createElement("div", { className: "flex items-center gap-3 sm:gap-5 w-full" },
                      React.createElement("div", { className: `shrink-0 flex items-center justify-center overflow-hidden w-12 h-12 sm:w-16 sm:h-16 rounded-2xl text-[11px] sm:text-sm font-black tracking-wider shadow-sm ` + (selectedItem.logo ? "" : `bg-gradient-to-tr ${selectedItem.gradient} text-white`) },
                        selectedItem.logo ? React.createElement("img", { src: selectedItem.logo, alt: selectedItem.company || selectedItem.institution, className: "w-full h-full object-contain" }) : selectedItem.monogram
                      ),
                      React.createElement("div", { className: "flex flex-col flex-1 min-w-0" },
                        React.createElement("h3", { className: `font-bold ${isMobileView ? 'text-base' : 'text-xl sm:text-2xl'} ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'} break-words` }, selectedItem.role || selectedItem.degree),
                        React.createElement("h4", { className: `font-medium mt-1.5 ${isMobileView ? 'text-xs' : 'text-base'} ${actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight} truncate` },
                          `${selectedItem.company || selectedItem.institution} • ${language === 'ID' ? selectedItem.period : (selectedItem.periodEN || selectedItem.period)}`
                        )
                      )
                    ),

                    React.createElement("div", { className: `h-px w-full my-1 ${actualTheme === 'dark' ? 'bg-white/10' : 'bg-slate-200'}` }),

                    // Overview
                    selectedItem.type !== 'experience' && (language === 'ID' ? selectedItem.description : (selectedItem.descriptionEN || selectedItem.description)) && React.createElement("div", { className: "mt-2" },
                      React.createElement("h5", { className: `font-bold mb-3 ${isMobileView ? 'text-sm' : 'text-base'} ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'}` }, language === 'ID' ? "Gambaran Umum" : "Overview"),
                      React.createElement("p", { className: `leading-relaxed ${isMobileView ? 'text-xs' : 'text-sm sm:text-base'} ${actualTheme === 'dark' ? 'text-gray-300' : 'text-slate-600'}` },
                        language === 'ID' ? selectedItem.description : (selectedItem.descriptionEN || selectedItem.description)
                      )
                    ),

                    // Achievements (For Experience & Education)
                    (language === 'ID' ? selectedItem.achievements : (selectedItem.achievementsEN || selectedItem.achievements)) && (language === 'ID' ? selectedItem.achievements : (selectedItem.achievementsEN || selectedItem.achievements)).length > 0 && React.createElement("div", { className: "mt-4" },
                      React.createElement("h5", { className: `font-bold mb-3 ${isMobileView ? 'text-sm' : 'text-base'} ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'}` }, 
                        selectedItem.type === 'education' ? (language === 'ID' ? "Pencapaian & Pengalaman Organisasi" : "Achievements & Organizational Experience") : (language === 'ID' ? "Pencapaian & Pengalaman" : "Achievements & Experience")
                      ),
                      React.createElement("ul", { className: `list-outside list-disc ml-5 space-y-2 ${isMobileView ? 'text-xs' : 'text-sm'} ${actualTheme === 'dark' ? 'text-gray-300 marker:text-gray-500' : 'text-slate-600 marker:text-slate-400'}` },
                        (language === 'ID' ? selectedItem.achievements : (selectedItem.achievementsEN || selectedItem.achievements)).map((achievement, idx) => (
                          React.createElement("li", { key: idx, className: "pl-1 leading-relaxed" }, achievement)
                        ))
                      )
                    ),

                    // Tools (For Experience/Education if they have tools)
                    selectedItem.tools && React.createElement("div", { className: "mt-4" },
                      React.createElement("h5", { className: `font-bold mb-3 ${isMobileView ? 'text-sm' : 'text-base'} ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'}` }, "Tools"),
                      React.createElement("div", { className: "flex flex-wrap gap-2" },
                        selectedItem.tools.map((tool, idx) => (
                          React.createElement("span", { 
                            key: idx, 
                            className: `flex items-center gap-1.5 px-3 py-2 rounded-xl text-[11px] sm:text-xs font-bold shadow-sm border`,
                            style: {
                              backgroundColor: actualTheme === 'dark' ? `${activeColor}15` : `${activeColor}10`,
                              borderColor: actualTheme === 'dark' ? `${activeColor}30` : `${activeColor}20`,
                              color: activeColor
                            }
                          },
                            tool.name
                          )
                        ))
                      )
                    )

                  )
                )

              )
            ),
            document.body
          )

        )
      );
    };

    // ==========================================
    // KOMPONEN COURSES & TRAINING SECTION
    // ==========================================
    const CoursesSection = ({ actualTheme, theme, isMobileView, activePalette, language }) => {
      const [activeFilter, setActiveFilter] = useState('All');
      const [selectedCourse, setSelectedCourse] = useState(null);
      const [showAllModal, setShowAllModal] = useState(false);

      // --- Body Scroll Lock ---
      useEffect(() => {
        if (showAllModal || selectedCourse) {
          toggleScrollLock(true);
        } else {
          toggleScrollLock(false);
        }
        return () => {
          toggleScrollLock(false);
        };
      }, [showAllModal, selectedCourse]);

      // --- Escape Key ---
      useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.key === 'Escape') {
            if (selectedCourse) {
              setSelectedCourse(null);
            } else if (showAllModal) {
              setShowAllModal(false);
            }
          }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
      }, [selectedCourse, showAllModal]);

      const allBrands = ['All', ...new Set(coursesData.map(c => c.issuer))];

      const filteredCourses = activeFilter === 'All'
        ? coursesData
        : coursesData.filter(c => c.issuer === activeFilter);

      // Helper to return month and year/day for Date Pill representation
      const getCourseDateParts = (course) => {
        const dates = {
          1: { month: "JAN", val: "23" },
          2: { month: "SEP", val: "22" },
          3: { month: "MAR", val: "22" },
          4: { month: "NOV", val: "21" },
          5: { month: "AUG", val: "23" },
          6: { month: "MAY", val: "23" }
        };
        if (course.date && course.date.trim().length > 0) {
          const parts = course.date.trim().split(' ');
          if (parts.length >= 2) {
            return { month: parts[0].substring(0, 3).toUpperCase(), val: parts[1].substring(2) };
          }
        }
        return dates[course.id] || { month: "DEC", val: "23" };
      };

      // Helper to get descriptions based on course title
      const getCourseDescription = (title) => {
        const lower = title.toLowerCase();
        if (lower.includes("machine learning") || lower.includes("data science")) {
          return "Mempelajari implementasi algoritma machine learning, pembersihan data, dan evaluasi model secara mendalam.";
        }
        if (lower.includes("python") || lower.includes("programming")) {
          return "Menguasai dasar pemrograman Python, logika pemecahan masalah, dan praktik terbaik software engineering.";
        }
        if (lower.includes("spreadsheet") || lower.includes("excel")) {
          return "Optimasi pengolahan data bisnis menggunakan rumus tingkat lanjut, visualisasi data, dan dasbor otomatis.";
        }
        if (lower.includes("looker") || lower.includes("visualization")) {
          return "Membangun dasbor analitis interaktif untuk menyajikan wawasan bisnis penting secara visual.";
        }
        if (lower.includes("sql")) {
          return "Menguasai kueri database relasional, manipulasi data, dan teknik penggabungan data tingkat lanjut.";
        }
        return "Program pelatihan intensif untuk memperluas pemahaman teknis dan pemecahan masalah industri.";
      };

      // --- Fitur Mouse Drag-to-Scroll ---
      const carouselRef = useRef(null);
      const [isDragging, setIsDragging] = useState(false);
      const [startX, setStartX] = useState(0);
      const [scrollLeft, setScrollLeft] = useState(0);
      const dragRef = useRef(false);

      const handleMouseDown = (e) => {
        if (!carouselRef.current) return;
        setIsDragging(true);
        dragRef.current = false;
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
      };
      const handleMouseLeave = () => setIsDragging(false);
      const handleMouseUp = () => {
        setIsDragging(false);
        setTimeout(() => { dragRef.current = false; }, 50);
      };
      const handleMouseMove = (e) => {
        if (!isDragging || !carouselRef.current) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 1;
        if (Math.abs(walk) > 5) { dragRef.current = true; }
        carouselRef.current.scrollLeft = scrollLeft - walk;
      };

      const renderCourseCard = (course, isGrid = false) => {
        const hoverBorderClass = activePalette === 'purple' ? 'hover:border-[#847BFF]/30 hover:shadow-[0_0_20px_rgba(132,123,255,0.15)]' :
                                  activePalette === 'emerald' ? 'hover:border-emerald-400/30 hover:shadow-[0_0_20px_rgba(52,211,153,0.15)]' :
                                  activePalette === 'ocean' ? 'hover:border-blue-400/30 hover:shadow-[0_0_20px_rgba(96,165,250,0.15)]' :
                                  activePalette === 'google' ? 'hover:border-[#4285F4]/30 hover:shadow-[0_0_20px_rgba(66,133,244,0.15)]' :
                                  'hover:border-rose-400/30 hover:shadow-[0_0_20px_rgba(251,113,133,0.15)]';

        const monogram = course.issuer.substring(0, 2).toUpperCase();
        const dateParts = getCourseDateParts(course);
        const title = language === 'ID' ? course.title : (course.titleEN || course.title);
        const description = getCourseDescription(title);
        const isSingleLineTitle = title.length < 40;

        return React.createElement("div", {
          key: course.id,
          onClick: () => {
            if (!dragRef.current && !isGrid) setSelectedCourse(course);
            if (isGrid) setSelectedCourse(course);
          },
          className: `${isGrid ? 'w-full' : 'shrink-0 w-[290px] sm:w-[340px]'} h-[460px] snap-start flex relative group cursor-pointer transition-all duration-300 rounded-[2rem] overflow-hidden border shadow-md hover:-translate-y-1.5 ${
            actualTheme === 'dark' 
              ? `${theme.darkCard} border-white/10 hover:shadow-white/5` 
              : 'bg-white border-slate-200 hover:shadow-slate-200/50'
          } ${hoverBorderClass}`
        },
          // Shine Overlay Effect
          React.createElement("div", { 
            className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none z-20" 
          }),

          // Full Width Card Content
          React.createElement("div", { className: "w-full h-full pt-6 px-6 pb-4 sm:pt-6 sm:px-6 sm:pb-4 flex flex-col justify-between text-left relative z-10" },
            
            // Top Row: Tag Brand & Date Pill
            React.createElement("div", { className: "flex justify-between items-center w-full" },
              // Left Capsule Tag (Brand Issuer)
              React.createElement("span", { 
                className: `text-[10px] sm:text-[11px] font-bold px-3 py-1.5 rounded-full shadow-sm tracking-wide ${
                  actualTheme === 'dark' 
                    ? 'bg-white text-slate-900' 
                    : 'bg-slate-900 text-white'
                }`
              }, course.issuer),
              
              // Right Date Pill styled exactly like JAN 25
              React.createElement("div", { 
                className: `flex items-center rounded-lg border overflow-hidden shadow-inner h-7 text-[10px] font-bold ${
                  actualTheme === 'dark' 
                    ? 'border-white/10 bg-white/5' 
                    : 'border-slate-250 bg-slate-100'
                }`
              },
                // Left Part: Month (Dark Background)
                React.createElement("span", { 
                  className: `px-2.5 h-full flex items-center justify-center text-white ${
                    actualTheme === 'dark' ? 'bg-slate-800' : 'bg-slate-800'
                  }`
                }, dateParts.month),
                // Right Part: Year (White/Light Background)
                React.createElement("span", { 
                  className: `px-2.5 h-full flex items-center justify-center ${
                    actualTheme === 'dark' 
                      ? 'text-white bg-slate-900' 
                      : 'text-slate-800 bg-white'
                  }`
                }, dateParts.val)
              )
            ),

            // Middle: Skill / Course Title learned & Subtitle/Description
            React.createElement("div", { className: "flex-1 flex flex-col justify-start mt-8 mb-7" },
              React.createElement("h3", { 
                className: `font-bold text-lg sm:text-xl leading-tight tracking-tight ${
                  actualTheme === 'dark' ? 'text-white' : 'text-slate-900'
                }` 
              }, title),
              React.createElement("p", { 
                className: `text-xs sm:text-[13px] leading-relaxed mt-2 line-clamp-3 ${
                  actualTheme === 'dark' ? 'text-gray-400' : 'text-slate-500'
                }` 
              }, description)
            ),

            // Bottom Block: Rounded Image Container & Location-style Overlay Badge
            React.createElement("div", { 
              className: "w-full mt-auto",
              style: { position: "relative", top: "-18px" }
            },
              React.createElement("div", { 
                className: `relative w-full h-[180px] rounded-[1.5rem] overflow-hidden shadow-sm border ${
                  actualTheme === 'dark' ? 'border-white/10' : 'border-slate-200'
                }` 
              },
                // Thumbnail of the actual certificate
                React.createElement("img", { 
                  src: encodeURI(course.file), 
                  alt: title, 
                  className: "w-full h-full object-cover object-top" 
                })
              )
            )

          )

        );
      };

      return (
        React.createElement("section", { className: `scroll-mt-[72px] w-full py-12 lg:py-16` },
          React.createElement("div", { className: "w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col" },
            
            // Header
            React.createElement("div", { className: `flex ${isMobileView ? 'flex-col gap-3 text-center items-center' : 'flex-col gap-2 text-left'} mb-6 lg:mb-8 w-full` },
              React.createElement("h2", { className: `font-bold tracking-tight leading-tight ${isMobileView ? 'text-3xl' : 'text-4xl lg:text-5xl'} ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'}` },
                "Course ",
                renderAccentSpan("& Certificate", actualTheme, theme, activePalette)
              ),
              React.createElement("p", { className: `leading-relaxed ${isMobileView ? 'max-w-2xl text-sm' : 'text-base'} ${actualTheme === 'dark' ? 'text-gray-400' : 'text-slate-600'}` },
                language === 'ID' ? "Kumpulan sertifikasi yang mendukung " : "A collection of certifications that support my ",
                React.createElement("br", null),
                language === 'ID' ? "pengembangan profesional saya." : "professional development."
              )
            ),

            // Tab Filter (Underline style)
            React.createElement("div", { className: `flex gap-4 sm:gap-6 mb-2 overflow-x-auto overscroll-x-contain hide-scrollbar border-b ${actualTheme === 'dark' ? 'border-white/10' : 'border-slate-200'}` },
              allBrands.map(brand => {
                const isActive = activeFilter === brand;
                return React.createElement("button", {
                  key: brand,
                  onClick: () => setActiveFilter(brand),
                  className: `group relative pb-3 text-sm sm:text-base whitespace-nowrap transition-colors shrink-0 ${isActive ? 'font-bold' : 'font-medium'} ${
                    isActive 
                      ? (actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight) 
                      : (actualTheme === 'dark' ? `text-gray-400 hover:${theme.accentTextDark}` : `text-slate-500 hover:${theme.accentTextLight}`)
                  }`
                },
                  brand,
                  React.createElement("span", {
                    className: `absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'} ${
                      actualTheme === 'dark' ? theme.accentTextDark.replace('text-', 'bg-') : theme.accentTextLight.replace('text-', 'bg-')
                    }`
                  })
                );
              })
            ),

            // Carousel List
            React.createElement("div", {
              ref: carouselRef,
              onMouseDown: handleMouseDown,
              onMouseLeave: handleMouseLeave,
              onMouseUp: handleMouseUp,
              onMouseMove: handleMouseMove,
              className: `flex gap-6 overflow-x-auto overscroll-x-contain pt-4 pb-4 px-2 -mx-2 cursor-grab active:cursor-grabbing hide-scrollbar select-none`
            },
              filteredCourses.map((course) => renderCourseCard(course))
            )
          ),

          // Modal All Courses
          showAllModal && createPortal(
            React.createElement("div", {
              onClick: () => setShowAllModal(false),
              className: `fixed inset-0 z-[100] flex items-center justify-center p-4 ${isMobileView ? 'pt-20 pb-4' : 'pt-24'} bg-black/60 backdrop-blur-sm transition-opacity`
            },
              React.createElement("div", {
                onClick: (e) => e.stopPropagation(),
                className: `relative w-full ${isMobileView ? 'max-w-[380px] w-[calc(100vw-2rem)] h-[85vh]' : 'max-w-5xl h-[85vh]'} flex flex-col overflow-hidden rounded-3xl shadow-2xl ${actualTheme === 'dark' ? `${theme.darkBg} border border-white/10` : 'bg-slate-50 border border-slate-200'}`
              },
                // Header Pop-up
                React.createElement("div", { className: `flex items-center justify-between ${isMobileView ? 'p-4' : 'p-6'} border-b shrink-0 ${actualTheme === 'dark' ? 'border-white/10' : 'border-slate-200'}` },
                  React.createElement("h3", { className: `font-bold ${isMobileView ? 'text-xl' : 'text-2xl'} ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'}` }, `Semua Course ${activeFilter === 'All' ? '' : `- ${activeFilter}`}`),
                  React.createElement("button", {
                    onClick: () => setShowAllModal(false),
                    className: `p-2 rounded-full transition-colors ${actualTheme === 'dark' ? 'hover:bg-white/10 text-gray-400' : 'hover:bg-slate-200 text-slate-500'}`
                  },
                    React.createElement(X, { size: isMobileView ? 20 : 24 })
                  )
                ),

                // Body Pop-up
                React.createElement("div", { className: `overflow-y-auto ${isMobileView ? 'p-4' : 'p-6 lg:p-8'} hide-scrollbar flex-1` },
                  React.createElement("div", { className: `grid ${isMobileView ? 'gap-4 grid-cols-1' : 'gap-6 sm:grid-cols-2 lg:grid-cols-3'}` },
                    filteredCourses.map((course) => renderCourseCard(course, true))
                  )
                )
              )
            ),
            document.body
          ),

          // Modal Detail Certificate
          selectedCourse && createPortal(
            React.createElement("div", {
              onClick: () => setSelectedCourse(null),
              className: `fixed inset-0 z-[110] flex items-center justify-center p-4 ${isMobileView ? 'pt-20 pb-4' : 'pt-24'} bg-black/60 backdrop-blur-sm transition-opacity`
            },
              React.createElement("div", {
                onClick: (e) => e.stopPropagation(),
                className: `relative w-full ${isMobileView ? 'max-w-[380px] w-[calc(100vw-2rem)] h-[65vh]' : 'max-w-4xl h-[85vh]'} flex flex-col overflow-hidden rounded-3xl shadow-2xl ${actualTheme === 'dark' ? `${theme.darkBg} border border-white/10` : 'bg-slate-50 border border-slate-200'}`
              },
                // Header
                React.createElement("div", { className: `flex items-center justify-between ${isMobileView ? 'p-4' : 'p-6'} border-b shrink-0 ${actualTheme === 'dark' ? 'border-white/10' : 'border-slate-200'}` },
                  React.createElement("h3", { className: `font-bold ${isMobileView ? 'text-base' : 'text-xl'} ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'} truncate pr-4` }, language === 'ID' ? selectedCourse.title : (selectedCourse.titleEN || selectedCourse.title)),
                  React.createElement("button", {
                    onClick: () => setSelectedCourse(null),
                    className: `p-2 rounded-full transition-colors shrink-0 ${actualTheme === 'dark' ? 'hover:bg-white/10 text-gray-400' : 'hover:bg-slate-200 text-slate-500'}`
                  }, React.createElement(X, { size: isMobileView ? 20 : 24 }))
                ),
                // Body (Iframe for PDF, IMG for PNG/JPG)
                React.createElement("div", { className: `flex-1 w-full relative ${actualTheme === 'dark' ? 'bg-black/30' : 'bg-slate-100'}` },
                  selectedCourse.file.toLowerCase().endsWith('.pdf') ? (
                    React.createElement("iframe", {
                      src: encodeURI(selectedCourse.file),
                      className: "w-full h-full border-none",
                      title: language === 'ID' ? selectedCourse.title : (selectedCourse.titleEN || selectedCourse.title)
                    })
                  ) : (
                    React.createElement("div", { className: "w-full h-full p-4 flex items-center justify-center overflow-auto" },
                      React.createElement("img", {
                        src: encodeURI(selectedCourse.file),
                        alt: language === 'ID' ? selectedCourse.title : (selectedCourse.titleEN || selectedCourse.title),
                        className: "max-w-full max-h-full object-contain drop-shadow-lg"
                      })
                    )
                  )
                )
              )
            ),
            document.body
          )
        )
      );
    };

    // ==========================================
    // 7. KOMPONEN PROJECTS SECTION
    // ==========================================
    const ProjectsSection = ({ actualTheme, theme, isMobileView, activePalette, activeSection, language }) => {
      const activeColor = activePalette ? paletteColors[activePalette] : '#847BFF';
      const [activeFilter, setActiveFilter] = useState('All');
      const [currentPage, setCurrentPage] = useState(1);
      const [selectedProject, setSelectedProject] = useState(null);
      const [activeDetailTab, setActiveDetailTab] = useState('overview');
      const [showBackTooltip, setShowBackTooltip] = useState(false);
      const backHoverTimer = useRef(null);

      useEffect(() => {
        if (selectedProject) setActiveDetailTab('overview');
      }, [selectedProject]);

      useEffect(() => {
        if (activeSection !== 'Projects' && activeSection !== 'Home') {
          const timer = setTimeout(() => {
            setSelectedProject(null);
            setActiveFilter('All');
            setCurrentPage(1);
            setActiveDetailTab('overview');
          }, 800);
          return () => clearTimeout(timer);
        }
      }, [activeSection]);

      const detailScrollRef = useRef(null);
      const tabBarRef = useRef(null);

      useEffect(() => {
        if (detailScrollRef.current && tabBarRef.current) {
          const targetScrollTop = tabBarRef.current.offsetTop;
          if (detailScrollRef.current.scrollTop > targetScrollTop) {
            detailScrollRef.current.scrollTo({ top: targetScrollTop, behavior: 'smooth' });
          }
        }
      }, [activeDetailTab]);
      const [activeImgIdx, setActiveImgIdx] = useState(0);

      // Swipe logic for modal image carousel
      const [touchStartPos, setTouchStartPos] = useState(null);
      const [touchEndPos, setTouchEndPos] = useState(null);
      const minSwipeDist = 50;
      
      const handleTouchStart = (e) => {
        setTouchEndPos(null);
        setTouchStartPos(e.targetTouches[0].clientX);
      };
      
      const handleTouchMove = (e) => {
        setTouchEndPos(e.targetTouches[0].clientX);
      };
      
      const handleTouchEnd = () => {
        if (!touchStartPos || !touchEndPos) return;
        const distance = touchStartPos - touchEndPos;
        const isLeftSwipe = distance > minSwipeDist;
        const isRightSwipe = distance < -minSwipeDist;
        
        if (isLeftSwipe && selectedProject?.images?.length > 1) {
          setActiveImgIdx(prev => (prev + 1) % selectedProject.images.length);
        }
        if (isRightSwipe && selectedProject?.images?.length > 1) {
          setActiveImgIdx(prev => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
        }
      };

      const wheelTimeout = useRef(null);
      const handleWheel = (e) => {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 30) {
          if (wheelTimeout.current) return;
          
          if (e.deltaX > 0 && selectedProject?.images?.length > 1) {
            setActiveImgIdx(prev => (prev + 1) % selectedProject.images.length);
          } else if (e.deltaX < 0 && selectedProject?.images?.length > 1) {
            setActiveImgIdx(prev => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
          }
          
          wheelTimeout.current = setTimeout(() => {
            wheelTimeout.current = null;
          }, 600);
        }
      };

      const [showAllModal, setShowAllModal] = useState(false);
      const [lightboxImg, setLightboxImg] = useState(null);
      const [zoomScale, setZoomScale] = useState(1);
      const [panPos, setPanPos] = useState({ x: 0, y: 0 });
      const [isPanning, setIsPanning] = useState(false);
      const panStart = useRef({ x: 0, y: 0 });
      const panOrigin = useRef({ x: 0, y: 0 });
      const isAnimating = useRef(false);
      const lightboxDragRef = useRef(false);

      // --- Body Scroll Lock ---
      useEffect(() => {
        if (showAllModal || selectedProject || lightboxImg) {
          toggleScrollLock(true);
        } else {
          toggleScrollLock(false);
        }
        return () => {
          toggleScrollLock(false);
        };
      }, [showAllModal, selectedProject, lightboxImg]);

      // --- Escape & Arrow Keys to Navigate / Close Modals ---
      useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.key === 'Escape') {
            if (lightboxImg) {
              setLightboxImg(null);
              setZoomScale(1);
              setPanPos({ x: 0, y: 0 });
            } else if (selectedProject) {
              setSelectedProject(null);
            } else if (showAllModal) {
              setShowAllModal(false);
            }
          } else if (selectedProject && selectedProject.images && selectedProject.images.length > 1) {
            if (e.key === 'ArrowRight') {
              setActiveImgIdx(prev => (prev + 1) % selectedProject.images.length);
              setZoomScale(1);
              setPanPos({ x: 0, y: 0 });
            } else if (e.key === 'ArrowLeft') {
              setActiveImgIdx(prev => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
              setZoomScale(1);
              setPanPos({ x: 0, y: 0 });
            }
          }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
      }, [lightboxImg, selectedProject, showAllModal]);

      // Count tools and build filter tabs
      const toolsCounts = {};
      projectsData.forEach(p => {
        if (p.tech) {
          p.tech.forEach(t => {
            toolsCounts[t] = (toolsCounts[t] || 0) + 1;
          });
        }
      });
      const allTools = ['All', ...Object.keys(toolsCounts).sort((a, b) => toolsCounts[b] - toolsCounts[a])];
      
      const isDemoModeLocal = typeof window !== 'undefined' ? (window.location.pathname.startsWith('/demo') || new URLSearchParams(window.location.search).get('demo') === 'true') : false;

      const filteredProjects = activeFilter === 'All' 
        ? [...projectsData] 
        : projectsData.filter(p => p.tech && p.tech.includes(activeFilter));

      if (!isDemoModeLocal) {
        filteredProjects.sort((a, b) => {
          const isAIncomplete = !(
            !!(a.description || a.descriptionEN) &&
            !!(a.challenge || a.challengeEN || a.challengePoints || a.challengePointsEN) &&
            !!(a.solution || a.solutionEN || a.solutionPoints || a.solutionPointsEN) &&
            !!(a.achievements || a.achievementsEN)
          );
          const isBIncomplete = !(
            !!(b.description || b.descriptionEN) &&
            !!(b.challenge || b.challengeEN || b.challengePoints || b.challengePointsEN) &&
            !!(b.solution || b.solutionEN || b.solutionPoints || b.solutionPointsEN) &&
            !!(b.achievements || b.achievementsEN)
          );
          
          const aIsComingSoon = a.comingSoon === true || isAIncomplete;
          const bIsComingSoon = b.comingSoon === true || isBIncomplete;

          if (aIsComingSoon && !bIsComingSoon) return 1;
          if (!aIsComingSoon && bIsComingSoon) return -1;
          return 0;
        });
      }

      const getCategoryStyle = (category) => {
        switch (category) {
          case 'Data Visualization':
            return {
              bg: 'bg-emerald-100 dark:bg-emerald-500/10',
              text: 'text-emerald-600 dark:text-emerald-400',
              icon: '📊'
            };
          case 'Data Management':
            return {
              bg: 'bg-amber-100 dark:bg-amber-500/10',
              text: 'text-amber-600 dark:text-amber-400',
              icon: '💾'
            };
          case 'Automation':
            return {
              bg: 'bg-blue-100 dark:bg-blue-500/10',
              text: 'text-blue-600 dark:text-blue-400',
              icon: '⚙️'
            };
          case 'Mentoring':
            return {
              bg: 'bg-purple-100 dark:bg-purple-500/10',
              text: 'text-purple-600 dark:text-purple-400',
              icon: '🎓'
            };
          default:
            return {
              bg: 'bg-indigo-100 dark:bg-indigo-500/10',
              text: 'text-indigo-600 dark:text-indigo-400',
              icon: '📁'
            };
        }
      };

      const getProjectYear = (project) => {
        if (project.date) {
          const parts = project.date.trim().split(' ');
          const lastPart = parts[parts.length - 1];
          if (/^\d{4}$/.test(lastPart)) {
            return lastPart;
          }
        }
        return '2024';
      };

      const getProjectMetric = (proj) => {
        if (proj.comingSoon) return { value: language === 'ID' ? 'Segera Hadir' : 'Coming Soon', label: language === 'ID' ? 'Segera Hadir' : 'Coming Soon' };
        if (proj.id === 1) return { value: language === 'ID' ? '80% Lebih Cepat' : '80% Faster', label: language === 'ID' ? 'Efisiensi' : 'Efficiency' };
        if (proj.id === 2) return { value: 'Live Link', label: 'Status' };
        if (proj.id === 3) return { value: language === 'ID' ? '42 Laporan' : '42 Reports', label: language === 'ID' ? 'Konsolidasi' : 'Consolidation' };
        if (proj.id === 4) return { value: language === 'ID' ? '90% Lebih Cepat' : '90% Faster', label: 'TAT Reduction' };
        
        if (proj.category === 'Automation') return { value: language === 'ID' ? 'Otomatis' : 'Automatic', label: language === 'ID' ? 'Sistem' : 'System' };
        if (proj.category === 'Data Visualization') return { value: language === 'ID' ? 'Interaktif' : 'Interactive', label: 'Dashboard' };
        return { value: 'Live', label: 'Status' };
      };

      const getFolderConfig = (category) => {
        switch (category) {
          case 'header':
            return {
              cardBg: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              backBg: '#1e3a8a',
              frontBg: '#3b82f6',
              iconType: 'default'
            };
          case 'Data Visualization':
            return {
              cardBg: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              backBg: '#065f46',
              frontBg: '#10b981',
              iconType: 'chart'
            };
          case 'Data Management':
            return {
              cardBg: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              backBg: '#92400e',
              frontBg: '#f59e0b',
              iconType: 'database'
            };
          case 'Automation':
            return {
              cardBg: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              backBg: '#1e3a8a',
              frontBg: '#3b82f6',
              iconType: 'zap'
            };
          case 'Mentoring':
            return {
              cardBg: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
              backBg: '#5b21b6',
              frontBg: '#8b5cf6',
              iconType: 'users'
            };
          default:
            return {
              cardBg: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
              backBg: '#5b21b6',
              frontBg: '#8b5cf6',
              iconType: 'users'
            };
        }
      };
 
      const CustomFolderIcon = ({ category, isComingSoon }) => {
        const config = getFolderConfig(category);
        
        // Helper to render icon on folder face
        const renderFolderFaceIcon = () => {
          switch (config.iconType) {
            case 'chart':
              return React.createElement("svg", { viewBox: "0 0 24 24", className: "w-3 h-3 fill-current text-white/95" },
                React.createElement("rect", { x: "3", y: "11", width: "4", height: "10", rx: "1" }),
                React.createElement("rect", { x: "10", y: "5", width: "4", height: "16", rx: "1" }),
                React.createElement("rect", { x: "17", y: "14", width: "4", height: "7", rx: "1", className: "opacity-60" })
              );
            case 'database':
              return React.createElement("svg", { viewBox: "0 0 24 24", className: "w-3 h-3 fill-current text-white/95" },
                React.createElement("path", { d: "M18 6c0 1.66-2.69 3-6 3S6 7.66 6 6s2.69-3 6-3 6 1.34 6 3z" }),
                React.createElement("path", { d: "M18 11c0 1.66-2.69 3-6 3s-6-1.34-6-3V8.5c0 1.66 2.69 3 6 3s6-1.34 6-3V11z", className: "opacity-75" }),
                React.createElement("path", { d: "M18 16c0 1.66-2.69 3-6 3s-6-1.34-6-3v-2.5c0 1.66 2.69 3 6 3s6-1.34 6-3V16z", className: "opacity-50" })
              );
            case 'zap':
              return React.createElement("svg", { viewBox: "0 0 24 24", className: "w-3 h-3 fill-current text-white/95" },
                React.createElement("path", { d: "M11 21h.01L18 11.5h-5V3L6 12.5h5V21z" })
              );
            case 'users':
            default:
              return React.createElement("svg", { viewBox: "0 0 24 24", className: "w-3.5 h-3.5 fill-current text-white/95" },
                // Back person (translucent)
                React.createElement("circle", { cx: "16", cy: "8", r: "3", className: "opacity-55" }),
                React.createElement("path", { d: "M16 13c-2.2 0-4.5 1.1-4.5 3v.5h9v-.5c0-1.9-2.3-3-4.5-3z", className: "opacity-55" }),
                // Front person (solid)
                React.createElement("circle", { cx: "9", cy: "9", r: "3.5" }),
                React.createElement("path", { d: "M9 14.5c-2.7 0-5.5 1.3-5.5 3.5v.5h11v-.5c0-2.2-2.8-3.5-5-3.5z" })
              );
          }
        };

        return React.createElement("div", { 
          className: `w-12 h-12 rounded-[14px] shrink-0 flex items-center justify-center select-none transition-all duration-300 shadow-md border border-white/10 relative overflow-hidden ${
            isComingSoon ? '' : 'group-hover:scale-105'
          }`,
          style: { background: config.cardBg }
        },
          // Diagonal glossy background highlight
          React.createElement("div", { 
            className: "absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 pointer-events-none" 
          }),

          // 3D Folder wrapper
          React.createElement("div", { className: "relative w-[34px] h-[28px] flex flex-col justify-end mt-[2px]" },
            // Back tab folder layer
            React.createElement("div", { 
              className: "absolute top-0 left-[1px] w-[15px] h-[6px] rounded-t-[3.5px]",
              style: { backgroundColor: config.backBg }
            }),
            
            // Slanted connector for tab
            React.createElement("div", { 
              className: "absolute top-0 left-[12px] w-[9px] h-[6px]",
              style: { 
                backgroundColor: config.backBg,
                clipPath: 'polygon(0 0, 100% 100%, 0 100%)' 
              }
            }),

            // Back main panel top edge
            React.createElement("div", { 
              className: "absolute top-[2px] left-[1px] right-[1px] h-[6px] rounded-t-[3.5px]",
              style: { backgroundColor: config.backBg }
            }),

            // White paper sheet popping out (animates on hover)
            React.createElement("div", { 
              className: `absolute top-[3.5px] left-[4px] right-[4px] h-[12px] bg-white rounded-t-[3px] z-10 transition-transform duration-300 shadow-sm ${
                isComingSoon ? '' : 'group-hover:-translate-y-1'
              }`
            }),
            
            // Front main folder body
            React.createElement("div", { 
              className: "relative w-full h-[21px] rounded-[5.5px] z-20 flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_1.5px_3px_rgba(0,0,0,0.15)]",
              style: { backgroundColor: config.frontBg }
            },
              // Render category-specific icon inside folder body
              renderFolderFaceIcon()
            )
          )
        );
      };

      const renderProjectRow = (project, totalInPage) => {
        const catStyle = getCategoryStyle(project.category);
        const metric = getProjectMetric(project);
        const year = getProjectYear(project);
        const hasDescription = !!(project.description || project.descriptionEN);
        const hasChallenge = !!(project.challenge || project.challengeEN || project.challengePoints || project.challengePointsEN);
        const hasSolution = !!(project.solution || project.solutionEN || project.solutionPoints || project.solutionPointsEN);
        const hasAchievements = !!(project.achievements || project.achievementsEN);
        const isProjectIncomplete = !(hasDescription && hasChallenge && hasSolution && hasAchievements);
        const isDemoMode = typeof window !== 'undefined' ? (window.location.pathname.startsWith('/demo') || new URLSearchParams(window.location.search).get('demo') === 'true') : false;
        
        const isComingSoon = isDemoMode ? (project.comingSoon === true) : (project.comingSoon === true || isProjectIncomplete);

        return React.createElement("div", {
          key: project.id,
          onClick: () => {
            if (isComingSoon) return;
            setSelectedProject(project);
            setActiveImgIdx(0);
          },
          className: `w-full h-full py-2 sm:py-3 px-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b last:border-b-0 transition-all duration-300 group ${
            isComingSoon ? 'cursor-default relative overflow-hidden' : 'cursor-pointer hover:bg-slate-50/80 dark:hover:bg-white/5'
          } ${actualTheme === 'dark' ? 'border-white/5' : 'border-slate-100'}`,
          style: { '--hover-color': activeColor }
        },
          // Left Group (Icon + Title & Details)
          React.createElement("div", { className: "flex items-start gap-4 flex-1 min-w-0" },
            // Icon (Custom Folder Icon representing Category)
            React.createElement(CustomFolderIcon, { category: project.category, isComingSoon: isComingSoon }),
            
            // Text Content
            React.createElement("div", { className: "flex-1 min-w-0 text-left" },
              // Title
              React.createElement("h3", { 
                className: `font-bold text-[15px] sm:text-[16px] leading-snug tracking-tight transition-colors ${
                  actualTheme === 'dark' 
                    ? `text-white ${isComingSoon ? '' : 'group-hover:text-[var(--hover-color)]'}` 
                    : `text-slate-900 ${isComingSoon ? '' : 'group-hover:text-[var(--hover-color)]'}`
                }` 
              }, language === 'ID' ? project.title : (project.titleEN || project.title)),
              
              // Subtitle
              React.createElement("p", { 
                className: `text-xs sm:text-[13px] font-medium leading-relaxed mt-1 ${
                  actualTheme === 'dark' ? 'text-gray-400' : 'text-slate-500'
                }`
              }, (project.tech && project.tech.length > 0) ? project.tech.slice(0, 3).join(' • ') : 'Project')
            )
          ),

          // Right Group (Metric & Year)
          React.createElement("div", { 
            className: "flex sm:flex-col items-baseline sm:items-end justify-between sm:justify-center gap-1 shrink-0 sm:text-right border-t sm:border-t-0 pt-3 sm:pt-0 border-dashed border-slate-200 dark:border-white/5" 
          },
            // Metric
            !isComingSoon && React.createElement("span", { 
              className: `font-extrabold text-sm sm:text-base tracking-tight ${
                actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight
              }`
            }, metric.value),
            
            // Label / Year
            !isComingSoon && React.createElement("span", { 
              className: `text-[11px] font-semibold tracking-wide ${
                actualTheme === 'dark' ? 'text-gray-500' : 'text-slate-400'
              }`
            }, `${metric.label} • ${year}`)
          ),

          // Frosted glass overlay for Coming Soon projects
          isComingSoon && React.createElement("div", {
            className: `absolute inset-0 z-20 flex items-center justify-end pr-4 sm:pr-6 backdrop-blur-[1.5px] bg-white/20 dark:bg-black/20`
          },
            React.createElement("div", {
              className: `flex items-center gap-1.5 px-3 py-1.5 rounded-xl border shadow-sm text-[11px] font-bold tracking-wider select-none ${
                actualTheme === 'dark'
                  ? 'bg-zinc-900/90 border-white/10 text-zinc-300 shadow-black/25'
                  : 'bg-white/95 border-slate-200 text-slate-700 shadow-slate-200/50'
              }`
            },
              React.createElement(Lock, { size: 11, className: "shrink-0 opacity-80" }),
              language === 'ID' ? "Segera Hadir" : "Coming Soon"
            )
          )
        );
      };

      // Swipe logic for List Pagination
      const [listTouchStartPos, setListTouchStartPos] = useState(null);
      const [listTouchEndPos, setListTouchEndPos] = useState(null);
      
      const handleListTouchStart = (e) => {
        setListTouchEndPos(null);
        if (e.targetTouches && e.targetTouches.length > 0) {
          setListTouchStartPos(e.targetTouches[0].clientX);
        }
      };
      
      const handleListTouchMove = (e) => {
        if (e.targetTouches && e.targetTouches.length > 0) {
          setListTouchEndPos(e.targetTouches[0].clientX);
        }
      };
      
      const handleListTouchEnd = () => {
        if (!listTouchStartPos || !listTouchEndPos) return;
        const distance = listTouchStartPos - listTouchEndPos;
        const totalItems = filteredProjects.length;
        const maxPages = Math.max(1, Math.ceil(totalItems / 5));
        
        if (distance > 50 && currentPage < maxPages) {
          setCurrentPage(prev => Math.min(prev + 1, maxPages));
        }
        if (distance < -50 && currentPage > 1) {
          setCurrentPage(prev => Math.max(prev - 1, 1));
        }
      };

      const listWheelTimeout = useRef(null);
      const handleListWheel = (e) => {
        if (selectedProject) return;
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 15) {
          if (listWheelTimeout.current) return;
          const totalItems = filteredProjects.length;
          const maxPages = Math.max(1, Math.ceil(totalItems / 5));
          
          if (e.deltaX > 0 && currentPage < maxPages) {
            setCurrentPage(prev => Math.min(prev + 1, maxPages));
          } else if (e.deltaX < 0 && currentPage > 1) {
            setCurrentPage(prev => Math.max(prev - 1, 1));
          }
          listWheelTimeout.current = setTimeout(() => { listWheelTimeout.current = null; }, 600);
        } else if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && Math.abs(e.deltaY) > 15) {
          if (listWheelTimeout.current) return;
          const direction = e.deltaY > 0 ? 1 : -1;
          window.dispatchEvent(new CustomEvent('swipeNavigate', { detail: { direction, from: 'projects' } }));
          listWheelTimeout.current = setTimeout(() => { listWheelTimeout.current = null; }, 600);
        }
      };

      return (
        React.createElement("section", { className: `scroll-mt-[72px] w-full pt-0 pb-12 lg:pt-0 lg:pb-16` },
          React.createElement("div", { className: `w-full flex flex-col ${isMobileView ? 'max-w-7xl px-4 sm:px-6 mx-auto' : 'md:max-w-none px-0 md:ml-0 md:mr-auto'}` },
            // Main List Card
            React.createElement("div", {
              onTouchStart: handleListTouchStart,
              onTouchMove: handleListTouchMove,
              onTouchEnd: handleListTouchEnd,
              onWheel: handleListWheel,
              className: `w-full md:h-[calc(100vh-142px)] rounded-3xl border shadow-sm p-5 sm:p-6 flex flex-col overflow-hidden overscroll-x-none transition-all duration-300 ${
                actualTheme === 'dark' ? `${theme.darkCard} border-white/10` : 'bg-white border-slate-200'
              }`
            },
              // Header of Card (Projects Title)
              React.createElement("div", { className: "flex items-start gap-3 mb-4 pb-4 border-b text-left shrink-0 " + (actualTheme === 'dark' ? "border-white/5" : "border-slate-100") },
                selectedProject && React.createElement("div", { className: "relative shrink-0 flex items-center" },
                  React.createElement("button", {
                    onClick: () => {
                      setSelectedProject(null);
                      if (backHoverTimer.current) clearTimeout(backHoverTimer.current);
                      setShowBackTooltip(false);
                    },
                    onMouseEnter: () => {
                      if (backHoverTimer.current) clearTimeout(backHoverTimer.current);
                      backHoverTimer.current = setTimeout(() => setShowBackTooltip(true), 2000);
                    },
                    onMouseLeave: () => {
                      if (backHoverTimer.current) clearTimeout(backHoverTimer.current);
                      setShowBackTooltip(false);
                    },
                    className: `mt-0.5 p-1.5 sm:p-2 rounded-full transition-all flex items-center justify-center border hover:-translate-x-1 shrink-0 ${
                      actualTheme === 'dark' 
                        ? 'bg-white/5 hover:bg-white/10 text-gray-200 border-white/10' 
                        : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 shadow-sm hover:shadow-md'
                    }`
                  }, 
                    React.createElement(ArrowLeft, { size: 20 })
                  ),
                  showBackTooltip && React.createElement("div", {
                    className: `absolute top-[calc(100%+8px)] left-0 whitespace-nowrap px-2.5 py-1.5 rounded-lg shadow-xl text-[11px] font-bold tracking-wide z-50 transition-opacity animate-in fade-in duration-200 ${
                      actualTheme === 'dark'
                        ? 'bg-zinc-800/95 backdrop-blur text-zinc-200 border border-white/10'
                        : 'bg-slate-800/95 backdrop-blur text-white border border-slate-700'
                    }`
                  }, language === 'ID' ? "Tekan ESC untuk kembali" : "Press ESC to go back")
                ),
                React.createElement("div", { className: "flex flex-col gap-1.5 flex-1 min-w-0" },
                  React.createElement("h2", { className: `text-xl sm:text-2xl font-bold tracking-tight ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'}` },
                    "Featured ",
                    renderAccentSpan("Projects", actualTheme, theme, activePalette)
                  ),
                  React.createElement("p", { className: `text-sm leading-relaxed ${actualTheme === 'dark' ? 'text-gray-400' : 'text-slate-500'}` },
                    language === 'ID' ? "Kumpulan proyek yang membangun pengalaman dan kemampuan profesional saya." : "A collection of projects that built my experience and professional skills."
                  )
                )
              ),
 
                            !selectedProject ? (
                React.createElement(React.Fragment, null,
                  // Filter Tabs inside card (underlined style)
                                React.createElement("div", { className: `flex gap-2 sm:gap-4 mb-2 overflow-x-auto overscroll-x-contain hide-scrollbar border-b shrink-0 ${actualTheme === 'dark' ? 'border-white/5' : 'border-slate-100'}` },
                                  allTools.map(tool => {
                                    const isActive = activeFilter === tool;
                                    const count = tool === 'All' ? projectsData.length : projectsData.filter(p => p.tech && p.tech.includes(tool)).length;
                                    return React.createElement("button", {
                                      key: tool,
                                      onClick: () => {
                                        setActiveFilter(tool);
                                        setCurrentPage(1);
                                      },
                                      className: `group relative pb-3 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors shrink-0 px-2 ${
                                        isActive 
                                          ? (actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight) 
                                          : (actualTheme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-slate-500 hover:text-slate-900')
                                      }`
                                    },
                                      `${tool} (${count})`,
                                      React.createElement("span", {
                                        className: `absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-300 ease-out ${
                                          isActive ? 'w-full scale-100' : 'w-0 scale-0 group-hover:w-full group-hover:scale-100'
                                        } ${actualTheme === 'dark' ? theme.accentBgDark : theme.accentBgLight}`
                                      })
                                    )
                                  })
                                ),
                   
                                // IIFE or variables to calculate pagination and render scrollable rows container + fixed pagination controls
                                (() => {
                                  const projectsPerPage = 5;
                                  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
                                  const indexOfLastProject = currentPage * projectsPerPage;
                                  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
                                  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
                   
                                  return React.createElement(React.Fragment, null,
                                    // Scrollable Rows Container (Always uses grid-rows-5 to keep row heights uniform across all pages)
                                    React.createElement("div", { className: "grid grid-rows-5 flex-1 overflow-y-auto hide-scrollbar" },
                                      currentProjects.length > 0 ? (
                                        currentProjects.map(project => renderProjectRow(project, currentProjects.length))
                                      ) : (
                                        React.createElement("div", { className: `w-full py-12 text-center border-dashed border-2 rounded-2xl ${actualTheme === 'dark' ? 'border-white/10 text-gray-400' : 'border-slate-200 text-slate-500'}` },
                                          "Belum ada proyek dengan filter ini."
                                        )
                                      )
                                    ),
                   
                                    // Pagination Controls (outside scrollable area)
                                    totalPages > 1 && React.createElement("div", { className: "flex items-center justify-center gap-4 mt-3 pt-3 border-t border-dashed border-slate-100 dark:border-white/5 shrink-0" },
                                      // Previous Button
                                      React.createElement("button", {
                                        disabled: currentPage === 1,
                                        onClick: () => setCurrentPage(prev => Math.max(prev - 1, 1)),
                                        className: `w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                                          currentPage === 1 
                                            ? 'opacity-35 cursor-not-allowed text-gray-400' 
                                            : (actualTheme === 'dark' ? 'hover:bg-white/10 text-white' : 'hover:bg-slate-100 text-slate-700')
                                        }`
                                      }, React.createElement(ChevronLeft, { size: 16 })),
                                      
                                      // Dots Page Indicators
                                      React.createElement("div", { className: "flex items-center gap-1.5" },
                                        Array.from({ length: totalPages }).map((_, idx) => {
                                          const pageNum = idx + 1;
                                          const isActive = currentPage === pageNum;
                                          return React.createElement("button", {
                                            key: idx,
                                            onClick: () => setCurrentPage(pageNum),
                                            className: `h-1.5 rounded-full transition-all duration-300 ${
                                              isActive 
                                                ? `w-4 ${actualTheme === 'dark' ? theme.accentBgDark : theme.accentBgLight}` 
                                                : `w-1.5 ${actualTheme === 'dark' ? theme.accentBgDark : theme.accentBgLight} opacity-50 hover:opacity-80`
                                            }`
                                          });
                                        })
                                      ),
                   
                                      // Next Button
                                      React.createElement("button", {
                                        disabled: currentPage === totalPages,
                                        onClick: () => setCurrentPage(prev => Math.min(prev + 1, totalPages)),
                                        className: `w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                                          currentPage === totalPages 
                                            ? 'opacity-35 cursor-not-allowed text-gray-400' 
                                            : (actualTheme === 'dark' ? 'hover:bg-white/10 text-white' : 'hover:bg-slate-100 text-slate-700')
                                        }`
                                      }, React.createElement(ChevronRight, { size: 16 }))
                                    )
                                  );
                                })()
                )
              ) : 
                // INLINE DETAIL VIEW
                React.createElement("div", { className: "flex flex-col flex-1 min-h-0 animate-in fade-in zoom-in-95 duration-300" },

                  // Body
                  React.createElement("div", { 
                    ref: detailScrollRef,
                    className: `relative overflow-y-auto overscroll-contain hide-scrollbar flex-1 -mx-5 px-5 sm:-mx-6 sm:px-6` 
                  },
                    // Split Screen Outer Container
                    React.createElement("div", { className: "flex flex-col lg:flex-row gap-8 lg:gap-0 pb-8 items-start relative" },
                      
                      // Left Column (Sticky Metadata)
                      React.createElement("div", { className: "flex flex-col gap-5 w-full lg:w-[35%] lg:sticky lg:top-0 shrink-0 lg:pt-2 lg:pr-10" },
                        // Title & Badges
                        React.createElement("div", { className: "flex flex-col gap-4 text-left" },
                          React.createElement("h3", { className: `font-extrabold text-3xl lg:text-4xl leading-snug whitespace-pre-line tracking-tight ${actualTheme === 'dark' ? 'text-white' : 'text-black'}` }, language === 'ID' ? selectedProject.title : (selectedProject.titleEN || selectedProject.title)),
                          // Project Sub-Categories / Tags
                          React.createElement("div", { className: "flex flex-wrap items-center gap-2 mt-1" },
                            (selectedProject.tags || [selectedProject.category]).map((tag, idx) => (
                              React.createElement("span", { 
                                key: idx, 
                                className: `text-[11px] sm:text-xs font-semibold px-3 py-1.5 rounded-lg ${
                                  actualTheme === 'dark' 
                                    ? 'bg-white/10 text-gray-200' 
                                    : 'bg-slate-200 text-slate-800'
                                }` 
                              }, tag)
                            ))
                          )
                        ),
                        
                        // Tech Stack
                        selectedProject.tech && selectedProject.tech.length > 0 && React.createElement("div", { className: "flex flex-col gap-3 text-left" },
                          React.createElement("h4", { className: `text-sm font-bold uppercase tracking-widest mb-1 ${actualTheme === 'dark' ? 'text-gray-300' : 'text-black'}` }, "Tools Used"),
                          React.createElement("div", { className: "flex flex-wrap gap-2.5" },
                            selectedProject.tech.map((t, idx) => {
                              const skillObj = skillsData.find(s => s.name === t);
                              const logoSrc = skillObj ? skillObj.logo : null;
                              return React.createElement("div", { 
                                key: t, 
                                className: `flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-semibold ${actualTheme === 'dark' ? 'bg-white/5 border border-white/10 text-gray-200' : 'bg-white border border-slate-200 text-slate-700 shadow-sm'}` 
                              }, 
                                logoSrc ? React.createElement("img", { src: logoSrc, alt: t, className: "w-4 h-4 object-contain" }) : null,
                                React.createElement("span", null, t)
                              );
                            })
                          )
                        ),

                        // Project Link
                        (function() {
                          const projectLinks = selectedProject.links || (selectedProject.link && selectedProject.link !== "#" ? [selectedProject.link] : []);
                          if (projectLinks.length === 0) return null;

                          return React.createElement("div", { className: "flex flex-col gap-2 text-left" },
                            React.createElement("h4", { className: `text-sm font-bold uppercase tracking-widest mb-1 ${actualTheme === 'dark' ? 'text-gray-300' : 'text-black'}` }, "Project Links"),
                            React.createElement("div", { className: "flex flex-col gap-2" },
                              projectLinks.map((linkData, idx) => {
                                const isString = typeof linkData === 'string';
                                const linkUrl = isString ? linkData : linkData.url;
                                let linkText = isString ? "View Live Project" : linkData.label;
                                let LinkIcon = ExternalLink;
                                const url = linkUrl.toLowerCase();
                                if (url.includes('datastudio') || url.includes('looker') || url.includes('powerbi') || url.includes('tableau')) {
                                  if (isString) linkText = "View Live Dashboard";
                                  LinkIcon = Monitor;
                                } else if (url.includes('colab')) {
                                  if (isString) linkText = "View Notebook";
                                  LinkIcon = Code;
                                } else if (url.includes('spreadsheets') || url.includes('docs.google.com/spreadsheets')) {
                                  if (isString) linkText = "View Spreadsheet";
                                  LinkIcon = Database;
                                } else if (url.includes('script.google')) {
                                  if (isString) linkText = "View Source Code";
                                  LinkIcon = Code;
                                } else if (url.includes('github.com')) {
                                  if (isString) linkText = "GitHub Repository";
                                  LinkIcon = Github;
                                }

                                return React.createElement("a", { 
                                  key: idx,
                                  href: linkUrl, 
                                  target: "_blank", 
                                  rel: "noopener noreferrer", 
                                  className: `flex items-center gap-2.5 group ${actualTheme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-slate-700 hover:text-black'}` 
                                }, 
                                  React.createElement(LinkIcon, { size: 16, strokeWidth: 1.5, className: "shrink-0 transition-transform group-hover:scale-110" }),
                                  React.createElement("span", { className: "text-xs font-semibold tracking-wide" }, linkText)
                                );
                              })
                            )
                          );
                        })()
                      ),

                      // Right Column (Scrollable Article)
                      React.createElement("div", { className: `flex flex-col gap-8 flex-1 w-full lg:w-[65%] text-left lg:pt-2 lg:pl-10 lg:border-l divide-y ${actualTheme === 'dark' ? 'border-white/10 divide-white/10' : 'border-slate-200 divide-slate-200'}` },
                        
                        // 1. Overview
                        (language === 'ID' ? selectedProject.description : (selectedProject.descriptionEN || selectedProject.description)) && React.createElement("div", { className: "flex flex-col gap-3 pb-2" },
                          React.createElement("h4", { className: `font-bold text-lg mb-1 ${actualTheme === 'dark' ? 'text-zinc-400' : 'text-slate-500'}` }, language === 'ID' ? "Deskripsi Proyek" : "Project Description"),
                          React.createElement("p", { className: `leading-relaxed text-base ${actualTheme === 'dark' ? 'text-zinc-400' : 'text-slate-500'}`, style: { whiteSpace: 'pre-line' } }, language === 'ID' ? selectedProject.description : (selectedProject.descriptionEN || selectedProject.description))
                        ),

                        // 2. Challenge
                        ((language === 'ID' ? selectedProject.challenge : (selectedProject.challengeEN || selectedProject.challenge)) || (language === 'ID' ? selectedProject.challengePoints : (selectedProject.challengePointsEN || selectedProject.challengePoints))) && React.createElement("div", { className: "flex flex-col gap-3 pt-8 pb-2" },
                          React.createElement("h4", { className: `font-bold text-lg mb-1 ${actualTheme === 'dark' ? 'text-zinc-400' : 'text-slate-500'}` }, language === 'ID' ? "Tantangan" : "Challenge"),
                          (language === 'ID' ? selectedProject.challenge : (selectedProject.challengeEN || selectedProject.challenge)) && React.createElement("p", { className: `leading-relaxed text-base ${actualTheme === 'dark' ? 'text-zinc-400' : 'text-slate-500'}`, style: { whiteSpace: 'pre-line' } }, language === 'ID' ? selectedProject.challenge : (selectedProject.challengeEN || selectedProject.challenge)),
                          (language === 'ID' ? selectedProject.challengePoints : (selectedProject.challengePointsEN || selectedProject.challengePoints)) && React.createElement("ul", { className: `list-outside list-none space-y-3 mt-2 text-base ${actualTheme === 'dark' ? 'text-zinc-400' : 'text-slate-500'}` },
                            (language === 'ID' ? selectedProject.challengePoints : (selectedProject.challengePointsEN || selectedProject.challengePoints)).map((pt, idx) => (
                              React.createElement("li", { key: idx, className: "flex items-start gap-3 leading-relaxed" }, 
                                React.createElement("span", { className: `mt-2.5 w-1.5 h-1.5 rounded-full shrink-0 ${actualTheme === 'dark' ? 'bg-blue-400' : 'bg-blue-500'}` }), pt
                              )
                            ))
                          ),
                          (language === 'ID' ? selectedProject.challengeFooter : (selectedProject.challengeFooterEN || selectedProject.challengeFooter)) && React.createElement("p", { className: `leading-relaxed mt-4 text-base ${actualTheme === 'dark' ? 'text-zinc-400' : 'text-slate-500'}`, style: { whiteSpace: 'pre-line' } }, language === 'ID' ? selectedProject.challengeFooter : (selectedProject.challengeFooterEN || selectedProject.challengeFooter))
                        ),

                        // 3. Solution (Subtle Modern Block)
                        ((language === 'ID' ? selectedProject.solution : (selectedProject.solutionEN || selectedProject.solution)) || (language === 'ID' ? selectedProject.solutionPoints : (selectedProject.solutionPointsEN || selectedProject.solutionPoints))) && React.createElement("div", { className: "flex flex-col gap-3 pt-8 pb-2" },
                          React.createElement("h4", { className: `font-bold text-lg mb-1 ${actualTheme === 'dark' ? 'text-zinc-400' : 'text-slate-500'}` }, language === 'ID' ? "Solusi" : "Solution"),
                          (language === 'ID' ? selectedProject.solution : (selectedProject.solutionEN || selectedProject.solution)) && React.createElement("p", { className: `leading-relaxed text-base ${actualTheme === 'dark' ? 'text-zinc-400' : 'text-slate-500'}`, style: { whiteSpace: 'pre-line' } }, language === 'ID' ? selectedProject.solution : (selectedProject.solutionEN || selectedProject.solution)),
                          (language === 'ID' ? selectedProject.solutionPoints : (selectedProject.solutionPointsEN || selectedProject.solutionPoints)) && React.createElement("ul", { className: `list-outside list-none space-y-3 mt-2 text-base ${actualTheme === 'dark' ? 'text-zinc-400' : 'text-slate-500'}` },
                            (language === 'ID' ? selectedProject.solutionPoints : (selectedProject.solutionPointsEN || selectedProject.solutionPoints)).map((pt, idx) => (
                              React.createElement("li", { key: idx, className: "flex items-start gap-3 leading-relaxed" }, 
                                React.createElement("span", { className: `mt-2.5 w-1.5 h-1.5 rounded-full shrink-0 ${actualTheme === 'dark' ? 'bg-blue-400' : 'bg-blue-500'}` }), pt
                              )
                            ))
                          ),
                          (language === 'ID' ? selectedProject.solutionFooter : (selectedProject.solutionFooterEN || selectedProject.solutionFooter)) && React.createElement("p", { className: `leading-relaxed mt-4 text-base ${actualTheme === 'dark' ? 'text-zinc-400' : 'text-slate-500'}`, style: { whiteSpace: 'pre-line' } }, language === 'ID' ? selectedProject.solutionFooter : (selectedProject.solutionFooterEN || selectedProject.solutionFooter))
                        ),

                        // 4. Impact (Glassmorphism Highlight)
                        (language === 'ID' ? selectedProject.achievements : (selectedProject.achievementsEN || selectedProject.achievements)) && React.createElement("div", { className: "flex flex-col gap-3 pt-8 pb-2" },
                          React.createElement("h4", { className: `font-bold text-lg mb-1 ${actualTheme === 'dark' ? 'text-zinc-400' : 'text-slate-500'}` }, language === 'ID' ? "Dampak" : "Impact"),
                          React.createElement("ul", { className: `list-outside list-none space-y-4 text-base ${actualTheme === 'dark' ? 'text-zinc-400' : 'text-slate-500'}` },
                            (language === 'ID' ? selectedProject.achievements : (selectedProject.achievementsEN || selectedProject.achievements)).map((achievement, idx) => (
                              React.createElement("li", { key: idx, className: "flex items-start gap-3 leading-relaxed" }, 
                                React.createElement("span", { className: `mt-2.5 w-1.5 h-1.5 rounded-full shrink-0 ${actualTheme === 'dark' ? 'bg-rose-400' : 'bg-rose-500'}` }), achievement
                              )
                            ))
                          )
                        )
                    )
                  )
                )
              )
            ),

          // Modal All Projects
          showAllModal && createPortal(
            React.createElement("div", {
              onClick: () => setShowAllModal(false),
              className: `fixed inset-0 z-[100] flex items-center justify-center p-4 ${isMobileView ? 'pt-20 pb-4' : 'pt-24'} bg-black/60 backdrop-blur-sm transition-opacity`
            },
              React.createElement("div", {
                onClick: (e) => e.stopPropagation(),
                className: `relative w-full ${isMobileView ? 'max-w-[380px] w-[calc(100vw-2rem)] h-[85vh]' : 'max-w-5xl h-[85vh]'} flex flex-col overflow-hidden rounded-3xl shadow-2xl ${actualTheme === 'dark' ? `${theme.darkBg} border border-white/10` : 'bg-slate-50 border border-slate-200'}`
              },
                // Header Pop-up
                React.createElement("div", { className: `flex items-center justify-between ${isMobileView ? 'p-4' : 'p-6'} border-b shrink-0 ${actualTheme === 'dark' ? 'border-white/10' : 'border-slate-200'}` },
                  React.createElement("h3", { className: `font-bold ${isMobileView ? 'text-xl' : 'text-2xl'} ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'}` }, `Semua Project ${activeFilter === 'All' ? '' : `- ${activeFilter}`}`),
                  React.createElement("button", {
                    onClick: () => setShowAllModal(false),
                    className: `p-2 rounded-full transition-colors ${actualTheme === 'dark' ? 'hover:bg-white/10 text-gray-400' : 'hover:bg-slate-200 text-slate-500'}`
                  },
                    React.createElement(X, { size: isMobileView ? 20 : 24 })
                  )
                ),

                // Body Pop-up
                React.createElement("div", { className: `overflow-y-auto ${isMobileView ? 'p-4' : 'p-6 lg:p-8'} hide-scrollbar flex-1` },
                  React.createElement("div", { className: `grid ${isMobileView ? 'gap-4 grid-cols-1' : 'gap-6 sm:grid-cols-2 lg:grid-cols-3'}` },
                    filteredProjects.length > 0 ? (
                      filteredProjects.map((project) => renderProjectCard(project, true))
                    ) : (
                      React.createElement("div", { className: `col-span-full w-full p-8 text-center border-dashed border-2 rounded-lg ${actualTheme === 'dark' ? 'border-white/20 text-gray-400' : 'border-slate-300 text-slate-500'}` },
                        "Belum ada proyek dengan filter ini."
                      )
                    )
                  )
                )
              )
            ),
            document.body
          ),

          

          // Lightbox Modal for Zooming Images
          lightboxImg && createPortal(
            React.createElement("div", {
              onClick: () => {
                setLightboxImg(null);
                setZoomScale(1);
                setPanPos({ x: 0, y: 0 });
              },
              className: "fixed inset-0 z-[120] bg-black/75 backdrop-blur-xl flex flex-col items-center justify-center p-4 select-none"
            },
              // Close Button (Top Right)
              React.createElement("button", {
                onClick: () => {
                  setLightboxImg(null);
                  setZoomScale(1);
                  setPanPos({ x: 0, y: 0 });
                },
                className: "absolute top-4 right-4 w-10 h-10 rounded-full bg-black/55 hover:bg-white/15 text-white flex items-center justify-center transition-all z-30 border border-white/10 backdrop-blur-md shadow-lg",
                title: "Close"
              }, React.createElement(X, { size: 20 })),

              // Zoom Control Panel (Bottom Right Vertical Stack)
              React.createElement("div", {
                onClick: (e) => e.stopPropagation(),
                className: "absolute bottom-6 right-6 flex flex-col gap-1.5 z-30 bg-black/55 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 shadow-2xl items-center"
              },
                // Zoom In Button
                React.createElement("button", {
                  onClick: () => {
                    setZoomScale(prev => Math.min(4, prev + 0.5));
                  },
                  className: "w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 active:scale-95 text-white flex items-center justify-center transition-all",
                  title: "Zoom In"
                }, React.createElement(ZoomIn, { size: 16 })),
                // Zoom Out Button
                React.createElement("button", {
                  onClick: () => {
                    const newScale = Math.max(1, zoomScale - 0.5);
                    setZoomScale(newScale);
                    if (newScale === 1) setPanPos({ x: 0, y: 0 });
                  },
                  className: "w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 active:scale-95 text-white flex items-center justify-center transition-all",
                  title: "Zoom Out"
                }, React.createElement(ZoomOut, { size: 16 })),
                // Reset Zoom Button (RotateCcw Icon)
                React.createElement("button", {
                  onClick: () => {
                    setZoomScale(1);
                    setPanPos({ x: 0, y: 0 });
                  },
                  className: "w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 active:scale-95 text-white flex items-center justify-center transition-all border border-white/5",
                  title: "Reset Zoom"
                }, React.createElement(RotateCcw, { size: 14 }))
              ),

              // Floating Left Navigation Button
              (selectedProject.images && selectedProject.images.length > 1) && React.createElement("button", {
                onClick: (e) => {
                  e.stopPropagation();
                  setActiveImgIdx(prev => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
                  setZoomScale(1);
                  setPanPos({ x: 0, y: 0 });
                },
                className: "absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 text-white flex items-center justify-center transition-all z-30 backdrop-blur-md border border-white/10 shadow-lg"
              }, React.createElement(ChevronLeft, { size: 24 })),

              // Floating Right Navigation Button
              (selectedProject.images && selectedProject.images.length > 1) && React.createElement("button", {
                onClick: (e) => {
                  e.stopPropagation();
                  setActiveImgIdx(prev => (prev + 1) % selectedProject.images.length);
                  setZoomScale(1);
                  setPanPos({ x: 0, y: 0 });
                },
                className: "absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 text-white flex items-center justify-center transition-all z-30 backdrop-blur-md border border-white/10 shadow-lg"
              }, React.createElement(ChevronRight, { size: 24 })),

              // Image container with pan+zoom
              React.createElement("div", {
                onClick: (e) => {
                  e.stopPropagation();
                  if (e.target === e.currentTarget) {
                    setLightboxImg(null);
                    setZoomScale(1);
                    setPanPos({ x: 0, y: 0 });
                  }
                },
                onMouseDown: (e) => {
                  if (zoomScale > 1) {
                    e.preventDefault();
                    setIsPanning(true);
                    lightboxDragRef.current = false;
                    panStart.current = { x: e.clientX, y: e.clientY };
                    panOrigin.current = { x: panPos.x, y: panPos.y };
                  }
                },
                onMouseMove: (e) => {
                  if (isPanning && zoomScale > 1) {
                    const dx = e.clientX - panStart.current.x;
                    const dy = e.clientY - panStart.current.y;
                    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
                      lightboxDragRef.current = true;
                    }
                    setPanPos({
                      x: panOrigin.current.x + dx,
                      y: panOrigin.current.y + dy
                    });
                  }
                },
                onMouseUp: () => {
                  setIsPanning(false);
                  setTimeout(() => {
                    lightboxDragRef.current = false;
                  }, 50);
                },
                onMouseLeave: () => {
                  setIsPanning(false);
                  setTimeout(() => {
                    lightboxDragRef.current = false;
                  }, 50);
                },
                onTouchStart: (e) => {
                  if (zoomScale > 1 && e.touches.length === 1) {
                    setIsPanning(true);
                    lightboxDragRef.current = false;
                    const touch = e.touches[0];
                    panStart.current = { x: touch.clientX, y: touch.clientY };
                    panOrigin.current = { x: panPos.x, y: panPos.y };
                  }
                },
                onTouchMove: (e) => {
                  if (isPanning && zoomScale > 1 && e.touches.length === 1) {
                    const touch = e.touches[0];
                    const dx = touch.clientX - panStart.current.x;
                    const dy = touch.clientY - panStart.current.y;
                    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
                      lightboxDragRef.current = true;
                    }
                    setPanPos({
                      x: panOrigin.current.x + dx,
                      y: panOrigin.current.y + dy
                    });
                  }
                },
                onTouchEnd: () => {
                  setIsPanning(false);
                  setTimeout(() => {
                    lightboxDragRef.current = false;
                  }, 50);
                },
                className: "w-full h-full flex items-center justify-center overflow-hidden p-8 touch-none",
                style: { cursor: zoomScale > 1 ? (isPanning ? 'grabbing' : 'grab') : 'default' }
              },
                React.createElement("img", {
                  src: (selectedProject.images && selectedProject.images.length > 0) ? (selectedProject.images[activeImgIdx].url || selectedProject.images[activeImgIdx]) : selectedProject.image,
                  alt: "Zoomed view",
                  draggable: false,
                  onClick: (e) => {
                    if (lightboxDragRef.current) return;
                    if (zoomScale === 1) {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const centerX = rect.left + rect.width / 2;
                      const centerY = rect.top + rect.height / 2;
                      const dx = e.clientX - centerX;
                      const dy = e.clientY - centerY;
                      const newScale = 2.5;
                      setZoomScale(newScale);
                      setPanPos({
                        x: -dx * (newScale - 1),
                        y: -dy * (newScale - 1)
                      });
                    } else {
                      setZoomScale(1);
                      setPanPos({ x: 0, y: 0 });
                    }
                  },
                  style: {
                    transform: `translate(${panPos.x}px, ${panPos.y}px) scale(${zoomScale})`,
                    transition: isPanning ? 'none' : 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    maxHeight: "85vh",
                    maxWidth: "85vw",
                    objectFit: "contain",
                    userSelect: "none",
                    pointerEvents: "auto",
                    cursor: zoomScale === 1 ? 'zoom-in' : (isPanning ? 'grabbing' : 'grab')
                  }
                })
              )
            ),
            document.body
          )
        )
      )
    );
    };

    // 8. KOMPONEN ACTIVITIES & MOMENT SECTION
    // ==========================================
    const CertificateSection = ({ actualTheme, theme, isMobileView, activePalette, activeSection, language }) => {
      const activeColor = activePalette ? paletteColors[activePalette] : '#847BFF';
      const [activeFilter, setActiveFilter] = useState('All');
      const [currentPage, setCurrentPage] = useState(1);
      const [selectedCertificate, setSelectedCertificate] = useState(null);
      const [activeDetailTab, setActiveDetailTab] = useState('overview');
      const [currentCertImageIndex, setCurrentCertImageIndex] = useState(0);

      useEffect(() => {
        if (selectedCertificate) {
          setActiveDetailTab('overview');
          setCurrentCertImageIndex(0);
        }
      }, [selectedCertificate]);

      useEffect(() => {
        if (activeSection !== 'Certificate') {
          const timer = setTimeout(() => {
            setSelectedCertificate(null);
            setActiveFilter('All');
            setCurrentPage(1);
            setActiveDetailTab('overview');
            setCurrentCertImageIndex(0);
          }, 800);
          return () => clearTimeout(timer);
        }
      }, [activeSection]);

      const detailScrollRef = useRef(null);
      const tabBarRef = useRef(null);

      useEffect(() => {
        if (detailScrollRef.current && tabBarRef.current) {
          const targetScrollTop = tabBarRef.current.offsetTop;
          if (detailScrollRef.current.scrollTop > targetScrollTop) {
            detailScrollRef.current.scrollTo({ top: targetScrollTop, behavior: 'smooth' });
          }
        }
      }, [activeDetailTab]);
      const [activeImgIdx, setActiveImgIdx] = useState(0);

      // Swipe logic for modal image carousel
      const [touchStartPos, setTouchStartPos] = useState(null);
      const [touchEndPos, setTouchEndPos] = useState(null);
      const minSwipeDist = 50;
      
      const handleTouchStart = (e) => {
        setTouchEndPos(null);
        setTouchStartPos(e.targetTouches[0].clientX);
      };
      
      const handleTouchMove = (e) => {
        setTouchEndPos(e.targetTouches[0].clientX);
      };
      
      const handleTouchEnd = () => {
        if (!touchStartPos || !touchEndPos) return;
        const distance = touchStartPos - touchEndPos;
        const isLeftSwipe = distance > minSwipeDist;
        const isRightSwipe = distance < -minSwipeDist;
        
        if (isLeftSwipe && selectedCertificate?.images?.length > 1) {
          setActiveImgIdx(prev => (prev + 1) % selectedCertificate.images.length);
        }
        if (isRightSwipe && selectedCertificate?.images?.length > 1) {
          setActiveImgIdx(prev => (prev - 1 + selectedCertificate.images.length) % selectedCertificate.images.length);
        }
      };

      const wheelTimeout = useRef(null);
      const handleWheel = (e) => {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 30) {
          if (wheelTimeout.current) return;
          
          if (e.deltaX > 0 && selectedCertificate?.images?.length > 1) {
            setActiveImgIdx(prev => (prev + 1) % selectedCertificate.images.length);
          } else if (e.deltaX < 0 && selectedCertificate?.images?.length > 1) {
            setActiveImgIdx(prev => (prev - 1 + selectedCertificate.images.length) % selectedCertificate.images.length);
          }
          
          wheelTimeout.current = setTimeout(() => {
            wheelTimeout.current = null;
          }, 600);
        }
      };

      const [showAllModal, setShowAllModal] = useState(false);
      const [lightboxImg, setLightboxImg] = useState(null);
      const [zoomScale, setZoomScale] = useState(1);
      const [panPos, setPanPos] = useState({ x: 0, y: 0 });
      const [isPanning, setIsPanning] = useState(false);
      const panStart = useRef({ x: 0, y: 0 });
      const panOrigin = useRef({ x: 0, y: 0 });
      const isAnimating = useRef(false);
      const lightboxDragRef = useRef(false);

      // --- Body Scroll Lock ---
      useEffect(() => {
        if (showAllModal || selectedCertificate || lightboxImg) {
          toggleScrollLock(true);
        } else {
          toggleScrollLock(false);
        }
        return () => {
          toggleScrollLock(false);
        };
      }, [showAllModal, selectedCertificate, lightboxImg]);

      // --- Escape & Arrow Keys to Navigate / Close Modals ---
      useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.key === 'Escape') {
            if (lightboxImg) {
              setLightboxImg(null);
              setZoomScale(1);
              setPanPos({ x: 0, y: 0 });
            } else if (selectedCertificate) {
              setSelectedCertificate(null);
            } else if (showAllModal) {
              setShowAllModal(false);
            }
          } else if (selectedCertificate && selectedCertificate.images && selectedCertificate.images.length > 1) {
            if (e.key === 'ArrowRight') {
              setActiveImgIdx(prev => (prev + 1) % selectedCertificate.images.length);
              setZoomScale(1);
              setPanPos({ x: 0, y: 0 });
            } else if (e.key === 'ArrowLeft') {
              setActiveImgIdx(prev => (prev - 1 + selectedCertificate.images.length) % selectedCertificate.images.length);
              setZoomScale(1);
              setPanPos({ x: 0, y: 0 });
            }
          }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
      }, [lightboxImg, selectedCertificate, showAllModal]);

      // Count categories and build filter tabs
      const categoryCounts = {};
      certificatesData.forEach(p => {
        categoryCounts[p.organizer] = (categoryCounts[p.organizer] || 0) + 1;
      });
      const allCategories = ['All', ...Object.keys(categoryCounts)];
      
      const filteredCertificates = activeFilter === 'All' 
        ? certificatesData 
        : certificatesData.filter(p => p.organizer === activeFilter);

      const currentCertIndex = selectedCertificate ? filteredCertificates.findIndex(c => c.id === selectedCertificate.id) : -1;

      const getCategoryStyle = (category) => {
        switch (category) {
          case 'Data Visualization':
            return {
              bg: 'bg-emerald-100 dark:bg-emerald-500/10',
              text: 'text-emerald-600 dark:text-emerald-400',
              icon: '📊'
            };
          case 'Data Management':
            return {
              bg: 'bg-amber-100 dark:bg-amber-500/10',
              text: 'text-amber-600 dark:text-amber-400',
              icon: '💾'
            };
          case 'Automation':
            return {
              bg: 'bg-blue-100 dark:bg-blue-500/10',
              text: 'text-blue-600 dark:text-blue-400',
              icon: '⚙️'
            };
          case 'Mentoring':
            return {
              bg: 'bg-purple-100 dark:bg-purple-500/10',
              text: 'text-purple-600 dark:text-purple-400',
              icon: '🎓'
            };
          default:
            return {
              bg: 'bg-indigo-100 dark:bg-indigo-500/10',
              text: 'text-indigo-600 dark:text-indigo-400',
              icon: '📁'
            };
        }
      };

      const getCertificateYear = (certificate) => {
        if (certificate.date) {
          const parts = certificate.date.trim().split(' ');
          const lastPart = parts[parts.length - 1];
          if (/^\d{4}$/.test(lastPart)) {
            return lastPart;
          }
        }
        return '2024';
      };

      const getCertificateMetric = (proj) => {
        if (proj.comingSoon) return { value: language === 'ID' ? 'Segera Hadir' : 'Coming Soon', label: language === 'ID' ? 'Segera Hadir' : 'Coming Soon' };
        if (proj.id === 1) return { value: language === 'ID' ? '80% Lebih Cepat' : '80% Faster', label: language === 'ID' ? 'Efisiensi' : 'Efficiency' };
        if (proj.id === 2) return { value: 'Live Link', label: 'Status' };
        if (proj.id === 3) return { value: language === 'ID' ? '42 Laporan' : '42 Reports', label: language === 'ID' ? 'Konsolidasi' : 'Consolidation' };
        if (proj.id === 4) return { value: language === 'ID' ? '90% Lebih Cepat' : '90% Faster', label: 'TAT Reduction' };
        
        if (proj.category === 'Automation') return { value: language === 'ID' ? 'Otomatis' : 'Automatic', label: language === 'ID' ? 'Sistem' : 'System' };
        if (proj.category === 'Data Visualization') return { value: language === 'ID' ? 'Interaktif' : 'Interactive', label: 'Dashboard' };
        return { value: 'Live', label: 'Status' };
      };

      const getFolderConfig = (category) => {
        switch (category) {
          case 'header':
            return {
              cardBg: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              backBg: '#1e3a8a',
              frontBg: '#3b82f6',
              iconType: 'default'
            };
          case 'Data Visualization':
            return {
              cardBg: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              backBg: '#065f46',
              frontBg: '#10b981',
              iconType: 'chart'
            };
          case 'Data Management':
            return {
              cardBg: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              backBg: '#92400e',
              frontBg: '#f59e0b',
              iconType: 'database'
            };
          case 'Automation':
            return {
              cardBg: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              backBg: '#1e3a8a',
              frontBg: '#3b82f6',
              iconType: 'zap'
            };
          case 'Mentoring':
            return {
              cardBg: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
              backBg: '#5b21b6',
              frontBg: '#8b5cf6',
              iconType: 'users'
            };
          default:
            return {
              cardBg: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
              backBg: '#5b21b6',
              frontBg: '#8b5cf6',
              iconType: 'users'
            };
        }
      };
 
      const CustomFolderIcon = ({ category, isComingSoon }) => {
        const config = getFolderConfig(category);
        
        // Helper to render icon on folder face
        const renderFolderFaceIcon = () => {
          switch (config.iconType) {
            case 'chart':
              return React.createElement("svg", { viewBox: "0 0 24 24", className: "w-3 h-3 fill-current text-white/95" },
                React.createElement("rect", { x: "3", y: "11", width: "4", height: "10", rx: "1" }),
                React.createElement("rect", { x: "10", y: "5", width: "4", height: "16", rx: "1" }),
                React.createElement("rect", { x: "17", y: "14", width: "4", height: "7", rx: "1", className: "opacity-60" })
              );
            case 'database':
              return React.createElement("svg", { viewBox: "0 0 24 24", className: "w-3 h-3 fill-current text-white/95" },
                React.createElement("path", { d: "M18 6c0 1.66-2.69 3-6 3S6 7.66 6 6s2.69-3 6-3 6 1.34 6 3z" }),
                React.createElement("path", { d: "M18 11c0 1.66-2.69 3-6 3s-6-1.34-6-3V8.5c0 1.66 2.69 3 6 3s6-1.34 6-3V11z", className: "opacity-75" }),
                React.createElement("path", { d: "M18 16c0 1.66-2.69 3-6 3s-6-1.34-6-3v-2.5c0 1.66 2.69 3 6 3s6-1.34 6-3V16z", className: "opacity-50" })
              );
            case 'zap':
              return React.createElement("svg", { viewBox: "0 0 24 24", className: "w-3 h-3 fill-current text-white/95" },
                React.createElement("path", { d: "M11 21h.01L18 11.5h-5V3L6 12.5h5V21z" })
              );
            case 'users':
            default:
              return React.createElement("svg", { viewBox: "0 0 24 24", className: "w-3.5 h-3.5 fill-current text-white/95" },
                // Back person (translucent)
                React.createElement("circle", { cx: "16", cy: "8", r: "3", className: "opacity-55" }),
                React.createElement("path", { d: "M16 13c-2.2 0-4.5 1.1-4.5 3v.5h9v-.5c0-1.9-2.3-3-4.5-3z", className: "opacity-55" }),
                // Front person (solid)
                React.createElement("circle", { cx: "9", cy: "9", r: "3.5" }),
                React.createElement("path", { d: "M9 14.5c-2.7 0-5.5 1.3-5.5 3.5v.5h11v-.5c0-2.2-2.8-3.5-5-3.5z" })
              );
          }
        };

        return React.createElement("div", { 
          className: `w-12 h-12 rounded-[14px] shrink-0 flex items-center justify-center select-none transition-all duration-300 shadow-md border border-white/10 relative overflow-hidden ${
            isComingSoon ? '' : 'group-hover:scale-105'
          }`,
          style: { background: config.cardBg }
        },
          // Diagonal glossy background highlight
          React.createElement("div", { 
            className: "absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 pointer-events-none" 
          }),

          // 3D Folder wrapper
          React.createElement("div", { className: "relative w-[34px] h-[28px] flex flex-col justify-end mt-[2px]" },
            // Back tab folder layer
            React.createElement("div", { 
              className: "absolute top-0 left-[1px] w-[15px] h-[6px] rounded-t-[3.5px]",
              style: { backgroundColor: config.backBg }
            }),
            
            // Slanted connector for tab
            React.createElement("div", { 
              className: "absolute top-0 left-[12px] w-[9px] h-[6px]",
              style: { 
                backgroundColor: config.backBg,
                clipPath: 'polygon(0 0, 100% 100%, 0 100%)' 
              }
            }),

            // Back main panel top edge
            React.createElement("div", { 
              className: "absolute top-[2px] left-[1px] right-[1px] h-[6px] rounded-t-[3.5px]",
              style: { backgroundColor: config.backBg }
            }),

            // White paper sheet popping out (animates on hover)
            React.createElement("div", { 
              className: `absolute top-[3.5px] left-[4px] right-[4px] h-[12px] bg-white rounded-t-[3px] z-10 transition-transform duration-300 shadow-sm ${
                isComingSoon ? '' : 'group-hover:-translate-y-1'
              }`
            }),
            
            // Front main folder body
            React.createElement("div", { 
              className: "relative w-full h-[21px] rounded-[5.5px] z-20 flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_1.5px_3px_rgba(0,0,0,0.15)]",
              style: { backgroundColor: config.frontBg }
            },
              // Render category-specific icon inside folder body
              renderFolderFaceIcon()
            )
          )
        );
      };

      const renderCertificateRow = (certificate, totalInPage) => {
        const catStyle = getCategoryStyle(certificate.category);
        const metric = getCertificateMetric(certificate);
        const year = getCertificateYear(certificate);
        const isComingSoon = certificate.comingSoon === true;

        return React.createElement("div", {
          key: certificate.id,
          onClick: () => {
            if (isComingSoon) return;
            setSelectedCertificate(certificate);
          },
          className: `w-full h-full py-2 sm:py-3 px-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b last:border-b-0 transition-all duration-300 group ${
            isComingSoon ? 'cursor-default relative overflow-hidden' : 'cursor-pointer hover:bg-slate-50/80 dark:hover:bg-white/5'
          } ${actualTheme === 'dark' ? 'border-white/5' : 'border-slate-100'}`,
          style: { '--hover-color': activeColor }
        },
          // Left Group (Icon + Title & Details)
          React.createElement("div", { className: "flex items-start gap-4 flex-1 min-w-0" },
            // Icon (Organizer Logo)
            React.createElement("div", { className: "w-12 h-12 rounded-[14px] shrink-0 bg-white border border-slate-200 dark:border-white/10 flex items-center justify-center overflow-hidden shadow-sm" },
              React.createElement("img", {
                src: certificate.logo || "006. Aset Ceritificate/Rakamin Academy.webp",
                alt: "Organizer Logo",
                className: "w-full h-full object-contain scale-[1.15]"
              })
            ),
            
            // Text Content
            React.createElement("div", { className: "flex-1 min-w-0 text-left" },
              // Title
              React.createElement("h3", { 
                className: `font-bold text-[15px] sm:text-[16px] leading-snug tracking-tight transition-colors ${
                  actualTheme === 'dark' 
                    ? `text-white ${isComingSoon ? '' : 'group-hover:text-[var(--hover-color)]'}` 
                    : `text-slate-900 ${isComingSoon ? '' : 'group-hover:text-[var(--hover-color)]'}`
                }` 
              }, language === 'ID' ? certificate.title : (certificate.titleEN || certificate.title)),
              
              // Subtitle (Organizer & Credential)
              React.createElement("div", { className: "flex flex-wrap items-center gap-2 sm:gap-2.5 mt-1.5" },
                React.createElement("p", { 
                  className: `text-xs sm:text-[13px] font-medium leading-relaxed ${
                    actualTheme === 'dark' ? 'text-gray-400' : 'text-slate-500'
                  }`
                }, certificate.organizer || certificate.category),
                
                // Separator Dot
                !isComingSoon && React.createElement("span", { 
                  className: `w-1 h-1 rounded-full ${actualTheme === 'dark' ? 'bg-white/20' : 'bg-slate-300'}` 
                }),
                
                // Credential Link
                !isComingSoon && React.createElement("a", {
                  href: certificate.credentialUrl || "#",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  onClick: (e) => {
                    e.stopPropagation();
                    if (!certificate.credentialUrl) {
                      e.preventDefault();
                      alert('Tautan Credential belum tersedia. Anda bisa menambahkannya di data certificate.credentialUrl');
                    }
                  },
                  className: `flex items-center gap-1 text-[11px] sm:text-[12px] font-medium transition-colors hover:underline underline-offset-[3px] ${
                    actualTheme === 'dark' 
                      ? 'text-gray-400 hover:text-[var(--hover-color)]' 
                      : 'text-slate-500 hover:text-[var(--hover-color)]'
                  }`
                },
                  "Credential",
                  React.createElement(ExternalLink, { size: 10, className: "ml-[1px]" })
                )
              )
            )
          ),

          // Right Group (Year)
          React.createElement("div", { 
            className: "flex sm:flex-col items-baseline sm:items-end justify-between sm:justify-center gap-1 shrink-0 sm:text-right border-t sm:border-t-0 pt-3 sm:pt-0 border-dashed border-slate-200 dark:border-white/5" 
          },
            // Year
            !isComingSoon && React.createElement("span", { 
              className: `text-[11px] font-semibold tracking-wide ${
                actualTheme === 'dark' ? 'text-gray-500' : 'text-slate-400'
              }`
            }, certificate.date || year)
          ),

          // Frosted glass overlay for Coming Soon certificates
          isComingSoon && React.createElement("div", {
            className: `absolute inset-0 z-20 flex items-center justify-end pr-4 sm:pr-6 backdrop-blur-[1.5px] bg-white/20 dark:bg-black/20`
          },
            React.createElement("div", {
              className: `flex items-center gap-1.5 px-3 py-1.5 rounded-xl border shadow-sm text-[11px] font-bold tracking-wider select-none ${
                actualTheme === 'dark'
                  ? 'bg-zinc-900/90 border-white/10 text-zinc-300 shadow-black/25'
                  : 'bg-white/95 border-slate-200 text-slate-700 shadow-slate-200/50'
              }`
            },
              React.createElement(Lock, { size: 11, className: "shrink-0 opacity-80" }),
              language === 'ID' ? "Segera Hadir" : "Coming Soon"
            )
          )
        );
      };

      // Swipe logic for List Pagination
      const [listTouchStartPos, setListTouchStartPos] = useState(null);
      const [listTouchEndPos, setListTouchEndPos] = useState(null);
      
      const handleListTouchStart = (e) => {
        setListTouchEndPos(null);
        if (e.targetTouches && e.targetTouches.length > 0) {
          setListTouchStartPos(e.targetTouches[0].clientX);
        }
      };
      
      const handleListTouchMove = (e) => {
        if (e.targetTouches && e.targetTouches.length > 0) {
          setListTouchEndPos(e.targetTouches[0].clientX);
        }
      };
      
      const handleListTouchEnd = () => {
        if (!listTouchStartPos || !listTouchEndPos) return;
        const distance = listTouchStartPos - listTouchEndPos;
        
        if (selectedCertificate) {
          if (distance > 50 && currentCertIndex < filteredCertificates.length - 1) {
            setSelectedCertificate(filteredCertificates[currentCertIndex + 1]);
          } else if (distance < -50 && currentCertIndex > 0) {
            setSelectedCertificate(filteredCertificates[currentCertIndex - 1]);
          }
          return;
        }

        const totalItems = filteredCertificates.length;
        const maxPages = Math.max(1, Math.ceil(totalItems / 5));
        
        if (distance > 50 && currentPage < maxPages) {
          setCurrentPage(prev => Math.min(prev + 1, maxPages));
        }
        if (distance < -50 && currentPage > 1) {
          setCurrentPage(prev => Math.max(prev - 1, 1));
        }
      };

      const listWheelTimeout = useRef(null);
      const handleListWheel = (e) => {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 15) {
          if (listWheelTimeout.current) return;
          
          if (selectedCertificate) {
            if (e.deltaX > 0 && currentCertIndex < filteredCertificates.length - 1) {
              setSelectedCertificate(filteredCertificates[currentCertIndex + 1]);
            } else if (e.deltaX < 0 && currentCertIndex > 0) {
              setSelectedCertificate(filteredCertificates[currentCertIndex - 1]);
            }
            listWheelTimeout.current = setTimeout(() => { listWheelTimeout.current = null; }, 600);
            return;
          }

          const totalItems = filteredCertificates.length;
          const maxPages = Math.max(1, Math.ceil(totalItems / 5));
          
          if (e.deltaX > 0 && currentPage < maxPages) {
            setCurrentPage(prev => Math.min(prev + 1, maxPages));
          } else if (e.deltaX < 0 && currentPage > 1) {
            setCurrentPage(prev => Math.max(prev - 1, 1));
          }
          listWheelTimeout.current = setTimeout(() => { listWheelTimeout.current = null; }, 600);
        } else if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && Math.abs(e.deltaY) > 15 && !selectedCertificate) {
          if (listWheelTimeout.current) return;
          const direction = e.deltaY > 0 ? 1 : -1;
          window.dispatchEvent(new CustomEvent('swipeNavigate', { detail: { direction, from: 'certificate' } }));
          listWheelTimeout.current = setTimeout(() => { listWheelTimeout.current = null; }, 600);
        }
      };

      // Keyboard navigation
      useEffect(() => {
        if (!selectedCertificate) return;
        const handleKeyDown = (e) => {
          if (e.key === 'ArrowRight' && currentCertIndex < filteredCertificates.length - 1) {
            setSelectedCertificate(filteredCertificates[currentCertIndex + 1]);
          } else if (e.key === 'ArrowLeft' && currentCertIndex > 0) {
            setSelectedCertificate(filteredCertificates[currentCertIndex - 1]);
          }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
      }, [selectedCertificate, currentCertIndex, filteredCertificates]);

      return (
        React.createElement("section", { className: `scroll-mt-[72px] w-full pt-0 pb-0 lg:pt-0 lg:pb-0` },
          React.createElement("div", { className: `w-full flex flex-col ${isMobileView ? 'max-w-7xl px-4 sm:px-6 mx-auto' : 'md:max-w-none px-0 md:ml-0 md:mr-auto'}` },
            // Main List Card
            React.createElement("div", {
              onTouchStart: handleListTouchStart,
              onTouchMove: handleListTouchMove,
              onTouchEnd: handleListTouchEnd,
              onWheel: handleListWheel,
              className: `w-full md:h-[calc(100vh-142px)] rounded-3xl border shadow-sm p-5 sm:p-6 flex flex-col overflow-hidden overscroll-x-none transition-all duration-300 ${
                actualTheme === 'dark' ? `${theme.darkCard} border-white/10` : 'bg-white border-slate-200'
              }`
            },
              // Header of Card (Certificates Title)
              React.createElement("div", { className: "flex items-start gap-3 mb-4 pb-4 border-b text-left shrink-0 " + (actualTheme === 'dark' ? "border-white/5" : "border-slate-100") },
                selectedCertificate && React.createElement("button", {
                  onClick: () => setSelectedCertificate(null),
                  className: `mt-0.5 p-1.5 sm:p-2 rounded-full transition-all flex items-center justify-center border hover:-translate-x-1 shrink-0 ${
                    actualTheme === 'dark' 
                      ? 'bg-white/5 hover:bg-white/10 text-gray-200 border-white/10' 
                      : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 shadow-sm hover:shadow-md'
                  }`,
                  title: "Kembali"
                }, 
                  React.createElement(ArrowLeft, { size: 20 })
                ),
                React.createElement("div", { className: "flex flex-col gap-1.5 flex-1 min-w-0" },
                  React.createElement("h2", { className: `text-xl sm:text-2xl font-bold tracking-tight ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'}` },
                    "Course & ",
                    renderAccentSpan("Certificate", actualTheme, theme, activePalette)
                  ),
                  React.createElement("p", { className: `text-sm leading-relaxed ${actualTheme === 'dark' ? 'text-gray-400' : 'text-slate-500'}` },
                    language === 'ID' ? "Kumpulan proyek yang membangun pengalaman dan kemampuan profesional saya." : "A collection of certificates that built my experience and professional skills."
                  )
                )
              ),
 
              !selectedCertificate ? (
                React.createElement(React.Fragment, null,
              // Filter Tabs inside card (underlined style)
              React.createElement("div", { className: `flex gap-2 sm:gap-4 mb-2 overflow-x-auto overscroll-x-contain hide-scrollbar border-b shrink-0 ${actualTheme === 'dark' ? 'border-white/5' : 'border-slate-100'}` },
                allCategories.map(cat => {
                  const isActive = activeFilter === cat;
                  const count = cat === 'All' ? certificatesData.length : certificatesData.filter(p => p.organizer === cat).length;
                  return React.createElement("button", {
                    key: cat,
                    onClick: () => {
                      setActiveFilter(cat);
                      setCurrentPage(1);
                    },
                    className: `group relative pb-3 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors shrink-0 px-2 ${
                      isActive 
                        ? (actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight) 
                        : (actualTheme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-slate-500 hover:text-slate-900')
                    }`
                  },
                    `${cat} (${count})`,
                    React.createElement("span", {
                      className: `absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-300 ease-out ${
                        isActive ? 'w-full scale-100' : 'w-0 scale-0 group-hover:w-full group-hover:scale-100'
                      } ${actualTheme === 'dark' ? theme.accentBgDark : theme.accentBgLight}`
                    })
                  )
                })
              ),
 
              // IIFE or variables to calculate pagination and render scrollable rows container + fixed pagination controls
              (() => {
                const certificatesPerPage = 5;
                const totalPages = Math.ceil(filteredCertificates.length / certificatesPerPage);
                const indexOfLastCertificate = currentPage * certificatesPerPage;
                const indexOfFirstCertificate = indexOfLastCertificate - certificatesPerPage;
                const currentCertificates = filteredCertificates.slice(indexOfFirstCertificate, indexOfLastCertificate);
 
                return React.createElement(React.Fragment, null,
                  // Scrollable Rows Container (Always uses grid-rows-5 to keep row heights uniform across all pages)
                  React.createElement("div", { className: "grid grid-rows-5 flex-1 overflow-y-auto hide-scrollbar" },
                    currentCertificates.length > 0 ? (
                      currentCertificates.map(certificate => renderCertificateRow(certificate, currentCertificates.length))
                    ) : (
                      React.createElement("div", { className: `w-full py-12 text-center border-dashed border-2 rounded-2xl ${actualTheme === 'dark' ? 'border-white/10 text-gray-400' : 'border-slate-200 text-slate-500'}` },
                        "Belum ada sertifikat dengan filter ini."
                      )
                    )
                  ),
 
                  // Pagination Controls (outside scrollable area)
                  totalPages > 1 && React.createElement("div", { className: "flex items-center justify-center gap-4 mt-3 pt-3 border-t border-dashed border-slate-100 dark:border-white/5 shrink-0" },
                    // Previous Button
                    React.createElement("button", {
                      disabled: currentPage === 1,
                      onClick: () => setCurrentPage(prev => Math.max(prev - 1, 1)),
                      className: `w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        currentPage === 1 
                          ? 'opacity-35 cursor-not-allowed text-gray-400' 
                          : (actualTheme === 'dark' ? 'hover:bg-white/10 text-white' : 'hover:bg-slate-100 text-slate-700')
                      }`
                    }, React.createElement(ChevronLeft, { size: 16 })),
                    
                    // Dots Page Indicators
                    React.createElement("div", { className: "flex items-center gap-1.5" },
                      Array.from({ length: totalPages }).map((_, idx) => {
                        const pageNum = idx + 1;
                        const isActive = currentPage === pageNum;
                        return React.createElement("button", {
                          key: idx,
                          onClick: () => setCurrentPage(pageNum),
                          className: `h-1.5 rounded-full transition-all duration-300 ${
                            isActive 
                              ? `w-4 ${actualTheme === 'dark' ? theme.accentBgDark : theme.accentBgLight}` 
                              : `w-1.5 ${actualTheme === 'dark' ? theme.accentBgDark : theme.accentBgLight} opacity-50 hover:opacity-80`
                          }`
                        });
                      })
                    ),
 
                    // Next Button
                    React.createElement("button", {
                      disabled: currentPage === totalPages,
                      onClick: () => setCurrentPage(prev => Math.min(prev + 1, totalPages)),
                      className: `w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        currentPage === totalPages 
                          ? 'opacity-35 cursor-not-allowed text-gray-400' 
                          : (actualTheme === 'dark' ? 'hover:bg-white/10 text-white' : 'hover:bg-slate-100 text-slate-700')
                      }`
                    }, React.createElement(ChevronRight, { size: 16 }))
                  )
                );
              })()
            )
          ) : (
            // INLINE DETAIL VIEW
            React.createElement("div", { className: "flex flex-col flex-1 min-h-0 animate-in fade-in zoom-in-95 duration-300" },
              // Body
              React.createElement("div", { 
                ref: detailScrollRef,
                className: `relative flex flex-col flex-1 min-h-0 -mx-5 px-5 sm:-mx-6 sm:px-6 pb-2 sm:pb-4` 
              },
                React.createElement("div", { className: "flex flex-col flex-1 min-h-0 max-w-4xl w-full mx-auto" },
                  
                  // 1. Header (Centered)
                  React.createElement("div", { className: "flex flex-col items-center gap-3 text-center mt-2 sm:mt-4 mb-4 shrink-0" },
                    React.createElement("h3", { className: `font-extrabold text-xl sm:text-2xl lg:text-3xl leading-snug tracking-tight ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'}` }, language === 'ID' ? selectedCertificate.title : (selectedCertificate.titleEN || selectedCertificate.title)),
                    
                    // Badges row
                    React.createElement("div", { className: "flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-1" },
                      React.createElement("span", { 
                        className: `text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg ${
                          actualTheme === 'dark' ? 'bg-white/10 text-gray-200' : 'bg-slate-200 text-slate-800'
                        }` 
                      }, selectedCertificate.category),
                      
                      // Separator Dot
                      React.createElement("span", { 
                        className: `hidden sm:block w-1 h-1 rounded-full ${actualTheme === 'dark' ? 'bg-white/20' : 'bg-slate-300'}` 
                      }),

                      React.createElement("span", { className: `text-xs sm:text-sm font-medium ${actualTheme === 'dark' ? 'text-gray-300' : 'text-slate-600'}` }, selectedCertificate.organizer),
                      
                      // Separator Dot
                      React.createElement("span", { 
                        className: `w-1 h-1 rounded-full ${actualTheme === 'dark' ? 'bg-white/20' : 'bg-slate-300'}` 
                      }),

                      React.createElement("span", { className: `text-xs sm:text-sm ${actualTheme === 'dark' ? 'text-gray-400' : 'text-slate-500'}` }, selectedCertificate.date || '2024')
                    )
                  ),

                  // 2. The Certificate Image Showcase (Fills remaining space perfectly)
                  React.createElement("div", { 
                    className: "w-full flex-1 min-h-0 flex items-center justify-between mb-4 sm:mb-6 group"
                  },
                    // Left Arrow Container (Fixed width to keep image centered)
                    React.createElement("div", { className: "w-8 sm:w-12 flex justify-start shrink-0" },
                      currentCertIndex > 0 && React.createElement("button", {
                        onClick: (e) => {
                          e.stopPropagation();
                          setSelectedCertificate(filteredCertificates[currentCertIndex - 1]);
                        },
                        className: "p-1.5 sm:p-2 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
                      }, React.createElement(ChevronLeft, { size: 20 }))
                    ),

                    React.createElement("div", {
                      onClick: () => {
                        const imgToOpen = (selectedCertificate.images && selectedCertificate.images.length > 0) 
                          ? (selectedCertificate.images[currentCertImageIndex].url || selectedCertificate.images[currentCertImageIndex]) 
                          : selectedCertificate.image;
                        setLightboxImg(imgToOpen);
                        setZoomScale(1);
                        setPanPos({ x: 0, y: 0 });
                      },
                      className: "relative inline-block max-h-full max-w-[calc(100%-4rem)] sm:max-w-[calc(100%-6rem)] cursor-zoom-in transition-all duration-300 group/img"
                    },
                      React.createElement("img", { 
                        src: (selectedCertificate.images && selectedCertificate.images.length > 0) 
                          ? (selectedCertificate.images[currentCertImageIndex].url || selectedCertificate.images[currentCertImageIndex]) 
                          : selectedCertificate.image, 
                        alt: selectedCertificate.title, 
                        className: "block w-auto h-auto max-w-full max-h-[calc(100vh-450px)] opacity-95 group-hover/img:opacity-100 transition-opacity rounded-xl shadow-lg border " + (actualTheme === 'dark' ? 'border-white/10' : 'border-slate-200')
                      }),
                      
                      // Hover Tooltip overlay
                      React.createElement("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none" },
                        React.createElement("div", { className: "opacity-0 group-hover/img:opacity-100 translate-y-4 group-hover/img:translate-y-0 transition-all duration-300 bg-black/60 text-white backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg" },
                          React.createElement(ZoomIn, { size: 16 }),
                          "Click to zoom"
                        )
                      )
                    ),

                    // Right Arrow Container
                    React.createElement("div", { className: "w-8 sm:w-12 flex justify-end shrink-0" },
                      currentCertIndex < filteredCertificates.length - 1 && React.createElement("button", {
                        onClick: (e) => {
                          e.stopPropagation();
                          setSelectedCertificate(filteredCertificates[currentCertIndex + 1]);
                        },
                        className: "p-1.5 sm:p-2 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
                      }, React.createElement(ChevronRight, { size: 20 }))
                    )
                  ),

                  // 3. Footer / Actions
                  React.createElement("div", { className: "shrink-0 flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 sm:pt-4" },
                    // Left side: Tools
                    selectedCertificate.tech && selectedCertificate.tech.length > 0 ? (
                      React.createElement("div", { className: "flex flex-wrap items-center justify-center sm:justify-start gap-2" },
                        React.createElement("span", { className: `text-[11px] sm:text-xs font-semibold mr-1 sm:mr-2 ${actualTheme === 'dark' ? 'text-gray-400' : 'text-slate-500'}` }, "Tools Used:"),
                        selectedCertificate.tech.map(t => (
                          React.createElement("span", {
                            key: t,
                            className: `px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-[11px] font-bold border`,
                            style: {
                              backgroundColor: actualTheme === 'dark' ? `${activeColor}15` : `${activeColor}10`,
                              borderColor: actualTheme === 'dark' ? `${activeColor}30` : `${activeColor}20`,
                              color: activeColor
                            }
                          }, t)
                        ))
                      )
                    ) : React.createElement("div", null), // empty spacer

                    // Right side: Credential Link
                    selectedCertificate.credentialUrl && selectedCertificate.credentialUrl !== "#" && (
                      React.createElement("a", { 
                        href: selectedCertificate.credentialUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: `flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm hover:shadow-md shrink-0 ${
                          actualTheme === 'dark' 
                            ? 'bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 border border-blue-500/30' 
                            : 'bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200'
                        }` 
                      }, 
                        React.createElement(ExternalLink, { size: 14, className: "sm:w-4 sm:h-4", strokeWidth: 2 }),
                        "Verify Credential"
                      )
                    )
                  )
                )
              )
            )
          )
        ),
        // Modal All Certificates
          showAllModal && createPortal(
            React.createElement("div", {
              onClick: () => setShowAllModal(false),
              className: `fixed inset-0 z-[100] flex items-center justify-center p-4 ${isMobileView ? 'pt-20 pb-4' : 'pt-24'} bg-black/60 backdrop-blur-sm transition-opacity`
            },
              React.createElement("div", {
                onClick: (e) => e.stopPropagation(),
                className: `relative w-full ${isMobileView ? 'max-w-[380px] w-[calc(100vw-2rem)] h-[85vh]' : 'max-w-5xl h-[85vh]'} flex flex-col overflow-hidden rounded-3xl shadow-2xl ${actualTheme === 'dark' ? `${theme.darkBg} border border-white/10` : 'bg-slate-50 border border-slate-200'}`
              },
                // Header Pop-up
                React.createElement("div", { className: `flex items-center justify-between ${isMobileView ? 'p-4' : 'p-6'} border-b shrink-0 ${actualTheme === 'dark' ? 'border-white/10' : 'border-slate-200'}` },
                  React.createElement("h3", { className: `font-bold ${isMobileView ? 'text-xl' : 'text-2xl'} ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'}` }, `Semua Certificate ${activeFilter === 'All' ? '' : `- ${activeFilter}`}`),
                  React.createElement("button", {
                    onClick: () => setShowAllModal(false),
                    className: `p-2 rounded-full transition-colors ${actualTheme === 'dark' ? 'hover:bg-white/10 text-gray-400' : 'hover:bg-slate-200 text-slate-500'}`
                  },
                    React.createElement(X, { size: isMobileView ? 20 : 24 })
                  )
                ),

                // Body Pop-up
                React.createElement("div", { className: `overflow-y-auto ${isMobileView ? 'p-4' : 'p-6 lg:p-8'} hide-scrollbar flex-1` },
                  React.createElement("div", { className: `grid ${isMobileView ? 'gap-4 grid-cols-1' : 'gap-6 sm:grid-cols-2 lg:grid-cols-3'}` },
                    filteredCertificates.length > 0 ? (
                      filteredCertificates.map((certificate) => renderCertificateCard(certificate, true))
                    ) : (
                      React.createElement("div", { className: `col-span-full w-full p-8 text-center border-dashed border-2 rounded-lg ${actualTheme === 'dark' ? 'border-white/20 text-gray-400' : 'border-slate-300 text-slate-500'}` },
                        "Belum ada proyek dengan filter ini."
                      )
                    )
                  )
                )
              )
            ),
            document.body
          ),


          // Lightbox Modal for Zooming Images
          lightboxImg && createPortal(
            React.createElement("div", {
              onClick: () => {
                setLightboxImg(null);
                setZoomScale(1);
                setPanPos({ x: 0, y: 0 });
              },
              className: "fixed inset-0 z-[120] bg-black/75 backdrop-blur-xl flex flex-col items-center justify-center p-4 select-none"
            },
              // Close Button (Top Right)
              React.createElement("button", {
                onClick: () => {
                  setLightboxImg(null);
                  setZoomScale(1);
                  setPanPos({ x: 0, y: 0 });
                },
                className: "absolute top-4 right-4 w-10 h-10 rounded-full bg-black/55 hover:bg-white/15 text-white flex items-center justify-center transition-all z-30 border border-white/10 backdrop-blur-md shadow-lg",
                title: "Close"
              }, React.createElement(X, { size: 20 })),

              // Zoom Control Panel (Bottom Right Vertical Stack)
              React.createElement("div", {
                onClick: (e) => e.stopPropagation(),
                className: "absolute bottom-6 right-6 flex flex-col gap-1.5 z-30 bg-black/55 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 shadow-2xl items-center"
              },
                // Zoom In Button
                React.createElement("button", {
                  onClick: () => {
                    setZoomScale(prev => Math.min(4, prev + 0.5));
                  },
                  className: "w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 active:scale-95 text-white flex items-center justify-center transition-all",
                  title: "Zoom In"
                }, React.createElement(ZoomIn, { size: 16 })),
                // Zoom Out Button
                React.createElement("button", {
                  onClick: () => {
                    const newScale = Math.max(1, zoomScale - 0.5);
                    setZoomScale(newScale);
                    if (newScale === 1) setPanPos({ x: 0, y: 0 });
                  },
                  className: "w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 active:scale-95 text-white flex items-center justify-center transition-all",
                  title: "Zoom Out"
                }, React.createElement(ZoomOut, { size: 16 })),
                // Reset Zoom Button (RotateCcw Icon)
                React.createElement("button", {
                  onClick: () => {
                    setZoomScale(1);
                    setPanPos({ x: 0, y: 0 });
                  },
                  className: "w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 active:scale-95 text-white flex items-center justify-center transition-all border border-white/5",
                  title: "Reset Zoom"
                }, React.createElement(RotateCcw, { size: 14 }))
              ),

              // Floating Left Navigation Button
              (selectedCertificate?.images && selectedCertificate.images.length > 1) && React.createElement("button", {
                onClick: (e) => {
                  e.stopPropagation();
                  setActiveImgIdx(prev => (prev - 1 + selectedCertificate.images.length) % selectedCertificate.images.length);
                  setZoomScale(1);
                  setPanPos({ x: 0, y: 0 });
                },
                className: "absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 text-white flex items-center justify-center transition-all z-30 backdrop-blur-md border border-white/10 shadow-lg"
              }, React.createElement(ChevronLeft, { size: 24 })),

              // Floating Right Navigation Button
              (selectedCertificate?.images && selectedCertificate.images.length > 1) && React.createElement("button", {
                onClick: (e) => {
                  e.stopPropagation();
                  setActiveImgIdx(prev => (prev + 1) % selectedCertificate.images.length);
                  setZoomScale(1);
                  setPanPos({ x: 0, y: 0 });
                },
                className: "absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 text-white flex items-center justify-center transition-all z-30 backdrop-blur-md border border-white/10 shadow-lg"
              }, React.createElement(ChevronRight, { size: 24 })),

              // Image container with pan+zoom
              React.createElement("div", {
                onClick: (e) => {
                  e.stopPropagation();
                  if (e.target === e.currentTarget) {
                    setLightboxImg(null);
                    setZoomScale(1);
                    setPanPos({ x: 0, y: 0 });
                  }
                },
                onMouseDown: (e) => {
                  if (zoomScale > 1) {
                    e.preventDefault();
                    setIsPanning(true);
                    lightboxDragRef.current = false;
                    panStart.current = { x: e.clientX, y: e.clientY };
                    panOrigin.current = { x: panPos.x, y: panPos.y };
                  }
                },
                onMouseMove: (e) => {
                  if (isPanning && zoomScale > 1) {
                    const dx = e.clientX - panStart.current.x;
                    const dy = e.clientY - panStart.current.y;
                    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
                      lightboxDragRef.current = true;
                    }
                    setPanPos({
                      x: panOrigin.current.x + dx,
                      y: panOrigin.current.y + dy
                    });
                  }
                },
                onMouseUp: () => {
                  setIsPanning(false);
                  setTimeout(() => {
                    lightboxDragRef.current = false;
                  }, 50);
                },
                onMouseLeave: () => {
                  setIsPanning(false);
                  setTimeout(() => {
                    lightboxDragRef.current = false;
                  }, 50);
                },
                onTouchStart: (e) => {
                  if (zoomScale > 1 && e.touches.length === 1) {
                    setIsPanning(true);
                    lightboxDragRef.current = false;
                    const touch = e.touches[0];
                    panStart.current = { x: touch.clientX, y: touch.clientY };
                    panOrigin.current = { x: panPos.x, y: panPos.y };
                  }
                },
                onTouchMove: (e) => {
                  if (isPanning && zoomScale > 1 && e.touches.length === 1) {
                    const touch = e.touches[0];
                    const dx = touch.clientX - panStart.current.x;
                    const dy = touch.clientY - panStart.current.y;
                    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
                      lightboxDragRef.current = true;
                    }
                    setPanPos({
                      x: panOrigin.current.x + dx,
                      y: panOrigin.current.y + dy
                    });
                  }
                },
                onTouchEnd: () => {
                  setIsPanning(false);
                  setTimeout(() => {
                    lightboxDragRef.current = false;
                  }, 50);
                },
                className: "w-full h-full flex items-center justify-center overflow-hidden p-8 touch-none",
                style: { cursor: zoomScale > 1 ? (isPanning ? 'grabbing' : 'grab') : 'default' }
              },
                React.createElement("img", {
                  src: lightboxImg,
                  alt: "Zoomed view",
                  draggable: false,
                  onClick: (e) => {
                    if (lightboxDragRef.current) return;
                    if (zoomScale === 1) {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const centerX = rect.left + rect.width / 2;
                      const centerY = rect.top + rect.height / 2;
                      const dx = e.clientX - centerX;
                      const dy = e.clientY - centerY;
                      const newScale = 2.5;
                      setZoomScale(newScale);
                      setPanPos({
                        x: -dx * (newScale - 1),
                        y: -dy * (newScale - 1)
                      });
                    } else {
                      setZoomScale(1);
                      setPanPos({ x: 0, y: 0 });
                    }
                  },
                  style: {
                    transform: `translate(${panPos.x}px, ${panPos.y}px) scale(${zoomScale})`,
                    transition: isPanning ? 'none' : 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    maxHeight: "85vh",
                    maxWidth: "85vw",
                    objectFit: "contain",
                    userSelect: "none",
                    pointerEvents: "auto",
                    cursor: zoomScale === 1 ? 'zoom-in' : (isPanning ? 'grabbing' : 'grab')
                  }
                })
              )
            ),
            document.body
          )
        )
      )
    );
    };

    // 8. KOMPONEN ACTIVITIES & MOMENT SECTION
    // ==========================================
    const ActivitiesSection = ({ actualTheme, theme, isMobileView, activePalette }) => {
      const [activeIdx, setActiveIdx] = useState(0);
      const [isPaused, setIsPaused] = useState(false);

      // --- Touch Swipe Gestures for Mobile ---
      const touchStartX = useRef(0);
      const touchEndX = useRef(0);
      const isSwiping = useRef(false);

      const handleTouchStart = (e) => {
        touchStartX.current = e.targetTouches[0].clientX;
        isSwiping.current = false;
      };

      const handleTouchMove = (e) => {
        touchEndX.current = e.targetTouches[0].clientX;
        const diffX = Math.abs(touchStartX.current - touchEndX.current);
        if (diffX > 10) {
          isSwiping.current = true;
        }
      };

      const handleTouchEnd = () => {
        const diffX = touchStartX.current - touchEndX.current;
        const threshold = 50; // swipe threshold in px
        if (Math.abs(diffX) > threshold) {
          if (diffX > 0) {
            // Swipe Left -> Next
            setActiveIdx(prev => (prev + 1) % activitiesData.length);
          } else {
            // Swipe Right -> Prev
            setActiveIdx(prev => (prev - 1 + activitiesData.length) % activitiesData.length);
          }
        }
        touchStartX.current = 0;
        touchEndX.current = 0;
      };

      const handleSectionClick = () => {
        if (isSwiping.current) return;
        setIsPaused(!isPaused);
      };

      // Auto scroll timer
      useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
          setActiveIdx(prev => (prev + 1) % activitiesData.length);
        }, 5000);
        return () => clearInterval(interval);
      }, [isPaused]);

      const handlePrev = (e) => {
        e.stopPropagation();
        setActiveIdx(prev => (prev - 1 + activitiesData.length) % activitiesData.length);
      };

      const handleNext = (e) => {
        e.stopPropagation();
        setActiveIdx(prev => (prev + 1) % activitiesData.length);
      };

      // To make the queue: show the next items in the list (4 for mobile, 8 for desktop)
      const getQueueItems = () => {
        const items = [];
        const limit = isMobileView ? 4 : 8;
        for (let i = 1; i <= limit; i++) {
          const idx = (activeIdx + i) % activitiesData.length;
          items.push({ item: activitiesData[idx], index: idx });
        }
        return items;
      };

      const queue = getQueueItems();
      const current = activitiesData[activeIdx];
      const currentNumStr = String(activeIdx + 1).padStart(2, '0');
      const activeColor = activePalette ? paletteColors[activePalette] : '#847BFF';

      return (
        React.createElement("section", { 
          id: "activities", 
          onClick: handleSectionClick,
          onTouchStart: handleTouchStart,
          onTouchMove: handleTouchMove,
          onTouchEnd: handleTouchEnd,
          className: "scroll-mt-[72px] relative w-full h-[685px] sm:h-[725px] lg:h-[766px] overflow-hidden flex flex-col justify-end pt-0 pb-0 lg:pt-16 lg:pb-0 text-white bg-[#111] cursor-pointer" 
        },
          // Custom CSS animation for slide content entries
          React.createElement("style", null, `
            @keyframes fadeInUpCustom {
              from {
                opacity: 0;
                transform: translateY(24px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fade-in-up-custom {
              animation: fadeInUpCustom 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
            }
            @keyframes autoplayProgress {
              from { width: 0%; }
              to { width: 100%; }
            }
            .animate-autoplay-progress {
              animation: autoplayProgress 5000ms linear forwards;
            }
            .animate-autoplay-progress.paused {
              animation-play-state: paused;
            }
          `),

          // Stacked Background Images with Fade/Scale transition (blurred on mobile, sharp on desktop)
          React.createElement("div", { className: "absolute inset-0 z-0 overflow-hidden" },
            activitiesData.map((act, idx) => {
              const isActive = idx === activeIdx;
              return React.createElement("div", {
                key: `bg-${act.id}`,
                className: `absolute inset-0 transition-all duration-[1200ms] ease-in-out transform ${
                  isActive ? 'opacity-100 scale-105 pointer-events-auto' : 'opacity-0 scale-100 pointer-events-none'
                } ${isMobileView ? 'blur-[35px] scale-110 opacity-30' : ''}`
              },
                React.createElement("img", {
                  src: act.image,
                  alt: act.title,
                  className: "w-full h-full object-cover"
                })
              );
            }),
            // Combined linear gradients (vignette) to protect text readability on both bottom and left sides
            React.createElement("div", {
              className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-0 pointer-events-none"
            }),
            React.createElement("div", {
              className: "absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent z-0 pointer-events-none"
            })
          ),

          // Foreground Sharp Image (Mobile only - Edge-to-edge fit)
          isMobileView && React.createElement("div", { 
            className: "absolute top-0 left-0 w-full h-[320px] sm:h-[380px] z-10 overflow-hidden",
            style: {
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 45%, rgba(0, 0, 0, 0) 95%)',
              maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 45%, rgba(0, 0, 0, 0) 95%)'
            }
          },
            activitiesData.map((act, idx) => {
              const isActive = idx === activeIdx;
              return React.createElement("div", {
                key: `fg-${act.id}`,
                className: `absolute inset-0 transition-all duration-[1200ms] ease-in-out transform ${
                  isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`
              },
                React.createElement("img", {
                  src: act.image,
                  alt: act.title,
                  className: "w-full h-full object-cover object-top"
                })
              );
            })
          ),

          // Main Layout Content (Glassmorphic panel at the bottom on mobile, clean content grid on desktop)
          React.createElement("div", {
            className: "relative z-20 w-full max-w-7xl mx-auto grid grid-cols-1 gap-[40px] lg:flex lg:flex-col lg:gap-6 lg:items-stretch lg:justify-end -mt-24 lg:mt-auto lg:mb-0 pt-20 pb-8 lg:py-0 px-6 sm:px-8 lg:px-8"
          },
            // Dynamic blurred image background on mobile to blend with the main image
            isMobileView && React.createElement("div", {
              className: "absolute inset-0 z-0 overflow-hidden lg:hidden pointer-events-none",
              style: {
                WebkitMaskImage: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 100%)',
                maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 100%)'
              }
            },
              activitiesData.map((act, idx) => {
                const isActive = idx === activeIdx;
                return React.createElement("div", {
                  key: `details-bg-${act.id}`,
                  className: `absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`
                },
                  React.createElement("img", {
                    src: act.image,
                    alt: act.title,
                    className: "w-full h-full object-cover blur-[20px] scale-105 opacity-85"
                  })
                );
              }),
              // Stronger dark gradient overlay to ensure text readability on light images
              React.createElement("div", {
                className: "absolute inset-0 bg-gradient-to-t from-[#111]/90 via-black/60 to-transparent z-10"
              })
            ),

            // Left Column: Details panel
            React.createElement("div", {
              className: "relative z-10 lg:w-full flex flex-col items-start text-left gap-4 lg:mb-0"
            },
              React.createElement("div", {
                key: `meta-${current.id}`,
                className: "flex items-center gap-3 text-[11px] sm:text-xs font-black tracking-wider uppercase text-gray-200 animate-fade-in-up-custom"
              },
                React.createElement("span", { className: "flex items-center gap-1.5" },
                  React.createElement(MapPin, { size: 12 }), current.location
                ),
                React.createElement("span", { className: "opacity-40" }, "•"),
                React.createElement("span", null, language === 'ID' ? current.date : (current.dateEN || current.date)),
                React.createElement("span", { className: "opacity-40" }, "•"),
                React.createElement("button", {
                  onClick: (e) => {
                    e.stopPropagation();
                    setIsPaused(!isPaused);
                  },
                  className: "flex items-center justify-center w-5 h-5 rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/10 shadow-sm"
                },
                  isPaused ? React.createElement(Play, { size: 9, className: "fill-white" }) : React.createElement(Pause, { size: 9, className: "fill-white" })
                )
              ),
              React.createElement("h2", {
                key: `title-${current.id}`,
                className: "text-2xl sm:text-4xl lg:text-4xl font-bold leading-[1.1] tracking-tight drop-shadow-md text-white animate-fade-in-up-custom"
              }, language === 'ID' ? current.title : (current.titleEN || current.title)),
              React.createElement("p", {
                key: `desc-${current.id}`,
                className: "text-[11px] sm:text-xs lg:text-sm text-gray-300/90 leading-relaxed drop-shadow-sm max-w-md lg:max-w-[600px] mt-1.5 animate-fade-in-up-custom"
              }, language === 'ID' ? current.description : (current.descriptionEN || current.description))
            ),

            // Right Column: Next cards queue (swipable and scrollable horizontally on mobile)
            React.createElement("div", {
              className: "relative z-10 lg:w-full w-full overflow-x-auto overscroll-x-contain hide-scrollbar flex justify-start pl-0 lg:pl-0 lg:mb-0 pt-2 pb-4 -mt-2"
            },
              React.createElement("div", {
                className: "flex gap-4 sm:gap-6 lg:gap-4"
              },
                queue.map(({ item, index }) => (
                  React.createElement("div", {
                    key: `queue-${item.id}-${index}`,
                    onClick: (e) => { e.stopPropagation(); setActiveIdx(index); },
                    className: "shrink-0 w-[150px] sm:w-[240px] lg:w-[170px] h-[100px] sm:h-[150px] lg:h-[106px] snap-start relative rounded-[1.25rem] lg:rounded-[1rem] overflow-hidden border border-white/10 cursor-pointer shadow-lg group hover:scale-[1.03] hover:border-white/30 transition-all duration-300 bg-black/20"
                  },
                    React.createElement("img", {
                      src: item.image,
                      alt: language === 'ID' ? item.title : (item.titleEN || item.title),
                      className: "absolute inset-0 w-full h-full object-cover pointer-events-none group-hover:scale-105 transition-transform duration-700 ease-out"
                    }),
                    React.createElement("div", {
                      className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"
                    }),
                    React.createElement("div", {
                      className: "absolute bottom-0 left-0 w-full p-4 sm:p-5 lg:p-3.5 text-left pointer-events-none"
                    },
                      React.createElement("span", { className: "text-[9px] font-bold text-gray-300 block mb-1 uppercase tracking-wider" }, language === 'ID' ? item.location : (item.locationEN || item.location)),
                      React.createElement("h4", { className: "text-xs sm:text-sm lg:text-[11px] font-extrabold text-white line-clamp-2 leading-snug drop-shadow-sm" }, language === 'ID' ? item.title : (item.titleEN || item.title))
                    )
                  )
                ))
              )
            )
          ),
          React.createElement("div", {
            key: `progress-bar-${activeIdx}-${isPaused}`,
            className: `absolute bottom-[-1px] left-0 h-[3px] z-30 w-full animate-autoplay-progress ${isPaused ? 'paused' : ''}`,
            style: { backgroundColor: activeColor }
          })

        )
      );
    };

    // ==========================================
    // ==========================================
    // 8. KOMPONEN CONTACT SECTION
    // ==========================================
    const ContactSection = ({ actualTheme, theme, isMobileView, activePalette, language }) => {
      const [formData, setFormData] = useState({ name: '', email: '', message: '' });
      const [isSent, setIsSent] = useState(false);
      const [hoveredField, setHoveredField] = useState(null);
      const [focusedField, setFocusedField] = useState(null);

      const GmailIcon = () => React.createElement("img", {
        src: "009. Let's Connect/Gmail.png",
        alt: "Gmail",
        className: "w-[36px] h-[36px] object-contain pointer-events-none"
      });

      const WhatsappIcon = () => React.createElement("svg", {
        viewBox: "0 0 448 512",
        className: "w-[36px] h-[36px] fill-[#25D366]"
      }, 
        React.createElement("path", { d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" })
      );

      const LinkedinIcon = () => React.createElement("svg", {
        viewBox: "0 0 448 512",
        className: "w-[36px] h-[36px] fill-[#0077B5]"
      }, 
        React.createElement("path", { d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" })
      );

      const handleSubmit = (e) => {
        e.preventDefault();
        setIsSent(true);
        setTimeout(() => {
          setIsSent(false);
          setFormData({ name: '', email: '', message: '' });
        }, 3000);
      };

      const hoverColor = activePalette ? paletteColors[activePalette] : '';
      const inputBg = actualTheme === 'dark' ? 'bg-white/5 text-white placeholder-gray-500' : 'bg-slate-50 text-slate-900 placeholder-slate-400';

      const paletteGradients = {
        purple: ['#847BFF', '#a78bfa'],
        emerald: ['#34d399', '#6ee7b7'],
        ocean: ['#60a5fa', '#93c5fd'],
        rose: ['#fb7185', '#fda4af'],
        google: ['#4285F4', '#3367d6']
      };
      const colors = paletteGradients[activePalette] || ['#847BFF', '#c084fc'];

      const getFieldBorderColor = (field) => {
        if (focusedField === field) {
          return { borderColor: 'transparent' };
        }
        if (hoveredField === field) {
          return { borderColor: hoverColor };
        }
        return actualTheme === 'dark' ? { borderColor: 'rgba(255,255,255,0.1)' } : { borderColor: '#E2E8F0' };
      };

      const getFieldWrapperStyle = (field) => {
        if (focusedField === field) {
          return {
            background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
            boxShadow: `0 0 20px ${colors[0]}33`
          };
        }
        return {
          background: 'transparent',
          boxShadow: 'none'
        };
      };

      return React.createElement("section", { className: `scroll-mt-[72px] w-full py-12 lg:py-16` },
        React.createElement("div", { className: "text-center mb-6 lg:mb-10 flex flex-col items-center gap-2" },
          React.createElement("h2", { className: `font-bold tracking-tight mb-3 ${isMobileView ? 'text-3xl' : 'text-4xl lg:text-5xl'} ${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'}` },
            "Let's ",
            renderAccentSpan("Connect", actualTheme, theme, activePalette)
          ),
          React.createElement("p", { className: `max-w-2xl mx-auto px-4 leading-relaxed ${isMobileView ? 'text-sm' : 'text-base'} ${actualTheme === 'dark' ? 'text-gray-400' : 'text-slate-600'}` },
            language === 'ID' ? "Punya pertanyaan, ide kolaborasi, atau sekadar ingin berdiskusi tentang data dan teknologi? Saya selalu terbuka untuk berbagi pengalaman dan menjalin koneksi baru." : "Have questions, collaboration ideas, or just want to discuss data and technology? I am always open to sharing experiences and making new connections."
          )
        ),

        React.createElement("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 w-full" },
          React.createElement("div", { className: `grid ${isMobileView ? 'grid-cols-1 gap-4' : 'grid-cols-1 md:grid-cols-3 gap-6'} w-full` },
            [
              {
                title: "Gmail",
                desc: "Punya pertanyaan formal, penawaran proyek, atau peluang kerjasama? Hubungi saya langsung via Email.",
                subtextMobile: "achmadnoormansetiawan@gmail.com",
                url: "https://mail.google.com/mail/?view=cm&fs=1&to=achmadnoormansetiawan@gmail.com",
                bg: "bg-gradient-to-br from-[#ea4335] via-[#ea4335] to-[#c5221f] text-white shadow-xl border border-red-500/10",
                textColor: "text-red-100",
                btnTextColor: "text-[#ea4335]",
                btnText: "Kirim Email",
                Icon: GmailIcon,
                floatingBg: React.createElement("div", { className: "absolute inset-0 pointer-events-none overflow-hidden" },
                  React.createElement(Mail, { size: 54, className: "absolute top-8 left-8 text-white/5 -rotate-12 blur-[1px]" }),
                  React.createElement(Mail, { size: 72, className: "absolute top-4 right-12 text-white/10 rotate-12 blur-[0.5px]" }),
                  React.createElement(Mail, { size: 40, className: "absolute top-28 left-1/3 text-white/5 rotate-45" }),
                  React.createElement(Mail, { size: 58, className: "absolute top-24 right-4 text-white/5 -rotate-6 blur-[1.5px]" })
                )
              },
              {
                title: "WhatsApp",
                desc: "Ingin berdiskusi lebih cepat atau menanyakan sesuatu secara kasual? Chat langsung melalui WhatsApp.",
                subtextMobile: "+62 812-3060-7050",
                url: "https://wa.me/6281230607050",
                bg: "bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-xl border border-emerald-500/10",
                textColor: "text-emerald-100",
                btnTextColor: "text-[#25d366]",
                btnText: "Chat WhatsApp",
                Icon: WhatsappIcon,
                floatingBg: React.createElement("div", { className: "absolute inset-0 pointer-events-none overflow-hidden" },
                  React.createElement("svg", { viewBox: "0 0 448 512", className: "absolute top-12 left-20 w-24 h-24 fill-white opacity-[0.08] -rotate-12 blur-[1px]" },
                    React.createElement("path", { d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" })
                  ),
                  React.createElement("svg", { viewBox: "0 0 448 512", className: "absolute top-4 right-10 w-16 h-16 fill-white opacity-[0.12] rotate-12 blur-[0.5px]" },
                    React.createElement("path", { d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" })
                  )
                )
              },
              {
                title: "LinkedIn",
                desc: "Mari terhubung secara profesional, berkolaborasi, atau melihat rekam jejak karir dan portfolio saya.",
                subtextMobile: "achmadnoorman",
                url: "https://www.linkedin.com/in/achmadnoorman/",
                bg: "bg-gradient-to-br from-[#0077b5] to-[#005987] text-white shadow-xl border border-blue-500/10",
                textColor: "text-blue-100",
                btnTextColor: "text-[#0077b5]",
                btnText: "Kunjungi LinkedIn",
                Icon: LinkedinIcon,
                floatingBg: React.createElement("div", { className: "absolute inset-0 pointer-events-none overflow-hidden" },
                  React.createElement("svg", { viewBox: "0 0 448 512", className: "absolute top-12 left-20 w-24 h-24 fill-white opacity-[0.05] -rotate-12 blur-[1px]" },
                    React.createElement("path", { d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" })
                  ),
                  React.createElement("svg", { viewBox: "0 0 448 512", className: "absolute top-4 right-10 w-16 h-16 fill-white opacity-[0.08] rotate-12 blur-[0.5px]" },
                    React.createElement("path", { d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" })
                  )
                )
              }
            ].map((card, idx) => {
              if (isMobileView) {
                return React.createElement("a", {
                  key: idx,
                  href: card.url,
                  target: "_blank",
                  rel: "noreferrer",
                  className: `relative p-5 rounded-[1.5rem] overflow-hidden flex items-center justify-between h-[100px] transition-all duration-300 hover:scale-[1.01] active:scale-95 ${card.bg} cursor-pointer shadow-md group`
                },
                  // Subtle background logo
                  React.createElement("div", { className: "absolute right-8 top-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none scale-150 transform transition-transform group-hover:scale-[1.7]" },
                    React.createElement(card.Icon)
                  ),
                  // Left & Middle Content
                  React.createElement("div", { className: "flex items-center gap-4 relative z-10 text-left w-[calc(100%-48px)]" },
                    // Icon container
                    React.createElement("div", { className: "w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center shrink-0 p-2.5 border border-slate-100" },
                      React.createElement(card.Icon)
                    ),
                    // Texts
                    React.createElement("div", { className: "flex flex-col min-w-0" },
                      React.createElement("h3", { className: "font-extrabold text-[17px] text-white leading-tight" }, card.title),
                      React.createElement("p", { className: "text-[13px] text-white/90 mt-0.5 truncate pr-2 font-medium" }, card.subtextMobile)
                    )
                  ),
                  // Right Arrow button
                  React.createElement("div", { className: "w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 relative z-10 transition-transform group-hover:translate-x-1" },
                    React.createElement(ArrowRight, { size: 20, className: "text-white" })
                  )
                );
              }

              // Desktop View (Original)
              return React.createElement("div", {
                key: idx,
                className: `relative p-6 sm:p-8 rounded-[2rem] overflow-hidden flex flex-col justify-between h-[360px] sm:h-[380px] transition-all duration-300 hover:scale-[1.02] ${card.bg}`
              },
                card.floatingBg,
                React.createElement("div", { className: "flex flex-col h-full justify-between relative z-10 w-full text-left" },
                  React.createElement("div", { className: "flex flex-col" },
                    React.createElement("div", { className: "w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6 border border-slate-100 " + (card.title === "Gmail" ? "p-2.5" : "") },
                      React.createElement(card.Icon)
                    ),
                    React.createElement("h3", { className: "font-bold text-xl sm:text-2xl mb-2 text-white" }, card.title),
                    React.createElement("p", { className: `text-xs sm:text-sm leading-relaxed ${card.textColor}` }, card.desc)
                  ),
                  React.createElement("a", {
                    href: card.url,
                    target: "_blank",
                    rel: "noreferrer",
                    className: `bg-white hover:bg-slate-50 ${card.btnTextColor} font-bold py-3.5 px-6 rounded-2xl text-center text-xs sm:text-sm transition-all shadow-md w-full mt-6 block`
                  }, card.btnText)
                )
              );
            })
          )
        )
      );
    };
    // ==========================================
    // 10. KOMPONEN CTA SECTION (Let's Connect)
    // ==========================================
    const CTASection = ({ actualTheme, theme, isMobileView, activePalette }) => {
      const gradientClass = activePalette === 'purple' ? 'bg-gradient-to-r from-[#847BFF] to-[#A084FF]' : 
                            activePalette === 'emerald' ? 'bg-gradient-to-r from-emerald-400 to-teal-500' : 
                            activePalette === 'ocean' ? 'bg-gradient-to-r from-blue-400 to-indigo-500' : 
                            activePalette === 'google' ? 'bg-gradient-to-r from-[#4285F4] to-[#3367d6]' :
                            'bg-gradient-to-r from-rose-400 to-pink-500';

      const bgClass = actualTheme === 'dark' 
        ? 'bg-gradient-to-r from-[#1E2030] to-[#111126]'
        : gradientClass;
        
      const textClass = 'text-white'; // Selalu putih agar terbaca jelas di atas gradasi warna
      
      const getBtnClass = () => {
        if (actualTheme === 'dark') return 'bg-white/10 hover:bg-white/20 text-white';
        
        // Di light mode, karena backgroundnya warna-warni, tombolnya kita buat putih dengan teks berwarna
        if (activePalette === 'emerald') return 'bg-white text-teal-600 hover:bg-gray-50';
        if (activePalette === 'ocean') return 'bg-white text-blue-600 hover:bg-gray-50';
        if (activePalette === 'purple') return 'bg-white text-purple-600 hover:bg-gray-50';
        if (activePalette === 'google') return 'bg-white text-[#4285F4] hover:bg-gray-50';
        return 'bg-white text-rose-600 hover:bg-gray-50';
      };

      const GmailIcon = () => React.createElement("img", {
        src: "009. Let's Connect/Gmail.png",
        alt: "Gmail",
        className: "w-6 h-6 object-contain pointer-events-none"
      });

      const WhatsappIcon = () => React.createElement("svg", {
        viewBox: "0 0 448 512",
        className: "w-6 h-6 fill-[#25D366]"
      }, 
        React.createElement("path", { d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" })
      );

      const LinkedinIcon = () => React.createElement("svg", {
        viewBox: "0 0 448 512",
        className: "w-6 h-6 fill-[#0077B5]"
      }, 
        React.createElement("path", { d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" })
      );

      const socialLinks = [
        { Icon: GmailIcon, url: "https://mail.google.com/mail/?view=cm&fs=1&to=achmadnoormansetiawan@gmail.com", shadowColor: "rgba(234, 67, 53, 0.4)" },
        { Icon: WhatsappIcon, url: "https://wa.me/6281230607050", shadowColor: "rgba(37, 211, 102, 0.4)" },
        { Icon: LinkedinIcon, url: "https://www.linkedin.com/in/achmadnoorman/", shadowColor: "rgba(0, 119, 181, 0.4)" }
      ];

      return React.createElement("section", { className: `relative overflow-hidden w-full py-12 lg:py-16 ${bgClass} border-b ${actualTheme === 'dark' ? 'border-white/10' : 'border-transparent'}` },
        // Grid background overlay
        React.createElement("div", { 
          className: `absolute inset-0 pointer-events-none opacity-[0.08] ${actualTheme === 'dark' ? 'bg-grid-pattern-dark' : 'bg-grid-pattern'}` 
        }),
        React.createElement("div", { className: "relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6" },
          React.createElement("h2", { className: `font-bold tracking-tight ${isMobileView ? 'text-3xl' : 'text-4xl lg:text-5xl'} ${textClass}` },
            "Let's Connect"
          ),
          React.createElement("div", { className: "flex items-center gap-4" },
            socialLinks.map(({ Icon, url, shadowColor }, idx) => {
              return React.createElement("a", { 
                key: idx, 
                href: url, 
                target: "_blank",
                rel: "noreferrer",
                onMouseEnter: (e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = `0 10px 25px ${shadowColor}`;
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                },
                className: "w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-md transition-all duration-300 border border-slate-100 hover:scale-105" 
              },
                React.createElement(Icon)
              );
            })
          )
        )
      );
    };

    const Footer = ({ actualTheme, theme, isMobileView, activePalette, language }) => {
      const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

      const bgClass = actualTheme === 'dark' ? theme.darkCard : 'bg-white';
      const textClass = actualTheme === 'dark' ? 'text-white' : 'text-slate-900';
      const mutedTextClass = actualTheme === 'dark' ? 'text-gray-400' : 'text-gray-500';
      
      // Menggunakan warna dinamis dari theme yang dipilih pengguna
      const iconBg = actualTheme === 'dark' ? 'bg-white/10 hover:bg-white/20' : `${theme.glowLight1} ${theme.accentHoverLight.replace('hover:bg-', 'hover:bg-opacity-80 ')}`; 
      // Untuk hover di light mode bisa pakai opacity atau biarkan
      const iconBgClass = actualTheme === 'dark' ? 'bg-white/10 hover:bg-white/20' : `${theme.glowLight1} hover:opacity-80`;
      const iconTextClass = actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight;
      
      const bannerBgClass = theme.darkBg;
      const bannerTextClass = 'text-white/90';
      
      const btnBg = actualTheme === 'dark' ? theme.accentBgDark : theme.accentBgLight;
      const btnHover = actualTheme === 'dark' ? theme.accentHoverDark : theme.accentHoverLight;

      return React.createElement("footer", { className: `w-full ${bgClass} relative text-sm` },
        // Divider line with brand/theme gradient colors (integrated into footer top)
        React.createElement("div", { 
          className: "w-full h-[3px] opacity-60 bg-gradient-to-r from-transparent via-current to-transparent",
          style: { color: paletteColors[activePalette] }
        }),
        // Top Main Area
        React.createElement("div", { className: `max-w-7xl mx-auto px-6 py-12 lg:py-16 grid ${isMobileView ? 'grid-cols-1 gap-6' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6'}` },
          
          // Column 1: Brand & Socials
          React.createElement("div", { className: `flex flex-col gap-6 ${isMobileView ? '' : `lg:col-span-4 lg:pr-10 lg:border-r ${actualTheme === 'dark' ? 'lg:border-gray-800' : 'lg:border-gray-200'}`}` },
            React.createElement("div", { className: "text-2xl font-bold tracking-wide transition-all shrink-0 pt-2" },
              React.createElement("span", { className: actualTheme === 'dark' ? 'text-white' : 'text-slate-900' }, "Achmad "),
              renderAccentSpan("Noorman", actualTheme, theme, activePalette)
            ),
            React.createElement("p", { className: `leading-relaxed pr-2 max-w-xs ${mutedTextClass}` },
              language === 'ID' ? "Berpengalaman dalam merancang dan membangun otomatisasi pengolahan data bisnis dan individu untuk mempercepat pengambilan keputusan strategis." : "Experienced in designing and building business and individual data processing automation to accelerate strategic decision-making."
            ),

          ),
          
          // Column 2: Navigation
          React.createElement("div", { className: `flex flex-col gap-4 ${isMobileView ? '' : 'lg:col-span-2 lg:col-start-6'}` },
            React.createElement("h4", { className: `font-bold mb-2 ${textClass}` }, language === 'ID' ? "Navigasi" : "Navigation"),
            (language === 'ID' 
              ? [{id:'home', label:'Beranda'}, {id:'about', label:'Tentang'}, {id:'education', label:'Pendidikan'}, {id:'experience', label:'Pengalaman'}]
              : [{id:'home', label:'Home'}, {id:'about', label:'About'}, {id:'education', label:'Education'}, {id:'experience', label:'Experience'}]
            ).map(item => (
              React.createElement("a", { key: item.id, href: `#${item.id}`, className: `hover:underline ${mutedTextClass}` }, item.label)
            ))
          ),

          // Column 3: More
          React.createElement("div", { className: `flex flex-col gap-4 ${isMobileView ? '' : 'lg:col-span-2'}` },
            React.createElement("h4", { className: `font-bold mb-2 ${textClass}` }, language === 'ID' ? "Lainnya" : "More"),
            (language === 'ID'
              ? [{id:'skills', label:'Keahlian'}, {id:'courses', label:'Kursus'}, {id:'projects', label:'Proyek'}]
              : [{id:'skills', label:'Skills'}, {id:'courses', label:'Courses'}, {id:'projects', label:'Projects'}]
            ).map(item => (
              React.createElement("a", { key: item.id, href: `#${item.id}`, className: `hover:underline ${mutedTextClass}` }, item.label)
            ))
          ),
          
          // Column 4: Contact
          React.createElement("div", { className: `flex flex-col gap-4 ${isMobileView ? '' : 'lg:col-span-3'}` },
            React.createElement("h4", { className: `font-bold mb-2 ${textClass}` }, language === 'ID' ? "Kontak" : "Contact"),
            React.createElement("div", { className: "flex flex-col gap-1" },
              React.createElement("span", { className: mutedTextClass }, "Phone :"),
              React.createElement("a", { 
                href: "https://wa.me/6281230607050", 
                target: "_blank",
                rel: "noreferrer",
                className: `hover:underline ${textClass}` 
              }, "+62 812-3060-7050")
            ),
            React.createElement("div", { className: "flex flex-col gap-1" },
              React.createElement("span", { className: mutedTextClass }, "Email :"),
              React.createElement("a", { href: "https://mail.google.com/mail/?view=cm&fs=1&to=achmadnoormansetiawan@gmail.com", target: "_blank", rel: "noreferrer", className: `hover:underline break-all ${textClass}` }, "achmadnoormansetiawan@gmail.com")
            )
          )
        ),
        
        // Bottom Banner
        React.createElement("div", { className: `w-full py-5 px-6 ${bannerBgClass} ${bannerTextClass}` },
          React.createElement("div", { className: "max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium" },
            React.createElement("p", null, language === 'ID' ? "Hak Cipta © 2025 Achmad Noorman. Seluruh Hak Cipta Dilindungi." : "Copyright © 2025 Achmad Noorman. All Rights Reserved."),
            React.createElement("p", null, language === 'ID' ? "Syarat & Ketentuan | Kebijakan Privasi" : "User Terms & Conditions | Privacy Policy")
          )
        )
      );
    };


    // ==========================================
    // 11.5. SCROLL REVEAL WRAPPER (GIMMICK ANIMATION)
    // ==========================================
    const ScrollReveal = ({ children, id, className = "scroll-mt-24", disabled = false }) => {
      const [isVisible, setIsVisible] = useState(false);
      const domRef = useRef();

      useEffect(() => {
        if (disabled) return;
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            } else {
              setIsVisible(false);
            }
          });
        }, { 
          threshold: 0.15,
          rootMargin: "-10% 0px -10% 0px"
        });

        const currentRef = domRef.current;
        if (currentRef) {
          observer.observe(currentRef);
        }

        return () => {
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        };
      }, [disabled]);

      if (disabled) {
        return React.createElement("div", { id: id, className: className }, children);
      }

      return React.createElement("div", {
        ref: domRef,
        id: id,
        className: className
      }, 
        React.createElement("div", {
          className: `perspective-container transition-reveal ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`
        }, children)
      );
    };

    // ==========================================
    // 12. APLIKASI UTAMA
    // ==========================================
    function App() {
      const isDemoMode = typeof window !== 'undefined' ? (window.location.pathname.startsWith('/demo') || new URLSearchParams(window.location.search).get('demo') === 'true') : false;
      const [actualTheme, setActualTheme] = useState('light');
      const [isMobileView, setIsMobileView] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

      useEffect(() => {
        const handleResize = () => {
          setIsMobileView(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

      const [activePalette, setActivePalette] = useState('google');
      const [activeSection, setActiveSection] = useState('Projects');
      const [language, setLanguage] = useState('EN');
      const [isWaPopupOpen, setIsWaPopupOpen] = useState(true);
      const [activeResumeTab, setActiveResumeTab] = useState('education');
      const [showColorPickerNavbar, setShowColorPickerNavbar] = useState(false);
      const colorPickerNavbarRef = useRef(null);

      const isManualScrolling = useRef(false);
      const manualScrollTimeout = useRef(null);

      // Reset scroll ke atas (home) ketika halaman di-refresh dan klik-luar navbar color picker
      useEffect(() => {
        if ('scrollRestoration' in window.history) {
          window.history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);

        const handleClickOutside = (event) => {
          if (colorPickerNavbarRef.current && !colorPickerNavbarRef.current.contains(event.target)) {
            setShowColorPickerNavbar(false);
          }
        };
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
          document.removeEventListener('touchstart', handleClickOutside);
        };
      }, []);

      const handleScroll = () => {
        if (isManualScrolling.current) return;
        const sections = ['projects', 'certificate'];
        let current = 'Home';
        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 250) {
              if (section === 'activities') {
                current = 'Gallery';
              } else if (section === 'resume') {
                if (activeResumeTab === 'education') current = 'Education';
                else if (activeResumeTab === 'skills') current = 'Skills';
                else current = 'Experience';
              } else {
                current = section.charAt(0).toUpperCase() + section.slice(1);
              }
            }
          }
        }
        setActiveSection(current);
      };

      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [activeResumeTab]);

      // Spacebar & Enter Smooth Navigation to Next Section
      useEffect(() => {
        const handleKeyDown = (e) => {
          if (document.body.style.overflow === 'hidden') return;
          
          if (e.key === ' ' || e.key === 'Enter') {
            // Prevent default page down scroll
            e.preventDefault();

            // Set manual scroll lock to prevent scroll tracking from flickering navbar active state
            isManualScrolling.current = true;
            if (manualScrollTimeout.current) clearTimeout(manualScrollTimeout.current);
            manualScrollTimeout.current = setTimeout(() => {
              isManualScrolling.current = false;
            }, 800);

            const activeLower = activeSection.toLowerCase();
            const sections = ['projects', 'certificate'];
            
            let currentId = 'projects';
            if (sections.includes(activeLower)) {
              currentId = activeLower;
            }

            // For Shift+Space/Enter, go backwards
            const direction = e.shiftKey ? -1 : 1;
            const currentIndex = sections.indexOf(currentId);
            let nextIndex = (currentIndex + direction) % sections.length;
            if (nextIndex < 0) nextIndex = sections.length - 1;
            const nextId = sections[nextIndex];

            const nextEl = document.getElementById(nextId);
            if (nextEl) {
              // Set the active section state immediately to match the scroll target
              const nextSectionName = nextId.charAt(0).toUpperCase() + nextId.slice(1);
              setActiveSection(nextSectionName);

              nextEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
      }, [activeSection, activeResumeTab]);

      // Handle swipe navigation from components
      useEffect(() => {
        const handleSwipeNavigate = (e) => {
          const { direction, from } = e.detail;
          
          // Lock scroll listener to prevent jitter/lag
          isManualScrolling.current = true;
          if (manualScrollTimeout.current) clearTimeout(manualScrollTimeout.current);
          manualScrollTimeout.current = setTimeout(() => {
            isManualScrolling.current = false;
          }, 800);

          const sections = ['projects', 'certificate'];
          let currentId = from || 'projects';
          const currentIndex = sections.indexOf(currentId);
          let nextIndex = currentIndex + direction;
          if (nextIndex < 0) nextIndex = 0;
          if (nextIndex >= sections.length) nextIndex = sections.length - 1;
          if (nextIndex === currentIndex) return; // Already at the end

          const nextId = sections[nextIndex];

          const nextEl = document.getElementById(nextId);
          if (nextEl) {
            const nextSectionName = nextId.charAt(0).toUpperCase() + nextId.slice(1);
            setActiveSection(nextSectionName);
            nextEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        };
        window.addEventListener('swipeNavigate', handleSwipeNavigate);
        return () => window.removeEventListener('swipeNavigate', handleSwipeNavigate);
      }, []);

      const toggleTheme = () => setActualTheme(prev => prev === 'dark' ? 'light' : 'dark');
      const theme = colorSchemes[activePalette];

      return (
        React.createElement("div", { className: "min-h-screen w-full flex justify-center items-center transition-colors duration-500" },
          React.createElement("style", null, `
                    @keyframes swing {
                        0% { transform: rotate(4deg); }
                        100% { transform: rotate(-4deg); }
                    }
                    .animate-swing {
                        animation: swing 3.5s cubic-bezier(0.45, 0, 0.55, 1) infinite alternate;
                        transform-origin: top center;
                    }
                    /* Custom Scrollbar agar rapi */
                    .hide-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                    .hide-scrollbar {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                    /* Animasi Marquee */
                    @keyframes marqueeLeft {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    @keyframes marqueeRight {
                        0% { transform: translateX(-50%); }
                        100% { transform: translateX(0); }
                    }
                    .animate-marquee-left {
                        animation: marqueeLeft 30s linear infinite;
                    }
                    .animate-marquee-right {
                        animation: marqueeRight 30s linear infinite;
                    }
                    .pause-marquee {
                        animation-play-state: paused;
                    }
                    .hover\\:pause-marquee:hover {
                        animation-play-state: paused;
                    }
                    
                    /* Custom Grid Patterns */
                    .bg-grid-pattern {
                        background-size: 40px 40px;
                        background-image: 
                            linear-gradient(to right, rgba(148, 163, 184, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(148, 163, 184, 0.05) 1px, transparent 1px);
                    }
                    .bg-grid-pattern-dark {
                        background-size: 40px 40px;
                        background-image: 
                            linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
                    }
                    
                    /* Floating Animations for Tech Badges */
                    @keyframes floatBadge1 {
                        0% { transform: translateY(0px) rotate(0deg); }
                        50% { transform: translateY(-12px) rotate(3deg); }
                        100% { transform: translateY(0px) rotate(0deg); }
                    }
                    @keyframes floatBadge2 {
                        0% { transform: translateY(0px) rotate(0deg); }
                        50% { transform: translateY(-8px) rotate(-4deg); }
                        100% { transform: translateY(0px) rotate(0deg); }
                    }
                    @keyframes floatBadge3 {
                        0% { transform: translateY(0px) rotate(0deg); }
                        50% { transform: translateY(-10px) rotate(2deg); }
                        100% { transform: translateY(0px) rotate(0deg); }
                    }
                    .animate-float-1 {
                        animation: floatBadge1 5s ease-in-out infinite;
                    }
                    .animate-float-2 {
                        animation: floatBadge2 6s ease-in-out infinite;
                    }
                    .animate-float-3 {
                        animation: floatBadge3 5.5s ease-in-out infinite;
                    }
                    
                    
                    /* Premium Reveal Transition Utilities */
                    .perspective-container {
                        perspective: 1200px;
                        backface-visibility: hidden;
                    }
                    .transition-reveal {
                        transition: opacity 1200ms cubic-bezier(0.16, 1, 0.3, 1),
                                    transform 1200ms cubic-bezier(0.16, 1, 0.3, 1),
                                    filter 1200ms cubic-bezier(0.16, 1, 0.3, 1);
                        will-change: opacity, transform, filter;
                    }
                    .reveal-hidden {
                        opacity: 0;
                        filter: blur(12px);
                        transform: translateY(60px) scale(0.93) rotateX(8deg);
                    }
                    .reveal-visible {
                        opacity: 1;
                        filter: blur(0px);
                        transform: translateY(0) scale(1) rotateX(0deg);
                    }
                    `),
          React.createElement("div", { className: `relative overflow-hidden transition-all duration-500 ${actualTheme === 'dark' ? `${theme.darkBg} text-white` : 'bg-slate-50 text-slate-900'} w-full min-h-screen` },
            React.createElement("div", { 
              id: "main-scroll-container",
              className: "w-full h-full overflow-y-auto overflow-x-hidden hide-scrollbar relative z-0",
              onScroll: handleScroll
            },

              // Grid Background
              React.createElement("div", { className: `absolute inset-0 pointer-events-none z-0 ${actualTheme === 'dark' ? 'bg-grid-pattern-dark' : 'bg-grid-pattern'}` }),



              React.createElement(Sidebar, {
                actualTheme: actualTheme,
                theme: theme,
                isMobileView: isMobileView,
                toggleTheme: toggleTheme,
                activePalette: activePalette,
                setActivePalette: setActivePalette,
                activeSection: activeSection,
                setActiveSection: (section) => {
                  isManualScrolling.current = true;
                  setActiveSection(section);
                  if (manualScrollTimeout.current) clearTimeout(manualScrollTimeout.current);
                  manualScrollTimeout.current = setTimeout(() => {
                    isManualScrolling.current = false;
                  }, 800);
                },
                setActiveResumeTab: setActiveResumeTab,
                language: language
              }),



              // Ambient Glow Spots (Top)
              React.createElement("div", { className: `pointer-events-none absolute top-[-2%] left-[-10%] w-96 h-96 rounded-full mix-blend-screen filter blur-[100px] opacity-60 transition-colors duration-500 z-0 ${actualTheme === 'dark' ? theme.glow1 : 'hidden'}` }),
              React.createElement("div", { className: `pointer-events-none absolute top-[15%] right-[-5%] w-[500px] h-[500px] rounded-full mix-blend-screen filter blur-[120px] opacity-50 transition-colors duration-500 z-0 ${actualTheme === 'dark' ? theme.glow3 : 'hidden'}` }),
              
              // Ambient Glow Spots (Middle - Education & Experience)
              React.createElement("div", { className: `pointer-events-none absolute top-[35%] left-[-10%] w-[450px] h-[450px] rounded-full mix-blend-screen filter blur-[130px] opacity-40 transition-colors duration-500 z-0 ${actualTheme === 'dark' ? theme.glow2 : 'hidden'}` }),
              React.createElement("div", { className: `pointer-events-none absolute top-[50%] right-[-10%] w-96 h-96 rounded-full mix-blend-screen filter blur-[110px] opacity-45 transition-colors duration-500 z-0 ${actualTheme === 'dark' ? theme.glow1 : 'hidden'}` }),
              
              // Ambient Glow Spots (Bottom - Projects & Contact)
              React.createElement("div", { className: `pointer-events-none absolute top-[70%] left-[-5%] w-[500px] h-[500px] rounded-full mix-blend-screen filter blur-[140px] opacity-40 transition-colors duration-500 z-0 ${actualTheme === 'dark' ? theme.glow3 : 'hidden'}` }),
              React.createElement("div", { className: `pointer-events-none absolute top-[85%] right-[-5%] w-[400px] h-[400px] rounded-full mix-blend-screen filter blur-[120px] opacity-50 transition-colors duration-500 z-0 ${actualTheme === 'dark' ? theme.glow2 : 'hidden'}` }),

              // Solid Masking Panel with aligned grid pattern to hide content scrolling above/behind navbar
              !isMobileView && React.createElement("div", {
                className: `fixed top-0 left-[374px] right-6 h-[88px] z-20 rounded-b-2xl transition-colors duration-500 pointer-events-none ${
                  actualTheme === 'dark' ? theme.darkBg : 'bg-slate-50'
                }`
              },
                React.createElement("div", {
                  className: `absolute inset-0 rounded-b-2xl ${actualTheme === 'dark' ? 'bg-grid-pattern-dark' : 'bg-grid-pattern'}`
                })
              ),

              !isMobileView && React.createElement("div", {
                className: `fixed top-8 left-[374px] right-6 h-14 z-30 flex items-center px-6 rounded-2xl border shadow-sm backdrop-blur-md transition-all duration-500 ${
                  actualTheme === 'dark' 
                    ? 'bg-slate-900/40 border-white/10 text-white shadow-black/20' 
                    : 'bg-white/60 border-slate-200/80 text-slate-800 shadow-slate-100'
                }`
              },
                // Center: nav items
                React.createElement("div", { className: "flex items-center gap-2 sm:gap-3" },
                  ['Projects', 'Certificate'].map((item) => {
                    const isActive = activeSection === item || (activeSection === 'Home' && item === 'Projects');
                    const isAvailable = item !== 'Activities';

                    return React.createElement("button", {
                      key: item,
                      onClick: () => {
                        if (!isAvailable) return;
                        isManualScrolling.current = true;
                        setActiveSection(item);
                        if (manualScrollTimeout.current) clearTimeout(manualScrollTimeout.current);
                        manualScrollTimeout.current = setTimeout(() => {
                          isManualScrolling.current = false;
                        }, 800);
                        
                        const targetId = item.toLowerCase();
                        const el = document.getElementById(targetId);
                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      },
                      className: `px-4 py-1.5 rounded-full text-xs transition-all duration-300 ${
                        !isAvailable ? 'font-medium opacity-40 cursor-not-allowed' :
                        isActive ? `font-bold ${actualTheme === 'dark' ? theme.accentTextDark : theme.accentTextLight} bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/60 dark:border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[0_2px_10px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.05)]` :
                        `font-medium ${actualTheme === 'dark' ? 'text-white/60 hover:text-white hover:bg-white/5' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/50'} cursor-pointer`
                      }`
                    }, item);
                  })
                ),
                
                // Right side: controls (Language, Theme Toggle and Color Palette Picker)
                React.createElement("div", { className: "flex items-center gap-3 justify-end ml-auto" },
                  // Language Toggle
                  React.createElement("button", {
                    onClick: () => setLanguage(lang => lang === 'ID' ? 'EN' : 'ID'),
                    title: language === 'ID' ? 'Switch to English' : 'Switch to Indonesian',
                    className: `w-6 h-6 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-110 ring-2 ring-offset-2 ${
                      actualTheme === 'dark' ? 'ring-slate-700' : 'ring-slate-200'
                    }`
                  }, 
                    React.createElement("img", {
                      src: language === 'ID' 
                        ? 'https://hatscripts.github.io/circle-flags/flags/id.svg' 
                        : 'https://hatscripts.github.io/circle-flags/flags/gb.svg',
                      alt: language,
                      className: "w-full h-full object-cover"
                    })
                  ),

                  // Color Palette Picker
                  isDemoMode && React.createElement("div", { className: "relative", ref: colorPickerNavbarRef },
                    React.createElement("button", {
                      onClick: () => setShowColorPickerNavbar(!showColorPickerNavbar),
                      title: `Theme Color: ${activePalette}`,
                      className: `w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ring-2 ring-offset-2 ${
                        actualTheme === 'dark' ? 'ring-slate-700' : 'ring-slate-200'
                      }`,
                      style: activePalette === 'google' 
                        ? { background: 'conic-gradient(#4285F4 0deg 90deg, #EA4335 90deg 180deg, #FBBC05 180deg 270deg, #34A853 270deg 360deg)' }
                        : { backgroundColor: paletteColors[activePalette] }
                    }),
                    
                    showColorPickerNavbar && React.createElement("div", {
                      className: `absolute top-full mt-2 right-0 p-2 rounded-xl shadow-xl flex gap-1.5 z-50 border transition-all ${
                        actualTheme === 'dark' ? `${theme.darkCard} border-white/10` : 'bg-white border-slate-200'
                      }`
                    },
                      Object.keys(colorSchemes).map(key => (
                        React.createElement("button", {
                          key: key,
                          onClick: () => {
                            setActivePalette(key);
                            setShowColorPickerNavbar(false);
                          },
                          className: `w-5 h-5 rounded-full transition-transform hover:scale-110 ${activePalette === key ? 'ring-2 ring-offset-1 ring-gray-400' : 'opacity-70'}`,
                          style: key === 'google' 
                            ? { background: 'conic-gradient(#4285F4 0deg 90deg, #EA4335 90deg 180deg, #FBBC05 180deg 270deg, #34A853 270deg 360deg)' }
                            : { backgroundColor: paletteColors[key] }
                        })
                      ))
                    )
                  )
                )
              ),

              React.createElement("div", { className: `px-6 relative z-10 ${isMobileView ? 'max-w-7xl pt-20 pb-6 mx-auto' : 'md:max-w-none pt-[118px] pb-6 md:pl-[374px] md:ml-0 md:mr-auto'}` },
                React.createElement(ScrollReveal, { key: "projects", id: "projects", className: "scroll-mt-[80px] lg:scroll-mt-[118px]" },
                  React.createElement(ProjectsSection, {
                    actualTheme: actualTheme,
                    theme: theme,
                    isMobileView: isMobileView,
                    activePalette: activePalette,
                    activeSection: activeSection,
                    language: language
                  })
                ),

                // Spacer div to replace margin-top for consistent cross-browser scroll alignment
                React.createElement("div", { className: "h-16 lg:h-24 w-full" }),

                React.createElement(ScrollReveal, { key: "certificate", id: "certificate", className: "scroll-mt-[80px] lg:scroll-mt-[110px]" },
                  React.createElement(CertificateSection, {
                    actualTheme: actualTheme,
                    theme: theme,
                    isMobileView: isMobileView,
                    activePalette: activePalette,
                    activeSection: activeSection,
                    language: language
                  })
                )
              ),
              /*
              React.createElement(ScrollReveal, { key: "activities", id: "activities", className: "scroll-mt-[72px] w-full" },
                React.createElement(ActivitiesSection, {
                  actualTheme: actualTheme,
                  theme: theme,
                  isMobileView: isMobileView,
                  activePalette: activePalette
                })
              ),
              React.createElement("div", { className: `max-w-7xl mx-auto px-6 relative z-10 pb-6` },
                React.createElement(ScrollReveal, { key: "contact", id: "contact", className: "scroll-mt-[72px]" },
                  React.createElement(ContactSection, {
                    actualTheme: actualTheme,
                    theme: theme,
                    isMobileView: isMobileView,
                    activePalette: activePalette
                  })
                )
              ),
              
              React.createElement(Footer, {
                actualTheme: actualTheme,
                theme: theme,
                isMobileView: isMobileView,
                activePalette: activePalette
              })
              */
            )
          )
        )
      );
    }

export default App;
