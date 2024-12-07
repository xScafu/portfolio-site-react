import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import Form from "../components/Form";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className={`absolute z-10 top-20 right-0 overflow-hidden`}>
        <MobileMenu />
      </div>
      <h1 className="my-40 text-center text-3xl">
        SORRY, this page is under construction 🚧
      </h1>
      <h3 className="my-5 text-center font-medium text-2xl">
        Let's keep in touch
      </h3>
      <Form />
    </div>
  );
}
