'use client';

import Image from "next/image";
import axios from "axios";
import {FaGithub, FaLink} from "react-icons/fa";
import {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react'
import {EffectCoverflow, Pagination, Autoplay} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

type Project = {
    id: number;
    name: string;
    description: string;
    github: string;
    demo: string;
    image: string;
    images: string[];
}

export default function Home() {
    const [projects, setProjects] = useState<Project[]>([])
    const [modalImage, setModalImage] = useState<string | null>(null)

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await axios.get('https://my-json-server.typicode.com/liankip/api-portofolio/project')
            setProjects(response.data)
        }

        fetchProjects()
    }, [])

    return (
        <div className="bg-white dark:bg-gray-800 py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                    <div className="flex items-center gap-12">
                        <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">Portofolio</h2>

                        <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
                            Liandi Haikal
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 md:gap-6 xl:gap-8">
                    {projects.map(project => {
                        return (
                            <div className="rounded overflow-hidden shadow-lg">
                                <div className="relative">
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                                       className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                                        <Image
                                            width={500}
                                            height={300}
                                            src={project.image}
                                            loading="lazy"
                                            alt={project.name}
                                            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>
                                    </a>
                                </div>
                                <div className="px-6 py-4">
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                                       className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">{project.name}</a>
                                    <p className="text-gray-500 text-sm">
                                        {project.description}
                                    </p>

                                    <Swiper
                                        effect={'coverflow'}
                                        grabCursor={true}
                                        centeredSlides={true}
                                        loop={true}
                                        slidesPerView={'auto'}
                                        autoplay={{delay: 2500, disableOnInteraction: false}}
                                        pagination={{clickable: true}}
                                        modules={[EffectCoverflow, Pagination, Autoplay]}
                                        className="mt-4"
                                    >
                                        {project.images.map((image, index) => (
                                            <SwiperSlide key={index} className="w-40">
                                                <img
                                                    key={index}
                                                    className="object-cover object-center w-full h-40 max-w-full rounded-lg cursor-pointer transition hover:scale-105"
                                                    src={image}
                                                    alt={`${project.name}-${index}`}
                                                    onClick={() => setModalImage(image)}
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>

                                    <div className="flex mt-4 justify-center">
                                        <a href={project.github} className="w-6 mx-1">
                                            <FaGithub/>
                                        </a>
                                        {project.demo != "" ? <a href={project.demo} className="w-6 mx-1">
                                            <FaLink/>
                                        </a> : ""}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="relative">
                {modalImage && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
                        onClick={() => setModalImage(null)}>
                        <div
                            className="relative max-w-6xl w-full max-h-screen overflow-y-auto p-4"
                            onClick={(e) => e.stopPropagation()}>
                            <button
                                className="absolute top-2 right-2 text-white text-3xl font-bold z-10"
                                onClick={() => setModalImage(null)}>
                                &times;
                            </button>
                            <img
                                src={modalImage}
                                alt="Preview"
                                className="w-full max-h-screen h-auto object-contain rounded-lg"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}