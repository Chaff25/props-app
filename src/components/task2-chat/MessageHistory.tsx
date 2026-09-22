import type { MessageHistoryProps, MessageType } from '../../types/message';

function getTypeClass(type: MessageType): string {
  switch (type) {
    case 'message':
      return 'message-own';
    case 'response':
      return 'message-response';
    case 'typing':
      return 'message-typing';
    default:
      return '';
  }
}

function MessageHistory({ list = [] }: MessageHistoryProps) {
  if (list.length === 0) {
    return null;
  }

  return (
    <div className="chat-history">
      {list.map((message) => {
        const {
          id, from, type, time, text,
        } = message;

        return (
          <div className={`message-item ${getTypeClass(type)}`} key={id}>
            <div className="message-header">
              <span className="message-author">{from.name}</span>
              <span className="message-time">{time}</span>
            </div>

            {type === 'typing' ? (
              <div className="typing-indicator">
                <span>печатает...</span>
              </div>
            ) : (
              <div className="message-bubble">{text}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default MessageHistory;