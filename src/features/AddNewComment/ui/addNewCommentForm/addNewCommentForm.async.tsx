import { type FC, lazy } from 'react';

import { type AddNewCommentFormProps } from './addNewCommentForm';

export const AddNewCommentFormLazy = lazy<FC<AddNewCommentFormProps>>(async () => await import('./addNewCommentForm'));
