import React, { FC } from 'react';
import { CoreAdminRouter, AdminRouterProps } from 'ra-core';
import { Loading } from '@seasons/ra-ui-materialui';

const AdminRouter: FC<AdminRouterProps> = props => (
    <CoreAdminRouter {...props} />
);

AdminRouter.defaultProps = {
    loading: Loading,
};

export default AdminRouter;
