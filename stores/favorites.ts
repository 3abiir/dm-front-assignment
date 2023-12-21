import { defineStore } from 'pinia';

interface FavoritesState {
  favoriteProductIds: number[];
}

export const useFavoritesStore = defineStore('favorites', {
  state: (): FavoritesState => ({
    favoriteProductIds: JSON.parse(localStorage.getItem('favoriteProductIds') || '[]'),
  }),
  actions: {
    addFavorite(productId: number) {
      if (!this.favoriteProductIds.includes(productId)) {
        this.favoriteProductIds.push(productId);
        this.saveFavorites();
      }
    },
    removeFavorite(productId: number) {
      this.favoriteProductIds = this.favoriteProductIds.filter(id => id !== productId);
      this.saveFavorites();
    },
    isFavorite(productId: number): boolean {
      return this.favoriteProductIds.includes(productId);
    },
    saveFavorites() {
      localStorage.setItem('favoriteProductIds', JSON.stringify(this.favoriteProductIds));
    }
  },
});
