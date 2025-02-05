import { auth } from "@/auth"

import {
    apiAuthPrefix,
    apiRoutePrefix,
    publicRoutes,
  } from "@/routes";

export default auth((req) => {
    const { nextUrl } = req;
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isApiRoute = nextUrl.pathname.startsWith(apiRoutePrefix);

    const isLoggedIn = !!req.auth;

    console.log(isLoggedIn, "isLoggedIn")

    if(isApiAuthRoute) {
        return
    }

    if(isApiRoute && !isLoggedIn) {
        return Response.json({ error: 'Unauthorized' }, { status: 401 })
    }

    if(!isLoggedIn && !isPublicRoute) {
        return Response.redirect(new URL('/', nextUrl))
    }

})

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}