import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/dist/server/api-utils";
import { cookies } from "next/headers";
import Profile from "@/app/components/profile"

import { Database } from "../../../../lib/database.types";

const profilePage = async () => {
    const supabase = createServerComponentClient<Database>({
        cookies,
    })

    const{
        data:{ session },
    } =  await supabase.auth.getSession()

    if(!session){
        redirect("/auth/login")
    }

    return <Profile/>
}
export default profilePage