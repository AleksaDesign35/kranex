import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();

    const hostname = url.hostname;
    const pathname = url.pathname;
    const search = url.search;

    const targetHost = hostname.startsWith("www.")
        ? hostname.slice(4)
        : hostname;

    let targetPathname = pathname;

    if (pathname === "/hr") {
        targetPathname = "/";
    } else if (pathname.startsWith("/hr/")) {
        targetPathname = pathname.replace("/hr", "");
    }

    const hadSearch = search.length > 1;

    const needsHttps =
        request.headers.get("x-forwarded-proto") === "http";

    const needsRedirect =
        hostname !== targetHost ||
        pathname !== targetPathname ||
        hadSearch ||
        needsHttps;

    if (needsRedirect) {
        const target = new URL(request.url);

        target.protocol = "https:";
        target.hostname = targetHost;
        target.pathname = targetPathname;
        target.search = "";

        return NextResponse.redirect(target, 308);
    }

    const response = NextResponse.next();

    if (hadSearch) {
        response.headers.set("X-Robots-Tag", "noindex, follow");
    }

    return response;
}

export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon|images|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|webmanifest)).*)",
    ],
};