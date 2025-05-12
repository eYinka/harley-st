/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Input } from "../shadcn/input";
import { Label } from "../shadcn/label";
import { Textarea } from "../shadcn/textarea";
import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInputWithCountrySelect from "react-phone-number-input";

export default function PatientInfoForm() {
	const [phoneValue, setPhoneValue] = useState<string | undefined>();

	const renderRequired = <span className="text-red-500 text-sm ml-1">*</span>;

	return (
		<div className="flex flex-col gap-6">
			<div className="grid md:grid-cols-2 gap-2.5">
				<div className="grid w-full items-center gap-2">
					<Label htmlFor="firstName">First Name {renderRequired} </Label>
					<Input type="text" id="firstName" required />
				</div>
				<div className="grid w-full items-center gap-2">
					<Label htmlFor="lastName">Last Name {renderRequired}</Label>
					<Input type="text" id="lastName" required />
				</div>
			</div>
			<div className="grid md:grid-cols-2 gap-2.5">
				<div className="grid w-full items-center gap-2">
					<Label htmlFor="email">Phone Number {renderRequired}</Label>
					<PhoneInputWithCountrySelect
						onChange={(val) => setPhoneValue(val)}
						defaultCountry="GB"
						international
						className="border border-gray-300 rounded-md p-2 w-full h-12 [&>input:focus-visible]:outline-0 [&>input:focus-visible]:border-0"
						required
					/>
				</div>
				<div className="grid w-full items-center gap-2">
					<Label htmlFor="dob">Date of Birth {renderRequired}</Label>
					<Input type="date" id="dob" required />
				</div>
			</div>
			<div className="grid w-full items-center gap-2">
				<Label htmlFor="email">Email {renderRequired}</Label>
				<Input type="email" id="email" required />
			</div>
			<div className="grid w-full items-center gap-2">
				<Label htmlFor="serviceRequest">Service Request {renderRequired}</Label>
				<Textarea rows={5} className="h-40" id="serviceRequest" />
			</div>
      <div className="grid w-full items-center gap-2">
				<Label htmlFor="serviceRequest">Clinical Indication {renderRequired}</Label>
				<Textarea rows={5} className="h-40" id="clinicalIndication" />
			</div>
		</div>
	);
}
