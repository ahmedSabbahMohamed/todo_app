import desktopBackground from "../assets/images/bg-desktop-light.jpg";
import mobileBackground from "../assets/images/bg-mobile-light.jpg";

function BackgroundLight() {
  return (
    <div className="dark:hidden">
      <img
        className="w-full h-auto hidden lg:block"
        src={desktopBackground}
        alt="light-bg"
      />
      <img
        className="w-full h-auto lg:hidden"
        src={mobileBackground}
        alt="mobile-bg"
      />
    </div>
  );
}

export default BackgroundLight;
