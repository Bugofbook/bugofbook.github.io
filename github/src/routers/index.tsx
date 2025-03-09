import type { RouteObject } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import RootComponent from './root';
import HomeComponent from './home';
import JavascriptComponent from './javascript';
import OthersComponent from './others';
import PhpComponent from './php';
import ProjectComponent from './project';
import ArticleComponent from './dirID.articleID'
const routers: RouteObject = {
    path: "",
    loader: RootComponent.loader,
    action: RootComponent.action,
    Component: RootComponent,
    children: [
      {
        path: "",
        index: true,
        loader: async () => redirect("home"),
      },
      {
        path: 'home',
        Component: HomeComponent,
        loader: HomeComponent.loader,
        action: HomeComponent.action,
      },
      {
        path: 'javascript',
        Component: JavascriptComponent,
        loader: JavascriptComponent.loader,
        action: JavascriptComponent.action,
      },
      {
        path: 'others',
        Component: OthersComponent,
        loader: OthersComponent.loader,
        action: OthersComponent.action,
      },
      {
        path: 'php',
        Component: PhpComponent,
        loader: PhpComponent.loader,
        action: PhpComponent.action,
      },
      {
        path: 'project',
        Component: ProjectComponent,
        loader: ProjectComponent.loader,
        action: ProjectComponent.action,
      },
      {
        path: ':dirID/:articleID',
        Component: ArticleComponent,
        loader: ArticleComponent.loader,
        action: ArticleComponent.action,
      }
    ],
  }
export default routers;
