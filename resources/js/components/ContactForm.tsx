interface ContactFormProps {
    title?: string;
    className?: string;
    onSubmit?: (data: FormData) => void;
}

export default function ContactForm({ 
    title = "Contact", 
    className = "",
    onSubmit 
}: ContactFormProps) {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(new FormData(e.currentTarget));
        }
    };

    return (
        <section className={className}>
            <h2 className="mb-6 px-4 text-2xl font-bold tracking-tight">{title}</h2>
            <form className="max-w-xl space-y-6 p-4" onSubmit={handleSubmit}>
                <div>
                    <label className="mb-2 block text-base font-medium" htmlFor="name">Name</label>
                    <input 
                        className="form-input h-14 w-full rounded-lg border border-slate-300 bg-slate-100 dark:border-slate-700 dark:bg-slate-900/50 px-4 placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:border-primary focus:ring-primary" 
                        id="name" 
                        name="name"
                        placeholder="Your Name" 
                        required
                    />
                </div>
                <div>
                    <label className="mb-2 block text-base font-medium" htmlFor="email">Email</label>
                    <input 
                        className="form-input h-14 w-full rounded-lg border border-slate-300 bg-slate-100 dark:border-slate-700 dark:bg-slate-900/50 px-4 placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:border-primary focus:ring-primary" 
                        id="email" 
                        name="email"
                        type="email"
                        placeholder="Your Email" 
                        required
                    />
                </div>
                <div>
                    <label className="mb-2 block text-base font-medium" htmlFor="message">Message</label>
                    <textarea 
                        className="form-textarea min-h-36 w-full resize-none rounded-lg border border-slate-300 bg-slate-100 dark:border-slate-700 dark:bg-slate-900/50 p-4 placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:border-primary focus:ring-primary" 
                        id="message" 
                        name="message"
                        placeholder="Your Message"
                        required
                    />
                </div>
                <div>
                    <button 
                        type="submit"
                        className="h-12 rounded-lg bg-primary px-6 text-sm font-bold text-white transition-transform hover:scale-105"
                    >
                        <span className="truncate">Send Message</span>
                    </button>
                </div>
            </form>
        </section>
    );
}
