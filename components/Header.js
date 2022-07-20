function Header({ setFilter }) {
  function handleCallsReset() {
    fetch("https://aircall-job.herokuapp.com/reset")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error))
      .finally(() => setFilter("inbox"));
  }

  return (
    <div className="flex items-center justify-between gap-2 py-2 px-4 shadow  lg:flex-col lg:items-stretch lg:justify-start lg:gap-2 lg:m-0 lg:p-0 bg-gray-100">
      <h1
        onClick={handleCallsReset}
        className="text-2xl font-bold text-green-500 lg:text-center lg:border-b lg:py-6"
      >
        Logo
      </h1>
      <button
        onClick={() => setFilter("inbox")}
        className="text-gray-700 font-bold  py-2 px-4 rounded cursor-pointer hover:bg-gray-100 active:scale-90 lg:py-6 "
      >
        Inbox
      </button>
      <button
        onClick={() => setFilter("all")}
        className="text-gray-700 font-bold  py-2 px-4 rounded cursor-pointer hover:bg-gray-100 active:scale-90 lg:py-6"
      >
        All
      </button>
      <button
        onClick={() => setFilter("archive")}
        className="text-gray-700 font-bold  py-2 px-4 rounded cursor-pointer hover:bg-gray-100 active:scale-90 lg:py-6"
      >
        Archived
      </button>
    </div>
  );
}
export default Header;
