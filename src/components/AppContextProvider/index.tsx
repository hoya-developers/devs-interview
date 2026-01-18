import { useRef, useState } from "react";
import { AppContext } from "../../utils/context";
import { AppContextProviderComponent } from "./types";

export const AppContextProvider: AppContextProviderComponent = ({
  children,
}) => {
  const cache = useRef(new Map<string, string>());
  const [error, setError] = useState<string>("");

  return (
    <AppContext.Provider value={{ setError, cache }}>
      {error ? (
        <div className="DevsError">
          <h1 className="DevsTextHeading--l">Oops. Application broken</h1>
          <div className="DevsBreak--l" />
          Error: {error}
        </div>
      ) : (
        children
      )}
    </AppContext.Provider>
  );
};
