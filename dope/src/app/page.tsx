import { json } from "stream/consumers";
import { Prisma } from "./generated/prisma";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/db";

const Page = async () =>{
  const users = await prisma.user.findMany();
  return(
    <div>
      {JSON.stringify(users, null,2)}
      
    </div>
  )
}

export default Page;