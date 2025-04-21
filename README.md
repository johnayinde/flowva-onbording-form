# Flowva Onboarding

A responsive, pixel-perfect React implementation of the Flowva onboarding flow with smooth transitions and form validations.

## Features

- Modular component architecture
- Smooth transitions between onboarding steps
- Form validations with error handling
- Progress tracking with animated progress bar
- Responsive design that works on all device sizes
- Pixel-perfect implementation matching the design spec

## Tech Stack

- React
- Tailwind CSS for styling
- Framer Motion for animations
- Pure CSS for custom styling

## Project Structure

```
flowva-onboarding/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── FormInput.jsx
│   │   │   └── PasswordStrength.jsx
│   │   ├── steps/
│   │   │   ├── WelcomeStep.jsx
│   │   │   ├── AboutYouStep.jsx
│   │   │   ├── LocationStep.jsx
│   │   │   ├── ToolStackStep.jsx
│   │   │   ├── GoalsStep.jsx
│   │   │   └── CompletionStep.jsx
│   │   ├── FormElements.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── StepTransition.jsx
│   │   └── CompletionPopup.jsx
│   ├── styles/
│   │   ├── variables.css
│   │   ├── global.css
│   │   └── dropdown-styling.css
│   ├── FlowvaOnboarding.jsx
│   ├── App.js
│   └── index.js
├── package.json
└── tailwind.config.js
```

## Getting Started

### Prerequisites

- Node.js (v14+)
- yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/johnayinde/flowva-onbording-form.git
cd flowva-onbording-form
```

2. Install dependencies:

```bash
yarn install
```

3. Start the development server:

```bash
yarn dev
```

4. Open your browser and navigate to `http://localhost:5172`

## Form Steps

The onboarding process consists of the following steps:

1. **Welcome Screen**: Introduction to Flowva
2. **About You**: User role and work type selection
3. **Location**: Country selection for personalization
4. **Tool Stack**: Selection of tools the user already uses
5. **Goals**: Selection of what the user wants to track
6. **Completion**: Confirmation and redirect to dashboard

## Form Validation

- Required fields are validated before proceeding to the next step
- Visual feedback is provided for invalid fields
- Users cannot proceed without completing required fields
