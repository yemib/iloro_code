// RoleSelection.jsx (React component with inline CSS — no Tailwind)
// This version uses ONLY `style={}` for design as requested.

import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../header';
import Footer from '../footer';
import { APPNAME, AuthContext } from '../util/api';

import { useNavigate } from 'react-router-dom';

export default function RoleSelection({ onSelect }) {
    const router = useNavigate();

    const { token, User } = useContext(AuthContext);

    const [role, setRole] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    React.useEffect(() => {

        if (!token || User == null) {
            router('/login');
        } else {
            if (User.role !== 'none') {


                if (User.role === 'doctor') {
                    router("/doctor-dashboard");

                }

                if (User.role === 'patient') {
                    router("/patient-dashboard");
                }

            }

        }

        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const containerStyle = {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to bottom, #f7f8fa, #eaecee)',
        padding: '40px'
    };

    const bannerWrapper = {
        borderRadius: '30px',
        overflow: 'hidden',
        boxShadow: '0 20px 55px rgba(0,0,0,0.15)',
        marginBottom: '40px',
        position: 'relative'
    };

    const bannerBg = {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, #8ec5ff, #e0c3fc, #f8ffb2)',
        transform: 'skewY(-2deg)',
        opacity: 0.95
    };

    const bannerContent = {
        position: 'relative',
        padding: '60px',
        display: 'flex',
        flexDirection: 'row',
        gap: '40px',
        alignItems: 'center'
    };

    const roleCard = (selected) => ({
        borderRadius: '20px',
        padding: '30px',
        display: 'flex',
        alignItems: 'center',
        gap: '25px',
        cursor: 'pointer',
        border: selected ? '3px solid rgba(99,102,241,0.3)' : '3px solid transparent',
        boxShadow: selected ? '0 10px 28px rgba(0,0,0,0.12)' : '0 4px 10px rgba(0,0,0,0.08)',
        background: 'white'
    });

    const roles = [
        {
            id: 'doctor',
            title: 'Doctor',
            subtitle: 'Manage patients & appointments',
            color: 'linear-gradient(to bottom right, #14b8a6, #3b82f6)',
            icon: (
                <svg width="55" height="55" stroke="white" strokeWidth="1.5" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v10M9 10h6M7 20h10M4 7h16" />
                </svg>
            )
        },
        {
            id: 'patient',
            title: 'Patient',
            subtitle: 'Book appointments & access records',
            color: 'linear-gradient(to bottom right, #ec4899, #f43f5e)',
            icon: (
                <svg width="55" height="55" stroke="white" strokeWidth="1.5" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zM6 20v-1a4 4 0 014-4h4a4 4 0 014 4v1" />
                </svg>
            )
        }
    ];

    const iconBox = (color) => ({
        padding: '20px',
        borderRadius: '18px',
        background: color,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 8px 20px rgba(0,0,0,0.18)'
    });

    const handleConfirm = () => {
        if (!role) return;

        if (onSelect) onSelect(role);

        if (role === 'doctor') {

            router('/doctor-profile-reg');

        } else if (role === 'patient') {
            router('/patient-dashboards');
        }



       
    };

    return (
        <>
            <Navbar menuColor={{
                color: '#0f172a'
            }} />
            <section style={{ marginTop: '100px' }}>
                <div style={containerStyle}>
                    <div style={{ width: '100%', maxWidth: '1100px' }}>

                        {/* Banner */}
                        <div style={bannerWrapper}>
                            <div style={bannerBg}></div>
                            <div style={bannerContent}>
                                <div style={{ flex: 1 }}>
                                    <h1 style={{ fontSize: '45px', fontWeight: 800, color: '#1e293b', marginBottom: '10px' }}>Welcome to {APPNAME}</h1>
                                    <p style={{ fontSize: '20px', maxWidth: '550px', color: '#334155' }}>
                                        Choose your role to continue — designed for a secure, fast and seamless experience.
                                    </p>
                                </div>
                                <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                                    <div style={{ width: '220px', height: '220px', borderRadius: '20px', background: 'white', opacity: 0.7 }}></div>
                                </div>
                            </div>
                        </div>

                        {/* Roles */}
                        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '25px' }}>
                            {roles.map((r) => (
                                <motion.div
                                    key={r.id}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.45 }}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setRole(r.id)}
                                    style={roleCard(role === r.id)}
                                >
                                    <div style={iconBox(r.color)}>{r.icon}</div>

                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ fontSize: '28px', margin: 0, color: '#0f172a' }}>{r.title}</h3>
                                        <p style={{ color: '#475569', marginTop: '5px' }}>{r.subtitle}</p>
                                    </div>

                                    <div>
                                        {role === r.id ? (
                                            <svg width="40" height="40" fill="green" viewBox="0 0 20 20">
                                                <path d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.172 15.293 5.293a1 1 0 011.414 0z" />
                                            </svg>
                                        ) : (
                                            <svg width="40" height="40" stroke="#64748b" strokeWidth="2" fill="none" viewBox="0 0 24 24">
                                                <circle cx="12" cy="12" r="10" />
                                            </svg>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '35px', gap: '15px' }}>
                            <button
                                onClick={() => setRole(null)}
                                style={{
                                    padding: '10px 20px',
                                    borderRadius: '10px',
                                    background: 'white',
                                    border: '1px solid #cbd5e1',
                                    cursor: 'pointer',
                                    color: "black"
                                }}
                            >
                                Reset
                            </button>

                            <button
                                onClick={handleConfirm}
                                disabled={!role}
                                style={{
                                    padding: '12px 25px',
                                    borderRadius: '10px',
                                    background: role ? 'linear-gradient(to right, #6366f1, #8b5cf6)' : '#cbd5e1',
                                    color: 'white',
                                    cursor: role ? 'pointer' : 'not-allowed',
                                    fontWeight: 600,
                                    boxShadow: role ? '0 8px 25px rgba(99,102,241,0.4)' : 'none'
                                }}
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </>
    );
}
