import React, { ReactNode } from 'react';

import { LanguageProvider } from './useLinguagem';

interface AppProvideProps {
    children: ReactNode
}

function AppProvider({ children }: AppProvideProps) {
    return (
      <LanguageProvider>
        {children}
      </LanguageProvider>
    )
}

export { AppProvider }