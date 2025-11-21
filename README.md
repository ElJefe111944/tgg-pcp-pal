# TGG-Test Mobile-Only Web Application – Next.js, TypeScript, Tailwind & Redux

This project is a mobile-only web application built using Next.js (TypeScript & React), Tailwind CSS, Redux for state management, and a collection of UI and form-handling libraries. The application follows the Figma design provided at: https://www.figma.com/design/uZNZO0aOylieBJXNbwJc2s/TGG-Test?node-id=0-1&p=f&t=r0CRiDuOaLaIUuV1-0

The app includes a full multi-step user flow consisting of a landing page, address input, personal details, digital signature capture, and a thank-you confirmation step. It is optimized for mobile screens only.

## Screenshots

#### Landing Page
![Landing Page](public/images/read-me/landing.pdf)  
![Landing Page](public/images/read-me/landing-2.pdf)  

#### Address
![Address Page](public/images/read-me/address.pdf)  
![Address Page](public/images/read-me/address-2.pdf)  

#### Personal Details
![Personal Details Page](public/images/read-me/personal-details.pdf)  
![Contact Details Page](public/images/read-me/address.pdf)  

#### Signature 
![Signature Page](public/images/read-me/signature.pdf)  

#### Thank You
![Thank you Page](public/images/read-me/thanks-you.pdf)  
![Thank you Page](public/images/read-me/thank-you-1.pdf)  

*(Update the paths above to match where the exported images are stored in your project, typically under `public/screenshots/`.)*

## Features

- Fully mobile-optimized multi-page user journey
- Centralised global state management using Redux Toolkit
- Real-time form validation powered by React Hook Form and Yup
- Digital signature capture using Signature Canvas
- Clean UI built with Tailwind CSS, shadcn components, and lucide-react icons
- Modular component-based architecture with reusable UI elements
- Smooth transitions across landing, form, and confirmation pages
- Error handling and validation for email and mobile fields:
  - Email must not be empty and must be a valid email format (for example, `name@example.com`)
  - Mobile must not be empty, must contain digits only, and be between 10 and 15 characters long
- Built according to the provided Figma XD design

## Technology Stack

- Next.js (TypeScript & React)
- Tailwind CSS
- Redux Toolkit
- shadcn/ui
- lucide-react
- signature-canvas
- react-hook-form
- yup

## State Management and Redux Store

Global application state is managed using Redux Toolkit via a single configured store. The store is created with `configureStore` and combines the following feature reducers:

- `address` – handled by `addressSlice`
- `personalDetails` – handled by `personalDetailsSlice`
- `contactDetails` – handled by `contactDetailsSlice`

The store exports:

- `store` – the configured Redux store instance
- `RootState` – TypeScript type derived from `store.getState`
- `AppDispatch` – TypeScript type for `store.dispatch`

These types are used throughout the app for strongly typed selectors and dispatch hooks, ensuring type-safe interaction with the Redux state in all pages and components.

## Project Structure

app/landing – Landing page  
app/address – Address input page  
app/personal_details – Personal details form  
app/signature – Signature capture screen  
app/thank-you – Thank-you confirmation page  

components/address/  
AddressForm.tsx  

components/landing/  
Checks.tsx  
FAQs.tsx  
Headline.tsx  
MyAgreements.tsx  
Trust.tsx  

components/thank-you/  
AgreementsCollapsible.tsx  
Legal.tsx  
NextSteps.tsx  
Ratings.tsx  
Register.tsx  
SpeedUp.tsx  

components/  
Footer.tsx  
Header.tsx  

store/  
store configuration with `configureStore`  
features/addressSlice.ts  
features/personalDetailsSlice.ts  
features/contactDetailsSlice.ts  

public/ – Static assets (including screenshots)  
styles/ – Global styles  
lib/ – Helpers and utilities  

## Deployment Instructions

Install project dependencies using your preferred package manager.  
Run the development server to test locally on a mobile viewport.  
Create a production build and deploy it to a hosting platform that supports Next.js (Vercel is recommended).  
Configure any required environment variables using the hosting provider’s dashboard.  
Ensure HTTPS is enabled in production for secure data transmission.

Typical workflow:

1. Install dependencies  
2. Run the development server for local testing  
3. Build the production bundle  
4. Deploy the production build to your chosen platform  

## Core User Flows

### Landing Page

- User arrives on the mobile landing page.
- Header and trust-building sections are displayed via `Header`, `Trust`, and `MyAgreements`.
- Checks, FAQs, and call-to-action drive users into the flow.

### Address Page

- User is navigated to the address page.
- The `AddressForm` component collects address information.
- Data is stored in the Redux `address` slice for later steps.

### Personal Details Page

- User enters personal information such as name, email, and mobile number.
- Validation rules:
  - Email must be present and in a valid email format.
  - Mobile must be present, numeric only, and between 10 and 15 digits.
- Validation is implemented using `react-hook-form` and `yup`.
- Valid data is stored in `personalDetails` and/or `contactDetails` slices in Redux.

### Signature Page

- User draws a digital signature using Signature Canvas.
- The signature is checked and captured as part of the submission payload.
- User cannot proceed without providing a valid signature.

### Thank-You Page

- User sees a confirmation view summarising completion.
- Components such as `NextSteps`, `Ratings`, `Register`, `AgreementsCollapsible`, `Legal`, and `SpeedUp` provide follow-up information, feedback prompts, and legal text.
- Footer and header maintain consistent layout and branding.

## UI Components List

AddressForm – Address input handling and validation  
Checks – Checklist-style section on the landing page  
FAQs – Frequently asked questions on the landing page  
Headline – Main headline and hero copy  
MyAgreements – Summary or list of key agreements  
Trust – Trust indicators and reassurance content  
AgreementsCollapsible – Collapsible panel for agreement details  
Legal – Legal notices and terms  
NextSteps – Guidance on what happens after submission  
Ratings – Ratings or review-related messaging  
Register – Registration confirmation or follow-up actions  
SpeedUp – Tips or actions to speed up processing  
Footer – Global footer component  
Header – Global header component  

## License

This project is provided without a specific license. If required, a license such as MIT or Apache 2.0 can be added to clarify usage, distribution, and contribution terms.
