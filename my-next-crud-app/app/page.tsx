import Card from "./components/Card";
import Slider from "./components/Slider";


export default function Home() {

  const cardViewData = [
    {
      emoji: "📦",
      title: "Real-Time Stock Tracking",
      description: "Monitor product quantities, receive low-stock alerts, and prevent out-of-stock situations automatically.",
    },
    {
      emoji: "📄",
      title: "Bulk Import / Export",
      description: "Upload thousands of products via CSV or API. Export your inventory for offline analysis in one click.",
    },
    {
      emoji: "📊",
      title: "Sales & Inventory Analytics",
      description: "Visualise turnover rates, seasonal trends, and profit margins with interactive dashboards.",
    },
    {
      emoji: "🔔",
      title: "Smart Notifications",
      description: "Get email or SMS alerts for expiring batches, reorder points, and unusual stock movements.",
    },
  ];

  return (
    <>
      <Slider />
      <div className="m-5 flex flex-wrap gap-6 justify-center">
            {cardViewData.map((cardData, index) => (
              <Card key={index} title={cardData.title} description={cardData.description} emoji={cardData.emoji} />
            ))}
      </div>
    </>
  );
}