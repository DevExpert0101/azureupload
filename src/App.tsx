import "./App.css";
import FileExplorer from "./components/FileExplorer";
import { MsalProvider } from "@azure/msal-react";
import { msalInstance } from "./msalInstance";
import AuthButton from "./components/AuthButton";

function App() {

  return (
    <MsalProvider instance={msalInstance}>
      <div className="flex w-full h-full min-h-screen">
        <div className={`flex-grow p-6  flex items-center justify-center`}>
          <FileExplorer />
          <div className="absolute top-0 right-0 p-6">
            <AuthButton />
          </div>
        </div>
      </div>
    </MsalProvider>
  );
}

export default App;
