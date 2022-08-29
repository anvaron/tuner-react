import Songs from "../Components/Songs";

export default function Index() {
  return (
    <div className="h-full sm:flex flex-wrap justify-center items-center text-center bg-teal-400">
      <div className="w-full header flex items-end justify-center p-4">
        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
          <span className="block text-white">
            Song list
          </span>
        </h2>
      </div>
      <div className="w-full mx-auto">
        <Songs />
      </div>
    </div>
  );
}