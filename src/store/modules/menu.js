const state = {
  activeIndex: 0,
  showSecondMenu: true,
  mainMenus: [
    {
      name: '首页',
      path: '#/',
      icon: 'iconfont iconhome',
      secondMenu: [
        {
          id: 'home',
          url: 'home',
          name: '首页',
          icon: 'iconfont iconhome'
        },
        {
          id: 'market',
          url: 'about',
          name: '市场概述',
          icon: 'iconfont iconappstore'
        },
        {
          id: 'colors',
          url: 'colors',
          name: '音乐',
          icon: 'iconfont iconplay-circle'
        },
        {
          id: 'Instagram',
          url: 'buttons',
          name: '按钮',
          icon: 'iconfont iconappstore'
        },
        {
          id: 'Coding1',
          url: 'buttons',
          name: '编码',
          icon: 'iconfont iconcode',
          type: 'arrow',
          childMenu: [
            {
              id: 'github',
              url: '',
              name: 'github',
              icon: 'iconfont iconcode'
            }, {
              id: 'codepen',
              url: '',
              name: 'codepen',
              icon: 'iconfont iconcode'
            }
          ]
        }
      ]
    },
    {
      name: '组件',
      path: '#/',
      icon: 'iconfont iconcode',
      secondMenu: [{
        id: 'time',
        url: '',
        name: '时间',
        icon: 'iconfont iconField-time'
      },
      {
        id: 'calculator',
        url: '',
        name: '计算器',
        icon: 'iconfont iconcalculator-fill'
      }]
    },
    {
      name: '设置',
      path: '#/',
      icon: 'iconfont icondesktop',
      secondMenu: [{
        id: 'setting',
        url: '',
        name: '设置',
        icon: 'iconfont iconsetting-fill'
      },
      {
        id: 'about',
        url: 'about',
        name: '关于',
        icon: 'iconfont iconborder-outer'
      }]
    },
    {
      name: '其他',
      path: '#/',
      icon: 'iconfont iconsave-fill',
      secondMenu: [{
        id: 'other',
        url: '',
        name: '其他',
        icon: 'iconfont iconcrown-fill'
      }]
    }
  ]
}
const getters = {}
const mutations = {
  SET_SECOND_MENU: (state, secondMenus) => {
    state.secondMenus = secondMenus
  },
  SET_SHOW_SECOND_MENU: (state, showSecondMenu) => {
    state.showSecondMenu = showSecondMenu
  },
  SET_ACTIVE_INDEX: (state, activeIndex) => {
    state.activeIndex = activeIndex
  }
}
const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
