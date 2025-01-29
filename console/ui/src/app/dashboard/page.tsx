import { AppSidebar } from "@/components/app-sidebar";
import OnboardingFlow from "@/components/OnboardingFlow";
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";

export default function Dashboard() {
    return (
        <div>
            Dashboard
            <SidebarProvider>
                <AppSidebar />
            </SidebarProvider>
            <OnboardingFlow />
        </div>
    )
}