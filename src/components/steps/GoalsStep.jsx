import React from "react";
import StepTransition from "../StepTransition";
import {
  FormTitle,
  FormDescription,
  FieldLabel,
  CheckboxItem,
  PrimaryButton,
  ButtonGroup,
} from "../FormElements";

const GOALS = [
  "Subscription costs",
  "Tool usage & engagement",
  "Unused/duplicate tools",
  "Personalized tool suggestions",
];

const GoalsStep = ({
  formData,
  validations,
  updateFormData,
  validateField,
  onContinue,
}) => {
  // Handle goal checkbox changes
  const handleGoalChange = (e) => {
    const { value, checked } = e.target;
    let updatedGoals = [...formData.goals];

    if (checked) {
      updatedGoals.push(value);
    } else {
      updatedGoals = updatedGoals.filter((item) => item !== value);
    }

    updateFormData("goals", updatedGoals);
    validateField("goals", updatedGoals.length > 0);
  };

  return (
    <StepTransition key="step4">
      <FormTitle>What Do You Want to Track or Improve?</FormTitle>
      <FormDescription>
        This helps us personalize your dashboard and features.
      </FormDescription>

      <div className="mb-6">
        <FieldLabel
          error="Please select at least one option"
          showError={!validations.goals}
        >
          Select your goals
        </FieldLabel>
        <div className="flex flex-col gap-4">
          {GOALS.map((goal) => (
            <CheckboxItem
              key={goal}
              name="goals"
              value={goal}
              label={goal}
              checked={formData.goals.includes(goal)}
              onChange={handleGoalChange}
            />
          ))}
        </div>
      </div>

      <ButtonGroup>
        <PrimaryButton className="py-2" onClick={onContinue}>
          Continue
        </PrimaryButton>
      </ButtonGroup>
    </StepTransition>
  );
};

export default GoalsStep;
