import { IconX } from "@tabler/icons-react";

interface LocationPopupProps {
  handleAcceptLocation: () => void;
  handleDeclineLocation: () => void;
}

export function LocationPopup({
  handleAcceptLocation,
  handleDeclineLocation,
}: LocationPopupProps) {
  return (
    <div
      id="location-modal"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed left-0 right-0 top-0 z-50 max-h-full w-full flex items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 backdrop-blur-sm"
      onClick={handleDeclineLocation}
    >
      <div className="relative mx-auto max-h-full w-full max-w-xl p-4">
        <div className="relative rounded-lg bg-gray-700 shadow">
          <div className="flex items-center justify-between rounded-t border-b border-gray-600 p-4 md:p-5">
            <h3 className="text-base font-semibold text-white md:text-lg lg:text-xl">
              Allow Location Access?
            </h3>
            <button
              type="button"
              className="0 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-600 hover:text-white"
              onClick={handleDeclineLocation}
            >
              <IconX />
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="space-y-4 p-4 md:p-5">
            <p className="text-xs leading-relaxed text-gray-400 md:text-sm lg:text-base">
              We'd like to access your location to set the appropriate currency
              for pricing. This helps us provide more accurate pricing
              information tailored to your region.
            </p>
            <p className="text-xs leading-relaxed text-gray-400 md:text-sm lg:text-base">
              By allowing location access, you'll see prices in your local
              currency, making it easier to understand the value of our
              offerings.
            </p>
          </div>

          <div className="flex items-center rounded-b border-t border-gray-600 p-4 md:p-5">
            <button
              type="button"
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-center text-xs md:text-sm lg:text-base font-medium text-white hover:bg-blue-700 focus:outline-none"
              onClick={handleAcceptLocation}
            >
              I accept
            </button>
            <button
              type="button"
              className="ms-3 rounded-lg border border-gray-600 bg-gray-800 px-5 py-2.5 text-xs md:text-sm lg:text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-700"
              onClick={handleDeclineLocation}
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
