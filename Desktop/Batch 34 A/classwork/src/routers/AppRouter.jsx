import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Loginpage from '../pages/Loginpage'
import Register from '../pages/Register'
import MainLayout from '../layouts/MainLayout'
import StateManagement from '../pages/StateManagement'
import LoginTest from '../pages/LoginTest'
import GuestRoute from './GuestRoute'
import NormalUserRoute from './NormalUserRoute'
import AdminUserRoute from './AdminUserRoute'
import UserManagement from '../pages/admin/UserManagement'
import ProductManagemnt from '../pages/admin/ProductManegment'
import CategoryManagement from '../pages/admin/CategoryManagement'
import CreateCategory from '../pages/admin/CreateCategory'
import ViewCategory from '../pages/admin/ViewCategory'
import UpdateCategory from '../pages/admin/UpdateCategory'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login_test' element={<LoginTest />}></Route>
        <Route path="/state" element={<StateManagement />}></Route>

        <Route element={<MainLayout />}>
          <Route path='/' element={<Homepage />}></Route>
          <Route element={<GuestRoute />}>
            <Route path="/login" element={<Loginpage />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Route>
        </Route>

        <Route path='/user/*' element={<NormalUserRoute />}>
          <Route path='cart' element={<>My Cart</>}></Route>
          <Route path='order' element={<>My Order</>}></Route>
          <Route path='*' element={<>404 Not Found</>}></Route> // wildcard path remaining path 404 shows not found
        </Route>



        <Route path='/admin/*' element={<AdminUserRoute />}>
          <Route path="dashboard" element={<>Admin Dashboard</>}></Route>
          <Route path="categories" element={<CategoryManagement />}></Route>
          <Route path="category/:id" element={<ViewCategory />}></Route>
          <Route path="categories/create" element={<CreateCategory />}></Route>
          <Route path="category/:id/edit" element={<UpdateCategory />}></Route>
          <Route path="products" element={<ProductManagemnt />}></Route>
          <Route path="*" element={<>404 ghar jaa</>}></Route>
          <Route path="users" element={<UserManagement />}></Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}
