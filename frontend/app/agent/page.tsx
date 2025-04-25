"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { AgentDashboard } from "@/components/agent/dashboard";

import { Loader2 } from "lucide-react";
import { useAuth } from "@/context/auth-context";
import { DashboardLayout } from "@/components/dashboard-layout";

export default function AgentPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <DashboardLayout requireAgent>
      <AgentDashboard />
    </DashboardLayout>
  );
}
