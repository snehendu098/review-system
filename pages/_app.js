import "../styles/globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="max-w-screen min-h-screen bg-slate-200">
      <ToastContainer />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
