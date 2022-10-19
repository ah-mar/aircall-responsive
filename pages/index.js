import Head from "next/head";
import Image from "next/image";
import { BeakerIcon, PhoneIcon } from "@heroicons/react/solid";
import Header from "../components/Header";
import MainBody from "../components/MainBody";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState("inbox"); //for header buttons
  const [calls, setCalls] = useState([]); //primary call data
  const [refresh, setRefresh] = useState(true); // to refetch after sending post request

  let taskref = useRef();

  //console.log({ calls, refresh, filter });

  // calculate number of missed call for use in footer phone icon
  const missedCalls = calls.filter(
    (call) => call.call_type === "missed"
  ).length;

  //Initial data fetch, on component mount
  useEffect(() => {
    fetch("https://aircall-job.herokuapp.com/activities")
      .then((res) => res.json())
      .then((data) => setCalls(data))
      .catch((error) => console.error(error));
  }, []);

  //Subsequent data fetch - reactive on filter change and post requests
  useEffect(() => {
    fetch("https://aircall-job.herokuapp.com/activities")
      .then((res) => res.json())
      .then((data) => {
        taskref.current = data;
        let newList;
        if (filter === "archive") {
          newList = data.filter((call) => call.is_archived);
        } else if (filter === "inbox") {
          newList = data.filter((call) => !call.is_archived);
        } else {
          newList = data;
        }
        setCalls(newList);
      })
      .catch((error) => console.error(error));
  }, [refresh]);

  //Subsequent data fetch - reactive on filter change - ref used to store fetched value
  useEffect(() => {
    // If to avoid running first time- component did update logic
    if (taskref.current) {
      let filterList;
      if (filter === "archive") {
        filterList = taskref?.current?.filter((call) => call.is_archived);
      } else if (filter === "inbox") {
        filterList = taskref?.current?.filter((call) => !call.is_archived);
      } else {
        filterList = taskref?.current;
      }
      setCalls(filterList);
    }
  }, [filter]);

  return (
    <div className="text-gray-700">
      <Head>
        <title>Call-Responsive</title>
        <meta name="description" content="A responsive aircall app />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col  h-screen container mx-auto border max-w-screen-2xl   rounded lg:grid lg:grid-cols-4 xl:grid-cols-5 relative">
     
        <Header setFilter={setFilter} />

        <MainBody refresh={refresh} setRefresh={setRefresh} calls={calls} />

        {/* Sidebar- Favorites- Visible only on x-large screen */}

        <Sidebar />

        
        
        <Footer missedCalls={missedCalls} />
      </div>
    </div>
  );
}
