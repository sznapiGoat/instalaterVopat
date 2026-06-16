"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Zadejte prosím jméno."),
  phone: z
    .string()
    .min(6, "Zadejte prosím telefon.")
    .regex(/^[0-9+\s()/-]+$/, "Telefon obsahuje neplatné znaky."),
  email: z
    .union([z.string().email("Zkontrolujte tvar e-mailu."), z.literal("")])
    .optional(),
  serviceType: z.string().min(1, "Vyberte prosím typ služby."),
  message: z.string().min(10, "Popište prosím zakázku (alespoň 10 znaků)."),
});

type FormValues = z.infer<typeof schema>;

const serviceOptions = [
  "Vodoinstalace",
  "Topenářství",
  "Plyn a revize",
  "Rekonstrukce koupelny",
  "Kanalizace",
  "Jiné",
];

export function ContactForm() {
  const [toast, setToast] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { serviceType: "" },
  });

  const onSubmit = async (values: FormValues) => {
    // Demo: simulace odeslání. V produkci napojit na e-mail / API.
    void values;
    await new Promise((r) => setTimeout(r, 900));
    reset({ name: "", phone: "", email: "", serviceType: "", message: "" });
    setToast(true);
    setTimeout(() => setToast(false), 4500);
  };

  const fieldBase =
    "w-full rounded-md border bg-white px-4 py-3 text-[15px] text-ink shadow-sm transition-colors placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/40";

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        <Field label="Jméno" htmlFor="name" required error={errors.name?.message}>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Vaše jméno"
            className={cn(fieldBase, errors.name ? "border-red-400" : "border-line")}
            aria-invalid={!!errors.name}
            {...register("name")}
          />
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Telefon" htmlFor="phone" required error={errors.phone?.message}>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="+420 …"
              className={cn(fieldBase, errors.phone ? "border-red-400" : "border-line")}
              aria-invalid={!!errors.phone}
              {...register("phone")}
            />
          </Field>

          <Field label="E-mail" htmlFor="email" error={errors.email?.message}>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="vas@email.cz"
              className={cn(fieldBase, errors.email ? "border-red-400" : "border-line")}
              aria-invalid={!!errors.email}
              {...register("email")}
            />
          </Field>
        </div>

        <Field
          label="Typ služby"
          htmlFor="serviceType"
          required
          error={errors.serviceType?.message}
        >
          <select
            id="serviceType"
            className={cn(
              fieldBase,
              "appearance-none bg-[length:1.1rem] bg-[right_0.9rem_center] bg-no-repeat pr-10",
              errors.serviceType ? "border-red-400" : "border-line",
            )}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
            }}
            aria-invalid={!!errors.serviceType}
            defaultValue=""
            {...register("serviceType")}
          >
            <option value="" disabled>
              Vyberte službu
            </option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Field>

        <Field
          label="Popis zakázky"
          htmlFor="message"
          required
          error={errors.message?.message}
        >
          <textarea
            id="message"
            rows={5}
            placeholder="Co potřebujete vyřešit? Popište prosím rozsah práce a místo."
            className={cn(
              fieldBase,
              "resize-y",
              errors.message ? "border-red-400" : "border-line",
            )}
            aria-invalid={!!errors.message}
            {...register("message")}
          />
        </Field>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              Odesílám…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" aria-hidden />
              Odeslat poptávku
            </>
          )}
        </button>
      </form>

      <AnimatePresence>
        {toast ? (
          <motion.div
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-16 right-4 z-50 flex max-w-sm items-start gap-3 rounded-lg border border-line bg-white px-4 py-3.5 shadow-card-hover sm:bottom-16"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
            <p className="text-sm font-medium text-ink">
              Zpráva odeslána, Martin se ozve co nejdříve.
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function Field({
  label,
  htmlFor,
  required,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-semibold text-ink"
      >
        {label}
        {required ? <span className="ml-0.5 text-accent">*</span> : null}
      </label>
      {children}
      {error ? (
        <p className="mt-1.5 text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
