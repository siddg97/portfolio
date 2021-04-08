import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { childrenPropType } from 'constants/index';

const queryClient = new QueryClient();

const ProviderWrapper = ({ children }) => {
    const RqDevTools =
        // eslint-disable-next-line no-undef
        process.env.NODE_ENV !== 'production' ? (
            <ReactQueryDevtools initialIsOpen={false} />
        ) : null;
    return (
        <QueryClientProvider client={queryClient}>
            <Router>{children}</Router>
            {RqDevTools}
        </QueryClientProvider>
    );
};

ProviderWrapper.propTypes = {
    children: childrenPropType,
};

ReactDOM.render(
    <ProviderWrapper>
        <App />
    </ProviderWrapper>,
    document.getElementById('root')
);
