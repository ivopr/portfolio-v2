import { createContext, PropsWithChildren, useContext, useState } from "react";

interface SocialsContext {
  socials: Social[];
  updateSocials: (newSocials: Social[]) => void;
}

const socialsContext = createContext({} as SocialsContext);

export function SocialsProvider({ children }: PropsWithChildren) {
  const [socials, setSocials] = useState<Social[]>([]);

  function updateSocials(newSocials: Social[]) {
    setSocials(newSocials);
  }

  return (
    <socialsContext.Provider value={{ socials, updateSocials }}>
      {children}
    </socialsContext.Provider>
  );
}

export const useSocials = () => useContext(socialsContext);
