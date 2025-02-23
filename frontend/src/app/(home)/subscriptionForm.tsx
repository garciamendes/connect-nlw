"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Mail, User } from "lucide-react";
import { AnimatePresence } from "motion/react";
import * as Motion from "motion/react-client";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { postSubscriptions } from "@/src/http/api";

const subscribeSchema = z.object({
  name: z.string().min(2, "Digite seu nome completo"),
  email: z.string().email("Digite um email válido"),
});
type Subscribe = z.infer<typeof subscribeSchema>;

export const SubscriptionForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Subscribe>({
    resolver: zodResolver(subscribeSchema),
  });

  const onSubscribe = async (data: Subscribe) => {
    const referrer = searchParams.get("referrer");
    const { subscriberId } = await postSubscriptions({ name: data.name, email: data.email, referrer })
    router.push(`/invite/${subscriberId}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubscribe)}
      className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Incrição
      </h2>

      <div className="space-y-3">
        <div className="space-y-2">
          <Input.Root error={!!errors?.name}>
            <Input.Icon>
              <User />
            </Input.Icon>
            <Input.InputField
              placeholder="Nome completo"
              {...register("name")}
            />
          </Input.Root>

          <AnimatePresence>
            {errors?.name && (
              <Motion.div
                initial={{ height: 0, y: -10 }}
                animate={{ height: "auto", y: 0 }}
                exit={{ height: 0, y: -10 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <Motion.span
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  exit={{ y: -10 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="text-danger text-xs font-semibold"
                >
                  {errors.name.message}
                </Motion.span>
              </Motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="space-y-2">
          <Input.Root error={!!errors?.email}>
            <Input.Icon>
              <Mail />
            </Input.Icon>
            <Input.InputField
              type="email"
              placeholder="Email completo"
              {...register("email")}
            />
          </Input.Root>

          <AnimatePresence>
            {errors?.email && (
              <Motion.div
                initial={{ height: 0, y: -10 }}
                animate={{ height: "auto", y: 0 }}
                exit={{ height: 0, y: -10 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <Motion.span
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  exit={{ y: -10 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="text-danger text-xs font-semibold"
                >
                  {errors.email.message}
                </Motion.span>
              </Motion.div>
            )}
          </AnimatePresence>
        </div>

        <Button type="submit">
          Confirmar
          <ArrowRight />
        </Button>
      </div>
    </form>
  );
};
