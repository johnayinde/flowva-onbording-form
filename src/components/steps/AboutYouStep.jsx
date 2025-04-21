import React from "react";
import StepTransition from "../StepTransition";
import {
  FormTitle,
  FormDescription,
  FieldLabel,
  RadioItem,
  CheckboxItem,
  PrimaryButton,
  ButtonGroup,
} from "../FormElements";

const AboutYouStep = ({
  formData,
  validations,
  updateFormData,
  validateField,
  onContinue,
}) => {
  // Handle radio button changes
  const handleRoleChange = (e) => {
    updateFormData("role", e.target.value);
    validateField("role", true);
  };

  // Handle checkbox changes for work types
  const handleWorkChange = (e) => {
    const { value, checked } = e.target;
    let updatedWork = [...formData.work];

    if (checked) {
      updatedWork.push(value);
    } else {
      updatedWork = updatedWork.filter((item) => item !== value);
    }

    updateFormData("work", updatedWork);
    validateField("work", updatedWork.length > 0);
  };

  // Handle "Other" work text input
  const handleWorkOtherChange = (e) => {
    updateFormData("workOther", e.target.value);
  };

  return (
    <StepTransition key="step1">
      <FormTitle>About You</FormTitle>
      <FormDescription>
        Help us tailor your library by telling us a bit about yourself.
      </FormDescription>

      <div className="mb-6">
        <FieldLabel
          error="Please select an option"
          showError={!validations.role}
        >
          What best describes you?
        </FieldLabel>
        <div className="flex flex-col gap-3">
          <RadioItem
            name="role"
            value="Freelancer"
            label="Freelancer"
            checked={formData.role === "Freelancer"}
            onChange={handleRoleChange}
          />
          <RadioItem
            name="role"
            value="Solo entrepreneur"
            label="Solo entrepreneur"
            checked={formData.role === "Solo entrepreneur"}
            onChange={handleRoleChange}
          />
          <RadioItem
            name="role"
            value="Small team"
            label="Small team"
            checked={formData.role === "Small team"}
            onChange={handleRoleChange}
          />
          <RadioItem
            name="role"
            value="Creator"
            label="Creator"
            checked={formData.role === "Creator"}
            onChange={handleRoleChange}
          />
        </div>
      </div>

      <div className="mb-6">
        <FieldLabel
          error="Please select at least one option"
          showError={!validations.work}
        >
          What kind of work do you do?
        </FieldLabel>
        <div className="flex flex-col gap-3">
          <CheckboxItem
            name="work"
            value="Design"
            label="Design"
            checked={formData.work.includes("Design")}
            onChange={handleWorkChange}
          />
          <CheckboxItem
            name="work"
            value="Development"
            label="Development"
            checked={formData.work.includes("Development")}
            onChange={handleWorkChange}
          />
          <CheckboxItem
            name="work"
            value="Writing"
            label="Writing"
            checked={formData.work.includes("Writing")}
            onChange={handleWorkChange}
          />
          <CheckboxItem
            name="work"
            value="Marketing"
            label="Marketing"
            checked={formData.work.includes("Marketing")}
            onChange={handleWorkChange}
          />
          <div>
            <CheckboxItem
              name="work"
              value="Other"
              label="Other"
              checked={formData.work.includes("Other")}
              onChange={handleWorkChange}
            />
            {formData.work.includes("Other") && (
              <input
                type="text"
                name="workOther"
                className="mt-2 p-2 border border-gray-300 rounded-xl w-full"
                placeholder="Please specify"
                value={formData.workOther}
                onChange={handleWorkOtherChange}
              />
            )}
          </div>
        </div>
      </div>

      <ButtonGroup>
        <PrimaryButton className="py-3" onClick={onContinue}>
          Continue
        </PrimaryButton>
      </ButtonGroup>
    </StepTransition>
  );
};

export default AboutYouStep;
