import { NextResponse } from "next/server";

const supportedLanguages = new Set(["en", "id"]);

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split("/");
  const firstSegment = segments[1];

  if (firstSegment === "in") {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/in(?=\/|$)/, "/id");
    return NextResponse.redirect(url);
  }

  if (supportedLanguages.has(firstSegment)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  if (pathname === "/") {
    url.pathname = "/en";
  } else if (/^[a-z]{2}(?:-[A-Z]{2})?$/.test(firstSegment || "")) {
    const remainingPath = pathname.replace(/^\/[^/]+/, "");
    url.pathname = `/en${remainingPath}`;
  } else {
    url.pathname = `/en${pathname}`;
  }
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"]
};
