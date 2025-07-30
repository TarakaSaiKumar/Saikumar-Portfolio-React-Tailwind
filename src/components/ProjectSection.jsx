
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const Projects = [
    {
       id:1,
       title: "Spotify Clone",
       description: "This music app lets users stream their favorite songs, create playlists, and discover new tracks just like Spotify. It has secure login features so each person can save and access their playlists safely.",
       image:"./Projects/Spotify.jpg",
       tags: ["HTML", "CSS", "Javascript"],
       denoUrl: "#",
       githubUrl: "#"
    },
     {
       id:2,
       title: "Wanderlust",
       description: "Wanderlust is a travel website that lets people discover and review cool places to stay around the world. Users can sign up, log in safely, and their sessions are stored securely.",
       image:"./Projects/Wanderlust.jpg",
       tags: ["HTMl", "Bootstrap", "Javascript", "Node.js", "Express.js", "Mongodb"],
       denoUrl: "https://major-project-6ha4.onrender.com/listings",
       githubUrl: "#"
    }

]
export const ProjectSection = () =>{
    return (
        <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {""}
                Featured <span className="text-primary"> Projects</span></h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Here are some of my recent projects, Each project was carefully crafted with attention to detail, performance, and user experience

                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Projects.map((project, key)=>(
                        <div key={key.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title}  className="w-full h-full object-cover transition-transform  duration-500 group-hover:scale-110"/>
                                {console.log(project.image)}
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag)=>(
                                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secoundary-foreground ">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                
                            

                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4 ">{project.description}</p>

                            <div className="flex justify-between items-center">

                                <div className="flex space-x-3">
                                       <a href={project.denoUrl}
                                       target="_blank"
                                       className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink size={20}/></a>
                                       <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github size={20}/></a>
                                </div>

                            </div>

                             </div>
                             </div>
                    ))}
                </div>

        <div className="text-center mt-8">
            <a href="" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                Check my Github <ArrowRight size={16}/>
            </a>
        </div>
        </div>
        </section>
    )
}