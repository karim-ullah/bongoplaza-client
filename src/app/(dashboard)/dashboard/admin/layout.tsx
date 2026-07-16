import { requireRole } from '@/lib/core/session/getSession';
import React from 'react';

const AdminLayout = async({children}) => {
    await requireRole('admin')
    return children
};

export default AdminLayout;