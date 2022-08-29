import SongDetails from "../Components/SongDetails";

export default function Show() {
  return (
    <div className="h-full sm:flex flex-wrap justify-center items-center text-center bg-teal-400">
      <div className="w-full header flex items-end justify-center p-4">
        <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
          <span class="block text-white">
            Song details
          </span>
        </h2>
      </div>
      <div class="w-full mx-auto">
        <SongDetails />
      </div>
    </div>
  );
}