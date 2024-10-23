import "./App.css";
import FileExplorer from "./components/FileExplorer";
import { MsalProvider } from "@azure/msal-react";
import { msalInstance } from "./msalInstance";
// import AuthButton from "./components/AuthButton";

function App() {

  return (
    <MsalProvider instance={msalInstance}>
      <div className="flex w-full ">
        <div className={`flex-grow flex items-center justify-center overflow-y-hidden`}>
          <FileExplorer />
          {/* <div className="absolute top-0 right-0 p-6">
            <AuthButton />
          </div> */}
        </div>
      </div>
    </MsalProvider>
  );
}

export default App;
