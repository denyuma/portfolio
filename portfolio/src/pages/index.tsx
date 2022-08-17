import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import MyCard from "../components/MyCard";
import Navigation from "../components/Navigation";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Navigation />
      <MyCard />
    </div>
  );
};

export default Home;
