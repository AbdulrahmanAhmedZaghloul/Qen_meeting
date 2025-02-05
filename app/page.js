// import JoinForm from "@/components/Join-Form";
import JoinForm from "../components/Join-Form.jsx";
import Header from "../components/header.jsx";
import NewMeeting from "../components/new-meeting.jsx";
import Image from "next/image";
 
export default function Home() {
  return (
    <>

      <Header />

      <div className="flex flex-col items-center justify-center h-screen p-6">
        <div className="mb-8 flex flex-col md:flex-row items-center justify-center h-screen gap-8">
          <Image
            src="/hero.jpg"
            alt="hero Image"
            width={1920}
            height={1080}
            className="h-auto w-96 md:w-[540px] rounded-lg"
          />

          <div className="text-center space-y-6">
            <div>
              <h2 className="text-3xl md:text-5xl ">
                welcome to <span className="text-blue-500">Meeting Q</span>
              </h2>
              <p className="mt-2 text-gray-600 font-light">
                Power by ZEGOCLOUD 
              </p>
            </div>
            <JoinForm/>
            <NewMeeting/>
          </div>

        </div>

      </div>

    </>
  );
}
