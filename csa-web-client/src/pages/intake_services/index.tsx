import Navbar from "@/components/navbar";
import { useState, useEffect } from "react";
import Link from "next/link";

const categories: { [key: string]: string[] } = {
  healthcare: [
    "Hospitals",
    "Clinics",
    "Federally Qualified Health Centers",
    "Mobile Health Units",
    "Dental Clinics",
    "Behavioral Health Clinics",
  ],
  transportation: ["Bus Routes", "Train Routes"],
  clothing: ["Local Shelters", "Community Organizations", "Laundromats"],
  housing: ["Emergency Housing Shelter", "Temporary Housing Shelter"],
  spiritual: ["Religious Organizations", "Spiritual Counseling"],
  financial: [
    "Financial Literacy Classes",
    "Financial Coaching",
    "Government Assistance (TNAF)",
  ],
};

export default function IntakeServices() {
  const [intakeForm, setIntakeForm] = useState<{ [key: string]: boolean }>({
    healthcare: false,
    transportation: false,
    clothing: false,
    housing: false,
    spiritual: false,
    financial: false,
  });


  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  useEffect(() => {
    const localIntakeForm = JSON.parse(localStorage.getItem("intakeForm") ?? "{}");
    console.log("SERVICES PAGE: ", localIntakeForm);
    setIntakeForm(localIntakeForm);

    const cachedSelectedServices = JSON.parse(
      localStorage.getItem("selectedServices") ?? "[]"
    );

    // getting rid of services saved from categories no longer needed....
    const newSelectedServices: string[] = Object.keys(categories)
      .filter((category) => localIntakeForm[category])
      .flatMap((category) => categories[category])
      .filter((service) => cachedSelectedServices.includes(service));

    setSelectedServices(newSelectedServices);
  }, []);

  const getCategories = () => {
    const categories = Object.entries(intakeForm).reduce((acc, [category, value]) => {
      if (value) {
        acc.push(category);
      }
      return acc;
    }, [] as string[]);
    return categories;
  }

  const displayCategories = getCategories();
  console.log(displayCategories);


  const handleSubmit = () => {
    localStorage.setItem("selectedServices", JSON.stringify(selectedServices));
    console.log("Form submitted: ", selectedServices);
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setSelectedServices((prev) => [...prev, service]);
    } else {
      setSelectedServices((prev) => prev.filter((s) => s !== service));
    }

    console.log("Selected Services: ", selectedServices);
  };

  return (
    <div className="intake-services">
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Select Services</h1>
        <p className="text-lg mb-8">What are you looking for? (Select all that apply)</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(categories).map(([category, services]) => {
            if (displayCategories.includes(category)) {
              return (
                <div key={category} className="bg-transparent border border-gray-500 p-4">
                  <h2 className="text-2xl font-bold mt-0 sm:text-xl lg:text-2xl">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h2>
                  {services.map((service) => (
                    <div key={service} className="flex items-center mt-2">
                      <input
                        type="checkbox"
                        className="bg-transparent"
                        checked={selectedServices.includes(service)}
                        onChange={(e) => handleServiceChange(service, e.target.checked)}
                      />
                      <label className="ml-2">{service}</label>
                    </div>
                  ))}
                </div>
              );
            }
            return null;
          })}
        </div>
        <Link href={"/intake_form"}>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8 mb-8 mr-4 w-32"
          >
            Back
          </button>
        </Link>
        <Link href={"/geographical_directory"}>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8 mb-8 w-32"
          >
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
}

