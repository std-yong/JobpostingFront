import TestNavBar from "../components/TestNavBar"
import MainBody from "../components/MainBody";
import BootstrapHead from "../components/BootstrapHead";
import FilterBox from "../components/FilterBox";

function Home () {
  return (
    <>
      <TestNavBar style={{ position: 'fixed', zIndex: 1 }} />
      <div style={{ paddingTop: '74px' }}>
        <FilterBox />
        <MainBody />
      </div>
    </>
  );
}
export default Home;
