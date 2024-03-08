import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { useLayoutContext } from '@/app/contexts/layoutContext';



export  function middeleware(request: NextRequest) {
    let {layoutState} = useLayoutContext();
    const isLoggedIN: boolean = layoutState.login_status;
    let headers = new Headers(request.headers);
    if(isLoggedIN) {
        return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
    matcher: ["/Profile"]
}