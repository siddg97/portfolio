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
   			'@primary-color': '#B22222',
        '@layout-body-background': '#fff',
        '@layout-sider-background-light' : '#FFF',
        '@menu-bg': '#FFF',
        '@collapse-content-padding':'0px'
   		},
   	}),
);