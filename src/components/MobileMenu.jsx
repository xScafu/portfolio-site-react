import { useSelector } from "react-redux";

export default function MobileMenu() {
  const isVisibile = useSelector((state) => state.mobileMenu.isOpen);
  if (isVisibile) {
    return (
      <div className="bg-red-500 w-full h-2/3 absolute right-10 z-10">
        <ul>
          <li>Home</li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="hidden">
        <ul>
          <li>Home</li>
        </ul>
      </div>
    );
  }
}
