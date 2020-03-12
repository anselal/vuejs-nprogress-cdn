const routes = [
	{
		path: '/',
		component: HomePage,
		children: [
			{ path: '/about', component: AboutPage },
			{ path: '/breeds', component: BreedsPage },
			{ path: '/contact', component: ContactPage },
		],
	},
	{
		path: '*',
		component: NotFoundPage,
	}
]

const router = new VueRouter({
	// base: '/',
	// mode: 'history',
	routes
})

router.beforeResolve((to, from, next) => {
	if (to.path) {
		NProgress.start()
	}
	next()
});

router.afterEach(() => {
	NProgress.done()
});
