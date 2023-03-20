import { Navigate } from 'react-router-dom';

import { EViewType } from 'Enums/EViewType';

const NotFoundPage = () => <Navigate replace to={EViewType.HOME} />;

export default NotFoundPage;
