import React from "react";
import "../styles/Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="homeContainer">
				<img
					className="home-bg"
					src="/images/home_background.jpg"
					alt="home_bg"
				/>
			</div>
			<div className="home-row">
				<Product
					title="Minecraft Starter Collection - Playstation 4"
					imgSrc="/images/Minecraft.jpg"
					price={28.55}
					rating={4.3}
					num={8101}
				/>
				<Product
					title="AMD Ryzen 7 5800X 8-core, 16-Thread Unlocked Desktop Processor"
					imgSrc="/images/AMD R7 5800X.jpg"
					price={419.99}
					rating={5}
					num={4166}
				/>
				<Product
					title="HP 63XL | Ink Cartridge | Black | F6U64AN"
					imgSrc="/images/HP63XL.jpg"
					price={39.89}
					rating={3.6}
					num={27944}
				/>
			</div>
			<div className="home-row">
				<Product
					title="GIGABYTE GeForce RTX 3060 Ti Gaming OC PRO 8G (REV3.0) Graphics Card"
					imgSrc="/images/RTX 3060.jpg"
					price={1029.99}
					rating={3.2}
					num={5}
				/>
				<Product
					title="Guardians of the Galaxy, Vol. 2 Original Soundtrack"
					imgSrc="/images/GOTGV2.jpg"
					price={55.61}
					rating={5}
					num={8101}
				/>
				<Product
					title="Control Ultimate Edition - PlayStation 4"
					imgSrc="/images/Control.jpg"
					price={38.9}
					rating={4.1}
					num={222}
				/>
			</div>
			<div className="home-row">
				<Product
					title="SAMSUNG 65-Inch Class Crystal UHD AU8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN65AU8000FXZA, 2021 Model), Black"
					imgSrc="/images/SamsungAU8000.jpg"
					price={1299.99}
					rating={4.9}
					num={8101}
				/>
			</div>
		</div>
	);
}

export default Home;
