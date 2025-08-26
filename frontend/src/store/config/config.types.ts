import { TypeBaseColor } from '@/shared/lib/constants/colors.constants';

export interface ConfigStore {
    theme: TypeBaseColor;
    setTheme: (theme: TypeBaseColor) => void;
}
