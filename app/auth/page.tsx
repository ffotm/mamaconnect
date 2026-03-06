import { Suspense } from "react";
import Auth from "@/app/pages/auth/Auth";

export default function AuthPage() {
  return (
    <Suspense>
      <Auth />
    </Suspense>
  );
}
