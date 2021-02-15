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
                width: 230,
            })
            .registerPersistentConfig('sm', {
                persistentBehavior: 'flexible',
                width: 230,
                collapsible: false,
            })
            .registerPermanentConfig('md', {
                width: 230,
                collapsible: false,
                persistentBehavior: 'flexible',
                autoExpanded: true,
            });
    });
    return scheme;
};
