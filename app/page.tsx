import Image from "next/image";
import axios from "axios";

type Project = {
    id: number;
    name: string;
    description: string;
    link: string;
    demo: string;
    image: string;
    images: string[];
}

async function fetchProjects(): Promise<Project[]> {
    const response = await axios.get('https://my-json-server.typicode.com/liankip/api-portofolio/project')
    // const response = await axios.get('http://localhost:3000/project')

    return response.data;
}

export default async function Home() {
    const projects = await fetchProjects();

    return (
        <div className="bg-white dark:bg-gray-800 h-screen py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                    <div className="flex items-center gap-12">
                        <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">Gallery</h2>

                        <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
                            This is a section of some simple filler text,
                            also known as placeholder text. It shares some characteristics of a real written text.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6 xl:gap-8">
                    {projects.map(project => (
                        <a href="#"
                           className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                            <img
                                src={project.image}
                                loading="lazy" alt="Photo by Minh Pham"
                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>

                            <div
                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>

                            <span
                                className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">{project.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}