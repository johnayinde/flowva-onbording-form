import React from "react";
import StepTransition from "../StepTransition";
import {
  FormTitle,
  FormDescription,
  PrimaryButton,
  SkipButton,
  ButtonGroup,
  ToolItem,
} from "../FormElements";

const TOOLS = [
  { name: "Notion", icon: "📝" },
  { name: "Trello", icon: "📋" },
  { name: "Slack", icon: "💬" },
  { name: "ClickUp", icon: "✅" },
  { name: "Canva", icon: "🎨" },
  { name: "Zapier", icon: "⚡" },
  { name: "Stripe", icon: "💳" },
  { name: "Figma", icon: "✏️" },
  { name: "Calendly", icon: "📅" },
];

const ToolStackStep = ({ formData, updateFormData, onContinue, onSkip }) => {
  const handleToolSelection = (tool) => {
    let updatedTools = [...formData.tools];

    if (updatedTools.includes(tool)) {
      updatedTools = updatedTools.filter((item) => item !== tool);
    } else {
      updatedTools.push(tool);
    }

    updateFormData("tools", updatedTools);
  };

  return (
    <StepTransition key="step3">
      <FormTitle>Your Tool Stack</FormTitle>
      <FormDescription>
        Which tools are part of your workflow? We'll pre-load and organize them
        in your library.
      </FormDescription>

      <div className="grid grid-cols-3 gap-3 mb-6">
        {TOOLS.map((tool) => (
          <ToolItem
            key={tool.name}
            name={tool.name}
            icon={tool.icon}
            selected={formData.tools.includes(tool.name)}
            onClick={() => handleToolSelection(tool.name)}
          />
        ))}
      </div>

      <p className="text-sm text-gray-600 mb-6">
        You can always add more tools later in your library settings.
      </p>

      <ButtonGroup>
        <PrimaryButton onClick={onContinue}>Continue</PrimaryButton>
        <SkipButton onClick={onSkip}>Skip – I'll add them later</SkipButton>
      </ButtonGroup>
    </StepTransition>
  );
};

export default ToolStackStep;
