import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import Form from "../components/Form";
import TextBoxes from "../ui/TextBoxes";
import { Divider } from "@mui/material";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className={`absolute z-10 top-20 left-[-12px] overflow-hidden`}>
        <MobileMenu />
      </div>
      {/* <h1 className="my-40 text-center text-3xl">
        SORRY, this page is under construction 🚧
      </h1> */}
      <h3 className="mt-20 text-center font-medium text-4xl u">
        Let's keep in touch
      </h3>
      <div className="mb-20">
        <TextBoxes>
          <p className="mb-10">
            I am always looking for{" "}
            <span className="font-bold">stimulating</span> challenges that bring
            out my <span className="font-bold">passions</span> and{" "}
            <span className="font-bold">skills</span>. <br /> If you too want to
            enhance your <span className="font-bold">visibilit</span>y and{" "}
            <span className="font-bold">reach</span> as many{" "}
            <span className="font-bold">users</span> as possible for{" "}
            <span className="font-bold">your business</span>, let’s start a{" "}
            <span className="font-bold">collaboration!</span> <br />
            With work and dedication, we can bring your vision to life and
            achieve a prominent position in our community. <br />
            <span className="font-bold">Let’s keep in touch</span>!
          </p>
          <Divider
            sx={{ backgroundColor: "white" }}
            className="w-11/12"
          ></Divider>
          <p className="mt-10">
            You can send me an <span className="font-bold">email</span> by
            filling out the <span className="font-bold">form below</span>, or
            you can reach out to me through my{" "}
            <span className="font-bold">social media</span> channels, which you
            can also find below. <br />{" "}
            <span className="font-bold">Thank you!</span>
          </p>
        </TextBoxes>
      </div>
      <div className="bg-blue-400 dark:bg-slate-700 -mx-5 -mb-5 pt-20">
        <Form />
      </div>
      <div className="pt-20 bg-blue-400 dark:bg-slate-700 -mx-3 p-3">
        <Divider
          sx={{ backgroundColor: "white" }}
          className="w-11/12"
          variant="middle"
        ></Divider>
        <Footer />
      </div>
    </div>
  );
}
