import { ThemeProvider as NextThemesProvider } from "next-themes"


function Provider({
  children,
  ...props
}) {
  return (
    <NextThemesProvider {...props}>
        {children}
    </NextThemesProvider>
  )
}

export default Provider