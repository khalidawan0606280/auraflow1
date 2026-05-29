/**
 * AuraFlow — Premium SaaS Frontend
 * Ultra-modern interactions & performance
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // ========== MOBILE NAVIGATION ==========
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('nav-open');
        });

        // Close mobile menu on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('nav-open');
            });
        });
    }

    // ========== NAVBAR SCROLL EFFECT ==========
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    const handleScroll = () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // ========== SMOOTH SCROLL ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offset = navbar.offsetHeight + 20;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========== SCROLL REVEAL ANIMATIONS ==========
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ========== PRICING COUNTER ANIMATION ==========
    const animateCounter = (el, target, duration = 1500) => {
        const start = 0;
        const increment = target / (duration / 16);
        let current = 0;

        const update = () => {
            current += increment;
            if (current < target) {
                el.textContent = Math.floor(current);
                requestAnimationFrame(update);
            } else {
                el.textContent = target;
            }
        };

        update();
    };

    const priceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.amount[data-count]');
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-count'));
                    if (!counter.classList.contains('counted')) {
                        counter.classList.add('counted');
                        animateCounter(counter, target);
                    }
                });
                priceObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
        priceObserver.observe(pricingSection);
    }

    // ========== CHART.JS — TASKS AUTOMATED (Line Chart) ==========
    const tasksCtx = document.getElementById('tasksChart');
    if (tasksCtx && typeof Chart !== 'undefined') {
        const tasksGradient = tasksCtx.getContext('2d').createLinearGradient(0, 0, 0, 300);
        tasksGradient.addColorStop(0, 'rgba(124, 108, 252, 0.35)');
        tasksGradient.addColorStop(1, 'rgba(124, 108, 252, 0.0)');

        new Chart(tasksCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Tasks Automated',
                    data: [1200, 1900, 2800, 4200, 5800, 8200],
                    borderColor: '#7c6cfc',
                    backgroundColor: tasksGradient,
                    borderWidth: 3,
                    pointBackgroundColor: '#030305',
                    pointBorderColor: '#7c6cfc',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    fill: true,
                    tension: 0.45
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: 'rgba(10, 10, 16, 0.95)',
                        titleColor: '#f0f0f5',
                        bodyColor: '#9494a0',
                        borderColor: 'rgba(255,255,255,0.08)',
                        borderWidth: 1,
                        padding: 12,
                        cornerRadius: 8,
                        displayColors: false,
                        callbacks: {
                            label: (ctx) => `${ctx.parsed.y.toLocaleString()} tasks`
                        }
                    }
                },
                scales: {
                    x: {
                        grid: { display: false },
                        ticks: { 
                            color: '#5a5a68',
                            font: { family: 'Inter', size: 11 }
                        }
                    },
                    y: {
                        grid: { 
                            color: 'rgba(255,255,255,0.03)',
                            drawBorder: false 
                        },
                        ticks: {
                            color: '#5a5a68',
                            font: { family: 'Inter', size: 11 },
                            callback: (val) => val >= 1000 ? (val/1000) + 'k' : val
                        },
                        border: { display: false }
                    }
                },
                interaction: { intersect: false, mode: 'index' }
            }
        });
    }

    // ========== CHART.JS — TIME SAVED (Bar Chart) ==========
    const timeCtx = document.getElementById('timeChart');
    if (timeCtx && typeof Chart !== 'undefined') {
        const timeGradient = timeCtx.getContext('2d').createLinearGradient(0, 0, 0, 300);
        timeGradient.addColorStop(0, 'rgba(34, 211, 238, 0.45)');
        timeGradient.addColorStop(1, 'rgba(34, 211, 238, 0.05)');

        new Chart(timeCtx, {
            type: 'bar',
            data: {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [{
                    label: 'Hours Saved',
                    data: [340, 720, 1280, 2100],
                    backgroundColor: timeGradient,
                    borderColor: '#22d3ee',
                    borderWidth: 1,
                    borderRadius: 6,
                    barThickness: 32
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: 'rgba(10, 10, 16, 0.95)',
                        titleColor: '#f0f0f5',
                        bodyColor: '#9494a0',
                        borderColor: 'rgba(255,255,255,0.08)',
                        borderWidth: 1,
                        padding: 12,
                        cornerRadius: 8,
                        displayColors: false,
                        callbacks: {
                            label: (ctx) => `${ctx.parsed.y.toLocaleString()} hrs saved`
                        }
                    }
                },
                scales: {
                    x: {
                        grid: { display: false },
                        ticks: { 
                            color: '#5a5a68',
                            font: { family: 'Inter', size: 11 }
                        },
                        border: { display: false }
                    },
                    y: {
                        grid: { 
                            color: 'rgba(255,255,255,0.03)',
                            drawBorder: false 
                        },
                        ticks: {
                            color: '#5a5a68',
                            font: { family: 'Inter', size: 11 },
                            callback: (val) => val >= 1000 ? (val/1000) + 'k' : val
                        },
                        border: { display: false }
                    }
                }
            }
        });
    }

    // ========== BUTTON LOADING STATES ==========
    const setLoading = (btn, isLoading) => {
        const text = btn.querySelector('.btn-text');
        const loader = btn.querySelector('.btn-loader');
        
        if (isLoading) {
            btn.classList.add('loading');
            btn.style.pointerEvents = 'none';
            if (text) text.style.opacity = '0';
            if (loader) loader.style.display = 'block';
        } else {
            btn.classList.remove('loading');
            btn.style.pointerEvents = '';
            if (text) text.style.opacity = '1';
            if (loader) loader.style.display = 'none';
        }
    };

    // Hero CTA loading demo
    const heroCta = document.getElementById('heroCta');
    if (heroCta) {
        heroCta.addEventListener('click', (e) => {
            if (heroCta.getAttribute('href')?.startsWith('#')) return;
            setLoading(heroCta, true);
            setTimeout(() => setLoading(heroCta, false), 2000);
        });
    }

    // Checkout buttons (Lemon Squeezy / Paddle prep)
    document.querySelectorAll('.ls-checkout').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            setLoading(btn, true);
            
            // Simulate checkout open — replace with actual LS/Paddle integration
            const plan = btn.getAttribute('data-plan') || 'pro';
            console.log(`Opening checkout for plan: ${plan}`);
            
            setTimeout(() => {
                setLoading(btn, false);
                alert(`Checkout for "${plan}" plan would open here.\n\nReplace this with:\n- Lemon Squeezy Checkout URL, or\n- Paddle Checkout URL`);
            }, 1500);
        });
    });

    // ========== PREFERS REDUCED MOTION ==========
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('revealed'));
    }

    // ========== COMING SOON TOOLTIP FOR EMPTY LINKS ==========
    document.querySelectorAll('a[href="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            if (!link.classList.contains('ls-checkout')) {
                e.preventDefault();
            }
        });
    });
});