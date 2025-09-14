interface HeroProps {
    title: string;
    subtitle: string;
    buttonText: string;
    backgroundImage: string;
    className?: string;
}

export default function Hero({ 
    title, 
    subtitle, 
    buttonText, 
    backgroundImage, 
    className = "" 
}: HeroProps) {
    return (
        <section 
            className={`relative mb-16 flex min-h-[480px] flex-col items-start justify-end overflow-hidden rounded-xl bg-cover bg-center p-8 md:p-12 ${className}`}
            style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("${backgroundImage}")`}}
        >
            <div className="max-w-xl text-white">
                <h1 className="text-4xl font-black tracking-tight md:text-5xl">{title}</h1>
                <p className="mt-4 text-base font-normal text-slate-200 md:text-lg">{subtitle}</p>
            </div>
            <button className="mt-8 h-12 rounded-lg bg-primary px-6 text-base font-bold text-white transition-transform hover:scale-105">
                <span className="truncate">{buttonText}</span>
            </button>
        </section>
    );
}
