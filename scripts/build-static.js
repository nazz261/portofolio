import fs from 'fs';
import path from 'path';

const appName = 'Portfolio';

// Sample data from your Portfolio component
const projects = [
    {
        id: '1',
        title: 'Mobile App Redesign',
        description: 'A complete redesign of a popular mobile app to improve user engagement and satisfaction.',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4_JX_czN9vDMYQY53uabQ1t4Zr8SF3txt6h8UaLYbVVDOSZmi3VXt4orwj2iYBBKpGQGB_tUDBToU8o9sJutMWsoOTOvQmT6f3xxn4C6Y3g7oVTdu8MMTrfga0tAQULE6ozivzZjj4jZWSQPfZvfhBZ-mZRxKZznOevGhs26eWhc-NPPmN6VPoyj3JNOZwLhBnEh2eFb81_Ies-MFYspVqhB32bA7s9GqjIqruCvqJV6Yi5rMNY69xyeDqUKIkfWsg7YuXt6YsIo'
    },
    {
        id: '2',
        title: 'E-commerce Website',
        description: 'A modern and responsive e-commerce website for a fashion brand.',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcaIJ5Lk6X9Uj667-c5I08LyrCDtcVPWnBO5oSDzU-bUneVHQ0-kcuh7O55BHjYd2lKGxtesJCoxeYQmw2dZMgenkBbRx7yI9_YwxbEcfWGOK4VxB4FbeoIWy6CLtggl2N-SpydZ1xz7LWYGUMJRlxGaAxUQPilykmg0w4KNmE7DnQO8Qy5G50cWT0Toh2sPevoNIXZDi6OmCSpb5QMBMm_ri-C6vTPPbMAGItIQmLRNcBQwXxtN9PaC9Ug1iydpFbwdEZLl6UGwA'
    },
    {
        id: '3',
        title: 'Dashboard Design',
        description: 'A user-friendly dashboard for managing project workflows and team collaboration.',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEFitvqb36wx1CJCqj0aEQnVbAT-UvnsMyvb674QjTTyEBXeoUS1bf0D9hkAPVD4CBfyADzHB3miG0xMOcSl_cO4RRKECm83kks4DXPhA3hW-FKUJWBQqfN0igWRnsVXYKLVXTE42zhywhipzcMZmbw1iZ0sewstwSoXldSCklPjnVZ2fHF7ZfcTbiXuKLs8wPdrbtdx9d-uxsDQhixQyYRhjF2NCjphioDOLUIKrmGG_HNq8EbA7oxIy0O7rRnP2SqOMmDToOfyo'
    }
];

const heroData = {
    title: "Hi, I'm Alex, a Product Designer",
    subtitle: "I'm a product designer based in San Francisco, passionate about creating intuitive and impactful user experiences. I specialize in UI/UX design, user research, and design systems.",
    buttonText: "View Projects",
    backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDE59AuWCPpNDWXZ1lucLT7JGpx1-Pun1vKypqkBoNbye77zalJiuCD2ybTxtT1BPp9EEpDYlbbYHxXRbJSX3uhpvMux9aRKHlwpbQP0ft4mpiyAoGZRoB8Dk2IJ5mUdHKNqt9zUvhAuOxTMsYsZzF4PVwEcqGXhbJP6cNQoNGV86qb00sm0aTOnbQYG9U4oc2p_jpGGElEa2dLno5UrHXjts2X5KCGcIP953wpHiunOwy5gAIe6B-ocQBL0NIRLtfe7A1bo7JO2fU"
};

