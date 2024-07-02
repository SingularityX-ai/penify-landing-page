import React, { useState, forwardRef, useEffect } from "react";
import Link from "next/link";
import { axiosInstance } from "@/config/axiosConfig";
import { useRouter } from "next/router";

let exchangeRateUSDToINR = 83; // Example static exchange rate

const PricingOne = forwardRef<HTMLDivElement>(function (_, ref) {
  const router = useRouter();
  const [currency, setCurrency] = useState(router.query.currency || "INR"); // Default currency
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const showCurrencySymbol = () => {
    return currency === "USD" ? "$" : "₹";
  };

  const convertPrices = (priceInUSD: number) => {
    const value = currency === "USD" ? priceInUSD : priceInUSD * exchangeRateUSDToINR;
    return value.toFixed(0);
  };

  useEffect(() => {
    axiosInstance
      .get("/v1/analytics/conversionRates")
      .then(({ data }) => (exchangeRateUSDToINR = data))
      .catch((error) => {
        console.error("Error fetching conversion rates", error);
        exchangeRateUSDToINR = 82; // Example static exchange rate
      });
  }, []);

  const updateCurrency = (currency: string) => {
    setCurrency(currency);
    setShowDropdown(false);

    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, currency },
      },
      undefined,
      { shallow: true, scroll: false }
    );
  };

  useEffect(() => {
    if (router.query.currency && router.query.currency !== currency) {
      setCurrency(router.query.currency);
    }
  }, [router.query.currency]);

  return (
    <section className="section pricing-two bg-img" ref={ref}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-6">
            <div
              className="section__header"
              data-aos="fade-up"
              data-aos-duration="400"
              >
              <h2 className="h2">Ready to Get Started?</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-xl-6">
            <div
              className="section__header"
              data-aos="fade-up"
              data-aos-duration="400"
              >
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  onClick={toggleDropdown}
                  >
                  Selected Currency: {currency}
                </button>
                {showDropdown && (
                  <ul
                    className="dropdown-menu show"
                    style={{ display: "inline-block" }}
                    >
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => updateCurrency("USD")}>
                        USD
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => updateCurrency("INR")}>
                        INR
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row items-gap">
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="pricing-two__single text-freemium"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="100"
              >
              <h5 className="h5">Freemium</h5>
              <div className="meta">
                <div className="content">
                  <h2 className="h2 title">
                    {showCurrencySymbol()}
                    {convertPrices(0)}
                  </h2>
                  <p>paid per month</p>
                </div>
              </div>
              <hr />
              <h5 className="h5 title">Private Repo</h5>
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>3 Commits Daily
                </li>
              </ul>
              <hr />
              <h5 className="h5 title">Public Repo</h5>
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>40 Commits Faily
                </li>
              </ul>
              <hr />
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>1 Full Repo Documentation
                </li>
              </ul>
              <hr />
              <Link
                href={`https://dashboard.penify.dev/profile/payments?currency=${router.query.currency ?? "INR"}`}
                target="_blank"
                className="btn btn--ocotonary"
                >
                Start for free
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="pricing-two__single text-basic"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="200"
              >
              <h5 className="h5">Basic</h5>
              <div className="meta">
                <div className="content">
                  <h2 className="h2 title">
                    {showCurrencySymbol()}
                    {convertPrices(10)}
                  </h2>
                  <p>paid per month / repository</p>
                </div>
              </div>
              <hr />
              <h5 className="h5 title">Private Repo</h5>
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>Unlimited Commits for 1 Repo
                </li>
                {/* <li>
                  <i className="fa-solid fa-check"></i>1 Full Repo
                </li> */}
              </ul>
              <hr />
              <h5 className="h5 title">Public Repo</h5>
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>Unlimited Commits
                </li>
              </ul>
              <hr />
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>3 Full Repo Documentation
                </li>
              </ul>
              <hr />
              <Link
                href={`https://dashboard.penify.dev/profile/payments?currency=${router.query.currency ?? "INR"}`}
                target="_blank"
                className="btn btn--ocotonary"
                >
                choose a plan
              </Link>
            </div>
          </div>
          {/*
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="pricing-two__single pricing-two__single--alt"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="400"
              >
              <h5 className="h5 pri">Pro</h5>
              <div className="meta">
                <div className="content">
                  <h2 className="h2 title">
                    {showCurrencySymbol()}
                    {convertPrices(45)}
                  </h2>
                  <p>paid per month / Repository</p>
                </div>
              </div>
              <hr />
              <h5 className="h5 title">Private Repo</h5>
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>Unlimited Commits for 5 Repo
                </li>
                { <-- <li>
                  <i className="fa-solid fa-check"></i>1 Full Repo
                </li>  ---> }
              </ul>
              <hr />
              <h5 className="h5 title">Public Repo</h5>
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>Unlimited Commits
                </li>
              </ul>
              <hr />
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>18 Full Repo Documentation
                </li>
              </ul>
              <hr />
              <Link
                href={`https://dashboard.penify.dev/profile/payments?currency=${router.query.currency ?? "INR"}`}
                target="_blank"
                className="btn btn--septenary">
                choose a plan
              </Link>
            </div>
          </div>
          */}
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="pricing-two__single text-elite"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="300"
              >
              <h5 className="h5">Elite</h5>
              <div className="meta">
                <div className="content">
                  <h2 className="h2 title">Contact Us For Details</h2>
                </div>
              </div>
              <hr />
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>On Premise Support
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  GPT-4 and Mistral
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  Private GPT-Keys
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  Access to Experimental Features
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  24*7 Support
                </li>
                <li></li>
              </ul>
              <hr />
              <Link
                href={`https://dashboard.penify.dev/profile/payments?currency=${router.query.currency ?? "INR"}`}
                target="_blank"
                className="btn btn--ocotonary">
                choose a plan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default PricingOne;
