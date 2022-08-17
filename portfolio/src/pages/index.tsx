import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Education from "../components/Education";
import Hackathon from "../components/Hackathon";
import ListLayout from "../components/ListLayout";
import MyCard from "../components/MyCard";
import Navigation from "../components/Navigation";
import Skills from "../components/Skills";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Navigation />
      <div>
        <MyCard />
        <ListLayout title="Education">
          <Education />
        </ListLayout>
        <ListLayout title="Skills">
          <Skills />
        </ListLayout>
        <ListLayout title="Hackathon">
          <Hackathon />
        </ListLayout>
      </div>
    </>
  );
};

export default Home;
