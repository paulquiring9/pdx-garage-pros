import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Emergency Garage Door Repair Portland OR | PDX Garage Pros",
  description: "Emergency garage door repair in Portland, Oregon.",
};

export default function Page() {
  return (
    <ServicePage
      title="Emergency Garage Door Repair in Portland"
      intro="A stuck-open or stuck-closed garage door can quickly become a security, access, or safety issue. Emergency repair requests often involve broken springs, cables, tracks, or openers."
      bullets={[
        "Door stuck open",
        "Door stuck closed",
        "Broken cable",
        "Off-track door",
        "Broken spring",
        "Damaged panels or rollers"
]}
      serviceArea="Emergency garage door repair help throughout Portland and nearby suburbs."
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
                "href": "/garage-door-repair-beaverton",
                "label": "Beaverton Garage Door Repair"
        }
]}
    />
  );
}
