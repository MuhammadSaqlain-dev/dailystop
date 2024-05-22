import {useIntl} from 'react-intl'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
      <SidebarMenuItem
        to='/dashboard'
        icon='element-11'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      <SidebarMenuItem to='/builder' icon='shop' title='Store list' fontIcon='bi-layers' />
      <SidebarMenuItem to='/builder' icon='basket-ok' title='Customer list' fontIcon='bi-layers' />
      <SidebarMenuItem to='/builder' icon='logistic' title='Product import' fontIcon='bi-layers' />
      <SidebarMenuItem to='/builder' icon='parcel-tracking' title='UPC' fontIcon='bi-layers' />
      <SidebarMenuItem to='/builder' icon='delivery-3' title='Promotions' fontIcon='bi-layers' />
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Reports</span>
        </div>
      </div>
        <SidebarMenuItemWithSub to='/crafted/pages/profile' title='Reports' hasBullet={true}>
          <SidebarMenuItem to='/crafted/pages/profile/overview' title='Orders' hasBullet={true} />
          <SidebarMenuItem to='/crafted/pages/profile/projects' title='Products' hasBullet={true} />
          <SidebarMenuItem
            to='/crafted/pages/profile/campaigns'
            title='Top categories'
            hasBullet={true}
          />
          <SidebarMenuItem
            to='/crafted/pages/profile/documents'
            title='Close day'
            hasBullet={true}
          />
          <SidebarMenuItem
            to='/crafted/pages/profile/connections'
            title='Total sales'
            hasBullet={true}
          />
        </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub
        to='/crafted/widgets'
        title='Inventory'
        icon='element-7'
        fontIcon='bi-layers'
      >
        <SidebarMenuItem to='/crafted/widgets/lists' title='Warehouses' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/statistics' title='Report tarnsfer inventory' hasBullet={true} />
      </SidebarMenuItemWithSub>
    </>
  )
}

export {SidebarMenuMain}
