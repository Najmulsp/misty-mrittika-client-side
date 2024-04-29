import { FaShippingFast } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GiStorkDelivery } from "react-icons/gi";


const WhyChooseUs = () => {
    return (
        <section className="m-4 md:m-8 py-6 dark:bg-gray-100 dark:text-gray-800">
	<div className="container mx-auto p-4 my-6 space-y-2 text-center">
		<h2 className="text-5xl font-bold">Why Choose Us</h2>
		<p className="dark:text-gray-600 text-center w-2/6 mx-auto py-3">WE CURATE INSPIRATION FOR THE HOME, CONNECTING THE CREATIVE WORK OF ARTISANS & DESIGNERS TO PEOPLE AND PLACES AROUND THE WORLD</p>
	</div>
	<div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
		<div className="flex flex-col items-center p-4">
        <FaShippingFast className="text-7xl"/>
			<h3 className="my-3 text-3xl font-semibold">FREE SHIPPING</h3>
			<div className="space-y-1 leading-tight">
				<p className="text-center w-3/5 mx-auto">Shipping fee? Don’t worry, all orders over $75.00 will be on us. Just sit & shopping</p>
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
        <RiSecurePaymentLine className="text-7xl"/>
			<h3 className="my-3 text-3xl font-semibold">SECURE PAYMENT</h3>
			<div className="space-y-1 leading-tight">
				<p className="text-center w-3/5 mx-auto">Mintie offers multiple payment options so the customers can easily to access their favorite one</p>
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
        <GiStorkDelivery className="text-7xl" />
			<h3 className="my-3 text-3xl font-semibold">FAST & SAFE DELIVERY</h3>
			<div className="space-y-1 leading-tight">
				<p className="text-center w-3/5 mx-auto">By using most popular delivery services, you will receive your package within 2-3 business days</p>
			</div>
		</div>
	</div>
</section>
    );
};

export default WhyChooseUs;