import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Garage Door Repair Beaverton OR | PDX Garage Pros",
  description: "Garage door repair in Beaverton, Oregon.",
};

export default function Page() {
  return (
    <ServicePage
      title="Garage Door Repair in Beaverton"
      intro="PDX Garage Pros helps Beaverton homeowners find help for broken springs, opener problems, off-track doors, cables, and other common garage door issues."
      bullets={[
        "Broken springs",
        "Garage opener issues",
        "Noisy doors",
        "Door off track",
        "Cable problems",
        "Emergency repairs"
]}
      serviceArea="Serving Beaverton and nearby areas including Cedar Hills, Raleigh Hills, Aloha, and Portland\u2019s west side."
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
