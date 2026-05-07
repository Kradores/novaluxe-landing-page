import { redirect } from "react-router";

// This runs before the component renders
export function loader() {
  // You can also check localStorage or browser settings here 
  // to decide which language to redirect to
  return redirect("/es"); 
}

export default function RedirectToDefault() {
  return null; // This will never actually render
}
