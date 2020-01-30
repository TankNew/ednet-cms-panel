import main from '../views/main.vue'
declare global {
    interface RouterMeta {
        title: string
    }
    interface Router {
        path: string
        name: string
        icon?: string
        permission?: string
        meta?: RouterMeta
        component: any
        children: Array<Router>
    }
    interface System {
        import(request: string): Promise<any>
    }
    var System: System
}
export const otherRouters: Router = {
    path: '/main',
    name: 'main',
    permission: '',
    meta: { title: 'ManageMenu' },
    component: main,
    children: [
        {
            path: 'home',
            meta: { title: 'HomePage' },
            name: 'home',
            component: () => import('../views/Home.vue'),
            children: []
        }
    ]
}
export const appRouters: Array<Router> = [
    {
        path: '/setting',
        name: 'setting',
        permission: '',
        meta: { title: 'ManageMenu' },
        icon: '&#xe68a;',
        component: main,
        children: [
            {
                path: 'user',
                permission: 'Pages.Users',
                meta: { title: 'Users' },
                name: 'user',
                component: () => import('../views/About.vue'),
                children: []
            }
        ]
    }
]
export const routers = [otherRouters, appRouters]
