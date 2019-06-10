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
   			'@primary-color': '#eb2f06',
        '@layout-body-background': '#f1f2f6',
        '@layout-sider-background-light' : '#ced6e0',
        '@menu-bg': '#ced6e0',
   		},
   	}),
);