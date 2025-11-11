
import React, { useState, useEffect, useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AdminDashboard } from './components/AdminDashboard';
import { AdminLogin } from './components/AdminLogin';

const App: React.FC = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const particlesOptions = {
        background: {
            color: {
                value: "#0A0A0A",
            },
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: ["#8F00FF", "#00BFFF", "#C0C0C0"],
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.1,
                width: 1,
            },
            move: {
                direction: "none" as const,
                enable: true,
                outModes: {
                    default: "bounce" as const,
                },
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 50,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle" as const,
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
    };

    const handleLoginSuccess = () => {
        setIsAdmin(true);
        setShowLogin(false);
    };

    const handleLogout = () => {
      setIsAdmin(false);
    }

    return (
        <div className="bg-[#0A0A0A] text-gray-200 min-h-screen">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={particlesOptions}
                className="absolute inset-0 z-0"
            />
            <div className="relative z-10">
                {isAdmin ? (
                    <AdminDashboard onLogout={handleLogout} />
                ) : showLogin ? (
                    <AdminLogin onLoginSuccess={handleLoginSuccess} onCancel={() => setShowLogin(false)} />
                ) : (
                    <>
                        <Header />
                        <main>
                            <Hero />
                            <About />
                            <Education />
                            <Projects />
                            <Skills />
                            <Certifications />
                            <Achievements />
                            <Contact />
                        </main>
                        <Footer onAdminClick={() => setShowLogin(true)} />
                    </>
                )}
            </div>
        </div>
    );
}

export default App;