import '@/style/globals.css'
import Header from '@/components/Header/Header'
import SidebarNavigation from '@/components/SidebarNavigation/SidebarNavigation'
import SidebarPlots from '@/components/SidebarPlots/SidebarPlots'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
        <header>
          <Header />
        </header>
        <main>
          <div className="content">
            <SidebarNavigation />
            {children}
            <SidebarPlots />
          </div>
        </main>
        <footer></footer>
      </body>
    </html>
  )
}
