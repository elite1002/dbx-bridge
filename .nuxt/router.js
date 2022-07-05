import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _62e52094 = () => interopDefault(import('..\\pages\\SelectChangeCoin.vue' /* webpackChunkName: "pages/SelectChangeCoin" */))
const _767819a6 = () => interopDefault(import('..\\pages\\SelectCoin.vue' /* webpackChunkName: "pages/SelectCoin" */))
const _c941f116 = () => interopDefault(import('..\\pages\\stableToken.vue' /* webpackChunkName: "pages/stableToken" */))
const _acc463ee = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/SelectChangeCoin",
    component: _62e52094,
    name: "SelectChangeCoin"
  }, {
    path: "/SelectCoin",
    component: _767819a6,
    name: "SelectCoin"
  }, {
    path: "/stableToken",
    component: _c941f116,
    name: "stableToken"
  }, {
    path: "/",
    component: _acc463ee,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
