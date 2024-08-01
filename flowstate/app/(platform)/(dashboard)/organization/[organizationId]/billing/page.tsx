import { Separator } from "@/components/ui/separator";
import { Info } from "../_components/info";
import SubButton from "./_components/SubButton";
import { checkSubscription } from "@/lib/subscription";

export default async function BillingPage() {
  const isPro = await checkSubscription();

  return (
    <div className="w-full">
      <Info isPro={isPro} />

      <Separator className="my-2" />

      <SubButton isPro={isPro} />
    </div>
  );
}