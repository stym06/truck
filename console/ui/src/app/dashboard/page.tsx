import { auth } from "@/auth";
import { AppSidebar } from "@/components/app-sidebar";
import OnboardingFlow from "@/components/OnboardingFlow";
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import { SessionProvider, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function Dashboard() {
    const user = await auth();
    if (!user) {
        redirect("/")
    }
    return (
        <SessionProvider>
        <div className="min-h-screen bg-background">
            <SidebarProvider>
            <div className="flex">
                <AppSidebar />
                
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