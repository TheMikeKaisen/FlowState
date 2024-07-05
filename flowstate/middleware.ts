import { NextResponse } from "next/server";
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const publicRoutes = createRouteMatcher(["/", "/api/webhook", '/sign-in', '/sign-up']);
const selectOrgRoute = createRouteMatcher(["/select-org"]);

export default clerkMiddleware((auth, req) => {

  const { userId, orgId } = auth();

  
  /* 
  if user is logged in and is trying to access public route, then redirect user to /select-org or 
  /organization/id 
  */
  if (userId && publicRoutes(req)) {
    let path = "/select-org";

    // if user already has an organization id, then redirect him to organization page.
    if (orgId) {
      path = `/organization/${orgId}`;
    }

    const orgSelection = new URL(path, req.url);
    return NextResponse.redirect(orgSelection);
    
  }

  // if user is not logged in and is trying to access private route, then redirect user to sign-in page. And as soon as the user signs-in, he will be redirected to the same url he was trying to access before.
  if (!userId && !publicRoutes(req)) {
    const signInUrl = new URL('/sign-in', req.url)
    return NextResponse.redirect(signInUrl);
  }

  //if user is logged in but he does not created an organization yet, then he is forced to do so.
  if (userId && !orgId && !selectOrgRoute(req)) {
    const orgSelection = new URL("/select-org", req.url);
    return NextResponse.redirect(orgSelection);
  }

  // Protect all non-public routes
  if (!publicRoutes(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};