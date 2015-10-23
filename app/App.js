'user strict';

import React from 'react/react';
import DOM from 'react-dom/dist/react-dom';
import { Router } from 'react-router';
import routes from './config/routes';

DOM.render(<Router routes={routes} />, app);
