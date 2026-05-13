import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {

  title: "Garage Door Spring Repair Portland OR | PDX Garage Pros",
  description: "Broken garage door spring repair in Portland, Oregon.",
  alternates: {
    canonical: "https://www.pdxgaragepros.com/garage-door-spring-repair-portland",
  },
};

export default function Page() {
  return (
    <ServicePage
      title="Garage Door Spring Repair in Portland, Oregon"
      intro="Broken garage door springs are one of the most common reasons a door suddenly stops working. You may hear a loud snap, notice the door feels heavy, or see the opener struggling to lift it."
      bullets={[
        "Broken torsion springs",
        "Heavy garage doors",
        "Garage door opens unevenly",
        "Loud snapping sound",
        "Opener strains when lifting",
        "Door will not stay open"
]}
      serviceArea="Spring repair help for homeowners in Portland and surrounding metro areas."
      related={[
        {
                "href": "/garage-door-repair-portland",
                "label": "Portland Garage Door Repair"
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
