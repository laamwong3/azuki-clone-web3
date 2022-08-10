import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useAddress } from "@thirdweb-dev/react";
import Login from "../components/Login";
import Content from "../components/Content";

const Home: NextPage = () => {
  const address = useAddress();
  return <>{!address ? <Login /> : <Content />}</>;
};

export default Home;
