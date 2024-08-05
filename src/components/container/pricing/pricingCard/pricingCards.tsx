import Link from "next/link";
import PRICING_DATA from "../pricing.json";
import { useRouter } from "next/router";

interface PricingCardsProps {
  convertPrice: (price: number) => string | number;
  getCurrencySymbol: () => "$" | "₹";
}

export const PricingCards = ({
  convertPrice,
  getCurrencySymbol,
}: PricingCardsProps) => {
  const router = useRouter();

  return (
    <div className="pricing-cards">
      <div className="row">
        {PRICING_DATA.cards.map(({ planName, planPrice }, cardIndex) => (
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
        ))}
      </div>
    </div>
  );
};
