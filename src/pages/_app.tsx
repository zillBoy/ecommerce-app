import "@/styles/globals.css";
import type { AppProps } from "next/app";

// For Mocking API's
// if (process.env.NEXT_PUBLIC_API_MOCKING) {
//   import("../mocks").then(({ setupMocks }) => {
//     setupMocks();
//   });
// }

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
