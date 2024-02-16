import EndFGM from "/src/assets/no-to-fgm.jpg";
import WaterProjectImage from "/src/assets/waterprogramme.jpeg";
import NaturalDisasterImage from "/src/assets/NaturalDisaster-banner.jpg";
import FoodProgramme from "/src/assets/FoodProgramme.jpeg";
import ChildrensHome from "/src/assets/c-home.jpeg";
import OrganDonate from '/src/assets/organ.jpeg'


function Cards() {
  const cardsData = [
    {
      id: 1,
      title: "END FGM",
      description:
        "Raise awareness and support initiatives to end femicide and violence against women.",
      image: EndFGM,
      organizations: {},
    },
    {
      id: 2,
      title: "WATER PROJECT",
      description:
        "Provide clean and safe water to communities in need through sustainable water projects.",
      image: WaterProjectImage,
      organizations: {},
    },
    {
      id: 3,
      title: "NATURAL DISASTERS",
      description:
        "Support disaster relief efforts and help communities affected by natural disasters.",
      image: NaturalDisasterImage,
      organizations: {},
    },
    {
      id: 5,
      title: "FOOD PROGRAMME",
      description:
        "Provide nutritious meals to those facing hunger and food insecurity.",
      image: FoodProgramme,
      organizations: {},
    },
    {
      id: 6,
      title: "CHILDREN'S HOME",
      description:
        "Support orphaned and vulnerable children by contributing to their well-being and education.",
      image: ChildrensHome,
      organizations: {},
    },
    {
      id: 9,
      title: "ORGAN DONATION",
      description:
        "Raise awareness about organ donation and encourage individuals to become organ donors.",
      image: OrganDonate,
      organizations: {},
    },
    
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardsData.map((card) => (
        <div
          key={card.id}
          className="bg-gray-200 shadow-md rounded-lg overflow-hidden"
        >
          <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <p className="text-gray-600">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
