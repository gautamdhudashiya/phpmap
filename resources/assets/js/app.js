
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('homemap', require('./components/HomeMap.vue'));
Vue.component('userlist', require('./components/UserList.vue'));
Vue.component('users', require('./components/Users.vue'));
Vue.component('usergroups', require('./components/Usergroups.vue'));
Vue.component('account', require('./components/Account.vue'));

Vue.component('forum-flash', require('./components/Forum/Flash.vue'));
Vue.component('forum-reply', require('./components/Forum/Reply.vue'));
Vue.component('forum-favorite', require('./components/Forum/Favorite.vue'));


const app = new Vue({
    el: '#app'
});
