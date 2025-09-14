import ProjectCard from './ProjectCard';

interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
}

interface FeaturedProjectsProps {
    title?: string;
    projects: Project[];
    className?: string;
}

export default function FeaturedProjects({ 
    title = "Featured Projects", 
    projects, 
    className = "" 
}: FeaturedProjectsProps) {
    return (
        <section className={`mb-16 ${className}`}>
            <h2 className="mb-6 px-4 text-2xl font-bold tracking-tight">{title}</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                    />
                ))}
            </div>
        </section>
    );
}
