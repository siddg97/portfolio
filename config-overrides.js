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
   			'@primary-color': 'red',
        '@layout-body-background': '#FFF',
        '@layout-sider-background-light' : '#ced6e0',
        '@menu-bg': '#ced6e0',
   		},
   	}),
);