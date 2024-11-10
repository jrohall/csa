import { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import Link from "next/link";

export default function IntakeForm() {
  const [healthcare, setHealthcareOpen] = useState(false);
  const [transportation, setTransportationOpen] = useState(false);
  const [clothing, setClothingOpen] = useState(false);
  const [housing, setHousingOpen] = useState(false);
  const [spiritual, setSpiritualOpen] = useState(false);
  const [financial, setFinancialOpen] = useState(false);

  useEffect(() => {
    const intakeForm = JSON.parse(localStorage.getItem("intakeForm") ?? "");
    if (intakeForm) {
      setHealthcareOpen(intakeForm.healthcare);
      setTransportationOpen(intakeForm.transportation);
      setClothingOpen(intakeForm.clothing);
      setHousingOpen(intakeForm.housing);
      setSpiritualOpen(intakeForm.spiritual);
      setFinancialOpen(intakeForm.financial);
    }
  }, []);

  const handleSubmit = () => {
    const intakeForm = {
      healthcare,
      transportation,
      clothing,
      housing,
      spiritual,
      financial,
    };
    localStorage.setItem("intakeForm", JSON.stringify(intakeForm));
    console.log(intakeForm);
  };

  return (
    <div className="flex flex-col gap-4">
        <Navbar />
        <div className="ml-24 mt-12">
            <h1 className="text-4xl font-bold mb-4">Intake Form</h1>
            <p className="text-lg mb-8">Please answer as many questions as you can accurately in order to get the best possible responses.</p>
            <h2 className="text-2xl font-bold mb-4">Assistance Needs</h2>
            <p className="text-lg mb-8">What are you looking for? (Select all that apply)</p>
            <div className="flex flex-wrap gap-4">
                <div
                    className={`bg-transparent w-36 h-36 border-2 flex flex-col items-center justify-center ${
                    healthcare ? "border-white" : "border-gray-500"
                    } md:w-48 md:h-48`}
                    onClick={() => setHealthcareOpen(!healthcare)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 md:size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    <h2 className="text-xl font-bold text-center md:text-2xl">
                        Healthcare
                    </h2>
                </div>
                <div
                    className={`bg-transparent w-36 h-36 border-2 flex flex-col items-center justify-center ${
                    transportation ? "border-white" : "border-gray-500"
                    } md:w-48 md:h-48`}
                    onClick={() => setTransportationOpen(!transportation)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 md:size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                    </svg>
                    <h2 className="text-xl font-bold text-center md:text-2xl">
                        Transportation
                    </h2>
                </div>
                <div
                    className={`bg-transparent w-36 h-36 border-2 flex flex-col items-center justify-center ${
                    clothing ? "border-white" : "border-gray-500"
                    } md:w-48 md:h-48`}
                    onClick={() => setClothingOpen(!clothing)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 md:size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" />
                    </svg>
                    <h2 className="text-xl font-bold text-center md:text-2xl">
                        Clothing
                    </h2>
                </div>
                <div
                    className={`bg-transparent w-36 h-36 border-2 flex flex-col items-center justify-center ${
                    housing ? "border-white" : "border-gray-500"
                    } md:w-48 md:h-48`}
                    onClick={() => setHousingOpen(!housing)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 md:size-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <h2 className="text-xl font-bold text-center md:text-2xl">
                        Housing
                    </h2>
                </div>
                <div
                    className={`bg-transparent w-36 h-36 border-2 flex flex-col items-center justify-center ${
                    spiritual ? "border-white" : "border-gray-500"
                    } md:w-48 md:h-48`}
                    onClick={() => setSpiritualOpen(!spiritual)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 md:size-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                    <h2 className="text-xl font-bold text-center md:text-2xl">Spiritual</h2>
                </div>
                <div
                    className={`bg-transparent w-36 h-36 border-2 flex flex-col items-center justify-center ${
                    financial ? "border-white" : "border-gray-500"
                    } md:w-48 md:h-48`}
                    onClick={() => setFinancialOpen(!financial)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 md:size-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                    </svg>
                    <h2 className="text-xl font-bold text-center md:text-2xl">Financial</h2>
                </div>
            </div>
            <Link href="/intake_services">
                <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-32 rounded mt-16"
                >
                    Next
                </button>
            </Link>
        </div>
    </div>
  );
}


