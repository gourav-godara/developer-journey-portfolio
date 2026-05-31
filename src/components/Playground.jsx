export default function Playground() {
  return (
    <section className="p-10 space-y-10">

      <h1 className="text-5xl font-bold text-black text-center">
        Tailwind Playground
      </h1>
        <div className="grid md:grid-cols-2 gap-6">

            <button className="flex items-center justify-center w-full rounded-2xl bg-blue-500 p-5 shadow-sm hover:bg-blue-400 transition min-h-[100px] text-white font-medium text-lg">
                Experiment Button
            </button>

            <div className="flex items-center gap-x-4 w-full rounded-2xl bg-white p-5 shadow-sm border-2 border-gray-300 hover:bg-gray-100 transition min-h-[100px]">

                <img
                className="size-12 shrink-0 rounded-xl object-cover"
                src="/download.jpeg"
                />

                <div>
                <div className="text-xl font-medium text-black">
                    WhatsApp
                </div>

                <p className="text-gray-500">
                    You have a new message!
                </p>
                </div>

            </div>

        </div>

      <button className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-400 transition">
        Experiment Button
      </button>

      <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-2xl bg-white p-5 shadow-sm border border-gray-300 hover:bg-gray-200 transition">

        <img className="size-12 shrink-0 rounded-xl" src="/download.jpeg" />

        <div>
          <div className="text-xl font-medium text-black">
            WhatsApp
          </div>

          <p className="text-gray-500">
            You have a new message!
          </p>
        </div>

      </div>

    </section>
  );
}
