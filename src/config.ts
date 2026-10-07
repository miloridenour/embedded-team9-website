// Site-wide settings. Edit these to rename the site or add/remove tabs.

export const SITE = {
  title: "Team 9: Muscle Fatigue Detector",
  // Short blurb shown under the title in the header.
  description:
    "An EMG sensor based detector for muscle fatigue targetting at improving safety while weight lifting, particularly a bicep curl.",
  // Team member names, shown in the header.
  team: ["Milo Ridenour, Bernardo Lin, Adi Bhagwani, James Lee"],
};

// The tab the home page ("/") sends visitors to.
export const DEFAULT_CATEGORY = "proposal";

// Each entry here becomes a tab in the header, a content collection, and a
// folder under src/content/<id>/. Drop a .md file into that folder and it
// shows up on the tab automatically.
//
// `sort`: 'date' lists newest first; 'order' uses the `order` frontmatter
// field (lowest first), which suits reference docs that have a reading order.
export const CATEGORIES = [
  {
    id: "proposal",
    label: "Proposal",
    description: "Our project proposal.",
    sort: "order",
  },
  {
    id: "notebooks",
    label: "Notebooks",
    description: "Week-by-week progress logs.",
    sort: "date",
  },
  {
    id: "prd",
    label: "PRD",
    description: "Product requirements document.",
    sort: "order",
  },
] as const satisfies readonly {
  id: string;
  label: string;
  description: string;
  sort: "date" | "order";
}[];

export type CategoryId = (typeof CATEGORIES)[number]["id"];
