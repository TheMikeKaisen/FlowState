"use client";

import React from "react";
import Image from "next/image";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { useAction } from "@/hooks/use-action";
import {useProModal} from "@/hooks/use-pro-modal";
// import { stripeRedirect } from "@/actions/stripeRedirect";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { stripeRedirect } from "@/actions/stripe-redirect";

const ProModal = () => {
  const proModal = useProModal();

  const { execute, isLoading } = useAction(stripeRedirect, {
    onSuccess: (data) => {
      window.location.href = data;
    },
    onError: (error) => {
      toast.error(error);
    },
  });
  const onClick = () => {
    execute({});
  }

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent className="max-w-md p-0 overflow-hidden">
        <div className="relative flex items-center justify-center aspect-video">
          <Image className="object-cover" src="/hero.svg" fill alt="Hero" />
        </div>

        <div className="mx-auto space-y-6 p-6 text-neutral-700">
          <h2 className="text-xl font-semibold">
            Upgrade to TaskFlow Pro Today!
          </h2>

          <p className="text-xs text-neutral-600 font-semibold">
            Explore the best of TaskFlow
          </p>

          <ul className="pl-3 text-sm list-disc">
            <li>Unlimited boards</li>

            <li>Advanced checklists</li>

            <li>Admin and security features</li>

            <li>And more!</li>
          </ul>

          <ul className="pl-3 text-sm list-disc">
            <li>Card Number: 4242 4242 4242 4242</li>

            <li>Expiry Date: 04/24</li>

            <li>CVV: 242</li>
          </ul>

          <Button
            className="w-full"
            variant="primary"
            disabled={isLoading}
            onClick={() => {
              execute({});
            }}
          >
            Upgrade
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProModal;