/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Input } from "../shadcn/input";
import { Label } from "../shadcn/label";
import { Textarea } from "../shadcn/textarea";
import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import GradientButton from "../core/GradientButton";
import Map from "../core/Map";

interface ContactFormProps {
	title: string;
	description: string;
	buttonText: string;
}

export default function ContactForm(props: ContactFormProps) {
	const { title, description, buttonText } = props;
	const [phoneValue, setPhoneValue] = useState<string | undefined>();
	
	return (
		<section className="container mx-auto">
			<div className="grid lg:grid-cols-2 gap-20">
				<div className="flex flex-col gap-6">
					<h2 className="text-4xl lg:text-5xl font-medium text-primary-dark mb-5">
						{title}
					</h2>
					<p className="text-xl text-primary-dark mb-5">{description}</p>
					<div className="grid md:grid-cols-2 gap-2.5">
						<div className="grid w-full items-center gap-2">
							<Label htmlFor="firstName">First Name</Label>
							<Input type="text" id="firstName" required />
						</div>
						<div className="grid w-full items-center gap-2">
							<Label htmlFor="lastName">Last Name</Label>
							<Input type="text" id="lastName" required />
						</div>
					</div>
					<div className="grid w-full items-center gap-2">
						<Label htmlFor="email">Phone Number</Label>
						<PhoneInputWithCountrySelect
							onChange={(val) => setPhoneValue(val)}
							defaultCountry="GB"
							international
							className="border border-gray-300 rounded-md p-2 w-full h-12 [&>input:focus-visible]:outline-0 [&>input:focus-visible]:border-0"
							required
						/>
					</div>
					<div className="grid w-full items-center gap-2">
						<Label htmlFor="email">Your Email</Label>
						<Input type="email" id="email" required />
					</div>
					<div className="grid w-full items-center gap-2">
						<Textarea placeholder="Message..." rows={5} className="h-40" />
					</div>
					<div className="grid w-full items-center gap-2">
						<GradientButton text={buttonText} type="submit" classNames="w-fit" />
					</div>
				</div>

				<div className="w-full h-[520px] lg:h-[721px] map-clip">
					<Map />
				</div>
			</div>
		</section>
	);
}
