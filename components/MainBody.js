import { PhoneIcon } from "@heroicons/react/solid";
import ActivityCard from "./ActivityCard";

function MainBody({ refresh, setRefresh, calls }) {
  return (
    <div className="flex flex-col gap-8 mt-4 max-h-[85vh] lg:max-h-[100vh] overflow-y-auto col-span-3 row-span-2">
      <h2 className="hidden lg:block text-center text-xl font-bold m-0 p-0">
        Calls List
      </h2>

      {calls.map((activity) => (
        <ActivityCard
          key={activity.id}
          activity={activity}
          calls={calls}
          refresh={refresh}
          setRefresh={setRefresh}
        />
      ))}
    </div>
  );
}
export default MainBody;
