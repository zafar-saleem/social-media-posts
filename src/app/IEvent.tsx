export interface IEvent {
  preventDefault: () => void; target: { name: { value: React.SetStateAction<string>; }; };
}
