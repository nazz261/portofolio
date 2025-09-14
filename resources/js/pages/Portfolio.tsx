import { Head } from '@inertiajs/react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

// Sample data - in a real app, this would come from props or API
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

export default function Portfolio() {
    const handleContactSubmit = (formData: FormData) => {
        // Handle form submission
        console.log('Form submitted:', Object.fromEntries(formData));
    };

    return (
        <>
            <Head title="Portfolio" />
            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
                <div className="flex h-full grow flex-col">
                    <Header />
                    <main className="flex-1 px-4 py-8 sm:px-6 md:px-10">
                        <div className="mx-auto max-w-5xl">
                            <Hero {...heroData} />
                            <FeaturedProjects projects={projects} />
                            <ContactForm onSubmit={handleContactSubmit} />
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    );
}
