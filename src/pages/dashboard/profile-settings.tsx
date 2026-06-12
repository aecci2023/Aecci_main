import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { TopNav } from '@/components/layout/top-nav'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'

export default function ProfileSettingsPage() {
  return (
    <>
      <Header>
        <TopNav links={topNav} className='me-auto' />
        <div className='ml-auto flex items-center space-x-4'>
          <Search />
          <ProfileDropdown />
        </div>
      </Header>
      <Main>
        <div className='mb-2 flex items-center justify-between space-y-2'>
          <h1 className='text-2xl font-bold tracking-tight'>$Title</h1>
        </div>
        <div className='text-muted-foreground min-h-[50vh] flex items-center justify-center border-2 border-dashed border-muted rounded-lg mt-8'>
          <div className='text-center'>
            <h2 className='text-xl font-semibold mb-2'>$Title Interface</h2>
            <p className='text-sm text-muted-foreground'>Placeholder for the $Title component based on the flow.</p>
          </div>
        </div>
      </Main>
    </>
  )
}

const topNav = [
  {
    title: '$Title',
    href: '/dashboard/profile-settings',
    isActive: true,
    disabled: false,
  },
]
