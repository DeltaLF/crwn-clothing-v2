import { AnyAction } from "redux";

type Matchable<AC extends () => AnyAction> = AC & {// AC for ActionCreator
    type: ReturnType<AC>['type'], // type is return type of Actioncreation
    match(action:AnyAction): action is ReturnType<AC>

} 

export function withMatcher<AC extends () => AnyAction & {type:string}>(actionCreator:AC): Matchable<AC>

export function withMatcher<AC extends (...args:any[])=>AnyAction & {type:string}>(actionCreator:AC): Matchable<AC>

export function withMatcher(actionCreator:Function){
    const type = actionCreator().type
    return Object.assign(actionCreator,{
        type,
        match(action:AnyAction){
            return action.type === type
        }
    })
}

export type ActionWithPayload<T, P> = {
    type: T;
    payload: P;
}

export type Action<T> = {
    type: T;
}

// type definition function (not actually function)
export function createAction<T extends string,P>(type:T, payload:P): ActionWithPayload<T,P>

export function createAction<T extends string>(type:T,payload:void): Action<T>

export function createAction<T extends string ,P>(type:T, payload:P){
    return {type, payload}
}

// export const createAction = (type, payload) => ({ type, payload });