// Create static HTML that matches your actual component structure
function createStaticHTML() {
  const html = `<!DOCTYPE html>
<html class="dark" lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <script>
            tailwind.config = {
                darkMode: "class",
                theme: {
                    extend: {
                        colors: {
                            primary: "#1773cf",
                            "background-light": "#f6f7f8",
                            "background-dark": "#111921",
                        },
                        fontFamily: {
                            display: ["Inter"],
                        },
                        borderRadius: { 
                            DEFAULT: "0.25rem", 
                            lg: "0.5rem", 
                            xl: "0.75rem", 
                            full: "9999px" 
                        },
                    },
                },
            };
        </script>
        <style>
            .form-input, .form-textarea {
                --tw-ring-color: transparent !important;
                --tw-ring-offset-shadow: none !important;
                --tw-ring-shadow: none !important;
                --tw-shadow: none !important;
                --tw-shadow-colored: none !important;
            }
        </style>
        <link rel="stylesheet" href="/build/assets/app-BlQP7DfR.css">
    </head>
    <body class="bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-200">
        <div id="app" data-page='{"component":"portfolio","props":{},"url":"/","version":"1"}'>
            <!-- Pre-rendered Portfolio content matching your actual components -->
            <div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
                <div class="flex h-full grow flex-col">
                    <!-- Header - matching your Header.tsx -->
                    <header class="flex items-center justify-between whitespace-nowrap border-b border-slate-200/80 dark:border-slate-800/80 px-10 py-4">
                        <div class="flex items-center gap-3">
                            <div class="size-6 text-primary">
                                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_6_319)">
                                        <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_6_319">
                                            <rect fill="white" height="48" width="48"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <h2 class="text-lg font-bold">Portfolio</h2>
                        </div>
                        <div class="flex flex-1 items-center justify-end gap-6">
                            <nav class="hidden md:flex items-center gap-8">
                                <a class="text-sm font-medium hover:text-primary transition-colors" href="#">Home</a>
                                <a class="text-sm font-medium hover:text-primary transition-colors" href="#">About</a>
                                <a class="text-sm font-medium hover:text-primary transition-colors" href="#">Projects</a>
                                <a class="text-sm font-medium hover:text-primary transition-colors" href="#">Contact</a>
                            </nav>
                            <div class="flex items-center gap-2">
                                <button class="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-primary/20 hover:text-primary transition-colors">
                                    <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                                    </svg>
                                </button>
                                <button class="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-primary/20 hover:text-primary transition-colors">
                                    <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </header>

                    <!-- Main Content -->
                    <main class="flex-1 px-4 py-8 sm:px-6 md:px-10">
                        <div class="mx-auto max-w-5xl">
                            <!-- Hero Section - matching your Hero.tsx -->
                            <section class="relative mb-16 flex min-h-[480px] flex-col items-start justify-end overflow-hidden rounded-xl bg-cover bg-center p-8 md:p-12" style="background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url('${heroData.backgroundImage}')">
                                <div class="max-w-xl text-white">
                                    <h1 class="text-4xl font-black tracking-tight md:text-5xl">${heroData.title}</h1>
                                    <p class="mt-4 text-base font-normal text-slate-200 md:text-lg">${heroData.subtitle}</p>
                                </div>
                                <button class="mt-8 h-12 rounded-lg bg-primary px-6 text-base font-bold text-white transition-transform hover:scale-105">
                                    <span class="truncate">${heroData.buttonText}</span>
                                </button>
                            </section>

                            <!-- Featured Projects - matching your FeaturedProjects.tsx -->
                            <section class="mb-16">
                                <h2 class="mb-6 px-4 text-2xl font-bold tracking-tight">Featured Projects</h2>
                                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    ${projects.map(project => `
                                        <div class="flex flex-col gap-3 rounded-lg p-2 transition-all hover:bg-slate-200/50 dark:hover:bg-slate-800/50">
                                            <div class="aspect-video w-full overflow-hidden rounded-lg bg-cover bg-center" style="background-image: url('${project.imageUrl}')"></div>
                                            <div>
                                                <p class="text-base font-medium">${project.title}</p>
                                                <p class="text-sm text-slate-500 dark:text-slate-400">${project.description}</p>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </section>

                            <!-- Contact Form - matching your ContactForm.tsx -->
                            <section>
                                <h2 class="mb-6 px-4 text-2xl font-bold tracking-tight">Contact</h2>
                                <form class="max-w-xl space-y-6 p-4">
                                    <div>
                                        <label class="mb-2 block text-base font-medium" for="name">Name</label>
                                        <input class="form-input h-14 w-full rounded-lg border border-slate-300 bg-slate-100 dark:border-slate-700 dark:bg-slate-900/50 px-4 placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:border-primary focus:ring-primary" id="name" name="name" placeholder="Your Name" required>
                                    </div>
                                    <div>
                                        <label class="mb-2 block text-base font-medium" for="email">Email</label>
                                        <input class="form-input h-14 w-full rounded-lg border border-slate-300 bg-slate-100 dark:border-slate-700 dark:bg-slate-900/50 px-4 placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:border-primary focus:ring-primary" id="email" name="email" type="email" placeholder="Your Email" required>
                                    </div>
                                    <div>
                                        <label class="mb-2 block text-base font-medium" for="message">Message</label>
                                        <textarea class="form-textarea min-h-36 w-full resize-none rounded-lg border border-slate-300 bg-slate-100 dark:border-slate-700 dark:bg-slate-900/50 p-4 placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:border-primary focus:ring-primary" id="message" name="message" placeholder="Your Message" required></textarea>
                                    </div>
                                    <div>
                                        <button type="submit" class="h-12 rounded-lg bg-primary px-6 text-sm font-bold text-white transition-transform hover:scale-105">
                                            <span class="truncate">Send Message</span>
                                        </button>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </main>

                    <!-- Footer - matching your Footer.tsx -->
                    <footer class="mt-auto border-t border-slate-200/80 dark:border-slate-800/80">
                        <div class="mx-auto max-w-5xl px-5 py-10 text-center">
                            <div class="flex items-center justify-center gap-4 mb-6">
                                <a class="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors" href="#" aria-label="Twitter">
                                    <svg fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path>
                                    </svg>
                                </a>
                                <a class="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors" href="#" aria-label="Instagram">
                                    <svg fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                                    </svg>
                                </a>
                                <a class="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors" href="#" aria-label="LinkedIn">
                                    <svg fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                                    </svg>
                                </a>
                            </div>
                            <p class="text-base text-slate-500 dark:text-slate-400">© 2023 Alex. All rights reserved.</p>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
        <script type="module" src="/build/assets/app-CjoApTXX.js"></script>
    </body>
</html>`;
  
  return html;
}

// Create the static files
const publicDir = path.join(process.cwd(), 'public');

// Create index.html with pre-rendered content that matches your actual components
const indexHTML = createStaticHTML();
fs.writeFileSync(path.join(publicDir, 'index.html'), indexHTML);

console.log('Static HTML with your actual component design generated successfully!');

