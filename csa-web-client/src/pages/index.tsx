import localFont from "next/font/local";
import Navbar from "@/components/navbar";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className="h-screen bg-no-repeat bg-cover" style={{backgroundImage: 'url("/bg-main.png")'}}>
      <Navbar />
      <div className="items-center">
        <div className="sm:w-2/3 p-10 mt-10 sm:mt-20">
          <h1 className="text-5xl font-bold pb-8 sm:text-7xl">
            Find the help you need in a community you trust.
          </h1>
          <h5 className="text-1xl sm:text-xl w-2/3 text-gray-600 pb-6">
            We are dedicated to providing a safe and supportive environment for people to receive support from others who care.
          </h5>
          <ul className="flex items-center space-x-4">
            <Link href="/intake_form">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Intake Form
              </button>
            </Link>
            <button className="bg-transparent hover:text-gray-300 text-white font-bold py-2 px-4 rounded mt-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
            </svg>
              Chat With Us
            </button>
          </ul>
        </div>
      </div>
      </div>
  );
}
