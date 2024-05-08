const Faq = () => {
  return (
    <div className="w-[95%] mx-auto  flex flex-col-reverse lg:flex-row dark:bg-rose-50 dark:text-gray-800 justify-around items-center pb-4">
        <div>
            <div className="ml-10">
                <p className="text-xl font-semibold pb-3">Help Topics</p>
                <div className="space-y-1">
                <a href="#">Careers</a><br />
                <a href="#">Place & Manage Order</a><br />
                <a href="#">Shipping & Pickup</a><br />
                <a href="#">Returns & Refunds</a><br />
                <a href="#">Gift Cards</a><br />
                <a href="#">Payment Methods</a><br />
                <a href="#">Others</a><br />
                </div>
            </div>
        </div>
        
      <section className=" flex-1">
        <div className="container flex flex-col justify-center mx-auto py-6">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Shipping and delivery with Misty Mrittika.com
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Shipping timeframes <br /> Time of day for delivery varies by
                  location and carrier, contact the carrier for more details.
                  You can check the estimated shipping time-frame for your order
                  or items in three ways:
                  <br />
                  <br /> Before adding the item to your cart:
                  <br /> — Select Option on the product description page — Enter
                  your shipping ZIP code <br />
                  <br /> During checkout:
                  <br /> — You may select the date you would like to receive
                  your items <br />
                  <br /> Following purchase
                  <br /> — Order confirmation email
                  <br /> — Track Orders in your account
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Place an order for store pickup
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Time of day for delivery varies by location and carrier,
                  contact the carrier for more details. You can check the
                  estimated shipping time-frame for your order or items in three
                  ways:
                  <br />
                  Before adding the item to your cart:
                  <br />
                  — Select Option on the product description page
                  <br />
                  — Enter your shipping ZIP code
                  <br />
                  <br />
                  During checkout:
                  <br />
                  — You may select the date you would like to receive your items
                  <br />
                  <br />
                  Following purchase
                  <br />
                  — Order confirmation email
                  <br />
                  — Track Orders in your account
                  <br />
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Shipping cost
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Time of day for delivery varies by location and carrier,
                  contact the carrier for more details. You can check the
                  estimated shipping time-frame for your order or items in three
                  ways:
                  <br />
                  Before adding the item to your cart:
                  <br />
                  — Select Option on the product description page
                  <br />
                  — Enter your shipping ZIP code
                  <br />
                  <br />
                  During checkout:
                  <br />
                  — You may select the date you would like to receive your items
                  <br />
                  <br />
                  Following purchase
                  <br />
                  — Order confirmation email
                  <br />
                  — Track Orders in your account
                  <br />
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
