import { all } from "redux-saga/effects";

import agendamento from "./modules/agendamento/sagas";

export default function* rootSaga() {
  //O asterisco (*) depois do functon tem praticamente as mesmas funções do async e await
  return yield all([agendamento]);
}
