import React from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"

function Provider({
    children,
    ...props
  }: React.ComponentProps<typeof NextThemesProvider>)
 {

  
  return (
    <NextThemesProvider {...props}>
        {children}
        </NextThemesProvider>
  )
}

export default Provider