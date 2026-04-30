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
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <main className="flex-grow">
        {/* Hero Section */}
        <Slider />

        {/* Features Section */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to scale
            </h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cardViewData.map((cardData, index) => (
              <Card key={index} {...cardData} />
            ))}
          </div>
        </section>
      </main>

      {/* --- ENHANCED FOOTER --- */}
      <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-12">
            
            {/* Brand Column */}
            <div className="col-span-2 lg:col-span-2">
              <h3 className="text-xl font-bold text-blue-600 mb-4 italic">InventoryPro</h3>
              <p className="text-gray-500 max-w-xs mb-6">
                The world’s most intuitive inventory management system. Built for speed, accuracy, and global scale.
              </p>
              <div className="flex gap-4">
                {/* Social Icons Placeholder */}
                <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 cursor-pointer">𝕏</span>
                <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 cursor-pointer">𝑓</span>
                <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 cursor-pointer">in</span>
              </div>
            </div>

            {/* Links Column 1 */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="hover:text-blue-600 cursor-pointer">Features</li>
                <li className="hover:text-blue-600 cursor-pointer">Integrations</li>
                <li className="hover:text-blue-600 cursor-pointer">Pricing</li>
                <li className="hover:text-blue-600 cursor-pointer">Changelog</li>
              </ul>
            </div>

            {/* Links Column 2 */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="hover:text-blue-600 cursor-pointer">About Us</li>
                <li className="hover:text-blue-600 cursor-pointer">Careers</li>
                <li className="hover:text-blue-600 cursor-pointer">Privacy</li>
                <li className="hover:text-blue-600 cursor-pointer">Contact</li>
              </ul>
            </div>

            {/* Links Column 3 */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="hover:text-blue-600 cursor-pointer">Help Center</li>
                <li className="hover:text-blue-600 cursor-pointer">API Docs</li>
                <li className="hover:text-blue-600 cursor-pointer">Status</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2026 InventoryPro Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="hover:underline cursor-pointer">Terms of Service</span>
              <span className="hover:underline cursor-pointer">Cookie Policy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}