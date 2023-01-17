import React, { useState, useEffect } from "react";
import { SliderData } from "./SliderData";

const ImageSlider = ({ slides, current, setCurrent }) => {
	const length = slides.length;

	useEffect(() => {
		setTimeout(() => {
			nextSlide();
		}, 4000);
	}, [current]);

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		<section className="slider">
			{SliderData.map((slide, index) => {
				return (
					<div
						className={index === current ? "slide active" : "slide"}
						key={index}
					>
						{index === current && (
							<img
								src={slide.image}
								alt="travel image"
								className="image"
							/>
						)}
					</div>
				);
			})}
		</section>
	);
};

export default ImageSlider;
