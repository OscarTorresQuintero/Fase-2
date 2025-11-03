/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./*.html"], 
  theme: {
    extend: {},
  },
  plugins: [],
}
  // Script para el modo oscuro
        document.addEventListener('DOMContentLoaded', function () {
            const darkModeToggle = document.getElementById('dark-mode-toggle');
            const htmlElement = document.documentElement;
            const spinnerOverlay = document.getElementById('spinner-overlay');

            // Verificar si hay una preferencia guardada
            const currentTheme = localStorage.getItem('theme') || 'light';
            if (currentTheme === 'dark') {
                htmlElement.classList.add('dark');
            }

            // Cambiar entre modo claro y oscuro
            darkModeToggle.addEventListener('click', function () {
                htmlElement.classList.toggle('dark');

                if (htmlElement.classList.contains('dark')) {
                    localStorage.setItem('theme', 'dark');
                } else {
                    localStorage.setItem('theme', 'light');
                }
            });

            // Función para mostrar el spinner
            function showSpinner() {
                spinnerOverlay.classList.add('active');
            }

            // Función para ocultar el spinner
            function hideSpinner() {
                spinnerOverlay.classList.remove('active');
            }

            // Scroll suave para los enlaces ancla con spinner
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');

                    // Mostrar spinner
                    showSpinner();

                    // Simular carga y luego hacer scroll
                    setTimeout(() => {
                        const target = document.querySelector(targetId);
                        if (target) {
                            target.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }

                        // Ocultar spinner después de un tiempo
                        setTimeout(() => {
                            hideSpinner();
                        }, 500);
                    }, 800);
                });
            });

            // Animación de entrada para elementos
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function (entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);

            // Observar elementos para animar
            document.querySelectorAll('.fade-in').forEach(el => {
                observer.observe(el);
            });

            // Funcionalidad para los botones de compra
            document.querySelectorAll('button').forEach(button => {
                if (button.textContent.includes('Comprar ahora')) {
                    button.addEventListener('click', function (e) {
                        e.preventDefault();

                        // Mostrar spinner
                        showSpinner();

                        // Simular proceso de compra
                        setTimeout(() => {
                            hideSpinner();

                            // Crear notificación
                            const notification = document.createElement('div');
                            notification.className = 'fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
                            notification.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Producto añadido al carrito';
                            document.body.appendChild(notification);

                            // Mostrar notificación
                            setTimeout(() => {
                                notification.style.transform = 'translateX(0)';
                            }, 100);

                            // Ocultar notificación después de 3 segundos
                            setTimeout(() => {
                                notification.style.transform = 'translateX(100%)';
                                setTimeout(() => {
                                    document.body.removeChild(notification);
                                }, 300);
                            }, 3000);
                        }, 1000);
                    });
                }
            });

            // Funcionalidad para el formulario de contacto
            const contactForm = document.querySelector('form');
            if (contactForm) {
                contactForm.addEventListener('submit', function (e) {
                    e.preventDefault();

                    // Mostrar spinner
                    showSpinner();

                    // Simular envío del formulario
                    setTimeout(() => {
                        hideSpinner();

                        // Crear notificación de envío
                        const notification = document.createElement('div');
                        notification.className = 'fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
                        notification.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Mensaje enviado correctamente';
                        document.body.appendChild(notification);

                        // Mostrar notificación
                        setTimeout(() => {
                            notification.style.transform = 'translateX(0)';
                        }, 100);

                        // Ocultar notificación después de 3 segundos
                        setTimeout(() => {
                            notification.style.transform = 'translateX(100%)';
                            setTimeout(() => {
                                document.body.removeChild(notification);
                            }, 300);
                        }, 3000);

                        // Limpiar formulario
                        contactForm.reset();
                    }, 1000);
                });
            }
        });
