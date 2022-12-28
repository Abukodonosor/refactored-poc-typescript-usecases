export interface HelpPageControllerHookInputProps {}

export interface HelpPageControllerHookOutput {
  active: string;
  cardData: HelpCardItems[];
  pinned: boolean;
}

export type HelpPageInputProps = {
  active: string;
  cardData: HelpCardItems[];
  pinned: boolean;
};

export interface HelpCardItems {
  itemId: string;
  title: string;
  description: string;
}
