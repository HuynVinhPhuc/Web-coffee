import { GlobalProvider } from "../GlobalProvider";
import "../globals.css";

export default function ProductLayout({ children }) {
  return <GlobalProvider>{children}</GlobalProvider>;
}
