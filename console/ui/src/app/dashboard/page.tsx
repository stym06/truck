import { auth } from "@/auth";
import { AppSidebar } from "@/components/app-sidebar";
import OnboardingFlow from "@/components/OnboardingFlow";
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import { getTeams } from "@/lib/api/dashboard";
import { SessionProvider, useSession } from "next-auth/react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function Dashboard() {
    const session = await auth();

    const teams = await getTeams(session?.user?.email);

    return (
        <SessionProvider>
        <div className="min-h-screen bg-background">
            {JSON.stringify(session?.user?.email)}
            <SidebarProvider>
            <div className="flex">
                <Suspense fallback={<div>Loading...</div>}>
                    <AppSidebar teams={teams} />
                </Suspense>
                <div className="flex flex-col flex-1">
                    <div className="ml-[60%] px-4 mt-24 sm:px-6 lg:px-8">
                        <OnboardingFlow />
                    </div>
                </div>
            </div>
            </SidebarProvider>
        </div>
        </SessionProvider>
    )
}