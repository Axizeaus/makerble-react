import DesktopHome from "./DesktopHome";
import MobileHome from "./MobileHome";

const Home = (): JSX.Element => {
  return (
    <main>
      <div className="hidden md:block">
        <DesktopHome />
      </div>

      <div className="md:hidden">
        <MobileHome />
      </div>
    </main>
  );
};

export default Home;
