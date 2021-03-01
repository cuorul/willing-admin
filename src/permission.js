import router from './router'
import NProgress from 'nprogress' // progress bar
import { getToken } from './utils/auth'
// import { getPageTitle } from './utils/get-page-title'
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({ showSpinner: false, minimum: 0.1 }) // NProgress Configuration

const whiteList = ['/login', '/auth-redirect']

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // 设置标题
  // document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = getToken()

  if (hasToken) {
    /** 已经登录获得token */
    next()
    NProgress.done()
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }

  NProgress.done()
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
