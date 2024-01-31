import { Dispatch, SetStateAction } from "react";

/**
 * Typing boolean SetStateAction prop
 *
 * @param {S} - any type
 */
type setStateAction<S> = Dispatch<SetStateAction<S>>;

/**
 * Typing value and SetValue for useState prop
 *
 * @param {S} - any type
 */
type useStateProp<S> = [S, setStateAction];

type EventSelectType = React.ChangeEvent<HTMLSelectElement>;
type EventInputType = React.FormEvent<HTMLInputElement>;

export { useStateProp, setStateAction, EventSelectType, EventInputType };
