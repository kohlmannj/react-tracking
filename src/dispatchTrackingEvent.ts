export type Dispatch = (data: Record<string, unknown>) => void;

// Maybe `Record<string, unknown>` ?
const dispatchTrackingEvent: Dispatch = data => {
  if (Object.keys(data).length > 0) {
    (window.dataLayer = window.dataLayer || []).push(data);
  }
};

export default dispatchTrackingEvent;
