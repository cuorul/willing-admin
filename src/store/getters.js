const getters = {
  mainMenus: state => state.menu.mainMenus,
  activeIndex: state => state.menu.activeIndex,
  showSecondMenu: state => state.menu.showSecondMenu,
  secondMenus: state => state.menu.mainMenus[state.menu.activeIndex].secondMenu,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes
}
export default getters
