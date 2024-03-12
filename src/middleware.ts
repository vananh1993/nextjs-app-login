import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
// import { useLayoutContext } from '@/contexts/layoutContext';
import { hasAuthToken } from "@/helpers/authHelper";

// const isLoggedIN:boolean = false;
export default function middeleware(request: NextRequest) {
    // let {layoutState} = useLayoutContext();
    const isLoggedIN: boolean = hasAuthToken();
    let headers = new Headers(request.headers);
    if(isLoggedIN) {
        return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/LoginUser", request.url));
}

export const config = {
    matcher: ["/Profile", "/Users", "/Profile/:path*"],
}