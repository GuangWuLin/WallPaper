import Vue from 'vue'
import Router from 'vue-router'
import {resolve} from 'path';
import iView from 'iview';
// 首页
const Home = resolve => {
  import('view/home/index').then(module => {
    resolve(module);
  })
}
// 关于我们
const About = resolve => {
  import('view/about/index').then(module => {
    resolve(module);
  })
}
// 公司简介
const Abstract = resolve => {
  import('components/about/introduction').then(module => {
    resolve(module);
  })
}
const Honor = resolve => {
  import('components/about/honor').then(module => {
    resolve(module);
  })
}
// 产品中心
const Product = resolve => {
  import('view/product/index').then(module => {
    resolve(module);
  })
}
// 联系我们
const Contact = resolve => {
  import('view/contact/index').then(module => {
    resolve(module);
  })
}
// 新闻中心
const News = resolve => {
  import('view/news/index').then(module => {
    resolve(module);
  })
}
const Detail = resolve => {
  import('view/news/detail').then(module => {
    resolve(module);
  })
}
// 工程业绩/、
const Project = resolve => {
  import('view/project/index').then(module => {
    resolve(module);
  })
}
// 知识园地
const Kownledge = resolve => {
  import('view/kownledge/index').then(module => {
    resolve(module);
  })
}
// 专卖店形象
const Shop = resolve => {
  import('view/shop/index').then(module => {
    resolve(module);
  })
}
// 加入我们
const Join = resolve => {
  import('view/join/index').then(module => {
    resolve(module);
  })
}
Vue.use(iView);
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      redirect: { name: 'home' },
    },
    // 关于我们
    {
      path:'/about',
      name:'about',
      component:About,
      redirect: { name: 'abstract' },
      children:[
        {
          path:'/about/abstract',
          name:'abstract',
          component:Abstract
        },
        {
           path:'/about/honor',
          name:'honor',
          component:Honor
        }
      ]
    },
    // 产品中心
    {
      path:'/product/:id',
      name:'product',
      component:Product,
    },
    // 联系我们
    {
      path:'/contact',
      name:'contact',
      component:Contact
    },
    // 新闻
    {
      path:'/news',
      name:'news',
      component: News
    },
    // 新闻详情
    {
      path:'/news/detail',
      name:'newsDetail',
      component: Detail,
    },
    // 工程业绩
    {
      path:'/project/:id',
      name:'project',
      component: Project
    },
     // 工程业绩详情
    {
      path:'/project/detail',
      name:'projectDetail',
      component: Detail,
    },
    // 知识园地
    {
      path:'/kownledge',
      name:'kownledge',
      component: Kownledge
    },
     // 知识园地详情
    {
      path:'/kownledge/detail',
      name:'kownledgeDetail',
      component: Detail,
    },
    // 专卖店
    {
      path:'/shop',
      name:'shop',
      component: Shop
    },
    // 招商加盟
    {
      path:'/join',
      name:'join',
      component: Join
    }
  ]
});

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});

export default router;
