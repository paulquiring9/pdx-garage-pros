import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Garage Door Repair Gresham OR | PDX Garage Pros",
  description: "Garage door repair in Gresham, Oregon.",
};

export default function Page() {
  return (
    <ServicePage
      title="Garage Door Repair in Gresham"
      intro="Garage door issues in Gresham can range from broken springs and opener problems to stuck doors and damaged cables."
      bullets={[
        "Broken springs",
        "Garage opener issues",
        "Door off track",
        "Cable problems",
        "Noisy doors",
        "Emergency repairs"
]}
      serviceArea="Serving Gresham, Troutdale, Fairview, east Portland, and surrounding areas."
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
