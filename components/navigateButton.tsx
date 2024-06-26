"use client";
import openGoogleMapApp from "@/lib/googleMap/openGoogleMapApp";
import NavigateButtonIcon from "./icon/navigateButton";
import { Coordinates } from "@/types/coordinate";

const NavigateButton = ({ lat, lon }: Coordinates) => {
  return (
    <button
      onClick={() => openGoogleMapApp({ lat: lat, lon: lon })}
    >
      <NavigateButtonIcon />
    </button>
  );
};

export default NavigateButton;
