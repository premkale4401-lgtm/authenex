import { Metadata } from "next";
import DashboardShell from "@/components/dashboard/DashboardShell";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Dashboard | Authenex TrustLens",
  description: "Digital forensics dashboard for content verification and analysis",
};

// Force dynamic rendering - prevents static generation during build
// Required because we use getServerSession which needs runtime context
export const dynamic = 'force-dynamic';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/signin?callbackUrl=/dashboard");
  }

  return (
    <DashboardShell>
      {children}
    </DashboardShell>
  );
}