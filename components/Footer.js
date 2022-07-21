function Footer({ missedCalls }) {
  return (
    <div className="flex items-center justify-between gap-2 py-2 px-4  mt-4 shadow lg:flex-col lg:items-stretch lg:justify-start lg:gap-2 lg:m-0 lg:p-0 bg-gray-100 border-t absolute bottom-0 left-0 right-0 lg:static">
      <button className="text-gray-700 font-bold  py-2 px-2 rounded cursor-pointer hover:bg-gray-100 active:scale-90 text-sm lg:py-6 relative">
        Calls{" "}
        <span className="  inline-flex items-center text-sm bg-white border rounded-full p-2 w-6 h-6  text-red-500  ">
          {missedCalls}
        </span>
      </button>
      <button className="text-gray-700 font-bold  py-2 px-2 rounded cursor-pointer hover:bg-gray-100 active:scale-90 text-sm  lg:py-6">
        Contacts
      </button>
      <button className="text-gray-700 font-bold  py-2 px-2 rounded cursor-pointer hover:bg-gray-100 active:scale-90 text-sm  lg:py-6">
        Home
      </button>
      <button className="text-gray-700 font-bold  py-2 px-2 rounded cursor-pointer hover:bg-gray-100 active:scale-90 text-sm lg:py-6">
        Settings
      </button>
      <button className="text-gray-700 font-bold  py-2 px-2 rounded cursor-pointer hover:bg-gray-100 active:scale-90 text-sm lg:py-6">
        Favorites
      </button>
    </div>
  );
}
export default Footer;
