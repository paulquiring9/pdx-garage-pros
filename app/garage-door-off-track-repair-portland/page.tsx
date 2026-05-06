import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Garage Door Off Track Repair Portland OR | PDX Garage Pros",
  description: "Garage door off-track repair in Portland, Oregon.",
};

export default function Page() {
  return (
    <ServicePage
      title="Garage Door Off Track Repair in Portland"
      intro="A garage door that comes off track can become unsafe quickly. The door may look crooked, jam while moving, or make grinding noises when the opener runs."
      bullets={[
        "Crooked garage door",
        "Door jammed in track",
        "Bent tracks",
        "Rollers out of place",
        "Grinding noises",
        "Door will not close evenly"
]}
      serviceArea="Off-track garage door repair help for Portland and nearby metro areas."
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
