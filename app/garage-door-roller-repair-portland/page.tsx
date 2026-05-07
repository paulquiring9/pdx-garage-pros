import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Garage Door Roller Repair Portland OR | PDX Garage Pros",
  description: "Garage door roller repair information in Portland, Oregon. Help for noisy, stuck, worn, or damaged garage door rollers.",
};

export default function Page() {
  return (
    <ServicePage
      title="Garage Door Roller Repair in Portland, Oregon"
      intro="Garage door rollers help the door move smoothly along the tracks. When rollers are worn, damaged, or off track, the door may become noisy, shaky, crooked, or difficult to open and close."
      bullets={[
        "Worn garage door rollers",
        "Rollers out of track",
        "Grinding or squeaking noises",
        "Door shakes while moving",
        "Crooked door movement",
        "Track and roller alignment problems"
]}
      serviceArea="Garage door roller repair information for Portland, Beaverton, Hillsboro, Tigard, Lake Oswego, Tualatin, Gresham, and nearby areas."
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
