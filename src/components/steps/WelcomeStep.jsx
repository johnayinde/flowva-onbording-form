import React from "react";
import StepTransition from "../StepTransition";
import { PrimaryButton, ButtonGroup } from "../FormElements";

const WelcomeStep = ({ onContinue }) => {
  return (
    <StepTransition key="step0">
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-[#9013FE] mb-9">
          Welcome to Flowva
        </h1>
        <p className="mb-6 text-xl">
          Your smart library for organizing tools, tracking usage, and turning
          productivity into rewards. Let's set up your digital library in 2
          minutes.
        </p>
      </div>
      <ButtonGroup>
        <PrimaryButton className="py-2" onClick={onContinue}>
          Let's Go
        </PrimaryButton>
      </ButtonGroup>
    </StepTransition>
  );
};

export default WelcomeStep;
