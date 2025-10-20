import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import {
	defaultArticleState,
	ArticleStateType,
} from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [pageParams, setPageParams] =
		useState<ArticleStateType>(defaultArticleState);

	const handleApply = (formParams: ArticleStateType) => {
		setPageParams(formParams);
	};
	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': pageParams.fontFamilyOption.value,
					'--font-size': pageParams.fontSizeOption.value,
					'--font-color': pageParams.fontColor.value,
					'--container-width': pageParams.contentWidth.value,
					'--bg-color': pageParams.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm onChange={handleApply} />
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
