import { useRouter } from "next/router";
import PRICING_DATA from "../pricing.json";
import Link from "next/link";
import { IconChecks } from "@tabler/icons-react";

type PricingCardProps = {
  getCurrencySymbol: () => "$" | "₹";
  convertPrice: (priceInUSD: number) => string | number;
};

export const PricingCards = ({
  getCurrencySymbol,
  convertPrice,
}: PricingCardProps) => {
  const router = useRouter();

  return (
    <div className="pricing-cards">
      <div className="row">
        {PRICING_DATA.cards.map(
          ({ planName, planPrice, description }, cardIndex) => (
            <div className="col-12 col-md-6 col-xl-3" key={`card-${cardIndex}`}>
              <div
                className="pricing-card"
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay="100"
              >
                <h5 className={`h5 text-${planName}`}>{planName}</h5>

                <div className="price-text">
                  <h2 className="h2 title">
                    {getCurrencySymbol()}
                    {convertPrice(planPrice)}
                  </h2>
                  <p>paid per month</p>
                </div>

                <ul className="plan-desc">
                  {description.map((item, itemIndex) => (
                    <li key={`description-${itemIndex}`}>
                      <IconChecks color="#4569e7" /> {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`https://dashboard.penify.dev/profile/payments?currency=${
                    router.query.currency || "INR"
                  }`}
                  target="_blank"
                  className="btn btn--ocotonary"
                >
                  {planName === "freemium" ? "Start for free" : "Choose plan"}
                </Link>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
