import { Check } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import Seo from "../components/Seo";

type DeploymentType = "cloud" | "self-hosted";
type BillingCycle = "monthly" | "annually";

export default function Pricing() {
  const [deploymentType, setDeploymentType] =
    useState<DeploymentType>("cloud");
  const [billingCycle, setBillingCycle] =
    useState<BillingCycle>("annually");

  const cloudPricing = {
    basic: { monthly: 25000, annually: 250000 },
    standard: { monthly: 50000, annually: 500000 },
    premium: { monthly: 100000, annually: 1000000 },
  };

  const selfHostedPricing = {
    basic: { setup: 500000, monthly: 15000 },
    standard: { setup: 800000, monthly: 25000 },
    premium: { setup: 1200000, monthly: 40000 },
  };

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div>
      <Seo
        title="Pricing | EduManage Pro by SableBoxx"
        description="Simple, transparent pricing for Nigerian schools. Compare Cloud Hosted and Self Hosted plans with monthly and annual billing." 
        canonicalPath="/pricing"
      />
      {/* Hero */}
      <section className="px-6 lg:px-8 pt-32 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-semibold text-black mb-6">
          Pricing
        </h1>
        <p className="text-xl text-black/60 max-w-2xl mx-auto">
          Simple, transparent pricing. Choose your setup and
          plan.
        </p>
      </section>

      {/* Deployment Toggle */}
      <section className="px-6 lg:px-8 pb-16">
        <div className="max-w-md mx-auto flex gap-2 border border-black/10 p-1">
          <button
            onClick={() => setDeploymentType("cloud")}
            className={`flex-1 py-3 transition-colors ${
              deploymentType === "cloud"
                ? "bg-black text-white"
                : "text-black/60 hover:text-black"
            }`}
          >
            Cloud Hosted
          </button>
          <button
            onClick={() => setDeploymentType("self-hosted")}
            className={`flex-1 py-3 transition-colors ${
              deploymentType === "self-hosted"
                ? "bg-black text-white"
                : "text-black/60 hover:text-black"
            }`}
          >
            Self Hosted
          </button>
        </div>
      </section>

      {/* Cloud Pricing */}
      {deploymentType === "cloud" && (
        <section className="px-6 lg:px-8 pb-24">
          <div className="max-w-6xl mx-auto">
            {/* Billing Toggle */}
            <div className="flex justify-center mb-16">
              <div className="inline-flex gap-2 border border-black/10 p-1">
                <button
                  onClick={() => setBillingCycle("monthly")}
                  className={`px-6 py-2 transition-colors ${
                    billingCycle === "monthly"
                      ? "bg-black text-white"
                      : "text-black/60 hover:text-black"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle("annually")}
                  className={`px-6 py-2 transition-colors ${
                    billingCycle === "annually"
                      ? "bg-black text-white"
                      : "text-black/60 hover:text-black"
                  }`}
                >
                  Annually{" "}
                  <span className="text-xs">(Save 17%)</span>
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Basic */}
              <div className="border border-black/10 p-8">
                <h3 className="text-2xl font-semibold text-black mb-2">
                  Basic
                </h3>
                <p className="text-black/60 mb-8">
                  Small schools
                </p>
                <div className="mb-8">
                  <div className="text-4xl font-semibold text-black mb-1">
                    {formatPrice(
                      cloudPricing.basic[billingCycle],
                    )}
                  </div>
                  <div className="text-black/40">
                    /
                    {billingCycle === "monthly"
                      ? "month"
                      : "year"}
                  </div>
                </div>
                <Link
                  to="/request-demo"
                  className="block w-full px-6 py-3 border border-black text-black hover:bg-black hover:text-white transition-colors text-center mb-8"
                >
                  Get Started
                </Link>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="size-5 text-[#2979FF] shrink-0" />
                    <span className="text-sm text-black/80">
                      Student management & admissions
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="size-5 text-[#2979FF] shrink-0" />
                    <span className="text-sm text-black/80">
                      Online fee payments
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="size-5 text-[#2979FF] shrink-0" />
                    <span className="text-sm text-black/80">
                      Results & report cards
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="size-5 text-[#2979FF] shrink-0" />
                    <span className="text-sm text-black/80">
                      Up to 500 students
                    </span>
                  </div>
                </div>
              </div>

              {/* Standard */}
              <div className="border-2 border-black p-8 relative">
                <div className="absolute -top-3 left-8 px-3 py-1 bg-black text-white text-xs">
                  POPULAR
                </div>
                <h3 className="text-2xl font-semibold text-black mb-2">
                  Standard
                </h3>
                <p className="text-black/60 mb-8">
                  Growing schools
                </p>
                <div className="mb-8">
                  <div className="text-4xl font-semibold text-black mb-1">
                    {formatPrice(
                      cloudPricing.standard[billingCycle],
                    )}
                  </div>
                  <div className="text-black/40">
                    /
                    {billingCycle === "monthly"
                      ? "month"
                      : "year"}
                  </div>
                </div>
                <Link
                  to="/request-demo"
                  className="block w-full px-6 py-3 bg-[#2979FF] text-white hover:bg-[#2979FF]/90 transition-colors text-center mb-8"
                >
                  Get Started
                </Link>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="size-5 text-[#2979FF] shrink-0" />
                    <span className="text-sm text-black/80">
                      Everything in Basic
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="size-5 text-[#2979FF] shrink-0" />
                    <span className="text-sm text-black/80">
                      Teacher & parent portals
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="size-5 text-[#2979FF] shrink-0" />
                    <span className="text-sm text-black/80">
                      Staff management
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="size-5 text-[#2979FF] shrink-0" />
                    <span className="text-sm text-black/80">
                      Timetable management
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="size-5 text-[#2979FF] shrink-0" />
                    <span className="text-sm text-black/80">
                      Up to 1,500 students
                    </span>
                  </div>
                </div>
              </div>

              {/* Premium */}
              <div className="border border-black/10 p-8">
                <h3 className="text-2xl font-semibold text-black mb-2">
                  Premium
                </h3>
                <p className="text-black/60 mb-8">
                  Large institutions
                </p>
                <div className="mb-8">
                  <div className="text-4xl font-semibold text-black mb-1">
                    {formatPrice(
                      cloudPricing.premium[billingCycle],
                    )}
                  </div>
                  <div className="text-black/40">
                    /
                    {billingCycle === "monthly"
                      ? "month"
                      : "year"}
                  </div>
                </div>
                <Link
                  to="/request-demo"
                  className="block w-full px-6 py-3 border border-black text-black hover:bg-black hover:text-white transition-colors text-center mb-8"
                >
                  Get Started
                </Link>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="size-5 text-[#2979FF] shrink-0" />
                    <span className="text-sm text-black/80">
                      Everything in Standard
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="size-5 text-[#2979FF] shrink-0" />
                    <span className="text-sm text-black/80">
                      Advanced analytics
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="size-5 text-[#2979FF] shrink-0" />
                    <span className="text-sm text-black/80">
                      Payroll with PAYE
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="size-5 text-[#2979FF] shrink-0" />
                    <span className="text-sm text-black/80">
                      Priority support
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="size-5 text-[#2979FF] shrink-0" />
                    <span className="text-sm text-black/80">
                      Unlimited students
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Self-Hosted Pricing */}
      {deploymentType === "self-hosted" && (
        <section className="px-6 lg:px-8 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Basic */}
              <div className="border border-black/10 p-8">
                <h3 className="text-2xl font-semibold text-black mb-2">
                  Basic
                </h3>
                <p className="text-black/60 mb-8">
                  Small schools
                </p>
                <div className="mb-8">
                  <div className="mb-4">
                    <div className="text-sm text-black/60 mb-1">
                      One-time setup
                    </div>
                    <div className="text-3xl font-semibold text-black">
                      {formatPrice(
                        selfHostedPricing.basic.setup,
                      )}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-black/10">
                    <div className="text-sm text-black/60 mb-1">
                      Monthly maintenance
                    </div>
                    <div className="text-2xl font-semibold text-black">
                      {formatPrice(
                        selfHostedPricing.basic.monthly,
                      )}
                    </div>
                  </div>
                </div>
                <Link
                  to="/request-demo"
                  className="block w-full px-6 py-3 border border-black text-black hover:bg-black hover:text-white transition-colors text-center mb-8"
                >
                  Get Started
                </Link>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="size-5 text-[#2979FF] shrink-0" />
                    <span className="text-sm text-black/80">
                      Your own domain
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="size-5 text-[#2979FF] shrink-0" />
                    <span className="text-sm text-black/80">
                      All Basic features
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="size-5 text-[#2979FF] shrink-0" />
                    <span className="text-sm text-black/80">
                      Complete data ownership
                    </span>
                  </div>
                </div>
              </div>

              {/* Standard */}
              <div className="border-2 border-black p-8 relative">
                <div className="absolute -top-3 left-8 px-3 py-1 bg-black text-white text-xs">
                  POPULAR
                </div>
                <h3 className="text-2xl font-semibold text-black mb-2">
                  Standard
                </h3>
                <p className="text-black/60 mb-8">
                  Growing schools
                </p>
                <div className="mb-8">
                  <div className="mb-4">
                    <div className="text-sm text-black/60 mb-1">
                      One-time setup
                    </div>
                    <div className="text-3xl font-semibold text-black">
                      {formatPrice(
                        selfHostedPricing.standard.setup,
                      )}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-black/10">
                    <div className="text-sm text-black/60 mb-1">
                      Monthly maintenance
                    </div>
                    <div className="text-2xl font-semibold text-black">
                      {formatPrice(
                        selfHostedPricing.standard.monthly,
                      )}
                    </div>
                  </div>
                </div>
                <Link
                  to="/request-demo"
                  className="block w-full px-6 py-3 bg-[#2979FF] text-white hover:bg-[#2979FF]/90 transition-colors text-center mb-8"
                >
                  Get Started
                </Link>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="size-5 text-[#2979FF] shrink-0" />
                    <span className="text-sm text-black/80">
                      Your own domain
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="size-5 text-[#2979FF] shrink-0" />
                    <span className="text-sm text-black/80">
                      All Standard features
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="size-5 text-[#2979FF] shrink-0" />
                    <span className="text-sm text-black/80">
                      Complete data ownership
                    </span>
                  </div>
                </div>
              </div>

              {/* Premium */}
              <div className="border border-black/10 p-8">
                <h3 className="text-2xl font-semibold text-black mb-2">
                  Premium
                </h3>
                <p className="text-black/60 mb-8">
                  Large institutions
                </p>
                <div className="mb-8">
                  <div className="mb-4">
                    <div className="text-sm text-black/60 mb-1">
                      One-time setup
                    </div>
                    <div className="text-3xl font-semibold text-black">
                      {formatPrice(
                        selfHostedPricing.premium.setup,
                      )}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-black/10">
                    <div className="text-sm text-black/60 mb-1">
                      Monthly maintenance
                    </div>
                    <div className="text-2xl font-semibold text-black">
                      {formatPrice(
                        selfHostedPricing.premium.monthly,
                      )}
                    </div>
                  </div>
                </div>
                <Link
                  to="/request-demo"
                  className="block w-full px-6 py-3 border border-black text-black hover:bg-black hover:text-white transition-colors text-center mb-8"
                >
                  Get Started
                </Link>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="size-5 text-[#2979FF] shrink-0" />
                    <span className="text-sm text-black/80">
                      Your own domain
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="size-5 text-[#2979FF] shrink-0" />
                    <span className="text-sm text-black/80">
                      All Premium features
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="size-5 text-[#2979FF] shrink-0" />
                    <span className="text-sm text-black/80">
                      Complete data ownership
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Free Website Banner */}
      <section className="px-6 lg:px-8 py-24 bg-black">
        <div className="max-w-4xl mx-auto text-center p-[0px]">
          <div className="px-[48px] py-[0px]">
            <div className="inline-block px-4 py-1.5 bg-white text-black text-sm mb-6">
              INCLUDED FREE
            </div>
            <h2 className="text-3xl font-semibold text-white mb-4">
              Professional Website at No Extra Cost
            </h2>
            <p className="text-white/60">
              Custom design, hosting, and SEO optimization for
              your school website.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
    </div>
  );
}