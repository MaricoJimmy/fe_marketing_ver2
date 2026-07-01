import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const router = useRouter();
  const [postDetail, setPostDetail] = useState({});

  useEffect(() => {
    if (!router.pathname.includes("/blog/")) {
      setPostDetail({});
    }
  }, [router]);

  return (
    <AppContext.Provider value={{ setPostDetail, postDetail }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);

  return context;
};
