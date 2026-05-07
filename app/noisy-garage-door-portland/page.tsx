import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Noisy Garage Door Portland OR | PDX Garage Pros",
  description: "Information for noisy garage doors in Portland, Oregon. Learn common causes including rollers, hinges, springs, tracks, and opener issues.",
};

export default function Page() {
  return (
    <ServicePage
      title="Noisy Garage Door Help in Portland, Oregon"
      intro="A loud garage door is more than just annoying. Squeaking, grinding, popping, or rattling can point to worn rollers, loose hardware, dry hinges, track issues, spring tension problems, or opener strain."
      bullets={[
        "Grinding or scraping noises",
        "Squeaking hinges or rollers",
        "Rattling hardware",
        "Popping spring sounds",
        "Door shakes while opening",
        "Opener sounds strained"
]}
      serviceArea="Garage door noise troubleshooting and repair information for Portland homeowners and nearby communities across the metro area."
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
