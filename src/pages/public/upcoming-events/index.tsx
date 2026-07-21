// src/pages/events/upcoming-events.tsx

export default function UpcomingEventsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <main className="flex-grow pt-20 flex flex-col">
        <div className="container mx-auto px-4 py-8 max-w-5xl flex-grow flex flex-col">
          <h1 className="text-4xl font-heading font-bold mb-8">
            Upcoming Events
          </h1>

          {/* Event 1: Egypt Business Webinar */}
          <div className="mb-10 border rounded-xl overflow-hidden shadow-sm bg-white p-6">
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
              <h2 className="text-2xl font-heading font-bold text-primary">
                AECCI India– Sadany & Partners Law Firm Egypt Business Webinar
              </h2>
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mt-2 md:mt-0 whitespace-nowrap">
                Online
              </span>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">
              <strong>Date:</strong> 6 July 2026 | <strong>Mode:</strong> Online
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              The Asian Exporters' Chamber of Commerce & Industry (AECCI), is associating with its 
              esteemed collaborator—a leading Law partners from Egypt, for organising an exclusive 
              webinar to explore emerging trade and investment opportunities with Egypt.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              The session will provide valuable insights into Egypt's business environment, 
              sector-specific opportunities, market entry strategies, and avenues for bilateral 
              collaboration. Industry experts and business leaders from various countries will 
              share practical perspectives on strengthening commercial partnerships.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-4 mt-2">
              <h4 className="font-semibold text-gray-800 mb-2">Who should attend?</h4>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  Exporters and Importers
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  Manufacturers
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  MSMEs
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  Trade Consultants
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  Entrepreneurs
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  Investors
                </li>
              </ul>
            </div>
          </div>

          {/* Event 2: Global Deal Room Launch */}
          <div className="mb-10 border rounded-xl overflow-hidden shadow-sm bg-white p-6">
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
              <h2 className="text-2xl font-heading font-bold text-primary">
                Launch of AECCI Global Deal Room
              </h2>
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mt-2 md:mt-0 whitespace-nowrap">
                Online
              </span>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">
              <strong>Date:</strong> 10 July 2026 | <strong>Mode:</strong> Online
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              AECCI proudly announces the launch of the AECCI Global Deal Room—a dedicated digital 
              business networking and trade facilitation platform designed to connect Indian 
              enterprises with verified international buyers, sellers, investors, distributors, 
              and strategic partners.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              The platform aims to facilitate cross-border business collaborations by enabling 
              members to:
            </p>
            
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-2">
              <li>Showcase products and services</li>
              <li>Connect with global business partners</li>
              <li>Explore trade and investment opportunities</li>
              <li>Generate qualified business leads</li>
              <li>Participate in virtual B2B meetings and trade interactions</li>
            </ul>
            
            <div className="bg-primary/5 border-l-4 border-primary p-4 mt-4 rounded-r-lg">
              <p className="text-gray-700 text-sm">
                The AECCI Global Deal Room represents another significant step in the Chamber's 
                commitment to fostering international business partnerships and creating new 
                opportunities for Indian enterprises in the global marketplace.
              </p>
            </div>
          </div>

        
        </div>
      </main>
    </div>
  );
}