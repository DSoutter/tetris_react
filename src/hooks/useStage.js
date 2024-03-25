import {useState} from 'react';
import {createStage} from '../models/gameHelper';

export const useStage = () => {
    const [stage, setStage] = useState(createStage());

    return [stage, setStage];
}