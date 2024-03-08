import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { useLayoutContext } from '@/app/contexts/layoutContext';



export  function middeleware(request: NextRequest) {
    const {layoutState} = useLayoutContext(): any;
    const isLoggedIN: boolean = layoutState.login_status;
}