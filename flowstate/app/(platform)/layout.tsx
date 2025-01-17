import { ModalProvider } from "@/components/providers/modal-provider";
import { QueryProvider } from "@/components/providers/queryProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const platformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <QueryProvider>

      <Toaster />
      <ModalProvider />
      {children}
      </QueryProvider>
    </ClerkProvider>
  );
};

export default platformLayout;
