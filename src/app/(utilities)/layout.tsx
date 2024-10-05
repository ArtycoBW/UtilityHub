import { Header } from '@/components/common'

export default function UtilitiesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
