import PropTypes from "prop-types";

const ResultCard = () => {
	return (
		<div className="flex items-center justify-center min-h-screen">
			{/* <img src="/desktop-preview.jpg" alt="" /> */}
			<div className="bg-white shadow-xl rounded-3xl flex sm:overflow-hidden max-w-lg flex-col sm:flex-row">
				{/* Score Section */}
				<div className="bg-gradient-to-b from-light-slate-blue to-light-royal-blue p-6 sm:p-8 flex-1 text-center text-white rounded-t-none rounded-3xl sm:rounded-t-3xl">
					<h2 className="opacity-70">Your Result</h2>
					<div className="bg-gradient-to-b from-violet-blue to-persian-blue rounded-full w-fit px-10 py-8 sm:px-12 sm:py-10 mx-auto my-4 sm:my-6">
						<div className="text-5xl font-bold mb-1">76</div>
						<p className="text-xs font-light opacity-60">of 100</p>
					</div>
					<p className="text-xl font-semibold">Great</p>
					<p className="text-sm sm:text-xs mt-2 opacity-70 w-3/4 sm:w-11/12 mx-auto mb-2 sm:mb-0">
						You scored higher than 65% of the people who have taken these tests.
					</p>
				</div>
				{/* Summary Section */}
				<div className="bg-white px-6 py-4 sm:p-8 flex-1 text-gray-700">
					<h2 className="text-lg font-semibold mb-4 text-left">Summary</h2>
					<div className="space-y-3 sm:space-y-4">
						<SummaryItem
							label="Reaction"
							score={80}
							textClass={"text-primary-light-red"}
							bgClass={"bg-primary-light-red"}
							icon={"/images/icon-reaction.svg"}
						/>
						<SummaryItem
							label="Memory"
							score={92}
							textClass={"text-primary-orangey-yellow"}
							bgClass={"bg-primary-orangey-yellow"}
							icon={"/images/icon-memory.svg"}
						/>
						<SummaryItem
							label="Verbal"
							score={61}
							textClass={"text-primary-green-teal"}
							bgClass={"bg-primary-green-teal"}
							icon={"/images/icon-verbal.svg"}
						/>
						<SummaryItem
							label="Visual"
							score={72}
							textClass={"text-primary-cobalt-blue"}
							bgClass={"bg-primary-cobalt-blue"}
							icon={"/images/icon-visual.svg"}
						/>
					</div>
					<button className="mt-5 sm:mt-8 w-full py-2 bg-dark-gray-blue hover:bg-gradient-to-b hover:from-light-slate-blue hover:to-light-royal-blue text-white font-semibold rounded-full">
						Continue
					</button>
				</div>
			</div>
		</div>
	);
};

// Summary Item Component
const SummaryItem = ({ label, score, icon, bgClass, textClass }) => (
	<div
		className={`flex items-center justify-between ${bgClass} bg-opacity-10 p-3 rounded-lg`}
	>
		<div className="flex gap-2">
			<img src={icon} alt="icon" />
			<span className={`text-sm font-medium ${textClass}`}>{label}</span>
		</div>
		<span className="font-medium text-sm text-gray-600">
			<span className="text-black">{score}</span> / 100
		</span>
	</div>
);

SummaryItem.propTypes = {
	bgClass: PropTypes.any,
	icon: PropTypes.any,
	label: PropTypes.any,
	score: PropTypes.any,
	textClass: PropTypes.any,
};

export default ResultCard;
