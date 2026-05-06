import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Garage Door Cable Repair Portland OR | PDX Garage Pros",
  description: "Garage door cable repair in Portland, Oregon.",
};

export default function Page() {
  return (
    <ServicePage
      title="Garage Door Cable Repair in Portland"
      intro="Garage door cables help lift and balance the door. When a cable breaks or slips, the door may hang unevenly, stop moving, or become unsafe to operate."
      bullets={[
        "Broken lift cables",
        "Loose cables",
        "Door hangs unevenly",
        "Cable off drum",
        "Door feels heavy",
        "Door stops moving"
]}
      serviceArea="Garage door cable repair service information for Portland and surrounding suburbs."
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
