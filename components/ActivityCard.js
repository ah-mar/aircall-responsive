import { PhoneIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { format, formatDuration, secondsToMinutes } from "date-fns";

function ActivityCard({ activity, refresh, setRefresh }) {
  const [isCardOpen, setIsCardOpen] = useState(false);

  // Toggle additional details
  function toggleDetails() {
    setIsCardOpen(!isCardOpen);
  }

  // Send put request to archive and unarchive calls
  function archiveCall() {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ is_archived: !activity.is_archived }),
      method: "POST",
    };

    fetch(
      `https://aircall-job.herokuapp.com/activities/${activity.id}`,
      options
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error))
      .finally(() => setRefresh(!refresh));
  }

  const iconColor = {
    missed: "text-red-500",
    answered: "text-green-500",
    voicemail: "text-gray-500",
  };

  return (
    <div className="grid grid-cols-5 sm:grid-cols-7 content-center place-content-center gap-x-2 gap-y-2  py-2 px-4 border mx-4 rounded-md text-gray-700">
      <div className="">
        <PhoneIcon
          className={`h-5 w-5 inline ${iconColor[activity.call_type]}`}
        />
        <span className="text-xs font-bold text-gray-400 hidden sm:inline ml-2">
          {activity?.duration}s
        </span>
      </div>

      <p className=""> From:</p>
      <p className=" font-bold col-span-2"> {activity.from || "Unknown"}</p>
      <p className="  text-sm flex items-center justify-end whitespace-nowrap">
        {format(new Date(activity?.created_at), "ccc, d-LLL")}
      </p>
      <div className="hidden sm:flex sm:col-span-2 text-sm font-bold items-center justify-end">
        <button
          onClick={archiveCall}
          className=" px-4 py-1 border rounded hover:bg-gray-100 active:scale-90"
        >
          {activity.is_archived ? "Unarchive" : "Archive"}
        </button>
      </div>

      <p className="  text-sm flex items-center  ">{activity?.call_type}</p>
      <p className="">To: </p>
      <p className=" font-bold col-span-2">{activity?.to || "Unknown"}</p>
      <p className=" text-right text-sm flex items-center justify-end ">
        {format(new Date(activity?.created_at), "p")}
      </p>
      <p className="hidden sm:inline-flex sm:col-span-2 text-sm font-bold items-center justify-end">
        Via: {activity?.via || "Unknown"}
      </p>
    </div>
  );
}
export default ActivityCard;

const data = {
  id: 7833,
  created_at: "2018-04-18T16:59:48.000Z",
  direction: "outbound",
  from: "Jonathan Anguelov",
  to: "06 45 13 53 91",
  via: "NYC Office",
  duration: "60",
  is_archived: false,
  call_type: "missed",
};
