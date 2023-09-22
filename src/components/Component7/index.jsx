/* 
// Component_7 - Multi-step Form

State:
    • Create three separate states for different form steps: userInfo, addressInfo, and paymentInfo.
    • Initialize a state named currentStep to the value of 1 to track the active form step.
  
Buttons:
    • Incorporate a "Next" button to advance to the subsequent step.
    • Incorporate a "Previous" button to return to the preceding step.
    • Introduce a "Submit" button that will be available exclusively on the final step.

Functions:
    • nextStep: Increases the value of currentStep to transition to the next step. 
    • prevStep: Decreases the value of currentStep to revert to the previous step. 
    • updateForm: Saves the data inputted in the form fields to the corresponding state.

Display:
    • Render form sections dynamically, depending on the value of currentStep.
    
*/