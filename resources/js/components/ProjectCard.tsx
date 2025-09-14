interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    className?: string;
}

export default function ProjectCard({ title, description, imageUrl, className = "" }: ProjectCardProps) {
    return (
        <div className={`flex flex-col gap-3 rounded-lg p-2 transition-all hover:bg-slate-200/50 dark:hover:bg-slate-800/50 ${className}`}>
            <div 
                className="aspect-video w-full overflow-hidden rounded-lg bg-cover bg-center" 
                style={{backgroundImage: `url("${imageUrl}")`}}
            />
            <div>
                <p className="text-base font-medium">{title}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>
            </div>
        </div>
    );
}
