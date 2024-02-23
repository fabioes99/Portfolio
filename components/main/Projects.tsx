"use client";
import React, { useState, useRef, useEffect  } from "react";
import ProjectCard from "../sub/ProjectCard";
import ProjectTag from "../sub/ProjectTag";
import { motion, useInView } from "framer-motion";
import axiosInstance from '../../services/Back4app';


const Projects = () => {
  const [tag, setTag] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState<any[]>([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };
  

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  useEffect(() => {
    axiosInstance.get('/Git_Repos')
      .then((response: any) => {
        const filtered = response.data.results;      
        setFilteredProjects(filtered);
      })
  }, []); 


  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
        My Projects
      </h1>
     
      <div className=" text-white flex flex-row justify-center items-center gap-2 py-8  z-50">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className=" h-full w-full flex flex-col md:flex-row gap-10 px-10 padding-mobile">
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 ">
          {filteredProjects.map((project: any, index: any) => (
            
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrls={project.image}
                gitUrl={project.git_url}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;