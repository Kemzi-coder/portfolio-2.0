"use client";

import {useState} from "react";
import LanguageButton from "../LanguageButton/LanguageButton";
import styles from "./LanguageButtons.module.scss";

const LanguageButtons = () => {
	const [language, setLanguage] = useState("en");

	const handleClick = (lang: string) => setLanguage(lang);

	return (
		<div className={styles.buttons}>
			<LanguageButton
				disabled={language === "en"}
				isActive={language === "en"}
				onClick={() => handleClick("en")}>
				EN
			</LanguageButton>
			<LanguageButton
				disabled={language === "ua"}
				isActive={language === "ua"}
				onClick={() => handleClick("ua")}>
				UA
			</LanguageButton>
		</div>
	);
};

export default LanguageButtons;
