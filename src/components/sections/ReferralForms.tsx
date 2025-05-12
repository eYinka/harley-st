"use client";
import { useState } from "react";
import "react-phone-number-input/style.css";
import GradientButton from "../core/GradientButton";
import GradientTitle from "../core/GradientTitle";
import PatientInfoForm from "./PatientInfoForm";
import ReferrerInfoForm from "./ReferrerInfoForm";

interface ContactFormProps {
	title: string;
}

export default function ReferralForms(props: ContactFormProps) {
	const { title } = props;
	const [currentStage, setCurrentStage] = useState<number>(1);

	const formStages = [
		{
			id: 1,
			title: "Patient Information",
			component: PatientInfoForm,
		},
		{
			id: 2,
			title: "Referrer Information",
			component: ReferrerInfoForm,
		},
	];

	const renderForm = (stage: number) => {
		const stageData = formStages.find((s) => s.id === stage);
		const Component = stageData ? stageData.component : () => <div>Form not found</div>;
		return <Component />;
	};

	return (
		<section className="container mx-auto">
			<h2 className="text-4xl lg:text-5xl font-medium text-primary-dark mb-5 text-center">{title}</h2>
			<div className="flex gap-6 justify-center mb-10">
				{formStages.map((stage) => (
					<button
						key={stage.id}
						type="button"
						className="flex flex-col justify-center gap-6 cursor-pointer"
						onClick={() => setCurrentStage(stage.id)}
					>
						{currentStage === stage.id ? (
							<>
								<GradientTitle title={stage.title} titleClassNames="text-2xl" />
								<span className="underline-gradient h-0.5 md:h-[3px] -mt-6 rounded-full"></span>
							</>
						) : (
							<GradientTitle subtitle={stage.title} subtitleClassNames="text-2xl" />
						)}
					</button>
				))}
			</div>
			<div className="w-full max-w-4xl mx-auto bg-white card-shadow p-6 lg:p-10 roundex-xl">
				{renderForm(currentStage)}
				<div className="grid w-full items-center gap-2 mt-6">
					<GradientButton
						text={currentStage === 1 ? "Continue" : "Submit"}
						type="submit"
						classNames="w-fit"
					/>
				</div>
			</div>
		</section>
	);
}
