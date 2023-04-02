import Navbar from "../components/NavBar";
import LeftBody from "../components/LeftBody";
import RightBody from "../components/RightBody";
import MainBody from "../components/MainBody";

export default function Home() {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <LeftBody />
        <RightBody />
      </div>
    </>
  );
}
