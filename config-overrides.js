const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
	fixBabelImports('import', {
    	libraryName: 'antd',
    	libraryDirectory: 'es',
    	style: true,
   	}),
   	addLessLoader({
   		javascriptEnabled: true,
   		modifyVars: {
   			'@primary-color': '#e84118',
   			// '@layout-body-background':'#4b6584',
   			// '@layout-sider-background':'#4b6584',
   			// '@layout-header-background':'red',
   		},
   	}),
);