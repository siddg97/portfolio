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
        '@menu-bg': '#FFF',
        '@collapse-content-padding':'0px',
        '@menu-dark-bg':'black',
        '@drawer-body-padding': '0px',
        '@menu-item-active-border-width':'8px',
        '@menu-item-height':'55px'
   		},
   	}),
);