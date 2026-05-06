import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Garage Door Repair Portland OR | PDX Garage Pros",
  description: "Garage door repair in Portland, Oregon for broken springs, openers, cables, off-track doors, and emergency repairs.",
};

export default function Page() {
  return (
    <ServicePage
      title="Garage Door Repair in Portland, Oregon"
      intro="If your garage door is stuck, noisy, crooked, or not opening properly, PDX Garage Pros helps connect Portland homeowners with garage door repair service for common residential issues."
      bullets={[
        "Broken garage door springs",
        "Garage door opener problems",
        "Off-track doors",
        "Broken cables",
        "Noisy or shaking doors",
        "Emergency garage door issues"
]}
      serviceArea="Service throughout Portland, including nearby communities like Beaverton, Hillsboro, Tigard, Tualatin, Lake Oswego, and Gresham."
      related={[
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
        },
        {
                "href": "/garage-door-repair-beaverton",
                "label": "Beaverton Garage Door Repair"
        }
]}
    />
  );
}
