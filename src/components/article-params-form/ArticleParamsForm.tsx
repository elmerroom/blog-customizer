import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { useState, useRef } from 'react';
import { Select } from 'src/ui/select';
import {
	fontFamilyOptions,
	fontSizeOptions,
	backgroundColors,
	contentWidthArr,
	ArticleStateType,
	defaultArticleState,
	fontColors,
} from 'src/constants/articleProps';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import { useOutsideClickClose } from './hooks/useOutsideClickClose';
import { Text } from 'src/ui/text';

import styles from './ArticleParamsForm.module.scss';

type FormProps = {
	onChange: (params: ArticleStateType) => void;
};

export const ArticleParamsForm = ({ onChange }: FormProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [params, setParams] = useState<ArticleStateType>(defaultArticleState);
	const asideRef = useRef<HTMLElement>(null);

	const handleClick = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useOutsideClickClose(asideRef, isMenuOpen, () => setIsMenuOpen(false));

	const handleReset = () => {
		setParams(defaultArticleState);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onChange(params);
	};

	return (
		<>
			<ArrowButton isOpen={isMenuOpen} onClick={handleClick} />
			<aside
				ref={asideRef}
				className={
					isMenuOpen
						? `${styles.container} ${styles.container_open}`
						: styles.container
				}>
				<form
					className={styles.form}
					onReset={handleReset}
					onSubmit={handleSubmit}>
					<Text size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select
						selected={params.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={(fontFamilyOption) =>
							setParams((prev) => ({ ...prev, fontFamilyOption }))
						}></Select>
					<RadioGroup
						name={'fontSize'}
						options={fontSizeOptions}
						selected={params.fontSizeOption}
						title='Размер шрифта'
						onChange={(fontSizeOption) =>
							setParams((prev) => ({ ...prev, fontSizeOption }))
						}></RadioGroup>
					<Select
						selected={params.fontColor}
						options={fontColors}
						title={'Цвет шрифта'}
						onChange={(fontColor) =>
							setParams((prev) => ({ ...prev, fontColor }))
						}></Select>
					<Separator></Separator>
					<Select
						selected={params.backgroundColor}
						options={backgroundColors}
						title={'Цвет фона'}
						onChange={(backgroundColor) =>
							setParams((prev) => ({ ...prev, backgroundColor }))
						}></Select>
					<Select
						selected={params.contentWidth}
						options={contentWidthArr}
						title={'Ширина контента'}
						onChange={(contentWidth) =>
							setParams((prev) => ({ ...prev, contentWidth }))
						}></Select>

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
