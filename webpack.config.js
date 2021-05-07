module.exports = {
	// 開発中は development.
	// 本番では production にする.
	mode: "production",
	module: {
		rules: [
			{
				// 対象となるファイルの拡張子.
				test: /\.css$/,
				use: [
					// スタイルシートをJSからlinkタグに展開する機能.
					"style-loader",
					// CSSをバンドルするための機能.
					"css-loader",
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|svg)$/,
				use: {
					loader: 'url-loader',
				},
			},
		],
	},
};
