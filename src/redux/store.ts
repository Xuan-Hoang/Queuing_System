import { Action, ThunkAction, ThunkDispatch, configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/login/loginSlice';
import userReducer from './slice/login/loginSlice';
import logoReducer from './slice/logo/logoSlice';
import devicesReducer from './slice/device/deviceSlice';
import servicesReducer from './slice/service/serviceSlice';
import numberLevelsReducer from './slice/numberLevel/numberLevelSilce';
import { Dispatch } from 'react';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    logo: logoReducer,
    devices: devicesReducer,
    services: servicesReducer,
    numberLevels: numberLevelsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = Dispatch<Action<string>> & ThunkDispatch<RootState, unknown, Action<string>>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
