import type { NextPage } from "next";
import Education from "../components/Education";
import Hackathon from "../components/Hackathon";
import ListLayout from "../components/ListLayout";
import MyCard from "../components/MyCard";
import Navigation from "../components/Navigation";
import Skills from "../components/Skills";
import Career from "../components/Carrer";

const Home: NextPage = () => {
  return (
    <>
      <Navigation />
      <div>
        <MyCard />
        <ListLayout title="Education">
          <Education />
        </ListLayout>
        <ListLayout title="Career">
          <Career />
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
