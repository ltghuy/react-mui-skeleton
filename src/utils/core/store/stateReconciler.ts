import { StoreState } from '@models/core/store/types';
import { ObjPath } from '@models/core/utility/types';
import {
  getValueByPath,
  setValueByPath,
} from '@utils/core/mapping/valueByPath';
import { isEqual } from 'lodash';
import { PersistConfig } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

/**
 * Reconciles the inbound state with the existing state in a Redux store.
 *
 * This function is responsible for reconciling the inbound state with the existing state
 * in a Redux store based on the provided configuration. It ensures that the store state is
 * updated appropriately and consistently.
 *
 * @param inboundState - The inbound state received from storage or an external source.
 * @param state - The current state in the Redux store.
 * @param reducedState - The previously reduced state.
 * @param config - Configuration options for reconciliation.
 * @returns The reconciled state to be used in the Redux store.
 * @typeParam S - The type of the state being reconciled.
 *
 * @example
 * const inboundState = {
 *    init: { foo: 'bar' },
 *    current: { foo: 'update bar' },
 * };
 * const state = { init: { foo: 'bar' }, current: { foo: 'bar' } };
 * const reducedState = { init: { foo: 'bar' }, current: { foo: 'bar' } };
 * const config = { key: 'root', storage };
 * const result = getStateReconciler(
 *    inboundState,
 *    state,
 *    reducedState,
 *    config
 * );
 * console.log(result)
 * // => {
 *    init: { foo: 'bar' },
 *    current: { foo: 'update bar' },
 *   };
 *
 */
export const getStateReconciler = <S>(
  /* eslint-disable-next-line */
  inboundState: StoreState<S>,
  state: StoreState<S>,
  reducedState: StoreState<S>,
  config: PersistConfig<StoreState<S>>
): StoreState<S> => {
  if (!isEqual(state.init, inboundState.init)) {
    return state;
  }
  let newInboundState = { ...inboundState };
  if (config.blacklist) {
    config.blacklist.forEach(path => {
      newInboundState = {
        /* eslint-disable */
        ...setValueByPath(
          newInboundState,
          path as ObjPath<StoreState<S>>,
          getValueByPath(state, path as ObjPath<StoreState<S>>)
        ),
      };
    });
  }
  return autoMergeLevel2(newInboundState, state, reducedState, config);
};
