import { Article } from '../components/article/Article';
import { ArticleParamsForm } from '../components/article-params-form/ArticleParamsForm';
import {
	defaultArticleState,
	ArticleStateType,
} from '../constants/articleProps';
import { CSSProperties, useState } from 'react';

import styles from '../styles/index.module.scss';

export const App = () => {
	const [pageParams, setPageParams] =
		useState<ArticleStateType>(defaultArticleState);

	const handleApply = (formParams: ArticleStateType) => {
		setPageParams(formParams);
	};
	return (
		<main
			className={styles.main}
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
