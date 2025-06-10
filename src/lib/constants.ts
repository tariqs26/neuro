import type { Data } from "@/types/form"

export const CATEGORIES = [
  { value: "9", label: "General Knowledge" },
  { value: "10", label: "Books" },
  { value: "11", label: "Movies" },
  { value: "12", label: "Music" },
  { value: "13", label: "Musicals & Theatres" },
  { value: "14", label: "TV Shows" },
  { value: "15", label: "Video Games" },
  { value: "16", label: "Board Games" },
  { value: "17", label: "Science & Nature" },
  { value: "18", label: "Computers" },
  { value: "19", label: "Mathematics" },
  { value: "20", label: "Mythology" },
  { value: "21", label: "Sports" },
  { value: "22", label: "Geography" },
  { value: "23", label: "History" },
  { value: "24", label: "Politics" },
  { value: "25", label: "Art" },
  { value: "26", label: "Celebrities" },
  { value: "27", label: "Animals" },
  { value: "28", label: "Vehicles" },
  { value: "29", label: "Comics" },
  { value: "30", label: "Gadgets" },
  { value: "31", label: "Japanese Anime & Manga" },
  { value: "32", label: "Cartoon & Animations" },
]

export const INPUT_OPTIONS: Record<
  string,
  [string, Data[keyof Omit<Data, "category">]][]
> = {
  AMOUNT: [
    ["5", "5"],
    ["10", "10"],
    ["15", "15"],
    ["20", "20"],
  ],
  DIFFICULTY: [
    ["Easy", "easy"],
    ["Medium", "medium"],
    ["Hard", "hard"],
  ],
  TYPE: [
    ["Multiple Choice", "multiple"],
    ["True / False", "boolean"],
  ],
}
