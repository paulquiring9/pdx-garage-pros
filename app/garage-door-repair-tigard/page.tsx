import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Garage Door Repair Tigard OR | PDX Garage Pros",
  description: "Garage door repair in Tigard, Oregon.",
};

export default function Page() {
  return (
    <ServicePage
      title="Garage Door Repair in Tigard"
      intro="PDX Garage Pros helps Tigard homeowners with common garage door repair issues, including broken springs, openers, cables, and stuck doors."
      bullets={[
        "Broken springs",
        "Opener failure",
        "Stuck garage doors",
        "Off-track doors",
        "Cable repair",
        "Noisy doors"
]}
      serviceArea="Serving Tigard, King City, Bull Mountain, Tualatin, and nearby areas."
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
