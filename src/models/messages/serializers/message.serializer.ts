import { IMessage } from '../interfaces/message.interface';

import { ModelEntity } from 'src/models/model.serializer';

export const defaultMessageGroupsForSerializing: string[] = [
  'message.timestamps',
];
export const extendedMessageGroupsForSerializing: string[] = [
  ...defaultMessageGroupsForSerializing,
];
export const allMessageGroupsForSerializing: string[] = [
  ...extendedMessageGroupsForSerializing,
  'message.conversation_id',
];

export class MessageEntity extends ModelEntity implements IMessage {
  id: number | string;

}
