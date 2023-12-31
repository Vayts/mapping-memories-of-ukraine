import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '@src/store/sagas';
import { mapSlice } from '@src/store/map/reducer';
import { appSlice } from '@src/store/app/reducer';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    map: mapSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
