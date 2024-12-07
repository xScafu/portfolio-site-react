import Card from "../Card";

export default function CardContainer() {
  return (
    <div className="grid grid-cols-1 gap-10 mt-32 lg:grid-cols-2">
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
