import Layout from '@mui-treasury/layout';

export const buildLayoutScheme = () => {
    const scheme = Layout();

    scheme.configureHeader((builder) => {
        builder.registerConfig('xs', {
            position: 'relative',
            clipped: false,
        });
    });

    scheme.configureEdgeSidebar((builder) => {
        builder
            .create('primarySidebar', {
                anchor: 'left',
            })
            .registerTemporaryConfig('xs', {
                width: 256,
            })
            .registerPersistentConfig('md', {
                persistentBehavior: 'fit',
                width: 256,
                collapsible: false,
            })
            .registerPermanentConfig('lg', {
                width: 256,
                collapsible: false,
                persistentBehavior: 'flexible',
                autoExpanded: true,
            });
    });
    return scheme;
};
