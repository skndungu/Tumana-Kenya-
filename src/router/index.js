import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import PostRequests from '@/components/Requests/PostRequests'
import PreviousClients from '@/components/User/PreviousClients'
import Signup from '@/components/User/Signup'
import Signin from '@/components/User/Signin'
import Profile from '@/components/User/Profile'
import AreaOfService from '@/components/Requests/AreaOfService'
import PostedRequests from '@/components/Requests/PostedRequests'
import PostedRequest from '@/components/Requests/PostedRequest'
import ManageRequests from '@/components/Admin/ManagePostedRequests'
import AuthGuard from './auth-guard'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/post-request',
      name: 'PostRequests',
      component: PostRequests,
      beforeEnter: AuthGuard
    },
    {
      path: '/previous-clients/:client_id',
      name: 'PreviousClients',
      component: PreviousClients
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/profile/:id',
      name: 'Profile',
      props: true,
      component: Profile
    },
    {
      path: '/services',
      name: 'AreaOfService',
      component: AreaOfService
    },
    {
      path: '/posted-requests',
      name: 'PostedRequests',
      component: PostedRequests
    },
    {
      path: '/posted-request/:id',
      name: 'PostedRequest',
      props: true,
      component: PostedRequest
    },
    {
      path: '/manage-requests',
      name: 'ManageRequests',
      props: true,
      component: ManageRequests
    }
  ],
  mode: 'history'
})
