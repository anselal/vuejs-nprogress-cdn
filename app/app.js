axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    NProgress.start();
    return config;
}, function (error) {
    // Do something with request error
    console.log(error);
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    NProgress.done();
    return response;
}, function (error) {
    // Do something with response error
    console.log(error);
    return Promise.reject(error);
});

Vue.config.devtools = true;

new Vue({
    router,
}).$mount('#app')