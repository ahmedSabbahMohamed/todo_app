import desktopBackground from "../assets/images/bg-desktop-dark.jpg"
import mobileBackground from "../assets/images/bg-mobile-dark.jpg";

function BackgroundDark() {
  return (
    <div className="hidden dark:block">
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

export default BackgroundDark