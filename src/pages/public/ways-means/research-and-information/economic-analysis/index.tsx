import Navbar from "@/components/navbar/Navbar";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 flex flex-col">
        <div className="container mx-auto px-4 py-8 max-w-5xl flex-grow flex flex-col">
          <h1 className="text-4xl font-heading font-bold mb-8">
            Economic Analysis
          </h1>

          <div className="flex-grow w-full border rounded-xl overflow-hidden shadow-sm bg-white">
            <iframe
              src="https://www.aecci.org.in/ways-means/aecci-research-and-information-2/the-economic-analysis/"
              className="w-full h-full min-h-[70vh] border-0"
              title="Economic Analysis"
            />
          </div>

          <div className="mt-8 text-sm text-muted-foreground text-center">
            Source:{" "}
            <a
              href="https://www.aecci.org.in/ways-means/aecci-research-and-information-2/the-economic-analysis/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://www.aecci.org.in/ways-means/aecci-research-and-information-2/the-economic-analysis/
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
