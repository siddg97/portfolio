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
   			'@primary-color': '#f5222d',
        '@layout-body-background': '#FFF',
        '@layout-sider-background-light' : '#BFBFBF',
        '@menu-bg': '#BFBFBF',
   		},
   	}),
);