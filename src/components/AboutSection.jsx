import { Briefcase, Code, User } from "lucide-react"


export const AboutSection = () => {
    return (<section id="about" className="py-24 px-4 relative">
        {""}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h1 className="text-2xl font-semibold">Passionate Full Stack Developer</h1>

                    <p className="text-muted-foreground">
                        As a fresher full stack developer, I specialize in building responsive,
                        accessible, and performance-driven web applications using modern technologies.
                        I've developed core skills through academic projects, coding challenges,
                        and personal practice, and I'm eager to apply them in professional settings.
                    </p>

                    <p className="text-muted-foreground">
                        I'm driven by the challenge of solving complex problems through clean and efficient code, and I actively explore new tools and frameworks to stay ahead in modern full stack development.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {""}
                            Get In Touch
                        </a>
                        <a href="/TarakaSaikumar__Resume.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">

                            Download CV
                        </a>
                    </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                                </div>
                                 <div className="text-left">
                  <h4 className="font-semibold text-lg"> Front-End Development</h4>
                  <p className="text-muted-foreground">
                    Crafting responsive and interactive user interfaces using modern frameworks like React and Tailwind CSS.
                  </p>
                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                                </div>
                                 <div className="text-left">
                  <h4 className="font-semibold text-lg">Back-End Development</h4>
                  <p className="text-muted-foreground">
                    Building robust server-side logic, RESTful APIs, and database integration using Node.js, Express, and MongoDB.
                  </p>
                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                 <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>
    </section>
)}