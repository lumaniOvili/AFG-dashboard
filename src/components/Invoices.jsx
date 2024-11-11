import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Invoices() {
    return (
        <div>
            invoice
            <Outlet />
        </div>
    );
}
