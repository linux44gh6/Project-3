
interface RouteItem {
    path?: string;
    element?: JSX.Element;
    children?: RouteItem[];
}
export const routeGenarator=(items: RouteItem[])=>{
    const routes = items.reduce((acc: { path: string; element: JSX.Element; }[], item) => {
        if (item.path && item.element) {
            acc.push({
                path: item.path,
                element: item.element,
            });
        }
    
        if (item.children) {
            item.children.forEach((child: RouteItem) => {
                if (child.path && child.element) {
                    acc.push({
                        path: child.path,
                        element: child.element,
                    });
                }
            });
        }
    
        return acc;
    }, []);
    return routes
}