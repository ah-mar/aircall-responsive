import { faker } from "@faker-js/faker";
import Image from "next/image";

function Sidebar() {
  const name = faker.name.findName();
  const avatar = faker.image.avatar(50, 50, false);

  return (
    <div className="hidden xl:flex xl:row-span-2 border  flex-col xl:max-h-[100vh] overflow-y-auto text-gray-700">
      <h2 className="text-lg  font-bold border-b p-6 text-center">Favorites</h2>

      {Array(10)
        .fill(1)
        .map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-4 border-b rounded px-2 py-4"
          >
            <img
              src={
                faker.image.avatar(50, 50, false) ||
                "https://avatars.dicebear.com/api/adventurer/Scrooge%20Mc.svg"
              }
              alt=""
              className=" h-10 w-10 rounded-full border "
            />
            <div className=" whitespace-nowrap overflow-hidden  text-ellipsis">
              <p className="">{faker.name.findName() || "Unknown"}</p>
            </div>

            <button className="text-sm font-bold px-4 py-1 border rounded hover:bg-gray-100 active:scale-90">
              Call
            </button>
          </div>
        ))}
    </div>
  );
}
export default Sidebar;
