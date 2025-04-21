import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

// Component imports
import ProgressBar from "./components/ProgressBar";
import WelcomeStep from "./components/steps/WelcomeStep";
import AboutYouStep from "./components/steps/AboutYouStep";
import LocationStep from "./components/steps/LocationStep";
import ToolStackStep from "./components/steps/ToolStackStep";
import GoalsStep from "./components/steps/GoalsStep";
import CompletionStep from "./components/steps/CompletionStep";
import CompletionPopup from "./components/CompletionPopup";

const FlowvaOnboarding = () => {
  // State for managing steps
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 5;

  // Form data state
  const [formData, setFormData] = useState({
    role: "",
    work: [],
    workOther: "",
    country: "",
    tools: [],
    goals: [],
  });

  // Validation state
  const [validations, setValidations] = useState({
    role: true,
    work: true,
    goals: true,
  });

  // State for managing completion popup
  const [showCompletionPopup, setShowCompletionPopup] = useState(false);

  // Form update handlers
  const updateFormData = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const validateField = (field, isValid) => {
    setValidations({
      ...validations,
      [field]: isValid,
    });
  };

  // Step navigation
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      finishOnboarding();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Validation functions
  const validateStep1 = () => {
    const roleValid = formData.role !== "";
    const workValid = formData.work.length > 0;

    setValidations({
      ...validations,
      role: roleValid,
      work: workValid,
    });

    if (roleValid && workValid) {
      nextStep();
    }
  };

  const validateStep4 = () => {
    const goalsValid = formData.goals.length > 0;

    setValidations({
      ...validations,
      goals: goalsValid,
    });

    if (goalsValid) {
      nextStep();
    }
  };

  // Finish onboarding
  const finishOnboarding = () => {
    console.log("Onboarding complete with data:", formData);
    setShowCompletionPopup(true);
  };

  // Close completion popup
  const closePopup = () => {
    setShowCompletionPopup(false);
    // In a real app, this would redirect to dashboard
    // window.location.href = '/dashboard';
  };

  // Render current step
  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <WelcomeStep onContinue={nextStep} />;
      case 1:
        return (
          <AboutYouStep
            formData={formData}
            validations={validations}
            updateFormData={updateFormData}
            validateField={validateField}
            onContinue={validateStep1}
          />
        );
      case 2:
        return (
          <LocationStep
            formData={formData}
            updateFormData={updateFormData}
            onContinue={nextStep}
            onSkip={nextStep}
          />
        );
      case 3:
        return (
          <ToolStackStep
            formData={formData}
            updateFormData={updateFormData}
            onContinue={nextStep}
            onSkip={nextStep}
          />
        );
      case 4:
        return (
          <GoalsStep
            formData={formData}
            validations={validations}
            updateFormData={updateFormData}
            validateField={validateField}
            onContinue={validateStep4}
          />
        );
      case 5:
        return <CompletionStep onFinish={finishOnboarding} />;
      default:
        return <WelcomeStep onContinue={nextStep} />;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F5F6FA] p-4">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-md p-11">
        {/* Progress Bar */}
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

        {/* Steps Container */}
        <div className="min-h-[450px] flex flex-col">
          <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>
        </div>
      </div>

      {/* Completion Popup */}
      {showCompletionPopup && <CompletionPopup onClose={closePopup} />}
    </div>
  );
};

export default FlowvaOnboarding;
