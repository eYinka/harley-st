"use client";
import { useState } from "react";
import "react-phone-number-input/style.css";
import GradientTitle from "../core/GradientTitle";

export default function FaqSections() {
	const [currentStage, setCurrentStage] = useState<number>(1);

	const formStages = [
		{
			id: 1,
			title: "Find a service ",
			component: () => <div></div>,
		},
		{
			id: 2,
			title: "FAQ Section",
			component: () => <div></div>,
		},
	];

	const renderForm = (stage: number) => {
		const stageData = formStages.find((s) => s.id === stage);
		const Component = stageData ? stageData.component : () => <div>Form not found</div>;
		return <Component />;
	};

	return (
		<section className="container mx-auto">
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
								<GradientTitle title={stage.title} titleClassNames="text-3xl" />
								<span className="underline-gradient h-0.5 md:h-[3px] -mt-6 rounded-full"></span>
							</>
						) : (
							<GradientTitle subtitle={stage.title} subtitleClassNames="text-3xl" />
						)}
					</button>
				))}
			</div>
			<div className="w-full max-w-4xl mx-auto bg-white card-shadow p-6 lg:p-10 roundex-xl">
				{renderForm(currentStage)}
			</div>
		</section>
	);
}
