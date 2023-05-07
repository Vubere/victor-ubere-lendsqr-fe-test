import { cleanup, render } from "@testing-library/react";


import DashboardLayout from "../../layouts/DashboardLayout";
import { BrowserRouter } from "react-router-dom";

describe('Dashboard Layout', () => {
    afterEach(cleanup);
    it('should render Dashboard Layout', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <DashboardLayout />
            </BrowserRouter>
        );
        const dashboardLayout = getByTestId('dashboardLayout');
        expect(dashboardLayout).toBeInTheDocument();
    });
    
});

