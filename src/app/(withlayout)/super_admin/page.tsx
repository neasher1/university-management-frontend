import UMBreadCrumb from '@/components/ui/UMBreadCrumb';
import React from 'react';

const SuperAdminDashboard = () => {
    return (
        <div>
            <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
        ]}
      />
            <h2>This page for super admin</h2>
        </div>
    );
};

export default SuperAdminDashboard;