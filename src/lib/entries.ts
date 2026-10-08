import { getCollection, type CollectionEntry } from "astro:content";
import { CATEGORIES, type CategoryId } from "../config";

export type Entry = CollectionEntry<CategoryId>;

export function getCategory(id: string) {
    const category = CATEGORIES.find((c) => c.id === id);
    if (!category) throw new Error(`Unknown category: ${id}`);
    return category;
}

/** Non-draft entries for a category, in the order the category specifies. */
export async function getEntries(id: CategoryId): Promise<Entry[]> {
    const entries = (await getCollection(id)).filter((e) => !e.data.draft);
    const category = getCategory(id);

    return entries.sort((a, b) => {
        if (category.sort === "order") {
            const diff =
                (a.data.order ?? Infinity) - (b.data.order ?? Infinity);
            if (diff !== 0) return diff;
        } else {
            const diff =
                (b.data.date?.getTime() ?? 0) - (a.data.date?.getTime() ?? 0);
            if (diff !== 0) return diff;
        }
        return a.data.title.localeCompare(b.data.title);
    });
}

export function formatDate(date: Date) {
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
    });
}
