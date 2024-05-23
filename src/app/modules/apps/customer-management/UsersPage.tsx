import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {UsersListWrapper} from './users-list/UsersList'

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: 'customer Management',
    path: '/customer-management/customers',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

export const CustomersPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='customers'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Customers list</PageTitle>
              <UsersListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/customer-management/customers' />} />
    </Routes>
  )
}

