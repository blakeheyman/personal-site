export default function Resume() {
  return (
    <div className="m-5">
      <h1 className="text-center text-4xl font-bold mb-8">My Resume</h1>

      <div className="flex justify-center">
        <div className="w-full md:w-8/12">
          <iframe
            width="100%"
            src="BlakeHeymanResume.pdf#toolbar=0&view=FitH"
            style={{ aspectRatio: "8.5 / 11" }}
            className="border-none"
            title="Resume PDF"
          />
        </div>
      </div>
    </div>
  );
}
