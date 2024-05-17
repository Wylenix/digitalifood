import Skeletons from "../components/Skeletons";

export default function Loading() {
  return (
    <div className="grid grid-cols-4 overflow-auto gap-4 w-full md:grid-cols-4 lg:grid-col-6 h-fit">
      <Skeletons />
    </div>
  );
}
