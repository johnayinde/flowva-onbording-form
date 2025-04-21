import React from "react";
import StepTransition from "../StepTransition";
import {
  FormTitle,
  FormDescription,
  PrimaryButton,
  ButtonGroup,
} from "../FormElements";

const CompletionStep = ({ onFinish }) => {
  return (
    <StepTransition key="step5">
      <FormTitle>Setup Complete!</FormTitle>
      <FormDescription>
        Your Flowva library is ready to use. We'll take you to your dashboard
        now where you can start organizing your tools and tracking your
        productivity.
      </FormDescription>

      <ButtonGroup>
        <PrimaryButton className="py-2" onClick={onFinish}>
          Go to Dashboard
        </PrimaryButton>
      </ButtonGroup>
    </StepTransition>
  );
};

export default CompletionStep;
