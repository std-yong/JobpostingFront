import Navbar from "../components/NavBar";

import RightBody from "../components/RightBody";

export default function Home() {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        
        <RightBody />
      </div>
    </>
  );
}
