import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Garage Door Won't Close Portland OR | PDX Garage Pros",
  description: "Help for garage doors that won't close in Portland, Oregon. Common issues include sensors, openers, tracks, springs, and alignment problems.",
};

export default function Page() {
  return (
    <ServicePage
      title="Garage Door Won't Close in Portland, Oregon"
      intro="A garage door that will not close all the way can quickly become a security and safety problem. Portland homeowners often run into this issue because of sensor alignment, opener problems, track obstructions, damaged rollers, or balance issues."
      bullets={[
        "Garage door reverses before touching the ground",
        "Photo-eye sensors are blocked or misaligned",
        "Door closes partway and opens again",
        "Remote or wall button works inconsistently",
        "Track or roller problems",
        "Opener force or travel limit issues"
]}
      serviceArea="Help for garage door closing problems throughout Portland and nearby areas including Beaverton, Hillsboro, Tigard, Tualatin, Lake Oswego, and Gresham."
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
