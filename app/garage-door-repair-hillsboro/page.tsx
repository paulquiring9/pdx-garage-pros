import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Garage Door Repair Hillsboro OR | PDX Garage Pros",
  description: "Garage door repair in Hillsboro, Oregon.",
};

export default function Page() {
  return (
    <ServicePage
      title="Garage Door Repair in Hillsboro"
      intro="Garage door problems in Hillsboro often involve springs, cables, openers, tracks, and doors that stop working without warning."
      bullets={[
        "Door will not open",
        "Broken springs",
        "Cable issues",
        "Opener not working",
        "Off-track doors",
        "Noisy operation"
]}
      serviceArea="Serving Hillsboro and nearby communities across Washington County."
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
