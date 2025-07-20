"use client";
import { json } from "stream/consumers";
import { Prisma } from "./generated/prisma";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/db";
import { useTRPC } from "@/trpc/client";

const Page =  () =>{
  const trpc = useTRPC();
  trpc.createAI.queryOptions({text:"Hello"});
  
    <div>
      hello Tejas
    </div>
  
}

export default Page;