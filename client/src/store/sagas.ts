import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

const sagas: SagaIterator[] = [];

export default function* rootSaga(): SagaIterator {
  yield all(sagas.map(fork));
}
