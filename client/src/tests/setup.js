import React from 'react';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import App from 'App';
import { setupServer } from 'msw/node';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
axios.defaults.adapter = httpAdapter;

const renderRQHook = (rqHook, hookParams) => {
    const qc = new QueryClient();
    const wrapper = ({ children }) => (
        <QueryClientProvider client={qc}>{children}</QueryClientProvider>
    );

    return renderHook(() => rqHook(hookParams), { wrapper });
};

// eslint-disable-next-line react/prop-types
const ProviderWrapper = ({ children }) => {
    const qc = new QueryClient();
    return (
        <QueryClientProvider client={qc}>
            <Router>{children}</Router>
        </QueryClientProvider>
    );
};

const renderApp = () =>
    render(
        <ProviderWrapper>
            <App />
        </ProviderWrapper>
    );

// eslint-disable-next-line no-undef
global.innerWidth = 1500;

const initMockServer = (handlers = []) => {
    return setupServer(...handlers);
};

export * from '@testing-library/react';
export { renderApp as render, renderRQHook as renderHook, initMockServer };
