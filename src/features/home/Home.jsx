import "./home.scss";
import { Banner } from "./Banner";
import { Navbar } from "./Navbar";

export const Home = () => {
  return (
    <>
      <main>
        <Navbar />
        <Banner />
      </main>
    </>
  );
};
