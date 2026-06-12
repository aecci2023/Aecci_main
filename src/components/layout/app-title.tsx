import { Link } from 'react-router-dom'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'

export function AppTitle() {
  const { setOpenMobile } = useSidebar()
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size='lg'
          className='gap-0 py-0 hover:bg-transparent active:bg-transparent'
          asChild
        >
          <div>
            <Link
              to='/'
              onClick={() => setOpenMobile(false)}
              className='flex items-center gap-2 flex-1 text-start leading-tight'
            >
              <img src="/aecci-logoonly.png" alt="AECCI Logo" className="w-8 h-8 object-contain" />
              <div className="grid">
                <span className='truncate font-bold text-lg'>AECCI Global</span>
                <span className='truncate text-xs'>Deal Room Dashboard</span>
              </div>
            </Link>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
