import type { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/store';

import type { UserSettings } from '../types/user';

const defaultSettings: UserSettings = {};

export const [getUserSettings] = buildSelector((state: StateSchema) => defaultSettings);
