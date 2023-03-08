import { QuestionId, Favorites } from '../types';

export class FavoritesStore {
  private static favoritesKey = 'favorite';
  private static initialFavorites: Favorites = [];

  private static getFavorites = () => {
    try {
      const favorites = JSON.parse(localStorage.getItem(FavoritesStore.favoritesKey) ?? '[]') as Favorites;

      if (!Array.isArray(favorites)) {
        return FavoritesStore.initialFavorites;
      }

      return favorites;
    } catch (_) {
      return FavoritesStore.initialFavorites;
    }
  };

  static hasQuestionIdInFavorites(questionId: QuestionId): boolean {
    const favorites = FavoritesStore.getFavorites();

    return favorites?.includes(questionId) ?? false;
  }

  static addQuestionIdToFavorites(questionId: QuestionId): void {
    const favorites = FavoritesStore.getFavorites();

    if (!favorites.includes(questionId)) {
      favorites.push(questionId);
      localStorage.setItem(FavoritesStore.favoritesKey, JSON.stringify(favorites));
    }
  }

  static removeQuestionIdFromFavorites(questionId: QuestionId): void {
    const favorites = FavoritesStore.getFavorites();

    if (favorites.includes(questionId)) {
      const index = favorites.indexOf(questionId);
      favorites.splice(index, 1);
      localStorage.setItem(FavoritesStore.favoritesKey, JSON.stringify(favorites));
    }
  }
}
