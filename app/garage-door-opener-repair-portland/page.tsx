import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Garage Door Opener Repair Portland OR | PDX Garage Pros",
  description: "Garage door opener repair in Portland, Oregon.",
};

export default function Page() {
  return (
    <ServicePage
      title="Garage Door Opener Repair in Portland, Oregon"
      intro="Garage door opener problems can make daily access frustrating and unreliable. Common issues include remotes that stop working, sensors that misread the door path, or doors that stop halfway."
      bullets={[
        "Remote not responding",
        "Wall button issues",
        "Door reverses unexpectedly",
        "Sensor alignment problems",
        "Motor hums but door does not move",
        "Keypad problems"
]}
      serviceArea="Garage door opener service information for Portland, Beaverton, Hillsboro, and nearby areas."
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
