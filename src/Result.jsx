import PropTypes from "prop-types";
import { Results } from "./data";
import { useEffect, useState } from "react";

const ResultCard = () => {
	const [summary, setSummary] = useState(0);
	useEffect(()=> {
		const totalScore = Results.reduce(
			(accumulator, currentValue) => accumulator + currentValue.score,
			0,
		  );
		  const avgScore = totalScore/Results.length;
		  setSummary(Math.floor(avgScore))
	}, [])
    return (
        <div className="flex sm:items-center justify-center min-h-screen">
            <div className="bg-white shadow-xl rounded-3xl flex sm:overflow-hidden max-w-2xl flex-col sm:flex-row">
                {/* Score Section */}
                <div className="bg-gradient-to-b from-light-slate-blue to-light-royal-blue p-6 sm:p-8 flex-1 text-center text-white rounded-t-none rounded-3xl sm:rounded-t-3xl flex justify-between items-center flex-col">
                    <h2 className="text-xl opacity-70 font-medium">
                        Your Result
                    </h2>
                    <div className="bg-gradient-to-b from-violet-blue to-persian-blue rounded-full w-fit px-8 py-8 sm:px-12 sm:py-10 mx-auto my-4 sm:my-6">
                        {/* <div className="bg-gradient-to-b from-violet-blue to-persian-blue rounded-full "> */}
                        <div className="text-5xl font-bold mb-1">{summary}</div>
                        <p className="text-xs font-light opacity-60">of 100</p>
                    </div>
                    <p className="text-3xl font-semibold">Great</p>
                    <p className="text-base font-medium mt-2 opacity-70 sm:w-11/12 mx-auto mb-2 sm:mb-0">
                        You scored higher than 65% of the people who have taken
                        these tests.
                    </p>
                </div>
                {/* Summary Section */}
                <div className="bg-white px-6 py-4 sm:p-8 flex-1 text-gray-700">
                    <h2 className="text-xl font-bold mb-4 text-left">
                        Summary
                    </h2>
                    <div className="space-y-4 sm:space-y-4">
                        {Results.map((result, index) => {
                            return (
                                <SummaryItem key={index} resultData={result} />
                            );
                        })}
                    </div>
                    <button className="mt-5 sm:mt-8 w-full py-4 bg-dark-gray-blue hover:bg-gradient-to-b hover:from-light-slate-blue hover:to-light-royal-blue text-white text-base font-semibold rounded-full">
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

// Summary Item Component
const SummaryItem = ({ resultData }) => (
    <div
        className={`flex items-center justify-between ${resultData?.bgClass} bg-opacity-10 px-3 py-4 rounded-lg`}
    >
        <div className="flex gap-2">
            <img src={resultData?.icon} alt="icon" />
            <span className={`text-base font-medium ${resultData?.textClass}`}>
                {resultData?.category}
            </span>
        </div>
        <span className="font-bold text-sm text-slate-500">
            <span className="text-black">{resultData?.score}</span> / 100
        </span>
    </div>
);

SummaryItem.propTypes = {
    resultData: {
        bgClass: PropTypes.any,
        icon: PropTypes.any,
        category: PropTypes.any,
        score: PropTypes.any,
        textClass: PropTypes.any,
    },
};

export default ResultCard;
