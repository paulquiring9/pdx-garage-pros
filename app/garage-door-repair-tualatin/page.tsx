import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Garage Door Repair Tualatin OR | PDX Garage Pros",
  description: "Garage door repair in Tualatin, Oregon.",
};

export default function Page() {
  return (
    <ServicePage
      title="Garage Door Repair in Tualatin"
      intro="PDX Garage Pros helps Tualatin homeowners with garage door repair needs including springs, openers, cables, rollers, and stuck doors."
      bullets={[
        "Door will not open",
        "Broken springs",
        "Opener problems",
        "Cable issues",
        "Door off track",
        "Noisy doors"
]}
      serviceArea="Serving Tualatin, Sherwood, Tigard, Lake Oswego, and nearby areas."
      related={[
        {
                "href": "/garage-door-repair-portland",
                "label": "Portland Garage Door Repair"
        },
        {
                "href": "/garage-door-spring-repair-portland",
                "label": "Spring Repair"
        },
        {
                "href": "/garage-door-opener-repair-portland",
                "label": "Opener Repair"
        },
        {
                "href": "/emergency-garage-door-repair-portland",
                "label": "Emergency Repair"
        }
]}
    />
  );
}
