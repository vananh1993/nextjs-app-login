"use client";
// import { isAuthenticated } from "@/Utils/Auth";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import {useLayoutContext} from '@/contexts/layoutContext';

export default function isAuth(Component) {
  return function IsAuth(props) {

    const {layoutState, layoutDispatch} = useLayoutContext();
    const auth = layoutState.login_status;


    useEffect(() => {
      if (!auth) {
        return redirect("/LoginUser");
      }
    }, []);


    if (!auth) {
      return null;
    }

    return <Component {...props} />;
  };
}
