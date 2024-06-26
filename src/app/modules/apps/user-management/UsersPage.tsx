import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {UsersListWrapper} from './users-list/UsersList'

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: 'Store Management',
    path: '/store-management/stores',
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

export const UsersPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='stores'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Stores list</PageTitle>
              <UsersListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/store-management/stores' />} />
    </Routes>
  )
}

export const CustomersPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='customers'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Stores list</PageTitle>
              <UsersListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/store-management/stores' />} />
    </Routes>
  )
}

