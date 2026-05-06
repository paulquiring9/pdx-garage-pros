import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Garage Door Repair Lake Oswego OR | PDX Garage Pros",
  description: "Garage door repair in Lake Oswego, Oregon.",
};

export default function Page() {
  return (
    <ServicePage
      title="Garage Door Repair in Lake Oswego"
      intro="Garage door problems can disrupt access, security, and daily routines. PDX Garage Pros helps Lake Oswego homeowners connect with repair help for common residential garage door issues."
      bullets={[
        "Broken springs",
        "Garage door opener problems",
        "Off-track doors",
        "Cable issues",
        "Noisy operation",
        "Emergency garage door issues"
]}
      serviceArea="Serving Lake Oswego, West Linn, Tigard, Tualatin, and nearby Portland metro communities."
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
