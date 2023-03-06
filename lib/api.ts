import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const rulesDirectory = join(process.cwd(), '_rules');

export function getRulesSlugs() {
  return fs.readdirSync(rulesDirectory);
}

export function getRuleBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(rulesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllRules(fields: string[] = []) {
  const slugs = getRulesSlugs();
  const rules = slugs
    .map((slug) => getRuleBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((rule1, rule2) => (rule1.date > rule2.date ? -1 : 1));

  return rules;
}
