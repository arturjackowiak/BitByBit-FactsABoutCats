import { Navigate } from 'react-router-dom';

import { EViewType } from '../../enums/EViewType';

const NotFoundPage = () => <Navigate replace to={EViewType.HOME} />;

export default NotFoundPage;
