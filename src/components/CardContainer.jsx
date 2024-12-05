import Card from "../components/Card";

export default function CardContainer() {
  return (
    <div className="grid grid-cols-1 gap-10 mt-32 lg:grid-cols-2">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
