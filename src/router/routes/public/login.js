import auth from 'view-ui-admin/src/utils/auth'

export default {
  path: "login",
  component: resolve => require(["@/views/login"], resolve),
  beforeEnter(to, from, next) {
    if (auth.loggedIn()) {
      next("/");
    } else {
      next();
    }
  }
};
