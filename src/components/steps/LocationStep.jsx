import React from "react";
import StepTransition from "../StepTransition";
import {
  FormTitle,
  FormDescription,
  PrimaryButton,
  SkipButton,
  ButtonGroup,
} from "../FormElements";

const COUNTRIES = [
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },
  { code: "CA", name: "Canada" },
  { code: "AU", name: "Australia" },
  { code: "IN", name: "India" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "JP", name: "Japan" },
  { code: "BR", name: "Brazil" },
  { code: "NG", name: "Nigeria" },
];

const LocationStep = ({ formData, updateFormData, onContinue, onSkip }) => {
  const handleCountryChange = (e) => {
    updateFormData("country", e.target.value);
  };

  return (
    <StepTransition key="step2">
      <FormTitle>Where Are You Based?</FormTitle>
      <FormDescription>
        This helps us personalize tool suggestions, currencies, and rewards for
        you.
      </FormDescription>

      <div className="mb-6">
        <label htmlFor="country" className="block font-semibold mb-2">
          Country
        </label>
        <select
          id="country"
          name="country"
          className="w-full p-3 border border-gray-300 rounded-xl focus:border-[#9013FE] focus:outline-none"
          value={formData.country}
          onChange={handleCountryChange}
          style={{
            /* Override default select styling */
            appearance: "auto",
            WebkitAppearance: "menulist",
          }}
        >
          <option value="">Select your country</option>
          {COUNTRIES.map((country) => (
            <option
              key={country.code}
              value={country.code}
              style={{
                background: "lightgray", // Reset background for normal state
              }}
            >
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <ButtonGroup>
        <PrimaryButton onClick={onContinue}>Continue</PrimaryButton>
        <SkipButton onClick={onSkip}>Skip this step</SkipButton>
      </ButtonGroup>
    </StepTransition>
  );
};

export default LocationStep;
