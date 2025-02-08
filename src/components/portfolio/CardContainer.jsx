import Card from "../Card";

export default function CardContainer() {
  return (
    <div className="grid grid-cols-1 mx-5 gap-8 mt-32 md:grid-cols-2 xl:grid-cols-3">
      <Card
        cardTitle="Stefania Mancuso"
        cardDescription="Stefania Mancuso's webpage. Singer. Used GSAP and Motion (former Framer Motion) for animations and Redux for state managment."
        cardImg="../Stefania_Mancuso.png"
        cardLink="https://sito-stefania-mancuso.vercel.app/"
      />
      <Card
        cardTitle="NASA APOD"
        cardDescription="NASA Astronomy picture of the day website with only CSS and JavaScript."
        cardImg="../NASA_APOD.png"
        cardLink="https://es-nasa-apod.vercel.app/"
      />
      <Card
        cardTitle="To do list"
        cardDescription="A React to do list exaple with local storage saving and state manipulations."
        cardImg="../To_do_list.png"
        cardLink="https://react-task-coral-iota.vercel.app/"
      />
      <Card
        cardTitle="Fakestore"
        cardDescription="A fake store using React and API calls."
        cardImg="../Fakestore.png"
        cardLink="https://fakestore-react-tan.vercel.app/"
      />
    </div>
  );
}
