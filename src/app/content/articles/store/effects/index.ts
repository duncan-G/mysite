import { ArticlesEffect } from './articles.effects';
import { TagsEffect } from './tags.effects';

export const effects = [
    ArticlesEffect,
    TagsEffect
];

export * from './articles.effects';
export * from './tags.effects';
