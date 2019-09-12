import React from 'react';

const ProgressCircle = ({total, current}) => {
	const percentage = (current / total) * 100;
	const strokeWidth = 3;
	const sqSize = 245;
	// SVG centers the stroke width on the radius, subtract out so circle fits in square
	const radius = (sqSize - strokeWidth) / 2;
	// Enclose cicle in a circumscribing square
	const viewBox = `0 0 ${sqSize} ${sqSize}`;
	// Arc length at 100% coverage is the circle circumference
	const dashArray = radius * Math.PI * 2;
	// Scale 100% coverage overlay with the actual percent
	const dashOffset = dashArray - (dashArray * percentage) / 100;

	return (
		<svg width={sqSize} height={sqSize} viewBox={viewBox}>
			<circle
				className='background'
				cx={sqSize / 2}
				cy={sqSize / 2}
				r={radius}
				strokeWidth={`${strokeWidth}px`}
			/>
			<circle
				className='progress'
				cx={sqSize / 2}
				cy={sqSize / 2}
				r={radius}
				strokeWidth={`${strokeWidth}px`}
				transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
				style={{
					strokeDasharray: dashArray,
					strokeDashoffset: dashOffset
				}}
			/>
			<text className='text' x="50%" y="50%" textAnchor="middle">
				<tspan x="50%">{`${current}/${total} tasks`}</tspan>
				<tspan x="50%" dy="2.5rem">
					Completed
				</tspan>
			</text>
		</svg>
	);
};

export default ProgressCircle;
