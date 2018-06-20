import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import { About, Contacts, News, Production, Products, Catalog } from 'scenes';
import { MainLayout } from 'components';

export default (
  <Route path="/" component={MainLayout}>
    <IndexRoute component={About} />
    <Route path="/" component={About} />
    <Route path="/about" component={About} />
    <Route path="/contacts" component={Contacts} />
    <Route path="/news" component={News} />
    <Route path="/production" component={Production} />
    <Route path="/products" component={Products} />
    <Route path="/catalog" component={Catalog} />
    <Route path="/catalog/:category" component={Catalog} />
  </Route>
);

export type RouteType =   '/about' | '/contacts' | '/news' | '/production' | '/products' | '/catalog';
export type RouterContent = 'tree' | 'photo' | 'price' | 'news' | 'way';

export const routesContent: {[key in RouteType] : Array<RouterContent>} = {
  '/about': ['photo', 'price', 'news'],
  '/production': ['tree', 'price', 'news'],
  '/products': ['tree', 'price', 'news'],
  '/news': ['tree', 'price'],
  '/contacts': ['way', 'price'],
  '/catalog': ['tree'],
};

export const routeHas =
  (route: RouteType, content: RouterContent) => routesContent[route].indexOf(content) >= 0;

const routeContentIsRequiredData: Array<RouterContent> = ['tree', 'price', 'way'];
export const routeContentIsRequired = (content: RouterContent) => routeContentIsRequiredData.indexOf(content) >= 0;
