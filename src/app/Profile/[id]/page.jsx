// // 'use client'
// // import { useRouter } from 'next/router'
// import ProfileDetail from '@/components/ProfileDetail'

// export default function Page({ params }) {
//     console.log(params.id);
//     return (
//         <div className="">
//         knanafnfeknkn
//             {/* <ProfileDetail id={params.id}/> */}
//         </div>
//     )
// }
// import List from "@/components/ListUsers";
import axios from 'axios'
import ProfileDetail from '@/components/profileDetail'
const ProfileDetailPage = async ({ params }) => {
    
  return (
    <div className="">
        
        <ProfileDetail id={params.id}></ProfileDetail>
    </div>
  );
};

export default ProfileDetailPage;