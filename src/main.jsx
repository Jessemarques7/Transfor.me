import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyled } from "./globalStyled.jsx";
import App from "./App.jsx";
// import { ClerkProvider } from "@clerk/clerk-react";

// const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// if (!clerkPublishableKey) {
//   throw new Error(
//     "Missing Clerk publishable key. Ensure it is set in your environment variables."
//   );
// }

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ClerkProvider publishableKey={clerkPublishableKey}> */}
    <App />
    <GlobalStyled />
    {/* </ClerkProvider> */}
  </StrictMode>
);
