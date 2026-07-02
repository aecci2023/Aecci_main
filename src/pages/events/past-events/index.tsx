
// You can move this data to a separate file (e.g., data/events.js) later
const pastEvents = [
  {
    id: 55,
    date: "29-04-2026",
    type: "Ask Me Anything",
    topic: "EU Trade: Legal Structures, Compliance & Risk",
    venue: "AECCI e-Platform (Online)",
    guest: "Mr. Daniel Dos Reis (Partner, Reis & Pellicano International Lawyers, Portugal)",
  },
  {
    id: 54,
    date: "06-03-2026",
    type: "Ask Me Anything",
    topic: "Beyond Borders: Strengthening EU–India Trade Through Austria",
    venue: "AECCI e-Platform",
    guest: "Mr. Lukas Makovsky (CEO EVL&T Group, Austria)",
  },
  {
    id: 53,
    date: "21-01-2026",
    type: "Ask Me Anything",
    topic: "From India to Spain – Strategy, Finance & Collaboration",
    venue: "AECCI B2B Platform (Online)",
    guest: "Mr. Pablo Gómez (Founder, Oftex Internacionalización, S.L., Spain)",
  }
];

export default function PastEventsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
  
      <main className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="mb-10 border-b pb-6">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Past Events</h1>
          <p className="text-gray-600 max-w-2xl">
            A glimpse of our successful business events, featuring industry experts and renowned guests aimed at professional development.
          </p>
        </div>

        {/* Table Layout for Desktop */}
        <div className="hidden md:block bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="p-4 font-semibold text-gray-700">Sr. No</th>
                <th className="p-4 font-semibold text-gray-700">Dated</th>
                <th className="p-4 font-semibold text-gray-700">Topic</th>
                <th className="p-4 font-semibold text-gray-700">Guest</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {pastEvents.map((event) => (
                <tr key={event.id} className="hover:bg-gray-50">
                  <td className="p-4 text-gray-600">{event.id}</td>
                  <td className="p-4 font-medium">{event.date}</td>
                  <td className="p-4 font-medium text-blue-700">{event.topic}</td>
                  <td className="p-4 text-sm text-gray-600">{event.guest}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Card Layout for Mobile */}
        <div className="md:hidden grid gap-4">
          {pastEvents.map((event) => (
            <div key={event.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-sm text-blue-600 font-bold mb-1">{event.date}</div>
              <h3 className="font-bold text-lg mb-2">{event.topic}</h3>
              <p className="text-sm text-gray-600"><strong>Guest:</strong> {event.guest}</p>
              <div className="mt-4 pt-4 border-t text-xs text-gray-400 uppercase tracking-wider">
                {event.venue}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}