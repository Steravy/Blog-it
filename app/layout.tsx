import './globals.css';
import Navbar from './components/Navbar';
import ProfilePicture from './components/ProfilePicture';

export const metadata = {
  title: 'Blog It',
  description: 'Created by Stefan Vitoria',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className="dark:bg-slate-900" >
        <Navbar />
        <ProfilePicture />
        {children}
      </body>

    </html>
  )
}
