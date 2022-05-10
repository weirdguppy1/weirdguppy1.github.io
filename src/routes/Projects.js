import React from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";
import {
  PROJECTS_INTRO,
  PROJECT_1,
  PROJECT_2,
  PROJECT_3,
  PROJECT_4,
  PROJECT_5,
  PROJECT_6,
  PROJECT_7,
} from "../content/content";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import CheckInProjectImg from "../media/checkinproject.png";
import PersonalWebsiteImg from "../media/personalwebsite.png";
import QuotesImg from "../media/quotesapp.png";
import MyBioImg from "../media/mybio.png";
import ImageSharingImg from "../media/plumapp.png";
import ChatAppImg from "../media/chat-app.png";
import DictAppImg from "../media/definitions.png";


const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center"
    >
      <Navbar />
      <motion.div
        whileHover={{
          rotate: 5,
          transition: { duration: 0.25 },
        }}
        className="mt-5"
      >
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-8xl lg:text-9xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-teal-500">
            Projects.
          </span>
        </h1>
      </motion.div>
      <div className="flex flex-col">
        <Section title="Projects are Everything!">{PROJECTS_INTRO}</Section>
        <div className="flex flex-col max-w-xl space-y-2">
          <Card
            link="https://check-in-prj2.vercel.app/"
            title="SLMCS Check-in System"
            image={CheckInProjectImg}
          >
            {PROJECT_1}
          </Card>
          <Card link="/" title="Personal Website" image={PersonalWebsiteImg}>
            {PROJECT_2}
          </Card>
          <Card title="PAAS" image={MyBioImg}>
            {PROJECT_3}
          </Card>
          <Card
            link="https://quotes-app-sigma.vercel.app/"
            title="Quotes App"
            image={QuotesImg}
          >
            {PROJECT_4}
          </Card>
          <Card
            link="https://plum-weirdguppy1.vercel.app/"
            title="Plum: Image Sharing App"
            image={ImageSharingImg}
          >
            {PROJECT_5}
          </Card>
          <Card
            link="https://chat-app-alpha-wheat.vercel.app/"
            title="Chat App"
            image={ChatAppImg}
          >
            {PROJECT_6}
          </Card>
          <Card
            link="https://definitions-app.vercel.app"
            title="Dictionary App"
            image={DictAppImg}
          >
            {PROJECT_7}
          </Card>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
