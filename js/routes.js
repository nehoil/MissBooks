
import bookApp from './pages/book-app.cmp.js'
import bookDetails from './pages/book-details.cmp.js'
import homePage from './pages/home-page.cmp.js'

const aboutUs = {
    template:`
    <section>
        <h1>about us...</h1>
    </section>
    `
}

const myRoutes = [
    {
        path: '/about',
        component: aboutUs
    },
    {
        path: '/',
        component: homePage
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    }
]

export const myRouter = new VueRouter({ routes: myRoutes })

